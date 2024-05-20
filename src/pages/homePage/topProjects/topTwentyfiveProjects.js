import React from 'react'
import TopProjects from '../../../component/topProjects'
import {TopTwentyFiveCards} from "../../../constant/JSONdata"
const topTwentyfiveProjects = () => {
  return (
    <TopProjects TOPProjectsCards={TopTwentyFiveCards} number={25} top={"35px"}/>
  )
}

export default topTwentyfiveProjects