import '../css/LandingPage.css';

export default function LandingPage() {
    return (
        <div className="landing-container">
            <div className="card">
                <h1 className="title">
                    Hi, I'm Markus<span className="blinking-cursor">_</span>
                </h1>

                <p className="subtitle">I'm a passionate software engineer that likes to create unique experiences!</p>

                <div className="button-grid">
                    <button className="btn projects"> &lt;/&gt; Projects ✦ </button>
                    <button className="btn about"> 👤 About Me </button>
                    <button className="btn resume"> 💼 Resume </button>
                    <button className="btn contact"> ✉️ Contact </button>
                </div>

                { /*  <footer className="footer">
                    © 2025 Markus<br />
                    { /* <span className="continue">Press any key to continue...</span> 
                </footer>
                */ }
            </div>
        </div>
    );
}
