import { Row, Col, Button } from 'react-bootstrap';
import classes from './About.module.css'

const About = () => {
  return (
    <section className="py-5 h-100">
      <Row className="flex-column h-100">
        <Col className="m-0 text-center text-md-start h-100">
          <div
            className="d-flex flex-column gap-3 text-center text-md-start h-100"
          >
            <div>
              <h2 className="fw-bold mb-4">About Me</h2>
            <p
              className={`${classes['intro-text']} lead m-0`}
            >
              Full-Stack Developer dedicated to building scalable and intuitive digital products.
            </p>
            </div>
            <p className="text-secondary">
              I specialize in turning complex problems into elegant, digital solutions.
              With a background in the JavaScript ecosystem, I focus on writing clean,
              maintainable code and delivering seamless user experiences.
            </p>
            <p className="text-secondary">
              I genuinely enjoy exploring the ever-evolving JavaScript ecosystem. I stay curious by testing new libraries and finding better ways to build things, always looking for more efficient tools and cleaner patterns to improve the overall quality of my work.
            </p>
            <Button
              variant="outline-light"
              className="mt-auto align-self-center align-self-md-start"
              href="/Resume.pdf"
              download="Alessandro_CV.pdf"
            >
              Download CV
            </Button>
          </div>
        </Col>
      </Row>
    </section>
  );
};

export default About