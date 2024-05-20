import React from 'react'
import { ProductionCards } from "../../../constant/JSONdata"
const ProductionHouses = () => {
    return (
        <div className='bg-[#171717] '>
            <div className='xl:container xl:mx-auto'>
                <div className=' pt-12 pb-12 flex flex-col space-y-8 px-4 md:px-12 xl:px-24'>
                    <div class="flex justify-between items-center">
                        <h1 class="font-bold text-3xl text-white">
                            <span class="text-[#b0d357]">Prouction</span> Houses</h1></div>
                    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
                        {ProductionCards.map((movie) => (
                            <div key={movie.id} className="bg-[#080808] cursor-pointer rounded-md">
                                <div
                                    className="max-w-sm h-44 bg-cover bg-center bg-no-repeat"
                                    style={{ backgroundImage: `url(${movie.image})` }}
                                ></div>
                                <div className="bg-[#080808] rounded-b-md text-white text-sm lg:text-xl font-bold py-4 px-8">
                                    {movie.production}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductionHouses