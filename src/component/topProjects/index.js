
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation} from 'swiper/modules';


const TopProjects = ({TOPProjectsCards,top,number}) => {
 
  return (
    <div className='h-fit bg-[h-fit] bg-[#080808]'>
      <div className='xl:container xl:mx-auto'>
        <div className='flex flex-col space-y-8 px-4 md:px-12 xl:px-24 ' style={{paddingTop:top}}>
          <div className="flex flex-col space-y-2 md:flex-row md:justify-between justify-center items-center mb-4">
            <div className="relative bg-slate-600 mb-11 md:mb-6">
              <div className="absolute top-4 left-1/2 -translate-x-1/2 md:translate-x-0 md:left-[9.4rem] border-b-2 border-[#8fab48] w-72 md:w-40 z-80"></div>
              <div id="all-movies" className="absolute top-0 left-1/2 -translate-x-1/2 md:translate-x-0 font-bold text-sm text-[#8fab48] bg-grey1 border-2 border-[#8fab48] rounded-full px-4 py-1 z-100">TOP&nbsp;<span className="text-white">{number}&nbsp;PROJECTS</span></div>
            </div>
            <div className="flex flex-row items-center gap-5 text-right">
              <div className="relative inline-block text-left" data-headlessui-state="">
                <div>
                  <button className="inline-flex justify-between gap-2 md:gap-6 items-center rounded-full bg-[#8fab48] bg-opacity-80 text-textcolor2 px-2 md:px-6 py-1 font-bold text-xs md:text-base text-black hover:bg-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75" id="headlessui-menu-button-:r0:" type="button" aria-haspopup="menu" aria-expanded="false" data-headlessui-state="">
                    Genre <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" color="#080808" height="24" width="24" xmlns="http://www.w3.org/2000/svg" style={{ color: "rgb(8, 8, 8)" }}>
                      <path d="M7 11h10v2H7zM4 7h16v2H4zm6 8h4v2h-4z"></path>
                    </svg>
                  </button>
                </div>
              </div>
              <div className="relative inline-block text-left" data-headlessui-state="">
                <div>
                  <button className="inline-flex justify-between gap-2 md:gap-6 items-center rounded-full bg-[#8fab48] bg-opacity-80 text-textcolor2 px-2 md:px-6 py-1 font-bold text-xs md:text-base text-black hover:bg-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75" id="headlessui-menu-button-:r1:" type="button" aria-haspopup="menu" aria-expanded="false" data-headlessui-state="">
                    Category <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" color="#080808" height="24" width="24" xmlns="http://www.w3.org/2000/svg" style={{ color: "rgb(8, 8, 8)" }}>
                      <path d="M7 11h10v2H7zM4 7h16v2H4zm6 8h4v2h-4z"></path>
                    </svg>
                  </button>
                </div>
              </div>
              <div className="relative inline-block text-left" data-headlessui-state="">
                <div>
                  <button className="inline-flex justify-between gap-2 md:gap-6 items-center rounded-full bg-[#8fab48] bg-opacity-80 text-textcolor2 px-2 md:px-6 py-1 font-bold text-sm md:text-base text-black hover:bg-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75" id="headlessui-menu-button-:r2:" type="button" aria-haspopup="menu" aria-expanded="false" data-headlessui-state="">
                    Location <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" color="#080808" height="24" width="24" xmlns="http://www.w3.org/2000/svg" style={{ color: "rgb(8, 8, 8)" }}>
                      <path d="M7 11h10v2H7zM4 7h16v2H4zm6 8h4v2h-4z"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div>
            <Swiper
              modules={[Navigation]}
              spaceBetween={15}
              navigation
              loop={false}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 15,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 20,
                },
              }}
            >
              {TOPProjectsCards.map((item) => (
                <SwiperSlide key={item.id}>
                  <div className="group relative cursor-pointer">
                    <img
                      src={item.imageSrc}
                      alt={item.altText}
                      className="rounded-lg border object-cover w-full h-52 transition-all transform group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/50 rounded-lg group-hover:scale-105"></div>
                    <div className="absolute top-1 left-2">
                      <p className="font-semibold text-white text-sm mt-1 ml-1 group-hover:text-movie-green rounded-md transition-all">{item.title}</p>
                    </div>
                    <div className="absolute top-1.5 right-2">
                      <p className="font-semibold text-xs text-gray-300 flex flex-col items-center mt-1 ml-1 transition-all">
                        <div>{item.description}</div>
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

export default TopProjects;
