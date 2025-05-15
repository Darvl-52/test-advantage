import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Slider.scss";

export const Slider = () => {

    return (
        <div className="slider">
            <Swiper
                slidesPerView={1}
                modules={[Navigation, Pagination]}
                navigation={{
                    prevEl: '.slider__group-prev',
                    nextEl: '.slider__group-next',
                }}
            >
                <SwiperSlide>
                    <img
                        src="/Car.jpg"
                        alt="Картинка машины"
                        width={600}
                        height={600}
                        loading="lazy"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src="/Car.jpg"
                        alt="Картинка машины"
                        width={600}
                        height={600}
                        loading="lazy"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src="/Car.jpg"
                        alt="Картинка машины"
                        width={600}
                        height={600}
                        loading="lazy"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src="/Car.jpg"
                        alt="Картинка машины"
                        width={600}
                        height={600}
                        loading="lazy"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src="/Car.jpg"
                        alt="Картинка машины"
                        width={600}
                        height={600}
                        loading="lazy"
                    />
                </SwiperSlide>
            </Swiper>

            <div className='slider__group'>
                <button
                    className='slider__group-subscribe'
                    title='Записаться онлайн'
                    aria-label='Записаться онлайн'>
                    Записаться онлайн
                </button>
                <div className="slider__group-navigation">
                    <button
                        aria-label='Показать предыдущую картинку'
                        title='Показать предыдущую картинку'
                        className="slider__group-prev">
                        <img
                            src="/arrow.svg"
                            alt="Иконка кнопки навигации слайдера"
                            width={30}
                            height={24}
                            loading='lazy'
                        />
                    </button>
                    <button
                        aria-label='Показать следующую картинку'
                        title='Показать следующую картинку'
                        className="slider__group-next">
                        <img
                            src="/arrow.svg"
                            alt="Иконка кнопки навигации слайдера"
                            width={30}
                            height={24}
                            loading='lazy'
                        />
                    </button>
                </div>
            </div>
        </div>
    );
};
