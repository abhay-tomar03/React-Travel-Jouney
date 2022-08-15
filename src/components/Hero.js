import React from "react"

function Hero(props){
    return(
        <>
        <div className="hero">
                        <div className="card--image ">
                        <img src={props.imageUrl} className="card--image" alt=" " />
                        </div>
                        <div className="card--body ">
                                <div className="source">
                                <img src="https://www.freeiconspng.com/thumbs/location-icon-png/red-location-map-pin-icon-5.png" alt=" " className="location-logo"/>
                                <span className="country">{props.location}</span>
                                <a href={props.googleMapsUrl} className="view">view on google maps</a> 
                                </div>
                                <div className="card--content">
                                        <h1 className="place">{props.title}</h1>
                                        <h4 className="time">{props.start} - {props.end}</h4>
                                        <p className="content">{props.description}</p>
                                </div>
                        </div>
                </div>
                <hr className="line"/>
                </>
        )
}

export default Hero