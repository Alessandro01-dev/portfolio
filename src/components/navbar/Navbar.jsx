import { Col, Container, NavDropdown, Row } from 'react-bootstrap'
import logo from '../../assets/logo2.png'
import classes from './Navbar.module.css'
import { useLanguage } from '../../contexts/LanguageContext'

const Navbar = () => {

  const { language, changeLanguage, content } = useLanguage();

  const flagMap = {
    en: 'gb',
    it: 'it'
  };

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

            <div className="d-flex align-items-center gap-4">
              <ul className={`${classes['nav-links']} d-flex list-unstyled m-0 fw-light`}>
                <li><a href="#services" className="text-decoration-none text-reset">{content.navbar.services}</a></li>
                <li><a href="#about" className="text-decoration-none text-reset">{content.navbar.about}</a></li>
                <li><a href="#projects" className="text-decoration-none text-reset">{content.navbar.projects}</a></li>
                <li><a href="#contact" className="text-decoration-none text-reset">{content.navbar.contact}</a></li>
              </ul>
              <NavDropdown
                title={
                  <img
                    src={`https://flagcdn.com/w80/${flagMap[language]}.png`}
                    width="20"
                    alt="current language"
                  />
                }
                id="language-dropdown"
                className={classes['lang-dropdown']}
                align="end"
              >
                <NavDropdown.Item onClick={() => changeLanguage('en')} className="d-flex align-items-center gap-2">
                  <img src="https://flagcdn.com/w80/gb.png" width="20" alt="English" /> EN
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => changeLanguage('it')} className="d-flex align-items-center gap-2">
                  <img src="https://flagcdn.com/w80/it.png" width="20" alt="Italiano" /> IT
                </NavDropdown.Item>
              </NavDropdown>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default Navbar