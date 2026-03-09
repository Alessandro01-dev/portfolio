import { Col, Container, Row } from 'react-bootstrap'
import classes from './Footer.module.css'
import GithubIcon from '../../assets/GithubIcon'
import LinkedinIcon from '../../assets/LinkedinIcon'
import SendEmailIcon from '../../assets/SendEmailIcon'

const Footer = () => {
  const email = "ale.aronica@outlook.it";
  const githubUrl = "https://github.com/Alessandro01-dev";
  const linkedinUrl = "https://www.linkedin.com/in/alessandro-aronica-9496b83a5";

  return (
    <div
      className={classes['footer-main-container']}
    >
      <Container
        className='mb-5'
      >
        <Row
          className='py-5'
        >
          <Col
            xs={12}
            className='mx-auto'
          >
            <h5
              className='m-0 text-center'
            >Alessandro Aronica</h5>
            <p
              className='m-0 text-center small text-secondary'
            >
              © 2026. All rights reserved.
            </p>
          </Col>
        </Row>
        <Row>
          <Col
            xs={12}
          >
            <div
              className='d-flex align-items-center justify-content-center gap-3'
            >
              <a href={`mailto:${email}`} className={classes['icon-link']}>
                <SendEmailIcon />
              </a>

              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={classes['icon-link']}
              >
                <GithubIcon />
              </a>

              <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={classes['icon-link']}
              >
                <LinkedinIcon />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Footer