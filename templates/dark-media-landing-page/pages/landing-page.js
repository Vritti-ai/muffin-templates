// CUSTOMIZE: set these CSS custom properties in your global stylesheet or :root
// --accent-color:  #F7C948  (amber) | #a78bfa (violet) | #34d399 (emerald) …
// --primary-color: secondary accent, used for eyebrow labels and inline links

class LandingPage extends Muffin.DOMComponent {
    static domElName = "landing-page";

    // CUSTOMIZE: replace with your app's primary action URL
    static APP_URL = "https://your-app.example.com";

    static markupFunc(_data, uid, uiVars, routeVars, _constructor) {
        const APP_URL = _constructor.APP_URL;

        return `<div class="flex flex-col items-center justify-center w-full" style="background:#0a0a0a;">

            <!-- ======================== HERO — SPLIT LAYOUT (DARK) ======================== -->
            <div class="relative w-full overflow-hidden" style="background:#0a0a0a;">
                <div class="flex flex-col md:flex-row md:items-stretch w-full min-h-[88vh]">

                    <!-- ── Copy column (left ~42%) ──────────────────────────────── -->
                    <div class="relative z-10 w-full md:w-[42%] flex flex-col justify-center
                                px-6 md:px-10 lg:px-16 pt-28 pb-10 md:py-0" style="background:#0a0a0a;">

                        <!-- CUSTOMIZE: product name (eyebrow) -->
                        <p class="text-[var(--accent-color)] text-xs font-semibold tracking-widest uppercase m-0 mb-4">
                            Your Product Name
                        </p>

                        <!-- CUSTOMIZE: two-part headline, second half in accent color -->
                        <h1 class="text-white font-bold text-4xl md:text-5xl lg:text-[3.25rem] leading-[1.08] m-0">
                            Your compelling headline.
                            <span class="text-[var(--accent-color)]">The hook that converts.</span>
                        </h1>

                        <!-- CUSTOMIZE: audience line -->
                        <p class="text-gray-300 text-2xl md:text-3xl font-semibold mt-6 m-0 max-w-sm leading-snug">
                            For creators, builders & teams.
                        </p>

                        <div class="flex flex-col items-start gap-2 mt-8">
                            <!-- CUSTOMIZE: CTA label and href -->
                            <a href="${APP_URL}"
                               class="inline-flex items-center justify-center
                                      px-6 h-12 rounded-lg font-semibold text-base text-white
                                      bg-violet-600 hover:bg-violet-700
                                      transition-colors duration-200 focus:outline-none no-underline">
                                Get Started <lucide-icon icon="arrow-right" size="16" class="ml-2 inline-block"></lucide-icon>
                            </a>
                        </div>
                    </div>

                    <!-- ── Media wall (right ~58%) ───────────────────────────────── -->
                    <!-- CUSTOMIZE: replace <hero-media-wall> with your scrolling media grid -->
                    <div class="relative w-full md:w-[58%] h-[65vw] md:h-auto md:min-h-[88vh] min-h-[280px] overflow-hidden bg-zinc-950">

                        <!-- Top/bottom edge fades -->
                        <div class="absolute inset-x-0 top-0 h-16 z-10 pointer-events-none"
                             style="background:linear-gradient(to bottom, #0a0a0a, transparent);"></div>
                        <div class="absolute inset-x-0 bottom-0 h-16 z-10 pointer-events-none"
                             style="background:linear-gradient(to top, #0a0a0a, transparent);"></div>

                        <div class="absolute inset-0 p-3">
                            <hero-media-wall></hero-media-wall>
                        </div>

                        <!-- Desktop: left-edge fade into copy column -->
                        <div class="hidden md:block absolute inset-0 pointer-events-none" style="background:
                            linear-gradient(to right, #0a0a0a 0%, rgba(10,10,10,0.72) 8%, rgba(10,10,10,0.12) 28%, transparent 46%),
                            linear-gradient(to bottom, rgba(10,10,10,0.6) 0%, transparent 18%, transparent 82%, rgba(10,10,10,0.6) 100%);
                        "></div>

                        <!-- Mobile: top fade -->
                        <div class="block md:hidden absolute inset-0 pointer-events-none" style="background:
                            linear-gradient(to bottom, rgba(10,10,10,0.9) 0%, transparent 22%, transparent 78%, rgba(10,10,10,0.6) 100%);
                        "></div>
                    </div>

                </div>
            </div>


            <!-- ======================== CAPABILITIES — BENTO GRID ======================== -->
            <!-- CUSTOMIZE: section headline, "without" bullets, and all 4 capability cards -->
            <div class="container mx-auto rounded-3xl my-12 overflow-hidden" style="background:#111111;">
                <div class="px-8 lg:px-14 py-14 lg:py-20">

                    <!-- Two-column header: big headline + "without" bullet list -->
                    <div class="flex flex-col lg:flex-row items-start gap-12 mb-16">
                        <div class="flex-1">
                            <!-- CUSTOMIZE: section headline -->
                            <h2 class="font-bold text-4xl md:text-5xl text-white m-0 leading-[1.08]">
                                Everything a top agency delivers.
                                <span class="text-[var(--accent-color)]"> Without the agency.</span>
                            </h2>
                            <!-- CUSTOMIZE: sub-label -->
                            <p class="text-gray-500 text-base mt-4 m-0">Four capabilities. One pipeline.</p>
                        </div>
                        <!-- CUSTOMIZE: 3 "without" bullet points -->
                        <div class="flex-1 flex flex-col gap-4">
                            <div class="flex items-start gap-3">
                                <span class="text-[var(--accent-color)] font-bold text-lg leading-none mt-0.5">—</span>
                                <p class="text-gray-300 text-base m-0 leading-snug">
                                    <span class="text-white font-semibold">Capability one,</span> without the downside.
                                </p>
                            </div>
                            <div class="flex items-start gap-3">
                                <span class="text-[var(--accent-color)] font-bold text-lg leading-none mt-0.5">—</span>
                                <p class="text-gray-300 text-base m-0 leading-snug">
                                    <span class="text-white font-semibold">Capability two,</span> without the downside.
                                </p>
                            </div>
                            <div class="flex items-start gap-3">
                                <span class="text-[var(--accent-color)] font-bold text-lg leading-none mt-0.5">—</span>
                                <p class="text-gray-300 text-base m-0 leading-snug">
                                    <span class="text-white font-semibold">Capability three,</span> without the downside.
                                </p>
                            </div>
                        </div>
                    </div>

                    <!-- Bento grid: 2 wide cards (col-span-2) + 2 narrow cards (col-span-1) -->
                    <!-- Layout: [wide][narrow] / [wide][narrow] -->
                    <div class="grid grid-cols-1 lg:grid-cols-3 gap-5 auto-rows-fr">

                        <!-- CARD 1 — wide (col-span-2), with visual right half -->
                        <!-- CUSTOMIZE: headline, description, badge, border accent color, visual -->
                        <div class="lg:col-span-2 rounded-2xl overflow-hidden flex flex-col md:flex-row"
                             style="background:rgba(255,255,255,0.03); border:1px solid rgba(247,201,72,0.15); min-height:260px;">
                            <div class="flex flex-col justify-between gap-4 p-7 md:w-[45%] flex-shrink-0">
                                <div class="flex flex-col gap-3">
                                    <h3 class="font-bold text-2xl text-white m-0 leading-snug">
                                        Capability one.<br/>
                                        <span class="text-[var(--accent-color)]">No old way needed.</span>
                                    </h3>
                                    <p class="text-gray-400 text-sm m-0 leading-relaxed">
                                        Describe what this capability does and the specific pain it removes.
                                    </p>
                                </div>
                                <!-- CUSTOMIZE: icon, badge label, badge colors -->
                                <span class="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full border self-start
                                             bg-amber-900/30 border-amber-700/30 text-amber-300">
                                    <lucide-icon icon="zap" size="11" class="inline-block"></lucide-icon>Capability One
                                </span>
                            </div>
                            <!-- CUSTOMIZE: replace with your visual — before/after, screenshot, video -->
                            <div class="flex-1 overflow-hidden bg-zinc-900 flex items-center justify-center" style="min-height:260px;">
                                <card-visual-one class="w-full h-full"></card-visual-one>
                            </div>
                        </div>

                        <!-- CARD 2 — narrow (col-span-1), copy only -->
                        <!-- CUSTOMIZE: headline, description, badge, border accent color -->
                        <div class="rounded-2xl p-7 flex flex-col justify-between gap-3"
                             style="background:rgba(255,255,255,0.03); border:1px solid rgba(52,211,153,0.15);">
                            <div class="flex flex-col gap-3">
                                <h3 class="font-bold text-2xl text-white m-0 leading-snug">
                                    Capability two.<br/>
                                    <span class="text-emerald-400">The benefit.</span>
                                </h3>
                                <p class="text-gray-400 text-sm m-0 leading-relaxed">
                                    Describe what this capability does and the specific pain it removes.
                                </p>
                            </div>
                            <span class="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full border self-start
                                         bg-emerald-900/30 border-emerald-700/30 text-emerald-300">
                                <lucide-icon icon="layers" size="11" class="inline-block"></lucide-icon>Capability Two
                            </span>
                        </div>

                        <!-- CARD 3 — wide (col-span-2), with visual right half -->
                        <!-- CUSTOMIZE: headline, description, badge, border accent color, visual -->
                        <div class="lg:col-span-2 rounded-2xl overflow-hidden flex flex-col md:flex-row"
                             style="background:rgba(255,255,255,0.03); border:1px solid rgba(167,139,250,0.15); min-height:260px;">
                            <div class="flex flex-col justify-between gap-4 p-7 md:w-[45%] flex-shrink-0">
                                <div class="flex flex-col gap-3">
                                    <h3 class="font-bold text-2xl text-white m-0 leading-snug">
                                        Capability three.<br/>
                                        <span class="text-violet-400">No old way needed.</span>
                                    </h3>
                                    <p class="text-gray-400 text-sm m-0 leading-relaxed">
                                        Describe what this capability does and the specific pain it removes.
                                    </p>
                                </div>
                                <span class="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full border self-start
                                             bg-violet-900/30 border-violet-700/30 text-violet-300">
                                    <lucide-icon icon="cpu" size="11" class="inline-block"></lucide-icon>Capability Three
                                </span>
                            </div>
                            <!-- CUSTOMIZE: replace with your visual -->
                            <div class="flex-1 overflow-hidden" style="background:linear-gradient(135deg,#1a0d2e,#0a0a0a);">
                                <card-visual-three class="w-full h-full object-cover opacity-90"></card-visual-three>
                            </div>
                        </div>

                        <!-- CARD 4 — narrow (col-span-1), copy only -->
                        <!-- CUSTOMIZE: headline, description, badge, border accent color -->
                        <div class="rounded-2xl p-7 flex flex-col justify-between gap-3"
                             style="background:rgba(255,255,255,0.03); border:1px solid rgba(56,189,248,0.15);">
                            <div class="flex flex-col gap-3">
                                <h3 class="font-bold text-2xl text-white m-0 leading-snug">
                                    Capability four.<br/>
                                    <span class="text-cyan-400">The benefit.</span>
                                </h3>
                                <p class="text-gray-400 text-sm m-0 leading-relaxed">
                                    Describe what this capability does and the specific pain it removes.
                                </p>
                            </div>
                            <span class="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full border self-start
                                         bg-cyan-900/30 border-cyan-700/30 text-cyan-300">
                                <lucide-icon icon="sparkles" size="11" class="inline-block"></lucide-icon>Capability Four
                            </span>
                        </div>

                    </div>
                </div>
            </div>


            <!-- ======================== HOW IT WORKS — NUMBERED STEPS ======================== -->
            <!-- CUSTOMIZE: headline, 3 numbered steps -->
            <div class="container mx-auto rounded-3xl my-12 overflow-hidden" style="background:#111111;">
                <div class="flex flex-col lg:flex-row items-center gap-0">

                    <!-- Copy -->
                    <div class="w-full lg:w-1/2 px-8 lg:px-14 py-14 lg:py-20">
                        <!-- CUSTOMIZE: eyebrow -->
                        <p class="text-[var(--accent-color)] text-xs font-semibold tracking-widest uppercase m-0 mb-5">How it works</p>
                        <!-- CUSTOMIZE: headline -->
                        <h2 class="font-bold text-4xl md:text-5xl text-white m-0 leading-[1.08]">
                            Simple to start.
                            <span class="text-[var(--accent-color)]"> Powerful at scale.</span>
                        </h2>
                        <p class="text-gray-300 text-lg mt-6 leading-relaxed m-0 max-w-lg">
                            Description of the overall workflow and why it's better than the old way.
                        </p>
                        <!-- CUSTOMIZE: 3 numbered steps -->
                        <div class="flex flex-col gap-3 mt-8">
                            <div class="flex items-start gap-3">
                                <span class="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold"
                                      style="background:var(--accent-color); color:#000;">1</span>
                                <p class="text-gray-400 text-sm m-0 leading-relaxed">Step one — describe what the user does first.</p>
                            </div>
                            <div class="flex items-start gap-3">
                                <span class="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold"
                                      style="background:var(--accent-color); color:#000;">2</span>
                                <p class="text-gray-400 text-sm m-0 leading-relaxed">Step two — describe what the product does automatically.</p>
                            </div>
                            <div class="flex items-start gap-3">
                                <span class="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold"
                                      style="background:var(--accent-color); color:#000;">3</span>
                                <p class="text-gray-400 text-sm m-0 leading-relaxed">Step three — describe the output and what the user does with it.</p>
                            </div>
                        </div>
                        <a href="${APP_URL}"
                           class="inline-flex items-center justify-center mt-8
                                  px-6 h-12 rounded-lg font-semibold text-base text-white
                                  bg-violet-600 hover:bg-violet-700
                                  transition-colors duration-200 focus:outline-none no-underline">
                            Get Started
                            <lucide-icon icon="arrow-right" size="16" class="ml-2 inline-block"></lucide-icon>
                        </a>
                    </div>

                    <!-- CUSTOMIZE: replace with a product screenshot, mockup card, or illustration -->
                    <div class="w-full lg:w-1/2 flex items-center justify-center px-8 py-12 lg:py-0">
                        <div class="rounded-2xl overflow-hidden w-full max-w-sm"
                             style="background:#1a1a1a; border:1px solid rgba(255,255,255,0.08);">
                            <!-- Color band -->
                            <div class="h-16 w-full" style="background:linear-gradient(135deg,var(--accent-color, #261500),#1a0d2e);"></div>
                            <!-- Mockup content -->
                            <div class="px-6 -mt-8 pb-6">
                                <div class="w-14 h-14 rounded-xl border-2 border-[#1a1a1a] flex items-center justify-center text-2xl mb-3"
                                     style="background:#111111;">✨</div>
                                <p class="text-white font-bold text-base m-0">Your Product</p>
                                <p class="text-gray-500 text-xs mt-1 m-0">CUSTOMIZE: subtitle or tagline</p>
                                <div class="mt-4 pt-4" style="border-top:1px solid rgba(255,255,255,0.06);">
                                    <p class="text-gray-600 text-[10px] uppercase tracking-widest font-semibold m-0 mb-1">Status</p>
                                    <p class="text-gray-400 text-xs m-0 leading-relaxed">CUSTOMIZE: replace with a real product mockup or stats card.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>


            <!-- ======================== AI PIPELINE — "UNDER THE HOOD" ======================== -->
            <!-- CUSTOMIZE: headline, body copy, pipeline visual component -->
            <div class="container mx-auto rounded-3xl my-12 overflow-hidden" style="background:#111111;">
                <div class="flex flex-col lg:flex-row items-stretch">

                    <!-- Visual — left on desktop -->
                    <!-- CUSTOMIZE: replace <pipeline-visual> with your graph/flow/architecture component -->
                    <div class="relative w-full lg:w-[55%] h-[65vw] lg:h-auto lg:min-h-[480px] overflow-hidden">
                        <pipeline-visual class="block w-full h-full min-h-[inherit] pointer-events-none"></pipeline-visual>

                        <!-- Left-edge fade on desktop -->
                        <div class="hidden lg:block absolute inset-0 pointer-events-none" style="background:
                            linear-gradient(to right, #111111 0%, rgba(17,17,17,0.8) 10%, rgba(17,17,17,0.1) 30%, transparent 50%),
                            linear-gradient(to bottom, rgba(17,17,17,0.5) 0%, transparent 20%, transparent 80%, rgba(17,17,17,0.5) 100%);
                        "></div>
                        <!-- Mobile top fade -->
                        <div class="block lg:hidden absolute inset-0 pointer-events-none" style="background:
                            linear-gradient(to bottom, rgba(17,17,17,0.85) 0%, transparent 25%);
                        "></div>
                    </div>

                    <!-- Copy — right on desktop -->
                    <div class="w-full lg:w-[45%] px-8 lg:px-14 py-14 lg:py-20 flex flex-col justify-center">
                        <!-- CUSTOMIZE: eyebrow -->
                        <p class="text-[var(--primary-color)] text-xs font-semibold tracking-widest uppercase m-0 mb-5">Under the hood</p>
                        <!-- CUSTOMIZE: headline -->
                        <h2 class="font-bold text-4xl md:text-5xl text-white m-0 leading-[1.08]">
                            Not just a tool.
                            <span class="text-[var(--accent-color)]"> A pipeline.</span>
                        </h2>
                        <!-- CUSTOMIZE: explain the technical differentiator -->
                        <p class="text-gray-300 text-lg mt-6 leading-relaxed m-0 max-w-lg">
                            Explain what's happening under the hood — the agent pipeline, the models, the architecture — and why it produces better outcomes than the interface suggests.
                        </p>
                        <p class="text-gray-500 text-base mt-4 leading-relaxed m-0 max-w-lg">
                            A second paragraph for the technical audience. What makes you different from competitors who look the same on the surface.
                        </p>
                        <a href="${APP_URL}"
                           class="inline-flex items-center gap-1.5 text-sm text-[var(--primary-color)] font-medium
                                  hover:opacity-80 transition-opacity duration-150 no-underline mt-6">
                            Try it yourself
                            <lucide-icon icon="arrow-right" size="14" class="inline-block"></lucide-icon>
                        </a>
                    </div>

                </div>
            </div>


            <!-- ======================== SOCIAL PROOF ======================== -->
            <!-- CUSTOMIZE: replace with your social proof component -->
            <div class="container mx-auto rounded-3xl p-0 my-12" style="background:#111111;">
                <social-proof></social-proof>
            </div>


            <!-- ======================== CLOSING CTA — FULLSCREEN VIDEO BACKGROUND ======================== -->
            <!-- CUSTOMIZE: headline, CTA label, video src, poster -->
            <div class="flex flex-col md:flex-row m-0 p-0 w-full max-w-full box-border" style="min-height:90vh;">
                <div class="relative flex flex-col justify-center items-center w-full max-w-full flex-1 p-3 md:p-5 box-border">

                    <!-- Overlay card — sits above the video -->
                    <div class="absolute z-[9] flex flex-col justify-center items-center max-w-4xl w-full p-4 md:p-8 lg:p-12
                                bg-black/5 backdrop-blur-sm rounded-2xl">
                        <h3 class="text-center my-3 leading-tight m-0">
                            <!-- CUSTOMIZE: two-line closing headline -->
                            <span class="text-white font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
                                Your closing headline.<br/>
                            </span>
                            <span class="text-[var(--accent-color)] font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
                                The line that converts.
                            </span>
                        </h3>

                        <a href="${APP_URL}"
                           class="inline-flex items-center justify-center mt-8
                                  px-8 h-14 rounded-lg font-semibold text-base text-white
                                  bg-violet-600 hover:bg-violet-700
                                  transition-colors duration-200 focus:outline-none no-underline">
                            Get Started
                            <lucide-icon icon="arrow-right" size="16" class="ml-2 inline-block"></lucide-icon>
                        </a>
                    </div>

                    <!-- Fullscreen background video -->
                    <!-- CUSTOMIZE: replace poster-src and video-src with your own -->
                    <div class="w-full max-w-full h-full z-[1]" style="min-height:90vh;">
                        <video-hero-banner
                            title=""
                            subtitle=""
                            with-shadow
                            poster-src="/assets/images/video-poster.jpg"
                            video-src="/assets/videos/closing-bg.mp4">
                        </video-hero-banner>
                    </div>

                </div>
            </div>


            <!-- ======================== FAQ ======================== -->
            <!-- CUSTOMIZE: populate faq-list with your questions -->
            <div class="container mx-auto rounded-3xl p-4 my-12" style="background:#111111;">
                <div class="flex flex-col justify-center items-center w-full p-0 py-6 m-0">
                    <h2 class="text-white font-bold text-4xl md:text-5xl text-center">
                        Frequently Asked Questions
                    </h2>
                    <faq-list></faq-list>
                </div>
            </div>

        </div>`;
    }
}

LandingPage.compose = () => {
    // CUSTOMIZE: import and register your sub-components here
    // e.g. HeroMediaWall.compose(); PipelineVisual.compose(); VideoHeroBanner.compose?.();
};

export default LandingPage;
