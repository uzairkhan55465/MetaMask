import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { RecentCard } from '../../../constant/JSONdata';
import { useEffect, useRef, useState } from 'react';
const RecentCards = () => {
    const swiperRef = useRef(null);
    const [autoplayDirection, setAutoplayDirection] = useState('next');

    useEffect(() => {
        const swiperInstance = swiperRef.current.swiper;

        const handleAutoplay = () => {
            const prevButton = swiperInstance.navigation.prevEl;
            const nextButton = swiperInstance.navigation.nextEl;

            if (autoplayDirection === 'next') {
                nextButton.style.color = '#b0d357';
                prevButton.style.color = '';
            } else {
                prevButton.style.color = '#b0d357';
                nextButton.style.color = '';
            }
        };

        const handleReachEnd = () => {
            setAutoplayDirection('prev');
            swiperInstance.autoplay.stop();
            swiperInstance.params.autoplay.reverseDirection = true;
            swiperInstance.autoplay.start();
        };

        const handleReachBeginning = () => {
            setAutoplayDirection('next');
            swiperInstance.autoplay.stop();
            swiperInstance.params.autoplay.reverseDirection = false;
            swiperInstance.autoplay.start();
        };

        swiperInstance.on('autoplay', handleAutoplay);
        swiperInstance.on('slideChange', handleAutoplay);
        swiperInstance.on('reachEnd', handleReachEnd);
        swiperInstance.on('reachBeginning', handleReachBeginning);

        return () => {
            swiperInstance.off('autoplay', handleAutoplay);
            swiperInstance.off('slideChange', handleAutoplay);
            swiperInstance.off('reachEnd', handleReachEnd);
            swiperInstance.off('reachBeginning', handleReachBeginning);
        };
    }, [autoplayDirection]);


    return (
        <div className="bg-[#171717]">
            <div className="xl:container xl:mx-auto">
                <div className="flex flex-col space-y-8 py-12 md:py-14 px-4 md:px-12 xl:px-24">

                    <div className="flex flex-col space-y-2 md:flex-row md:justify-between justify-center items-center mb-4">
                        <div className="relative bg-slate-600 my-6 md:mb-6">
                            <div className="absolute top-4 left-1/2 -translate-x-1/2 md:translate-x-0 md:left-[9rem] border-b-2 border-[#b0d357] w-72 md:w-40 z-80"></div>
                            <div id="all-movies" className="absolute top-0 left-1/2 -translate-x-1/2 md:translate-x-0 font-bold text-sm text-[#b0d357] bg-grey1 border-2 border-[#b0d357] rounded-full px-4 py-1 z-100">RECENT&nbsp;<span className="text-white">PROJECTS</span></div>
                        </div>
                    </div>
                    <div>
                        <Swiper
                            ref={swiperRef}
                            modules={[Navigation, Pagination, Autoplay]}
                            spaceBetween={15}
                            slidesPerView={3}
                            navigation
                            pagination={{ clickable: true }}
                            autoplay={{ delay: 2000, disableOnInteraction: false }}
                            loop={false}
                            breakpoints={{
                                640: {
                                    slidesPerView: 1,
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
                        >
                            {RecentCard.map((item) => (
                                <SwiperSlide key={item.id}>
                                    <div className="relative h-80 w-full cursor-pointer">
                                        <img
                                            src={item.imageSrc}
                                            alt={item.altText}
                                            className="rounded-lg border border-white/40 object-cover w-full h-full z-10"
                                        />
                                        <div className="absolute top-0 left-0 h-80 w-full bg-gradient-to-b from-black/60 via-transparent to-black/60 rounded-lg z-20"></div>
                                        <div className="absolute top-4 left-6 z-30">
                                            <p className="font-semibold text-white text-lg">{item.title}</p>
                                        </div>
                                        <div className="absolute bottom-4 left-6 z-30">
                                            <p className="font-medium text-[#78828a] text-sm text-white/80 leading-normal">
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RecentCards;
