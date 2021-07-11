import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Thumbs } from 'swiper';
import 'swiper/swiper-bundle.css';

SwiperCore.use([Navigation, Pagination, Thumbs]);

function CatalogItemSwiper({listImages}) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const slides = listImages.map((listImages, index) => {
    return(
        <SwiperSlide key={index}>
          <img
            className="card-photo__full"
            src={listImages}
            alt={''}
          />
        </SwiperSlide>
      )
  })

  const thumbs = listImages.map((listImages, index) => {
    return(
        <SwiperSlide key={index}>
            <img
              className="card-photo__slide"
              src={listImages}
              alt={''}
            />
        </SwiperSlide>
      )
  })

  return (
    <React.Fragment>
      <Swiper
        id="main"
        thumbs={{ swiper: thumbsSwiper }}
        navigation
        pagination
        spaceBetween={0}
        slidesPerView={1}
      >
        {slides}
      </Swiper>

      <Swiper
        id="thumbs"
        spaceBetween={10}
        slidesPerView={3}
        onSwiper={setThumbsSwiper}
      >
        {thumbs}
      </Swiper>

    </React.Fragment>
  );
}

export default CatalogItemSwiper;