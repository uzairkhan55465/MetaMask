import React from 'react'
import Partner1 from "../../../assets/images/part1.png"
import Partner2 from "../../../assets/images/part2.png"
import Partner3 from "../../../assets/images/part3.png"
import Partner4 from "../../../assets/images/part4.png"
const BecpmePartners = () => {
    return (
        <>
  
        <div className="bg-grey1 bg-Ctabackground bg-no-repeat bg-center bg-cover z-10">
        <div className="bg-gradient-to-t from-[#020202] h-10 w-full"></div>
            <div className="bg-gradient-to-b from-[#020202] h-10 w-full"></div>
            <div className="flex flex-col justify-center items-center py-24">
                <div className="flex w-full justify-evenly py-6">
                    <img
                        src={Partner1}
                        className="w-6 h-6"
                        alt="circle"
                    />
                    <img
                        src={Partner2}
                        className="w-7 h-7"
                        alt="circle"
                    />
                </div>
                <div className=" items-center  flex flex-col space-y-6">
                    <h1 className="font-semibold text-7xl text-white">
                        <span className="text-[#b0d357]">Become</span> a Partner</h1>
                    <div className="text-white/60 text-xl">Invest and manage all your NFTs at one place.</div>
                    <div className="bg-movie-green w-fit px-6 py-2 rounded-3xl text-black font-bold flex items-center gap-2"><button className=" bg-[#b0d357] py-2 px-8 rounded-full ">Get started</button> <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="18" width="18" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z"></path></svg> </div></div>
                <div className="flex w-full justify-evenly py-6">
                    <img
                        src={Partner3}
                        className="w-6 h-6"
                        alt="circle"
                    />
                    <img
                        src={Partner4}
                        className="w-7 h-7"
                        alt="circle"
                    />
                </div>
            </div>
           
        </div>
        </>
     
    )
}

export default BecpmePartners