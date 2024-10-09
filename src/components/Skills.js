import reactLogo from "../assets/img/logos/react.svg";
import javaScriptLogo from "../assets/img/logos/javascript.svg";
import typeScriptLogo from "../assets/img/logos/typescript.svg";
import cLogo from "../assets/img/logos/c--4.svg";
import javaLogo from "../assets/img/logos/java.svg";
import nodeLogo from "../assets/img/logos/nodejs.svg";
import htmlLogo from "../assets/img/logos/html.svg";
import cssLogo from "../assets/img/logos/css.svg";
import gitLogo from "../assets/img/logos/git.svg";
import mongoLogo from "../assets/img/logos/mongodb.svg";

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="wow zoomIn">
                        <h2>Skills</h2>
                        <p>Technologies and tools I have mastered as a full-stack developer include:<br></br></p>
                        <div className="owl-carousel owl-theme skill-slider">
                            
                            <div className="item">
                                <img src={javaScriptLogo} alt="Image" />
                                <h5>JavaScript</h5>
                            </div>
                            <div className="item">
                                <img src={typeScriptLogo} alt="Image" />
                                <h5>TypeScript</h5>
                            </div>
                            <div className="item">
                                <img src={reactLogo} alt="Image" />
                                <h5>React</h5>
                            </div>
                            <div className="item">
                                <img src={nodeLogo} alt="Image" />
                                <h5>Node.js</h5>
                            </div>
                            <div className="item">
                                <img src={htmlLogo} alt="Image" />
                                <h5>HTML</h5>
                            </div>
                            <div className="item">
                                <img src={cssLogo} alt="Image" />
                                <h5>CSS</h5>
                            </div>
                            <div className="item">
                                <img src={javaLogo} alt="Image" />
                                <h5>Java</h5>
                            </div>
                            <div className="item">
                                <img src={cLogo} alt="Image" />
                                <h5>C#</h5>
                            </div>
                            <div className="item">
                                <img src={gitLogo} alt="Image" />
                                <h5>Git</h5>
                            </div>
                            <div className="item">
                                <img src={mongoLogo} alt="Image" />
                                <h5>mongoDB</h5>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
