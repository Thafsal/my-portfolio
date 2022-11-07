import React from "react";
import "./Testimonials.css";
import AVTR1 from "../../photos/AVTR1.png";
import AVTR2 from "../../photos/AVTR2.png";
import AVTR3 from "../../photos/AVTR3.png";
import AVTR4 from "../../photos/AVTR4.png";
import AVTR5 from "../../photos/AVTR5.png";
import AVTR6 from "../../photos/AVTR6.png";

import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const Data = [
  {
    avatar: AVTR1,
    name: "Leanardo Fransis",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ipsa cupiditate dolorem! Perspiciatis.",
  },
  {
    avatar: AVTR2,
    name: "Amelian Brownine",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ipsa cupiditate dolorem! Perspiciatis.",
  },
  {
    avatar: AVTR3,
    name: "Markus Jhonson",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ipsa cupiditate dolorem! Perspiciatis.",
  },
  {
    avatar: AVTR4,
    name: "Clara Thomson",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ipsa cupiditate dolorem! Perspiciatis.",
  },
  {
    avatar: AVTR5,
    name: "Elizabeth",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ipsa cupiditate dolorem! Perspiciatis.",
  },
  {
    avatar: AVTR6,
    name: "Andrew James",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ipsa cupiditate dolorem! Perspiciatis.",
  },
];

const Testimonials = () => {
  return(
    <section id="testimonials" >
      <h5>Review From Clients</h5>
      <h2>Testimonials</h2>
        <Swiper className="container testimonials__container"
        modules={[Pagination ]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}>
          {
            Data.map(({avatar, name ,review},index)=>{
              return(
                <SwiperSlide key={index} className='testimonials'>
                  <div className="client__avatar">
                    <img src={avatar} alt={name} />
                  </div>
                  <h5 className="client__name">{name}</h5>
                  <small className="client__review">{review}</small>
                </SwiperSlide>
              )
            })
          }
        </Swiper>
  </section>
  );
};

export default Testimonials;
