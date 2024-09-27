import React from 'react';
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import transitIgm1 from "../assets/img/TransitSolution1.png";
import transitIgm2 from "../assets/img/TransitSolution2.png";
import transitIgm3 from "../assets/img/TransitSolution3.png";
import transitIgm4 from "../assets/img/TransitSolution4.png";
import transitIgm5 from "../assets/img/TransitSolution5.png";
import reactIcon from "../assets/img/react.svg";

import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrls: [projImg1, projImg2], // Pasar múltiples imágenes
    },
    {
      title: "Latino Transit Solutions",
      description: "This package shipment management platform allows registration of transports, routes, route approval, package shipment with associated transport, and route tracking",
      imgUrls: [transitIgm1, transitIgm2, transitIgm3, transitIgm4, transitIgm5], 
      img: reactIcon,// Múltiples imágenes
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrls: [projImg3, projImg1], // Múltiples imágenes
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                    <Row xs={1} sm={2} md={3} className="g-4">
                      {projects.map((project, index) => (
                        <Col key={index}>
                          <ProjectCard {...project} />
                        </Col>
                      ))}
                    </Row>
                    </Tab.Pane>
                    
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};