import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import './AboutMePage.css';

function AboutMePage() {
    return (
        <div className="aboutme-container">
            <a href="/" className="back-link">⬅</a>
            <Card className="text-center custom-card">
                <Card.Body>
                    <Card.Title>
                        <strong>About me</strong>
                        <hr />
                        Passionate about creating digital experiences with a focus on visual and creative solutions that integrate art, design, and
                        technology. With a solid foundation in Art History and web development, I have the skills to coordinate and empower
                        multidisciplinary teams, leading projects from initial concept to final delivery. My focus on agile methodologies and innovation
                        ensures products that stand out for both their aesthetics and functionality, delivering a user experience that is intuitive as
                        well as visually appealing. <hr />
                    </Card.Title>
                    <ListGroup>
                        <ListGroup.Item as="a" href="/CV Cristina FerreiroFFS.pdf" target="_blank">CV</ListGroup.Item>
                    </ListGroup>
                </Card.Body>
            </Card>
        </div>
    );
}

export default AboutMePage;
