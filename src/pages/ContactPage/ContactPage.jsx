import React from 'react';
import { Card } from 'react-bootstrap';
import './ContactPage.css';

function ContactPage() {
    return (
        <div className="contact">
            <Card className="text-center custom-card">
                <p className="lets-work-text">LET'S WORK</p>
                <p className="lets-work-text">TOGETHER</p>
                <div className="contact-item">
                    <span>📞 +34 634 882 167</span>
                    <span><a href="mailto:cferreiro91@gmail.com" className="email-link">✉️ cferreiro91@gmail.com</a></span>
                    <span><a href="https://www.linkedin.com/in/cristina-ferreiro-2b59182aa/" target="_blank" rel="noopener noreferrer" className="linkedin-link">LinkedIn</a></span>
                </div>
            </Card>
        </div>
    );
}

export default ContactPage;
