import React from 'react'
import { UpcomingCards } from "../../../constant/JSONdata"
const UpcomingProjects = () => {
    return (
        <div className='h-fit bg-[#050507]'>
            <div className='xl:container xl:mx-auto py-[0px] md:py-12'>
                <div className='flex flex-col space-y-8 px-4 md:px-12 xl:px-24 py-8 md:py-20 '>
                    <div class="flex flex-col space-y-2 md:flex-row md:justify-between justify-center items-center mb-4">
                        <div class="relative bg-slate-600 mb-16 md:mb-6">
                            <div class="absolute top-4 left-1/2 -translate-x-1/2 md:translate-x-0 md:left-[11.8rem] border-b-2 border-[#8fab48] w-72 md:w-40 z-80"></div><div id="all-movies" class="absolute top-0 left-1/2 -translate-x-1/2 md:translate-x-0 font-bold text-sm text-[#8fab48] bg-grey1 border-2 border-[#8fab48] rounded-full px-4 py-1 z-100">UPCOMING&nbsp;PROJECTS</div>
                        </div>
                        <div class="flex flex-rowitems-center gap-5 text-right">
                            <div class="relative inline-block text-left" data-headlessui-state="">
                                <div>
                                    <button class="inline-flex   justify-between gap-2 md:gap-6 items-center rounded-full bg-[#8fab48] bg-opacity-80 text-textcolor2  px-2 md:px-6 py-1 font-bold text-xs md:text-base text-black hover:bg-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75" id="headlessui-menu-button-:r9:" type="button" aria-haspopup="menu" aria-expanded="false" data-headlessui-state="">Genre
                                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" color="#080808" height="24" width="24" xmlns="http://www.w3.org/2000/svg" style={{ color: "rgb(8, 8, 8)" }}  ><path d="M7 11h10v2H7zM4 7h16v2H4zm6 8h4v2h-4z"></path></svg></button></div></div>
                            <div class="relative inline-block text-left" data-headlessui-state=""><div>
                                <button class="inline-flex justify-between gap-2 md:gap-6 items-center rounded-full bg-[#8fab48] bg-opacity-80 text-textcolor2  px-2 md:px-6 py-1 font-bold text-xs md:text-base text-black hover:bg-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75" id="headlessui-menu-button-:ra:" type="button" aria-haspopup="menu" aria-expanded="false" data-headlessui-state="">Category
                                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" color="#080808" height="24" width="24" xmlns="http://www.w3.org/2000/svg" style={{ color: "rgb(8, 8, 8)" }}><path d="M7 11h10v2H7zM4 7h16v2H4zm6 8h4v2h-4z"></path></svg></button></div></div><div class="relative inline-block text-left" data-headlessui-state=""><div><button class="inline-flex   justify-between gap-2 md:gap-6 items-center rounded-full bg-[#8fab48] bg-opacity-80 text-textcolor2  px-2 md:px-6 py-1 font-bold text-sm md:text-base text-black hover:bg-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75" id="headlessui-menu-button-:rb:" type="button" aria-haspopup="menu" aria-expanded="false" data-headlessui-state="">Location
                                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" color="#080808" height="24" width="24" xmlns="http://www.w3.org/2000/svg" style={{ color: "rgb(8, 8, 8)" }}><path d="M7 11h10v2H7zM4 7h16v2H4zm6 8h4v2h-4z"></path></svg></button></div></div></div></div>
                    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-8'>
                        {UpcomingCards?.map((movie) => (
                            <div key={movie.id} className="text-white border border-white rounded-lg bg-grey1 space-y-2 p-2 cursor-pointer">
                                <div
                                    className="max-w-sm h-56 sm:max-h-80 bg-cover bg-center bg-no-repeat"
                                    style={{ backgroundImage: `url(${movie.image})` }}
                                ></div>
                                <div className="text-sm sm:text-base font-bold hover:underline hover:text-[#b0d357] px-1 mt-2 line-clamp-1 hover:line-clamp-none">
                                    {movie.title}
                                </div>
                                <div className="flex flex-row items-center space-x-2 hover:text-[#b0d357] cursor-pointer px-1">
                                    <img
                                        src={movie.productionImage}
                                        className="h-8 w-8 rounded-full"
                                        alt={movie.production}
                                    />
                                    <div className="text-xs">{movie.production}</div>
                                </div>
                                <div className="flex flex-row justify-between px-1 pb-1">
                                    <div className="flex items-center">
                                        <div>$</div>
                                        <div className="text-xs md:text-sm">{movie.price}</div>
                                    </div>
                                    <button className="bg-[#b0d357] text-black rounded-full px-4 py-1 font-medium text-xs md:text-sm">
                                        See Details
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default UpcomingProjects