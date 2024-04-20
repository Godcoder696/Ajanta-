import { Box } from '@chakra-ui/react'

import Slider from './Components/Home/Slider';
import Categories from './Components/Home/Categories';
import BestSeller from './Components/Home/BestSeller';
import Marque from './Components/Home/Marque';

export default function Home() {
  const imgArr=[
    {url:"https://i.pinimg.com/originals/d0/78/70/d078705c172a131d88c67bd19986172d.jpg"},
    {url:"https://i.pinimg.com/originals/da/99/ce/da99ce38482fb78692583d255a1de64d.jpg"},
    {url:"https://i.pinimg.com/originals/f3/66/6c/f3666c5ad466a64d0a64fa07debcdd3d.jpg"},
    {url:"https://i.pinimg.com/originals/d0/78/70/d078705c172a131d88c67bd19986172d.jpg"},
    {url:"https://i.pinimg.com/originals/da/99/ce/da99ce38482fb78692583d255a1de64d.jpg"},
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
