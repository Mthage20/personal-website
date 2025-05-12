import React from 'react';
import '../css/ContactPage.css';

export default function ContactPage() {
    return (
        <div className="contact-page section-inner card">
            <h2>Contact Me</h2>
            <p>Feel free to reach out to me via email or connect with me on social media!</p>
            <ul>
                <li><a href="mailto:markus.ft@outlook.com">Email</a></li>
                <li><a href="https://github.com/Mthage20" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                <li><a href="https://www.linkedin.com/in/markusthoegersen/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            </ul>
        </div>
    );
}
