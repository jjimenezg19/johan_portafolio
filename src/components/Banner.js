import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import 'animate.css';
import headerImg from "../assets/img/astronaut.png";

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 150);
    const [index, setIndex] = useState(1);
    const toRotate  = ["Full-Stack Developer.", "Freelancer.", "IT Support Specialist."];
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => { clearInterval(ticker) };
    }, [text]);

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
    
        setText(updatedText);
    
        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }
    
        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setIndex(prevIndex => prevIndex - 1);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setIndex(1);
            setDelta(300);
        }
    };

    return (
        <section className="banner" id="home"> 
            <Container>
                <Row className="align-item-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Welcome to my Portfolio</span>
                        <h1>
                            {`Hi I'm Johan, `} 
                            <br />
                            <span className={`wrap ${isDeleting ? 'deleting' : ''}`}>
                                <span>{text}</span>
                            </span>
                        </h1>
                        <p>Dynamic and organized Full-Stack Software Developer with a solid background in IT support.</p>
                        <p>My academic and work experience journey have honed my quick problem-solving abilities, strong communication skills, and unwavering commitment to meeting deadlines.</p>
                        <button onClick={() => window.location.href = '#connect'}>
                            Let's talk! <ArrowRightCircle size={25} />
                        </button>                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Header Img"/>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}