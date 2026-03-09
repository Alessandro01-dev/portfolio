import { Row, Col, Card } from 'react-bootstrap';
import WebDevelopmentIcon from '../../assets/WebDevelopmentIcon';
import FrontendIcon from '../../assets/FrontendIcon';
import BackendIcon from '../../assets/BackendIcon';
import classes from './Services.module.css'

const Services = () => {
  const services = [
    {
      title: "Web Development",
      description: "Building scalable, high-performance web applications using the latest MERN stack technologies.",
      icon: <WebDevelopmentIcon size="80px" color="#a8a8a8" />
    },
    {
      title: "Frontend Strategy",
      description: "Creating responsive, pixel-perfect user interfaces with a strong focus on UX and performance.",
      icon: <FrontendIcon size="80px" color="#a8a8a8" />
    },
    {
      title: "Backend & APIs",
      description: "Developing robust server-side logic and secure RESTful APIs to power complex applications.",
      icon: <BackendIcon
        size="80px" color="#a8a8a8" />
    }
  ];

  return (
    <section id="services" className="py-5">
      <Row className="flex-column h-100 gy-4">
        {services.map((service, index) => (
          <Col xs={12} key={index} className={classes['service-card-wrapper']}>
            <Card className={classes['service-card']}>
              <Card.Body className="d-flex flex-column flex-md-row align-items-center align-items-md-start">
                <div className="mb-3 mb-md-0 me-md-4 flex-shrink-0">
                  {service.icon}
                </div>
                <div className="d-flex flex-column text-center text-md-start">
                  <Card.Title className="text-white fw-bold mb-2">
                    {service.title}
                  </Card.Title>
                  <Card.Text className="text-secondary small mb-0">
                    {service.description}
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
            {index !== services.length - 1 && (
                <div className={classes['dot']}></div>
            )}
          </Col>
        ))}
      </Row>
    </section>
  );
};

export default Services