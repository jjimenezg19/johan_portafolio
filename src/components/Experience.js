import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import TrackVisibility from 'react-on-screen';
import Tag from './Tag';

export const Experience = () => {
    const experience = [
        {
            institution: "FitStream Solutions",
            role: "Fullstack Web Developer",
            date: "May 2024 - Sep 2024",
            description: "Fictitious company created for the Project 2 course, which designed and developed a web application for the management of fitness centers. This system facilitates both business administration and client interaction. The project included a detailed requirements session, which was converted into a formal document outlining all use cases and project specifics, simulating a real-world work environment."        
        },
        {
            institution: "Freelancer",
            role: "Fullstack Web Developer",
            date: "Apr 2024 - Present",
            description: "As a freelancer, I've honed my ability to manage tight deadlines while effectively communicating with clients. This role allows me to explore diverse ideas and gain unique insights from various projects, witnessing how creative visions evolve into successful outcomes."        
        },
        {
            institution: "JAMS Project",
            role: "Fullstack Web Developer",
            date: "Jan 2019 - May 2019",
            description: "Fictitious company created for the Project 1 Course, where we designed and developed a web application called Educational Seeker. This platform helps parents in making decisions when selecting academic options for their children. The project simulated a real-world environment by conducting a detailed requirements gathering session, transforming it into formal documentation with use cases, technical specifications, and system flows."        
        }
    ];

    return (
        <section className="experience" id="experience">
            <Container>
                <Row>
                    <Col size={12}>
                        <TrackVisibility>
                            {({ isVisible }) => (
                                <div className={isVisible ? "fade-in" : ""}>
                                    <h2>Experience</h2>
                                    <Row className="g-4">
                                        {experience.map((exp, index) => (
                                            <Col key={index} md={4}>
                                                {/* Alternar la clase según la posición */}
                                                <Tag 
                                                    {...exp} 
                                                    left={index % 2 === 0} // Izquierda si el índice es par
                                                />
                                            </Col>
                                        ))}
                                    </Row>
                                </div>
                            )}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};