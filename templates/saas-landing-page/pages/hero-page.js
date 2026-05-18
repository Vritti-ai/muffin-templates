class HeroPage extends Muffin.DOMComponent {
    static domElName = "hero-page";

    static markupFunc(_data, uid, uiVars, routeVars, _constructor) {
        return `<div class="flex flex-col items-center justify-center w-full bg-white">

            <!-- ======================== HERO — SPLIT LAYOUT ======================== -->
            <!-- CUSTOMIZE: background color, min-height -->
            <div class="relative w-full overflow-hidden bg-white">
                <div class="flex flex-col md:flex-row md:items-stretch w-full min-h-[88vh]">

                    <!-- ── Copy column (left ~40%) ──────────────────────────────── -->
                    <div class="relative z-10 w-full md:w-[40%] flex flex-col justify-center
                                px-6 md:px-10 lg:px-16 py-10 md:py-0 bg-white">

                        <!-- CUSTOMIZE: headline -->
                        <h1 class="text-gray-900 font-bold text-5xl md:text-6xl leading-[1.08] m-0">
                            Your compelling headline here
                        </h1>

                        <!-- CUSTOMIZE: subheadline -->
                        <p class="text-gray-600 text-lg md:text-xl mt-5 leading-relaxed">
                            Supporting sentence that expands on the value proposition.
                        </p>

                        <div class="flex flex-col items-start gap-2 mt-8">
                            <!-- CUSTOMIZE: CTA label and onclick route -->
                            <button class="inline-flex items-center justify-center
                                           px-7 h-14 rounded-lg font-semibold text-base text-white bg-indigo-600
                                           hover:bg-indigo-700 transition-colors duration-200 focus:outline-none"
                                    onclick="Muffin._router.go('login')">
                                Get Started <lucide-icon class="w-4 h-4 ml-2" icon="arrow-right"></lucide-icon>
                            </button>
                            <!-- CUSTOMIZE: micro-copy below CTA -->
                            <span class="text-xs text-gray-400 mt-1">Free to start. No card required.</span>
                        </div>
                    </div>

                    <!-- ── Visual column (right ~60%) ───────────────────────────── -->
                    <!-- CUSTOMIZE: replace with your hero component, video, or image -->
                    <div class="relative w-full md:w-[60%] h-[65vw] md:h-auto md:min-h-[88vh] min-h-[280px] overflow-hidden bg-gray-50 flex items-center justify-center">
                        <hero-visual class="block w-full h-full"></hero-visual>

                        <!-- Fade overlay — adjust or remove as needed -->
                        <div class="hidden md:block absolute inset-0 pointer-events-none" style="background:
                            linear-gradient(to right, white 0%, rgba(255,255,255,0.6) 8%, transparent 30%),
                            linear-gradient(to bottom, rgba(255,255,255,0.4) 0%, transparent 18%, transparent 82%, rgba(255,255,255,0.4) 100%);
                        "></div>
                    </div>

                </div>
            </div>


            <!-- ======================== SOCIAL PROOF ======================== -->
            <!-- CUSTOMIZE: replace with your logos/testimonials component -->
            <div class="container mx-auto rounded-3xl p-0 my-12 bg-gray-50">
                <social-proof></social-proof>
            </div>


            <!-- ======================== FEATURE SECTION 1 — VIDEO/VISUAL LEFT ======================== -->
            <!-- CUSTOMIZE: headline, body, video src, CTA -->
            <div class="container mx-auto bg-slate-50 rounded-3xl p-4 my-12">
                <div class="flex flex-col lg:flex-row items-center gap-0 lg:gap-8 w-full px-4 lg:px-10 py-8 lg:py-14">

                    <!-- Copy — right on desktop -->
                    <div class="w-full lg:w-[38%] flex flex-col justify-center text-center lg:text-left mb-8 lg:mb-0">
                        <h2 class="text-gray-900 font-bold text-4xl md:text-5xl m-0">
                            Feature one headline
                        </h2>
                        <p class="text-gray-600 text-lg md:text-xl mt-4 m-0 leading-relaxed">
                            Describe what makes this feature valuable to the user.
                        </p>
                        <div class="mt-8 flex justify-center lg:justify-start">
                            <button class="inline-flex items-center justify-center
                                           px-6 h-12 rounded-lg font-semibold text-sm text-white bg-indigo-600
                                           hover:bg-indigo-700 transition-colors duration-200 focus:outline-none"
                                    onclick="Muffin._router.go('login')">
                                Try it free <lucide-icon class="w-4 h-4 ml-2" icon="arrow-right"></lucide-icon>
                            </button>
                        </div>
                    </div>

                    <!-- Visual — left on desktop -->
                    <!-- CUSTOMIZE: replace src with your demo video -->
                    <div class="w-full lg:w-[62%]">
                        <div class="laptop-wrapper">
                            <video class="frame-content" src="/assets/videos/feature-demo.mp4" autoplay loop muted controls></video>
                        </div>
                    </div>

                </div>
            </div>


            <!-- ======================== DARK CTA SECTION ======================== -->
            <!-- CUSTOMIZE: headline, hook, CTA -->
            <div class="container mx-auto rounded-3xl my-12 overflow-hidden" style="background:#111111;">
                <div class="flex flex-col items-center justify-center px-8 lg:px-20 py-20 lg:py-28 text-center">

                    <!-- CUSTOMIZE: eyebrow label -->
                    <p class="text-indigo-400 text-xs font-semibold tracking-widest uppercase m-0 mb-5">Why it matters</p>

                    <!-- CUSTOMIZE: emotional headline -->
                    <h2 class="font-bold text-4xl md:text-5xl lg:text-6xl text-white m-0 leading-[1.06] max-w-3xl">
                        Your closing emotional headline that resonates.
                    </h2>

                    <p class="text-gray-300 text-lg md:text-xl mt-6 leading-relaxed m-0 max-w-xl">
                        Supporting sentence that reinforces the headline.
                    </p>

                    <div class="flex flex-col items-center gap-2 mt-10">
                        <button class="inline-flex items-center justify-center
                                       px-7 h-14 rounded-lg font-semibold text-base text-white bg-indigo-600
                                       hover:bg-indigo-700 transition-colors duration-200 focus:outline-none"
                                onclick="Muffin._router.go('login')">
                            Get Started <lucide-icon class="w-4 h-4 ml-2" icon="arrow-right"></lucide-icon>
                        </button>
                        <span class="text-xs text-gray-600 mt-1">Free to start. No card required.</span>
                    </div>
                </div>
            </div>


            <!-- ======================== FEATURE SECTION 2 — ALTERNATING ======================== -->
            <!-- CUSTOMIZE: headline, body, visual, CTA. Swap lg:flex-row-reverse to flip layout -->
            <div class="container mx-auto bg-gray-50 rounded-3xl p-4 my-12">
                <div class="flex flex-col lg:flex-row-reverse items-center gap-0 lg:gap-8 w-full px-4 lg:px-10 py-8 lg:py-14">

                    <!-- Copy — left on desktop (reversed row) -->
                    <div class="w-full lg:w-[38%] flex flex-col justify-center text-center lg:text-left mb-8 lg:mb-0">
                        <h2 class="text-gray-900 font-bold text-4xl md:text-5xl m-0">
                            Feature two headline
                        </h2>
                        <p class="text-gray-600 text-lg md:text-xl mt-4 m-0 leading-relaxed">
                            Describe what makes this feature valuable to the user.
                        </p>
                        <div class="mt-8 flex justify-center lg:justify-start">
                            <button class="inline-flex items-center justify-center
                                           px-6 h-12 rounded-lg font-semibold text-sm text-white bg-indigo-600
                                           hover:bg-indigo-700 transition-colors duration-200 focus:outline-none"
                                    onclick="Muffin._router.go('login')">
                                Try it free <lucide-icon class="w-4 h-4 ml-2" icon="arrow-right"></lucide-icon>
                            </button>
                        </div>
                    </div>

                    <!-- Visual — right on desktop -->
                    <!-- CUSTOMIZE: replace with your component, image, or screenshot -->
                    <div class="w-full lg:w-[62%] flex items-center justify-center min-h-[280px] bg-white rounded-2xl">
                        <feature-visual class="w-full h-full"></feature-visual>
                    </div>

                </div>
            </div>


            <!-- ======================== FAQ ======================== -->
            <!-- CUSTOMIZE: populate faq-list with your questions via data or slot -->
            <div class="container mx-auto bg-slate-50 rounded-3xl p-4 my-12">
                <div class="flex flex-col justify-center items-center w-full p-0 py-6">
                    <h2 class="text-gray-800 font-bold text-4xl md:text-5xl">
                        Frequently Asked Questions
                    </h2>
                    <faq-list></faq-list>
                </div>
            </div>


            <!-- ======================== BOTTOM CTA ======================== -->
            <!-- CUSTOMIZE: headline, hook, CTA -->
            <div class="container mx-auto rounded-3xl mb-12 overflow-hidden" style="background:#111111;">
                <div class="flex flex-col items-center justify-center px-8 lg:px-20 py-20 lg:py-28 text-center">
                    <h2 class="font-bold text-4xl md:text-5xl lg:text-6xl text-white m-0 leading-[1.06]">
                        Your final call-to-action headline.
                    </h2>
                    <p class="text-gray-400 text-lg md:text-xl mt-6 m-0">
                        One last line that pushes them over the edge.
                    </p>
                    <div class="flex flex-col items-center gap-2 mt-10">
                        <button class="inline-flex items-center justify-center
                                       px-8 h-14 rounded-lg font-semibold text-base text-white bg-indigo-600
                                       hover:bg-indigo-700 transition-colors duration-200 focus:outline-none"
                                onclick="Muffin._router.go('login')">
                            Get Started Free <lucide-icon class="w-4 h-4 ml-2" icon="arrow-right"></lucide-icon>
                        </button>
                        <span class="text-xs text-gray-600 mt-1">Free to start. No card required.</span>
                    </div>
                </div>
            </div>

        </div>`;
    }
}

HeroPage.compose = () => {
    // CUSTOMIZE: import and register your sub-components here
    // e.g. import HeroVisual from './components/hero-visual'; HeroVisual.compose();
}

export default HeroPage;
