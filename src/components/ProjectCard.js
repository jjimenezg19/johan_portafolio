import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, linkUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt={title} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <a href={linkUrl} target="_blank" rel="noopener noreferrer">
            <button className="project-card-btn">See website</button>
          </a>
        </div>
      </div>
    </Col>
  );
};