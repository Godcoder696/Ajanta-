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
    {url: "https://assets.gqindia.com/photos/610a86d93c2393622e230912/16:9/w_1920,c_limit/top-image-03-6.jpg"},
    {url: "https://i.pinimg.com/564x/1e/06/8f/1e068ff17384ceab924508e86a57ac6b.jpg"},
    {url: "https://qph.fs.quoracdn.net/main-qimg-16d624f1513d8be38b37149c3a6d2112"},
    {url: "https://www.lisaadelhi.com/wp-content/uploads/2016/08/lisaa-bridal.jpg"},
    // {url: Slider5},
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
