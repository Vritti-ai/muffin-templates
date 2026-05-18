import HeroPage from './pages/hero-page';

// Register all components used by this template.
// Call this once at your app's entry point.
export function compose() {
    HeroPage.compose();
    Muffin.compose(HeroPage);
}

export default { compose };
