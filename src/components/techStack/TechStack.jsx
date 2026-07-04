import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import classes from "./TechStack.module.css";
import { Container } from "react-bootstrap";
import { technologies } from "../../utilities/technologies";

const TechStack = () => {
  return (
    <div className={classes["full-width-bg"]}>
      <Container>
        <Swiper
          className={classes["tech-slider"]}
          modules={[Autoplay]}
          spaceBetween={50}
          slidesPerView={3}
          loop={true}
          speed={3000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: { slidesPerView: 4 },
            1024: { slidesPerView: 6 },
          }}
        >
          {technologies.map((tech, index) => (
            <SwiperSlide key={index} className="text-center">
              <div className={classes["slide-img-container"]}>
                <img
                  className="w-100 h-100 object-fit-contain d-block"
                  src={tech.icon}
                  alt={tech.name}
                />
              </div>
              <p className="text-secondary m-0 text-nowrap">{tech.name}</p>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </div>
  );
};

export default TechStack;
