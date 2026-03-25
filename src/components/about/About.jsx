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
            <div>
              <p className="fw-bold mb-2 text-uppercase small">
                {content.about.downloadLabel}
              </p>
              <div className="d-flex align-items-center gap-3 justify-content-center justify-content-md-start">
                <Button
                  variant="outline-light"
                  href={`${import.meta.env.BASE_URL}/Alessandro_Aronica_CV_EN.pdf`}
                  download="Alessandro_Aronica_CV_EN.pdf"
                  size="sm"
                >
                  {content.about.cvEnBtn}
                </Button>
                <Button
                  variant="outline-light"
                  href={`${import.meta.env.BASE_URL}/Alessandro_Aronica_CV_IT.pdf`}
                  download="Alessandro_Aronica_CV_IT.pdf"
                  size="sm"
                >
                  {content.about.cvItBtn}
                </Button>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </section>
  );
};

export default About