import React from "react"
import Header from "./components/Header"
import Hero from "./components/Hero"
import data from "./data"

export default function(){

  const Data = data.map(item =>{
    return (

      <Hero
      title={item.title}
      location={item.location}
      googleMapsUrl={item.googleMapsUrl}
      start={item.startDate}
      end={item.endDate}
      description={item.description}
      imageUrl={item.imageUrl}
  />
    )
  })


  return(
    <div className="box" >
        <Header/>
       {Data}
    </div>
  )
}