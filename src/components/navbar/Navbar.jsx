import { Col, Container, Row } from 'react-bootstrap'
import logo from '../../assets/logo2.png'
import classes from './Navbar.module.css'

const Navbar = () => {
  return (
    <Container fluid className={classes['nav-main-container']}>
      <Row
        className='align-items-center py-3 w-100'
      >
        <Col
          xs={12}
          lg={10}
          className='mx-auto'
        >
          <div className='d-flex justify-content-between align-items-center'>
            <div
              className={classes['logo-container']}
            >
              <img className='w-100 d-block object-fit-cover' src={logo} alt="logo" />
            </div>
            <ul className={`${classes['nav-links']} d-flex list-unstyled m-0 fw-light`}>
              <li><a href="#services" className="text-decoration-none text-reset">Services</a></li>
              <li><a href="#about" className="text-decoration-none text-reset">About</a></li>
              <li><a href="#projects" className="text-decoration-none text-reset">Projects</a></li>
              <li><a href="#contact" className="text-decoration-none text-reset">Contact</a></li>
            </ul>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default Navbar