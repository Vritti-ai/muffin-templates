import LandingPage from './pages/landing-page';

// Register all components used by this template.
// Call this once at your app's entry point.
export function compose() {
    LandingPage.compose();
    Muffin.compose(LandingPage);
}

export default { compose };
