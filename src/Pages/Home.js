import { Box } from '@chakra-ui/react'

import Slider from './Components/Home/Slider';
import Categories from './Components/Home/Categories';
import BestSeller from './Components/Home/BestSeller';

export default function Home() {

  return (
    // {{base:"200px",md:"300px"}}
    // Wrapper box
    <Box bgColor={"#f1f2f4"}>

      {/* img slider */}
      <Slider/>

      {/* Categories */}
      <Categories/>

      {/* Bestseller grid */}
      <BestSeller/>

    </Box>
  )
}
