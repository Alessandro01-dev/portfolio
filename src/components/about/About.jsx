import { Row, Col, Button } from 'react-bootstrap';
import classes from './About.module.css'
import { useLanguage } from '../../contexts/LanguageContext';

const About = () => {
  const { content } = useLanguage()

  return (
    <section id="about" className="py-5 h-100">
      <Row className="flex-column h-100">
        <Col className="m-0 text-center text-md-start h-100">
          <div
            className="d-flex flex-column gap-3 text-center text-md-start h-100"
          >
            <div>
              <h2 className="fw-bold mb-4">{content.about.title}</h2>
              <p
                className={`${classes['intro-text']} lead m-0`}
              >
                {content.about.intro}
              </p>
            </div>
            <p className="text-secondary">
              {content.about.text1}
            </p>
            <p className="text-secondary">
              {content.about.text2}
            </p>
            <Button
              variant="outline-light"
              className="mt-auto align-self-center align-self-md-start"
              href="Resume.pdf"
              download="Alessandro_CV.pdf"
            >
              {content.about.downloadBtn}
            </Button>
          </div>
        </Col>
      </Row>
    </section>
  );
};

export default About