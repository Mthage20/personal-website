import React from 'react';
import '../css/LandingPage.css';

export default function LandingPage() {
    return (
        <div className="section-inner card">
            <h1 className="title">
                Hi, I'm Markus<span className="blinking-cursor">_</span>
            </h1>
            <p className="subtitle">
                I'm a passionate software engineer that likes to create unique experiences!
            </p>
            <div className="button-grid">
                <a href="#projects" className="btn projects"> &lt;/&gt; Projects ✦ </a>
                <a href="#about" className="btn about"> 👤 About Me </a>
                <a href="#resume" className="btn resume"> 💼 Resume </a>
                <a href="#contact" className="btn contact"> ✉️ Contact </a>
            </div>
        </div>
    );
}
