import React from 'react'
import TopProjects from '../../../component/topProjects'
import { TOPFiveCards } from "../../../constant/JSONdata"
const topFiveProjects = () => {
    return (
        <TopProjects TOPProjectsCards={TOPFiveCards} number={5} top={"55px"}/>
    )
}

export default topFiveProjects