import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import axios from 'axios';
import React, { useState } from 'react'
import Men from './Components/Admin/Men'
import Women from './Components/Admin/Women'
import Slider from './Components/Admin/Slider'
import Featured from './Components/Admin/Featured'
import EditCard from './Components/Admin/EditCard';

function Admin() {
  let [file,setFile]= useState("");
  const onUpload=(e)=>{
    console.log(e.target.files[0]);
    let reader= new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload=()=>{
      setFile(reader.result);
      console.log(reader.result);
    }
    reader.onerror=(error)=>{
      console.log(error);
    }
  }

  const fileUpload=async ()=>{
    axios.post("/all",
      {
        
      }
    );
  }
  return (
    <>
      <Tabs isFitted variant='enclosed' colorScheme='green'>
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
      </Tabs>
    </>
  )
}

export default Admin
