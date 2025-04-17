function LandingPage() {
    return (
        <div className="landing-container">
            <h1>Welcome to My Site</h1>
            <p>I'm Markus, a software developer passionate about building cool stuff.</p>

            <div className="button-group">
                <button onClick={() => console.log('Go to projects')}>
                    View My Projects
                </button>
                <button onClick={() => console.log('Go to about me')}>
                    About Me
                </button>
            </div>
        </div>

    );
}

export default LandingPage;