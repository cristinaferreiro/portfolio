import React, { useEffect, useState } from "react";
import "./ProjectsPage.css";

function ProjectsPage() {
    const [activeProject, setActiveProject] = useState(0);

    const projects = [
        {
            title: "omarmirandastudio.com",
            description:
                "Website for an architecture studio, designed to showcase its projects and completed works. The site features a highlighted section presenting the studio's most relevant projects, allowing visitors to explore past works and get to know the studio's approach and style.",
            image: "omarmiranda.jpg",
            link: "https://omarmirandastudio.com",
        },
        {
            title: "THE ROW",
            description:
                "A fictional web platform designed to facilitate the auction of contemporary artworks. It offers specific features for both artist users and buyers interested in acquiring art through a real-time bidding system.",
            image: "therow.jpg",
            link: "https://therow.netlify.app",
        },
        {
            title: "BARKING",
            description:
                "Web platform designed to encourage interaction and feedback from bar customers. Users can add new bars, leave reviews and ratings, and interact with other users. The platform integrates Google Maps to help locate bars and provides forms to submit reviews, ratings, and suggestions.",
            image: "barking.jpg",
            link: "https://barkingproject.netlify.app",
        },
        {
            title: "DINOgame",
            description:
                "My first personal project: an arcade game based on the famous dinosaur cookies, where the objective is to dodge obstacles and earn lives. The game features a scoring system, allowing players to track their performance and compete for the highest score.",
            image: "dinogame.jpg",
            link: "https://diego-cerezo.github.io/dino-game/",
        },
    ];

    const handleScroll = () => {
        const sections = document.querySelectorAll(".project");
        const scrollPosition = window.scrollY;

        sections.forEach((section, index) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;

            if (
                scrollPosition >= sectionTop - sectionHeight / 2 &&
                scrollPosition < sectionTop + sectionHeight / 2
            ) {
                setActiveProject(index);
            }
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="projectPage">
            {projects.map((project, index) => (
                <div
                    key={index}
                    className={`project ${activeProject === index ? "active" : ""}`}
                >
                    <div className="homecard">
                        <div className="image-container">
                            <a href={project.link} target="_blank" rel="noopener noreferrer">
                                <img src={project.image} alt={project.title} />
                            </a>
                        </div>

                        <div className="content">
                            <div className="text-overlay">
                                <h2>{project.title}</h2>
                            </div>
                            <p className="vertical-text">{project.description}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ProjectsPage;
