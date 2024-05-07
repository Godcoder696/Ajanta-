import { Box } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import SimpleImageSlider from "react-simple-image-slider";
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

export default function Slider(params) {
  let [height, setHeight]= useState(window.screen.width);

  const handleResize= ()=>{
    setHeight(window.screen.width)
  }

  useEffect(()=>{
    window.addEventListener("resize",handleResize,false)
  },[])
  
  const divStyle = {
    'backgroundSize': 'contain',
    'backgroundRepeat': 'no-repeat',
    'backgroundPosition': 'center',
    'height': height>1000? window.screen.height/2:window.screen.height/3,
  } 
  return (
    <>
      <div className="slide-container">
        <Slide>
          {params.imgArr.map((slideImage, index)=> (
              <div key={index}>
                <div className='divStyle' style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}>
                </div>
              </div>
            ))}
        </Slide>
      </div>
    </>
  )
}