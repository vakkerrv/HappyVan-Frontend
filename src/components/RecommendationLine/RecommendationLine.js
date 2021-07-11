import React, {  } from 'react';
import Slider from "react-slick";

import CatalogItem from '../../components/CatalogItem/CatalogItem'

const RecommendationLine = () => {
    function PrevArrow(props) {
      const { onClick } = props;
      return (
        <div className="slider-arrow new__arrow">
            <a className="slider-prev new__prev" onClick={onClick}>
                <i className="fa-arrow-prev"></i>
            </a>
        </div>
      );
    }

    function NextArrow(props) {
      const { onClick } = props;
      return (
        <div className="slider-arrow new__arrow">
            <a className="slider-next new__next" onClick={onClick}>
                <i className="fa-arrow-next"></i>
            </a>
        </div>
      );
    }

    var settings = {
        className: "slider",

        dots: false,
        infinite: true,
        // speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        adaptiveHeight: true,
        // код для адаптива slick slider
        responsive: [
            {
              breakpoint: 1100,
              settings: {
                slidesToShow: 3,
              }
            },
            {
              breakpoint: 700,
              settings: {
                slidesToShow: 1,
                adaptiveHeight: false,
              }
            },
            ],

        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
    };

    // const listCards = [
    //     {
    //         image: 1,            
    //     },
    //     {
    //         image: 2,            
    //     },
    //     {
    //         image: 1,            
    //     },
    //     {
    //         image: 2,            
    //     },
    //     {
    //         image: 1,            
    //     },
    //     {
    //         image: 2,            
    //     },
    // ] 

    const listCards = []

    return (
        <div className="slider-wrap new-wrap">
            <Slider {...settings}>
            {listCards.map((listValue, index) => {
                    return(
                        <CatalogItem product={{}} customClassName="new-slide_bgWrap" key={index}/>
                    )
                })}
            </Slider>
        </div>
    );
};

export default RecommendationLine;
