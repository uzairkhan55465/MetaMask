import React from 'react'
import TopProjects from '../../../component/topProjects'
import {TOPFifteenCards} from "../../../constant/JSONdata"
const topFifteenProjects = () => {
  return (
    <TopProjects TOPProjectsCards={TOPFifteenCards} number={15} top={"55px"}/>
  )
}

export default topFifteenProjects