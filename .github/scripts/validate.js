const fs = require('fs');
const path = require('path');

const ERRORS = [];
const CHECKS = [];
const REQUIRED_REGISTRY_FIELDS = ['name', 'description', 'sections', 'files'];
const MALICIOUS_PATTERNS = [
    /\beval\s*\(/,
    /new\s+Function\s*\(/,
    /document\.write\s*\(/,
    /\.innerHTML\s*=\s*['"`].*<script/i,
];

function error(msg) {
    ERRORS.push(`- ${msg}`);
}

function check(label, passed, failMsg) {
    CHECKS.push({ label, passed });
    if (!passed) error(failMsg || label);
}

function writeSummary() {
    const lines = ['## Muffin Template Validation\n'];
    for (const c of CHECKS) {
        lines.push(`- [${c.passed ? 'x' : ' '}] ${c.label}`);
    }
    if (ERRORS.length) {
        lines.push('\n### Errors\n');
        lines.push(...ERRORS);
    }
    fs.writeFileSync('/tmp/validation-summary.md', lines.join('\n') + '\n');
}

function exit() {
    writeSummary();
    if (ERRORS.length) {
        fs.writeFileSync('/tmp/validation-errors.txt', ERRORS.join('\n'));
        console.error('\nValidation failed:\n' + ERRORS.join('\n'));
        process.exit(1);
    }
    console.log('Validation passed.');
    process.exit(0);
}

// ── 1. registry.json is valid JSON ───────────────────────────────────────────

let registry;
try {
    registry = JSON.parse(fs.readFileSync('registry.json', 'utf8'));
    check('registry.json — valid JSON', true);
} catch (e) {
    check('registry.json — valid JSON', false, `registry.json is not valid JSON: ${e.message}`);
    exit();
}

if (!registry.templates || typeof registry.templates !== 'object') {
    check('registry.json — has "templates" object', false, 'registry.json missing top-level "templates" object');
    exit();
} else {
    check('registry.json — has "templates" object', true);
}

// ── 2. Each template in registry ─────────────────────────────────────────────

for (const [name, manifest] of Object.entries(registry.templates)) {

    // Required fields
    const missingFields = REQUIRED_REGISTRY_FIELDS.filter(f => !manifest[f] ||
        (Array.isArray(manifest[f]) && manifest[f].length === 0));
    check(
        `\`${name}\` — required fields (${REQUIRED_REGISTRY_FIELDS.join(', ')})`,
        missingFields.length === 0,
        `Template "${name}" missing or empty required field(s): ${missingFields.map(f => `"${f}"`).join(', ')}`
    );

    // ── 3. name matches registry key ─────────────────────────────────────────

    check(
        `\`${name}\` — name matches registry key`,
        !manifest.name || manifest.name === name,
        `Template "${name}": name "${manifest.name}" must match the registry key`
    );

    // ── 4. template folder exists ─────────────────────────────────────────────

    const templateDir = path.join('templates', name);
    check(
        `\`${name}\` — template folder exists at templates/${name}/`,
        fs.existsSync(templateDir),
        `Template "${name}": missing folder at ${templateDir}`
    );
    if (!fs.existsSync(templateDir)) continue;

    // ── 5. template.json exists ───────────────────────────────────────────────

    const manifestPath = path.join(templateDir, 'template.json');
    const hasManifest = fs.existsSync(manifestPath);
    check(
        `\`${name}\` — template.json exists`,
        hasManifest,
        `Template "${name}": missing template.json at ${manifestPath}`
    );

    let templateManifest = null;
    if (hasManifest) {
        try {
            templateManifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
            check(`\`${name}\` — template.json is valid JSON`, true);
        } catch (e) {
            check(`\`${name}\` — template.json is valid JSON`, false,
                `Template "${name}": template.json is not valid JSON: ${e.message}`);
        }
    }

    // ── 6. All files listed in manifest exist ─────────────────────────────────

    if (manifest.files && Array.isArray(manifest.files)) {
        for (const file of manifest.files) {
            const filePath = path.join(templateDir, file);
            check(
                `\`${name}\` — file exists: ${file}`,
                fs.existsSync(filePath),
                `Template "${name}": listed file missing at ${filePath}`
            );

            // ── 7. No malicious patterns ──────────────────────────────────────

            if (fs.existsSync(filePath)) {
                const source = fs.readFileSync(filePath, 'utf8');
                const malicious = MALICIOUS_PATTERNS.find(p => p.test(source));
                check(
                    `\`${name}\` — no suspicious patterns in ${file}`,
                    !malicious,
                    `Template "${name}": suspicious pattern detected in ${file} — ${malicious}`
                );
            }
        }
    }

    // ── 8. index.js exists and exports compose ────────────────────────────────

    const indexPath = path.join(templateDir, 'index.js');
    if (fs.existsSync(indexPath)) {
        const source = fs.readFileSync(indexPath, 'utf8');
        check(
            `\`${name}\` — index.js exports compose()`,
            source.includes('compose'),
            `Template "${name}": index.js must export a compose() function`
        );
    }
}

// ── 9. No orphan folders in templates/ without a registry entry ──────────────

if (fs.existsSync('templates')) {
    const folders = fs.readdirSync('templates');
    for (const folder of folders) {
        check(
            `No orphan folder — \`templates/${folder}\` is registered`,
            !!registry.templates[folder],
            `Folder "templates/${folder}" exists but has no entry in registry.json`
        );
    }
}

exit();
