import React from 'react';

const Tag = ({ left, institution, role, date, description }) => {
    return (
        <div className={`tag-container ${left ? 'container-left' : 'container-right'}`}>
            <div href="#" className="tag-link">
                    <h4>{institution}</h4>
                    <p>{role}</p>
                    <p>{date}</p>
            </div>
            <div className="tag-description">
                    <p>
                        {description}
                    </p>
            </div>
        </div>

    );
};

export default Tag;