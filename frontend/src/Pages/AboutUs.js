import { Box, Text } from '@chakra-ui/react';
import React from 'react';
import About1 from '../Assets/About/About1.jpg';
import About4 from '../Assets/About/About4.jpg';
import Slider from './Components/Home/Slider';

export default function AboutUs() {
  const imgArr=[
    {url:About1},
    {url:About4},
    // {url:About4},
  ]

  return (
    <Box>
      <Slider imgArr={imgArr}></Slider>
      <Box px={10} py={6}>
        <Text fontSize={"30px"} color='#2c7a7b' fontWeight={"bold"} >
          About Us
        </Text>
        <br />
        <p>
          In 1970 the fabric store was started by Sh. Naresh Chand in Sirsa in a very traditional manner in the city's PNB Street, Rori Bazaar. This fabric store featured products like 'Basic Suiting-Shirting' and Ladies Salwar Suits. 
        </p>
        <br />
        <p>
          In those days, retailers hardly thought anything about investment and product category. Often got good sales even with a very small product range. But from that time onwards we worked from the counter. Our store in Sirsa was the first counter-functioning fabric retail store 
        </p><br/>
        <p>
          Three years later, we doubled the size of the store and expanded the product range and variety in fabrics. As far as factors like bill size, turnover, stock rotation are concerned, due to very traditional way of working, we call it a matter of guesswork and experience only. Yes, it was certain guess and experience was never wrong.
        </p>
        <br/>
        <Text fontSize={20} color='#2c7a7b' fontWeight={"bold"}>
          <u>Store and Category Expansion</u>
        </Text>
        <br />
        <p>
          After operating in one place for 30 years, we took complete control of its core category (Suiting-shirting). After this, in the year 2001, we decided to expand the category as well as store. Due to this plan, a new store was built nearby. Today this store is approximately 7000 sqft. As the store area increased, apart from varieties of branded suiting and shirting, space was also given to products like garments and Indian ethnic
        </p><br/>
        <p>
          We believe that with changing times, there has been drastic change in customer preferences. Due to this, the need of the hour has become to change the methods and categories of retail. Keeping this in mind, each product in the new store has been given space on a different floor. In this, only branded products were given place from the beginning. The positive trends motivated us to expand and the expansion also yielded good results. 
        </p><br/>
        <Text fontSize={20} color='#2c7a7b' fontWeight={"bold"}>
          <u>Store Layout & Product Categories</u>
        </Text>
        <br />
        <p>
          In this three-storey store, space has been given to Suiting, Shirting, Kurta Cloth and Semi stitch and unstitched Ladies Suits on the ground floor. In Suiting-Shirting, we are the authorized dealer and top sale awarded dealer of all the major brands like Raymond, Reid & Taylor, OCM, Siyaram. At the same time, all major brands have been given place in women's wear
        </p><br/>
        <p>
          The first floor is entirely kept for RMG in multi brands including Monte Carlo, Oxemberg, J. Hampstead, Blue Jay Party wears etc. In this, almost all types of balanced product mix can be seen like Coat Pant, Blazer, Formal Shirts, Casuals, Denims, Indian ethnic, Jackets, Pullovers etc in men’s wear and Cardigans, Shawls, Kurtis, Suits, Dresses in women wear
        </p><br/>
      </Box>
    </Box>
  )
}
