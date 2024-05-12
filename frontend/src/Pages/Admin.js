import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import axios from 'axios';
import React, { useState } from 'react'
import Men from './Components/Admin/Men'
import Women from './Components/Admin/Women'
import Slider from './Components/Admin/Slider'
import Featured from './Components/Admin/Featured'
import EditCard from './Components/Admin/EditCard';
// import {v2 as cloudinary} from 'cloudinary';

// cloudinary.config({

// })

function Admin() {
  let [file,setFile]= useState("");
  const onUpload=(e)=>{
    let reader= new FileReader();
    reader.readAsDataURL(e.target.files[0]);

    reader.onload=()=>{
      setFile(reader.result);
    }
    reader.onerror=(error)=>{
      console.log(error);
    }

  }

  const fileUpload=async ()=>{
    try {  
      await axios.post("/all",
        {
          image: file,
          category: "women",
          featured: false,
          tab: 1
        }
      );
      console.log("File uploaded!");
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <input type="file" onChange={onUpload}/>
      <input type="submit" onClick={fileUpload}/>
      {/* <Tabs isFitted variant='enclosed' colorScheme='green'>
        <TabList mb='1em'>
          <Tab>MEN</Tab>
          <Tab>WOMEN</Tab>
          <Tab>FEATURED</Tab>
          <Tab>SLIDER</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Men></Men>
          </TabPanel>
          <TabPanel>
            <Women></Women>
          </TabPanel>
          <TabPanel>
            <Featured></Featured>
          </TabPanel>
          <TabPanel>
            <Slider></Slider>
          </TabPanel>
        </TabPanels>
      </Tabs> */}
    </>
  )
}

export default Admin
