import { Col, Container, Row } from 'react-bootstrap'
import classes from './Footer.module.css'
import SendEmailIcon from '../../assets/SendEmailIcon'
import GithubIcon from '../../assets/GithubIcon'
import LinkedinIcon from '../../assets/LinkedinIcon'

const Footer = () => {
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
              <SendEmailIcon />
              <GithubIcon />
              <LinkedinIcon />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Footer