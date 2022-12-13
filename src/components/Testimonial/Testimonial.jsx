import React from 'react';
import css from './Testimonial.module.css'
import Hero from '../../assets/testimonialHero.png'
import {TestimonialsData } from  '../../data/testimonials'
import {Swiper, SwiperSlide} from 'swiper/react'



const Testimonial = () => {
    return (
        <div className={css.testimonials}>
            <div className={css.wrapper}>
                <div className={css.container}>
                <span>Top rated</span>
                <span>
                    Seedily say has suitable disposal and boy.Exercise joy man
                    children rejoiced
                </span>
                </div> 

            <img src={Hero} alt=''/>
           

            <div className={css.container}>
                <span>100k</span>
                <span>Happy Customer with Us</span>
                 </div>
                <div/>

                <div className={css.reviews}>Reviews</div>
                

                 <div className={css.carousal}>
                    <Swiper
                    slidesPerView={3}
                    slidesPerGroup={1}
                    spaceBetween={20}
                    className={css.tCarousel}
                    >
                        {
                            TestimonialsData.map((testimonial, i)=>(
                                <SwiperSlide>
                                    <div className={css.testimonial}>
                                        <img src={testimonial.img} alt=""/>
                                        <span>{testimonial.comment}</span>
                                        <hr/>
                                        <span>{testimonial.name}</span>
                                    </div>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                 </div>
            </div>
        </div>
    );
};


export default Testimonial;
