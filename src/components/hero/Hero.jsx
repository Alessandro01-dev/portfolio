import { Col, Row } from "react-bootstrap";
import classes from "./Hero.module.css";
import hero from "../../assets/hero.png";
import Typewriter from "typewriter-effect";
import { useLanguage } from "../../contexts/LanguageContext";

const Hero = () => {
  const { content } = useLanguage();

  return (
    <Row className={`${classes["main-container"]} align-items-center`}>
      <Col xs={12} md={6}>
        <div className={classes["left-container"]}>
          <h1 className={classes["greeting"]}>
            {content.hero.greeting}
            <span>!</span>
          </h1>
          <div className={classes["intro-container"]}>
            <div className={classes["accent-line"]}></div>
            <h1 className={classes["introduction"]}>
              {content.hero.introduction}
            </h1>
          </div>
          <h1 className={classes["job"]}>
            <span>{`<`}</span>
            <Typewriter
              options={{
                autoStart: true,
                loop: false,
                delay: 60,
                deleteSpeed: 1,
                wrapperClassName: classes["typewriter-wrapper"],
                cursorClassName: classes["typewriter-cursor"],
              }}
              onInit={(typewriter) => {
                typewriter
                  .typeString("Web Developer")
                  .pauseFor(1200)
                  .deleteAll()
                  .typeString("Java Developer")
                  .pauseFor(1200)
                  .deleteAll()
                  .typeString("React Developer")
                  .pauseFor(1200)
                  .deleteAll()
                  .typeString("Full Stack Developer")
                  .start();
              }}
            />
            <span>{`/>`}</span>
          </h1>
        </div>
      </Col>
      <Col xs={12} md={6}>
        <div className={classes["hero-img-container"]}>
          <img
            className="w-100 object-fit-cover d-block"
            src={hero}
            alt="profile picture"
          />
        </div>
      </Col>
    </Row>
  );
};

export default Hero;
