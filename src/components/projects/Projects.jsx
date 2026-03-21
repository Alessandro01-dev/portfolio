import { Container, Row, Col, Badge, Button } from 'react-bootstrap';
import talkmate from '../../assets/talkmate1.png'
import ecommerce from '../../assets/ecommerce2.png'
import blog from '../../assets/threadblog.png'
import classes from './Projects.module.css'
import ExternalLinkIcon from '../../assets/ExternalLinkIcon';
import { useLanguage } from '../../contexts/LanguageContext';

const Projects = () => {
  const { content } = useLanguage()

  const technicalData = [
    {
      tech: ["React", "Node.js", "Express", "MongoDB", "JWT", "Stripe"],
      image: ecommerce,
      github: "https://github.com/Alessandro01-dev/e-commerce",
      demo: null,
    },
    {
      tech: ["React", "Node.js", "Express", "MongoDB", "JWT", "Socket.io", "Google Maps API"],
      image: talkmate,
      github: "https://github.com/Alessandro01-dev/capstone_project",
      demo: "https://talkmate-flame.vercel.app"
    },
    {
      tech: ["React", "React Bootstrap", "Node.js", "Express", "MongoDB", "JWT", "OAuth"],
      image: blog,
      github: "https://github.com/Alessandro01-dev/epicode/tree/main/M6",
      demo: null,
    }
  ];

  const projects = content.projects.list.map((item, index) => ({
    ...item,
    ...technicalData[index]
  }));

  return (
    <section id="projects" className="py-5">
      <h2 className={`${classes['section-title']} text-center mb-5 fw-bold`}>{content.projects.sectionTitle}</h2>
      <div className={classes['title-divider']}>
        <div className={classes['line']}></div>
        <div className={classes['dot']}></div>
      </div>
      <Container>
        {projects.map((project, index) => (
          <Row
            key={index}
            className={`mb-5 align-items-center ${index % 2 !== 0 ? 'flex-md-row-reverse' : ''}`}
          >
            <Col md={6} className="mb-4 mb-md-0">
              <div className={`${classes['project-card-thumbnail-container']} overflow-hidden rounded-4 border border-secondary`}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-100 h-auto img-fluid"
                />
              </div>
            </Col>

            <Col md={6} className={index % 2 !== 0 ? 'pe-md-5' : 'ps-md-5'}>
              <h3 className="fw-bold mb-3">{project.title}</h3>
              <div className={classes['tech-badges-container']}>
                {project.tech.map((tech, index) => (
                  <Badge
                    key={index}
                    className={`${classes['tech-badge']} bg-transparent`}
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
              <p className="text-secondary mb-4">
                {project.description}
              </p>
              <div
                className='d-flex align-items-center gap-3'
              >
                {project.github && (
                  <Button
                    variant="outline-light"
                    href={project.github}
                    target="_blank"
                    className={classes['github-btn-custom']}
                  >
                    {content.projects.viewGithub}
                  </Button>
                )}
                {project.demo ? (
                  <a
                    href={project.demo}
                    target="_blank"
                    className={`${classes['view-project-btn']} d-inline-flex align-items-center gap-1`}
                  >
                    {content.projects.viewProject} <sup><ExternalLinkIcon className="align-top" /></sup>
                  </a>
                ) : (
                  <span className="text-info small fst-italic">
                    🚀 {project.progressMessage}...
                  </span>
                )}
              </div>
            </Col>
          </Row>
        ))}
      </Container>
    </section>
  );
};

export default Projects;
