import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import classes from './TechStack.module.css'
import { Container } from 'react-bootstrap';

const TechStack = () => {
  const technologies = [
    { name: 'HTML 5', icon: 'https://images.icon-icons.com/112/PNG/512/html5_18891.png' },
    { name: 'CSS', icon: 'https://cdn.worldvectorlogo.com/logos/css-3.svg' },
    { name: 'JavaScript', icon: 'https://static.vecteezy.com/system/resources/previews/027/127/463/non_2x/javascript-logo-javascript-icon-transparent-free-png.png' },
    { name: 'Bootstrap', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/960px-Bootstrap_logo.svg.png' },
    { name: 'React', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/3840px-React-icon.svg.png' },
    { name: 'JWT', icon: 'https://cdn.worldvectorlogo.com/logos/jwt-3.svg' },
    { name: 'Npm', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Npm-logo.svg/3840px-Npm-logo.svg.png' },
    { name: 'Node.js', icon: 'https://cdn.iconscout.com/icon/free/png-256/free-node-js-icon-svg-download-png-1174935.png' },
    { name: 'Express', icon: 'https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png' },
    { name: 'MongoDB', icon: 'https://cdn.worldvectorlogo.com/logos/mongodb-icon-1-1.svg' },
    { name: 'Socket.io', icon: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Socket-io.svg' },
    { name: 'Github', icon: 'https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/github-white-icon.png' },
    { name: 'React Router', icon: 'https://reactrouter.com/_brand/React%20Router%20Brand%20Assets/React%20Router%20Logo/Light.svg' }
  ];

  return (
    <div className={classes['full-width-bg']}>
      <Container>
      <Swiper
        className={classes['tech-slider']}
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
          <SwiperSlide
            key={index}
            className='text-center'
          >
            <div
              className={classes['slide-img-container']}
            >
              <img
                className='w-100 h-100 object-fit-contain d-block'
                src={tech.icon}
                alt={tech.name}
              />
            </div>
            <p
              className='text-secondary m-0 text-nowrap'
            >{tech.name}</p>
          </SwiperSlide>
        ))}
      </Swiper>
      </Container>
    </div>
  );
};

export default TechStack;