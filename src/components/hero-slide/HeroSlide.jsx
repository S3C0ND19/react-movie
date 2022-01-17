import React from "react";
import SwiperCore, { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState, useEffect } from "react";
import tmdbApi, { category, movieType } from "../../api/tmdbApi";
import { useNavigate } from 'react-router-dom'
import "./hero-slide.scss";
import apiConfig from "../../api/apiConfig";
const HeroSlide = () => {
  const [movieItems, setMovieItmes] = useState([]);
  SwiperCore.use([Autoplay]);
  useEffect(() => {
    const getMovies = async () => {
      const params = { page: 1 };
      try {
        const response = await tmdbApi.getMoviesList(movieType.popular, {
          params,
        });
        setMovieItmes(response.results.slice(0, 4));
      } catch {}
    };
    getMovies();
  }, []);
  return (
    <div className="hero-slide">
      <Swiper
        modules={[Autoplay]}
        grabCursor={true}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{ delay: 3000 }}
      >
        {movieItems.map((item, i) => (
          <SwiperSlide key={i}>
            {({ isActive }) => (
              <img src={apiConfig.originalImage(item.backdrop_path)} />
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
const HeroSlideItem = (props) => {
  let navigate  = useNavigate();
  const item = props.item;
  const background = apiConfig.originalImage(
    item.backdrop_path ? item.backdrop_path : item.poster_path
  );
  return (
    <div
      style={{ backgroundImage: `url(${background})` }}
      className={`hero-slide__item ${props.className}`}
    >
      {item.title}
    </div>
  );
};

export default HeroSlide;
