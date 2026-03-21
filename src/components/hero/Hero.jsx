import { Col, Row } from 'react-bootstrap'
import classes from './Hero.module.css'
import hero from '../../assets/hero5.png'
import Typewriter from 'typewriter-effect';

const Hero = () => {
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
          >Hi There<span>!</span></h1>
          <div className={classes['intro-container']}>
            <div className={classes['accent-line']}></div>
            <h1 className={classes['introduction']}>I'm Alessandro</h1>
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
            /> */} Web Developer <span>{`/>`}</span></h1>
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