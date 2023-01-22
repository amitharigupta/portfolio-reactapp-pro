import React from 'react'
import timelines from "../assets/timelines.json"

const Experience = () => {
  return (
    <div id="experiences">
        <div className="timelineBox">
           {
            timelines.map((i) => {
              return <TimeLineItem heading={i.heading} description={i.description} timeline={i.timeline} index={i.id}  />
            })
           }
        </div>
    </div>
  )
}

const TimeLineItem = ({ heading, description, timeline, index }) => {
  return <div className={`timelineItem ${index % 2 === 0 ? "leftTimeLine" : "rightTimeLine"} ` }>
    <div>
      <h2>{heading}</h2>
      <p>{description}</p>
      <p>{timeline}</p>
    </div>
  </div>
}

export default Experience