import { Col, Container, Row } from 'react-bootstrap';
import './App.css'
import Hero from './components/hero/Hero'
import 'bootstrap/dist/css/bootstrap.min.css';
import TechStack from './components/techStack/TechStack';
import Services from './components/services/Services'
import About from './components/about/About'
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

const App = () => {

  return (
    <>
      <Container>
        <Row
          className='align-items-center'
        >
          <Col
            xs={12}
            lg={10}
            className='mx-auto'
          >
            <Hero />
          </Col>
        </Row>
      </Container>
      <TechStack />
      <Container>
        <Row
          className="align-items-stretch"
        >
          <Col
            xs={12}
            lg={6}
          >
            <Services />
          </Col>
          <Col
            xs={12}
            lg={6}
          >
            <About />
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col>
            <Projects />
          </Col>
        </Row>
      </Container>
      <Container>
        <Row
          className='align-items-center'
        >
          <Col
            xs={12}
            lg={10}
            className='mx-auto'
          >
            <Contact />
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  )
}

export default App
