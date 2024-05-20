import React from 'react'
import HeroSection from "./heroSection"
import MovieCards from './movieCards'
import RecenetProjects from './recentProjects'
import TopProjects from './topProjects'
import UpcomingProjects from './upcomingProjects'
import ProductionHouses from './productionhouses'
import BecpmePArtners from './partner'

function index() {
    return (
        <>
            <HeroSection />
            <MovieCards />
            <RecenetProjects />
            <TopProjects />
            <UpcomingProjects />
            <ProductionHouses />
            <BecpmePArtners />
          
        </>
    )
}

export default index