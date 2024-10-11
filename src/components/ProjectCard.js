import React from 'react';
import { BsGithub } from 'react-icons/bs';
import { Carousel } from 'react-bootstrap'; 

export const ProjectCard = ({ title, description, imgUrls, toolsUsed, link }) => {
    return (
        <div className="project-card">
            <div>
                {/* Carousel de imágenes */}
                <Carousel>
                    {imgUrls.map((imgUrl, index) => (
                        <Carousel.Item key={index}>
                            <img className="place-self-center rounded-tl-lg rounded-tr-lg" src={imgUrl} alt={`${title} image ${index + 1}`}/>
                        </Carousel.Item>
                    ))}
                </Carousel>
                
                <div className="px-7 pt-7">
                    <h4 className="text-h4-sm lg:text-h4-md xl:text-h4-lg font-kufam mb-2 lg:mb-4 xl:mb-6">
                        {title}
                    </h4>
                    <p className="text-p font-league-spartan opacity-75">
                        {description}
                    </p>
                </div>
            </div>
            <div className="flex flex-wrap gap-3 p-7 mt-10 items-center project-card-toolsUsed">
                {toolsUsed && toolsUsed.map((tool, index) => (
                    <div key={index} className="flex items-center mb-2">
                    <div className="flex items-center bg-gray-800 text-white rounded-full px-4 py-2 shadow-lg tool-item">
                        <img src={tool.icon} alt={tool.title} className="mr-2 w-6 h-6" />
                        <span className="text-sm font-bold">{tool.title}</span>
                    </div>
                    </div>
                ))}
            </div>
            <div className="flex p-7 mt-10 items-center justify-center">
                <a href={link} target="_blank" rel="noopener noreferrer" className="project-card-btn flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-6 h-6 mr-2">
                        <path d="M12 .297C5.373.297 0 5.67 0 12.297c0 5.302 3.438 9.8 8.207 11.387.6.113.793-.261.793-.577 0-.285-.01-1.04-.015-2.04-3.338.725-4.042-1.614-4.042-1.614-.546-1.386-1.333-1.755-1.333-1.755-1.09-.745.082-.73.082-.73 1.205.085 1.84 1.238 1.84 1.238 1.07 1.834 2.809 1.304 3.495.997.107-.776.418-1.305.76-1.605-2.665-.303-5.466-1.334-5.466-5.933 0-1.31.47-2.382 1.236-3.223-.125-.303-.536-1.522.117-3.176 0 0 1.008-.322 3.3 1.23a11.48 11.48 0 013.004-.404c1.018.004 2.044.137 3.004.404 2.29-1.552 3.297-1.23 3.297-1.23.655 1.654.244 2.873.12 3.176.77.84 1.235 1.912 1.235 3.223 0 4.61-2.803 5.625-5.473 5.922.43.37.814 1.1.814 2.215 0 1.6-.014 2.892-.014 3.287 0 .319.192.694.8.576C20.565 22.092 24 17.593 24 12.297 24 5.67 18.627.297 12 .297z"/>
                    </svg>
                    Visit GitHub
                </a>
            </div>
        </div>
    );
};