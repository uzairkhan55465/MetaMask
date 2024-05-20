import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import { MoviesCardsSlides } from '../../../constant/JSONdata';

const MovieCards = () => {
  return (
    <div className="bg-[#050507] pb-20">
      <div className="border-t border-b px-6 py-8 mx-[2px] lg:mx-[130px] xl:mx-[130px]">
      <div className="text-white w-full  mb-3 flex flex-col lg:flex-row items-start lg:items-center justify-start lg:justify-between">
      <p className="mr-6 text-center w-full lg:text-left">
        The Next Great Cinematic era Starts NOW on the Blockchain.
      </p>
      <div className="w-full flex flex-row items-center justify-center lg:justify-end lg:mt-0 mt-6">
        <a href="#all-movies">
          <button className="px-5 py-3 text-sm bg-[#b0d357] text-black font-bold rounded-full mr-3 scroll-smooth">
            Explore&nbsp;Projects
          </button>
        </a>
        <div className="bg-[#b0d357] text-sm w-fit px-6 relative py-3 rounded-full text-black font-bold flex items-center cursor-pointer gap-2">
          <button className="focus:outline-none">
            Become&nbsp;a&nbsp;Partner
          </button>
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 16 16"
            height="20"
            width="20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
            ></path>
          </svg>
        </div>
      </div>
    </div>
        <div className='w-[100%] sm:w-[100%] md:w-[100%] lg:w-[70%] xl:w-[60%]'>
          <Swiper

            spaceBetween={15}
            breakpoints={{
              639: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 15,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
            }}
            navigation
            pagination={{ clickable: true }}
            loop
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
          >
            {MoviesCardsSlides.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="h-80 cursor-pointer w-full flex flex-wrap items-center text-base justify-center relative rounded-3xl border border-white/20">
                  <img
                    src={item.imageSrc}
                    alt={item.altText}
                    className="object-cover w-full h-full rounded-3xl "
                  />
                  <div className="absolute top-4 left-4 flex items-center space-x-2">
                    <a href={item.profileLink}>
                      <img
                        src={item.profileImgSrc}
                        alt="Production Profile"
                        className="w-8 h-8 rounded-full border border-white/40 hover:border-blue-600"
                      />
                    </a>
                    <a href={item.profileLink}>
                      <p className="text-white text-sm font-semibold hover:underline hover:text-blue-100 drop-shadow-md">
                        {item.profileName}
                      </p>
                    </a>
                  </div>
                  <div className="absolute bottom-4 left-4 text-white drop-shadow-md">
                    <p className="font-bold text-sm">{item.caption}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>
    </div>
  );
};

export default MovieCards;
