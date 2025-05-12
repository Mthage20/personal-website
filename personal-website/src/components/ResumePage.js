import React from 'react';
import '../css/ResumePage.css';

export default function ResumePage() {
    return (
        <div className="resume-page section-inner card">
            <h2>Resume</h2>
            <p>
                Below is a summary of my professional experience. You can also download my full resume using the link below.
            </p>
            <a href="/path-to-resume.pdf" download className="btn download-resume">
                Download Resume
            </a>
            <h3>Experience</h3>
            <ul>
                <li>Full-stack Devleoper (May 2024 - September 2024) (5 Months)</li>
                <li>Intern at Young Unite (April 2024 - May 2024) (2 months)</li>
            </ul>
        </div>
    );
}
