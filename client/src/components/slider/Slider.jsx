import React, { useState } from 'react';
import "./slider.scss";
import ArrowLeftOutlinedIcon from '@mui/icons-material/ArrowLeftOutlined';
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';
import { sliderItems } from "../../data";


const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0); 
    const handleClick = (direction) =>{
        if(direction==="left"){
            setSlideIndex(slideIndex===0?2:slideIndex-1);
        }
        if(direction==="right"){
            setSlideIndex(slideIndex===2?0:slideIndex+1);
        }
    }

    return (
        <div className="slide__container">
            <div className="arrow" style={{left:"10px"}} direction="left" onClick={() => handleClick("left")}>
                <ArrowLeftOutlinedIcon className="slideIcon" />
            </div>
            <div className="slide__wrapper" style={{transform:`translateX(${-100*slideIndex}vw)`}}>
                {sliderItems.map((item)=>(
                    <div className="slide" style={{background:`#${item.bg}`}} key={item.id}>
                        <div className="imageContainer">
                            <img src={item.img} alt="slide" />
                        </div>
                        <div className="infoContainer">
                            <h1 className="title">{item.title}</h1>
                            <p className="desc">{item.desc}</p>
                            <button className="btn">SHOP NOW</button>
                        </div>
                    </div>
                ))}
            </div>
            <div className="arrow" style={{right:"10px"}} direction="right" onClick={() => handleClick("right")}>
                <ArrowRightOutlinedIcon className="slideIcon" />
            </div>
        </div>
    )
}

export default Slider