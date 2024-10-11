import React from 'react';
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import TrackVisibility from 'react-on-screen';
import { ProjectCard } from "./ProjectCard";
import 'animate.css';

import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";

import transitIgm1 from "../assets/img/projects/TransitSolution1.png";
import transitIgm2 from "../assets/img/projects/TransitSolution2.png";
import transitIgm3 from "../assets/img/projects/TransitSolution3.png";
import transitIgm4 from "../assets/img/projects/TransitSolution4.png";
import transitIgm5 from "../assets/img/projects/TransitSolution5.png";

import gymIgm1 from "../assets/img/projects/GymApp1.png";
import gymIgm2 from "../assets/img/projects/GymApp2.png";
import gymIgm3 from "../assets/img/projects/GymApp3.png";
import gymIgm4 from "../assets/img/projects/GymApp4.png";
import gymIgm5 from "../assets/img/projects/GymApp5.png";
import gymIgm6 from "../assets/img/projects/GymApp6.png";
import gymIgm7 from "../assets/img/projects/GymApp7.png";

import jamsImg1 from "../assets/img/projects/JamsApp1.png";
import jamsImg2 from "../assets/img/projects/JamsApp2.png";
import jamsImg3 from "../assets/img/projects/JamsApp3.png";
import jamsImg4 from "../assets/img/projects/JamsApp4.png";
import jamsImg5 from "../assets/img/projects/JamsApp5.png";
import jamsImg6 from "../assets/img/projects/JamsApp6.png";

import reactIcon from "../assets/img/logos/react.svg";
import tailwindIcon from "../assets/img/logos/tailwind.svg";
import nodeIcon from "../assets/img/logos/nodejs.svg";
import typeScriptIcon from "../assets/img/logos/typescript.svg";
import javaScriptIcon from "../assets/img/logos/javascript.svg";
import c4Icon from "../assets/img/logos/c--4.svg";
import dotNetIcon from "../assets/img/logos/dot-net.svg";
import htmlIcon from "../assets/img/logos/html.svg";
import cssIcon from "../assets/img/logos/css.svg";
import mongoIcon from "../assets/img/logos/mongodb.svg";


export const Projects = () => {

  const projects = [
    {
      title: "Comprehensive Gym Management",
      description: `This Integrated Management System for Fitness Centers that streamlines business administration and client interaction. The system manages users and roles, enables the registration of personalized workout routines, appointment scheduling, access to group classes, and payment management. With flexible options for different membership types.`,
      imgUrls: [gymIgm1, gymIgm2, gymIgm3, gymIgm4, gymIgm5, gymIgm6, gymIgm7],
      toolsUsed: [
        {
          title: `ASP.NET Core`,
          icon: dotNetIcon,
        },
        {
          title: `C#`,
          icon: c4Icon,
        },
        {
          title: `JavaScript`,
          icon: javaScriptIcon,
        }, {
          title: `Node.js`,
          icon: nodeIcon,
        }],
      link: "https://github.com/jjimenezg19/GymApp.git",
    },
    {
      title: "Latino Transit Solutions",
      description: `This package shipment management platform streamlines the logistics of package deliveries by offering a comprehensive solution for managing transport registrations, route assignments, and approvals. It facilitates the seamless integration of package shipments with their associated transports.`,
      imgUrls: [transitIgm1, transitIgm2, transitIgm3, transitIgm4, transitIgm5],
      toolsUsed: [
        {
          title: `React`,
          icon: reactIcon,
        },
        {
          title: `tailwind`,
          icon: tailwindIcon,
        },
        {
          title: `Node.js`,
          icon: nodeIcon,
        },
        {
          title: `TypeScript`,
          icon: typeScriptIcon,
        }],
      link: "https://github.com/LatinoTransitSolutions",
    },
    {
      title: "Educational Seeker",
      description: "This web application streamlines the process of gathering essential information from various educational institutions, helping parents make well-informed decisions when selecting academic options for their children. It provides a centralized platform where users can compare schools based on key criteria such as academic programs, extracurricular offerings, tuition fees, and student performance.",
      imgUrls: [jamsImg1, jamsImg2, jamsImg3, jamsImg4, jamsImg5, jamsImg6], // Múltiples imágenes
      toolsUsed: [
        {
          title: `JavaScript`,
          icon: javaScriptIcon,
        },
        {
          title: `HTML`,
          icon: htmlIcon,
        },
        {
          title: `CSS`,
          icon: cssIcon,
        },
        {
          title: `MongoDB`,
          icon: mongoIcon,
        }],
      link: "https://github.com/jjimenezg19/Educational_Seeker.git",
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