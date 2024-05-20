import React from 'react'

const index = () => {
  const whiteSquares = new Array(20).fill(null); 

  return (
    <div className="bg-[#050507]">
      <div className="xl:container xl:mx-auto">
        <div className="bg-Herobackground bg-cover bg-no-repeat bg-center h-auto lg:pt-0 flex items-center">
          <div className="w-full flex flex-col lg:flex-row items-center space-y-6 px-4 lg:px-12 xl:px-24 pt-40 md:pt-52">
            <div className="flex flex-1 flex-col space-y-8 text-center items-center lg:items-start lg:text-start mr-0 lg:mr-12">
              <div className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white max-w-4xl">Welcome To The Revolution</div>
              <p className="text-white text-lg">
                Changing the game for <span className="text-[#b0d357]">film Production</span> and <span className="text-[#b0d357]">Ownership</span>
              </p>
              <p className="text-white text-base text-justify lg:text-left px-4 sm:px-0">
                MovieMint liberates Filmmakers and fans through decentralized funding.<br />
                Our Blockchain platform seamlessly connects Independent Creators and Passionate Supporters. Filmmakers tokenize projects into NFT "movie shares" that fans can buy and trade. This raises production funds while retaining full ownership and creative control while fans.
              </p>
              <div className="flex flex-col space-y-2 md:flex-row md:justify-between justify-center items-center mb-4">
                <div className="relative bg-slate-600 my-6 md:mb-6">
                  <div className="absolute top-4 left-1/2 -translate-x-1/2 md:translate-x-0 md:left-[9rem] border-b-2 border-[#b0d357] w-72 md:w-40 z-80"></div>
                  <div id="all-movies" className="absolute top-0 left-1/2 -translate-x-1/2 md:translate-x-0 font-bold text-sm text-[#b0d357] bg-grey1 border-2 border-[#b0d357] rounded-full px-4 py-1 z-100">LATEST&nbsp;<span className="text-white">STORIES</span></div>
                </div>
              </div>
            </div>
            <div className="md:max-w-md">
              <p className="text-center font-bold text-[#b0d357] text-sm mb-px">NFT CAPITAL RAISED</p>
              <div className="flex justify-center">
                <p className="text-black bg-slate-200 font-semibold text-base px-3 py-px rounded-sm mb-2">US $114.74012</p>
              </div>
              <div className="flex flex-col bg-[#2b2d42] gap-1 w-full">
                <div className="flex bg-[#2b2d42] pt-2 pb-1 gap-2 items-center justify-center w-full">
                  {whiteSquares.map((_, index) => (
                    <div key={index} className="h-[2.5vw] w-[2.5vw] sm:h-[3vw] sm:[3.5vw] md:h-[1.4vw] md:w-[1.5vw] lg:h-[1vw] lg:w-[1.2vw]" style={{ background: "rgb(255, 255, 255)" }}></div>
                  ))}
                </div>
                <div className="mx-4 lg:mx-0 lg:max-w-md bg-grey1 rounded-md border-2">
                  <video controls="" autoPlay loop className="w-full">
                    <source src="https://staging.api.moviemint.net/uploads/video/admin/video1.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                <div className="flex bg-[#2b2d42] pt-1 pb-2 items-center justify-center gap-2 w-full">
                  {whiteSquares.map((_, index) => (
                    <div key={index} className="h-[2.5vw] w-[2.5vw] sm:h-[3vw] sm:[3.5vw] md:h-[1.4vw] md:w-[1.5vw] lg:h-[1vw] lg:w-[1.2vw]" style={{ background: "rgb(255, 255, 255)" }}></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default index;
