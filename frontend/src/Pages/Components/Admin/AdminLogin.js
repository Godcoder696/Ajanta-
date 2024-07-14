import { Box, Button, HStack, Input, Text, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import Logo from '../../../Assets/Logo/Ajanta_Sirsa-removebg.png'
import { UnlockIcon } from '@chakra-ui/icons'
import { redirect, useNavigate } from 'react-router-dom';

function AdminLogin() {
  const [email,setEmail]= useState("");
  const [password, setPassword]= useState();
  const [incorrect,setIncorrect]= useState(false);
  
  const navigate = useNavigate();

  const handleSubmit=()=>{
    if(email==="shivamgoyal2003@gmail.com" && password==="Aj@ntaSirsa789"){
      localStorage.setItem("admin",{email:email});
      window.location.reload();
      setIncorrect(false);
    }
    else{
      setIncorrect(true);
    }
  }

  return (
    <HStack w="100vw" h="100vh" alignItems="center" justifyContent="center" bgColor="#f1f2f4">
      <VStack 
        w={
          {
            "base":"90%", 
            "md":"60%",
            "lg":"40%",
            "xl":"30%"
          }
        } 
        h="60%" bgColor="white" rounded="0.4rem" shadow="md" p={4} spacing={6} justifyContent="space-evenly">
        <Box  h={20} w={20}><img src={Logo} alt="Ajanta Sirsa" /></Box>
        <Text mt={3} fontSize="larger" >Login To Dashboard</Text>
        <VStack w="100%" spacing={-2}>
            <Input mt={5} placeholder='Enter Email' type='email'
              onChange={(e)=>{
                setEmail(e.target.value)
              }}
              value={email}
            />
            <Input mt={5} placeholder='Enter Password' type='password'
              onChange={(e)=>{
                setPassword(e.target.value);
              }}
              value={password}
            />
          {
            incorrect &&
            <Text mt={3} color={"red"} fontWeight={"light"}>**Incorrect credentials**</Text>
          }
        </VStack>
        <Button colorScheme='teal' leftIcon={<UnlockIcon/>} w="100%" onClick={handleSubmit}>
            Login
        </Button>
      </VStack>
    </HStack>
  )
}

export default AdminLogin
