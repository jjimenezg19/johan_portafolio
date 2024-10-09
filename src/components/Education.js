import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import TrackVisibility from 'react-on-screen';
import Tag from './Tag';

export const Education = () => {
    const education = [
        {
            institution: "Cenfotec University",
            role: "Bachelor's Degree in Software Development",
            date: "Jan 2023 - Present",
            description: "My journey towards a Bachelor's Degree in Software Development at Cenfotec University is an exciting and transformative experience. This program is deepening my understanding of advanced programming concepts, software architecture, and real-world problem-solving."        
        },
        {
            institution: "Cenfotec University",
            role: "Technical Degree in Software Development",
            date: "Jan 2019 - Aug 2024",
            description: "Cenfotec University was a key milestone in my journey into the world of technology. It provided me with a strong foundation in software development and ignited my passion for solving complex problems through code."        
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
                                    <h2>Education</h2>
                                    <Row className="g-4">
                                        {education.map((edu, index) => (
                                            <Col key={index} md={4}>
                                                {/* Alternar la clase según la posición */}
                                                <Tag 
                                                    {...edu} 
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