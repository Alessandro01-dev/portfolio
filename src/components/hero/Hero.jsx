import { Col, Row } from 'react-bootstrap'
import classes from './Hero.module.css'
import hero from '../../assets/hero5.png'
import Typewriter from 'typewriter-effect';
import { useLanguage } from '../../contexts/LanguageContext';

const Hero = () => {
  const { content } = useLanguage();

  return (
    <Row
      className='align-items-center'
    >
      <Col
        xs={12}
        md={6}
      >
        <div
          className={classes['hero-main-container']}
        >
          <h1
            className={classes['greeting']}
          >{content.hero.greeting}<span>!</span></h1>
          <div className={classes['intro-container']}>
            <div className={classes['accent-line']}></div>
            <h1 className={classes['introduction']}>{content.hero.introduction}</h1>
          </div>
          <h1
            className={classes['job']}
          ><span>{`<`}</span> {/* <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString('Problem Solver')
                  .pauseFor(1500)
                  .deleteAll()
                  .typeString('Bug Creator')
                  .pauseFor(500)
                  .deleteChars(7)
                  .typeString('Fixer')
                  .pauseFor(2500)
                  .deleteAll()
                  .typeString('Web Developer')
                  .start()
              }}
              options={{
                autoStart: true,
                loop: false,
                wrapperClassName: classes['typewriter-wrapper'],
                cursorClassName: classes['typewriter-cursor'],
              }}
            /> */} {content.hero.job} <span>{`/>`}</span></h1>
        </div>
      </Col>
      <Col
        xs={12}
        md={6}
      >
        <div
          className={classes['hero-img-container']}
        >
          <img
            className='w-100 object-fit-cover d-block'
            src={hero}
            alt="profile picture"
          />
        </div>
      </Col>
    </Row>
  )
}

export default Hero