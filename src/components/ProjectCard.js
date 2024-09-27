import React from 'react';
import { BsGithub } from 'react-icons/bs';
import { Carousel } from 'react-bootstrap'; // Importa el componente Carousel

export const ProjectCard = ({ title, description, imgUrls }) => {
    return (
        <div className="project-card">
            <div>
                {/* Carousel de imágenes */}
                <Carousel>
                    {imgUrls.map((imgUrl, index) => (
                        <Carousel.Item key={index}>
                            <img
                                className="place-self-center rounded-tl-lg rounded-tr-lg"
                                src={imgUrl}
                                alt={`${title} image ${index + 1}`}
                            />
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
            <div className="flex p-7 mt-10 items-center justify-center">
                <a
                    href="#"
                    className="project-card-btn"
                >
                    See website
                </a>
            </div>
        </div>
    );
};