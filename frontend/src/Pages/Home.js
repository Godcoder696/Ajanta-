import { Box } from '@chakra-ui/react'

import Slider from './Components/Home/Slider';
import Categories from './Components/Home/Categories';
import BestSeller from './Components/Home/BestSeller';
import Marque from './Components/Home/Marque';
import Slider1 from '../Assets/Sliders/Slider1.tif';
import Slider2 from '../Assets/Sliders/Slider2.jpg';
import Slider3 from '../Assets/Sliders/Slider3.jpg';
import Slider4 from '../Assets/Sliders/Slider4.jpg';
import Slider5 from '../Assets/Sliders/Slider5.jpg';

export default function Home() {
  const imgArr=[
    {url: Slider1},
    {url: Slider2},
    {url: Slider3},
    {url: Slider4},
    {url: Slider5},
  ]

  return (
    // {{base:"200px",md:"300px"}}
    // Wrapper box
    <Box bgColor={"#f1f2f4"}>

      {/* img slider */}
      <Slider imgArr={imgArr}/>

      {/* Categories */}
      <Categories/>

      {/* Bestseller grid */}
      <BestSeller/>

      {/* Marque animation */}
      <Marque/>

    </Box>
  )
}
