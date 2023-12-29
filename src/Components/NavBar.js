// chakra ui imps
import {
    HStack,
    Input,
    Image,
    Button,
    Box,
    Center,
    Drawer,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    DrawerHeader,
    DrawerBody,
    DrawerFooter,
    Text
} from '@chakra-ui/react'

// react-router-dom imp
import {Link} from 'react-router-dom'

// icons
import {CloseIcon, HamburgerIcon, SearchIcon} from '@chakra-ui/icons';

// logo
import AjantaBlack from '../Assets/Ajanta Sirsa.png';

// hooks
import { useState } from 'react';
import SearchElements from './SearchElements';

export default function NavBar() {

    // nav state: which button pressed
    const [navState,setNavState]= useState(0)

    const [searchDrawer,setSearchDrawer]= useState(false);

    // navBar items
    const navItems=["home","men","women"]

    // shadow effect for navbar on-scroll
    window.addEventListener('scroll',(e)=>{
        if(window.scrollY>0){
            const navBar= document.getElementById('navBar')
            navBar.style.boxShadow="1px 1px 20px lightgrey"
            navBar.style.position="fixed"
            navBar.style.marginTop="-4px"
        }
        if(window.scrollY===0){
            const navBar= document.getElementById('navBar')
            navBar.style.boxShadow="none"
            navBar.style.position="initial"
            navBar.style.marginTop="4px"
        }
        
    })

  return (
    <>
        {/* NavBar */}
        <HStack id='navBar'
            bgColor={"white"} 
            p={{base:3,md:2}}
            w="100%" 
            justify={{xl:"space-evenly",md:'space-around',base:"space-between"}}
            zIndex={1}
        >

            {/* Logo */}

            <Link to={"/"} boxSize={{base:10,sm:11,md:12,lg:13}}>
                <Image src={AjantaBlack} alt='Ajanta' boxSize={12}/>
            </Link>

            <HStack 
                w={{base:"30vw",sm:"32vw",md:"33vw",xl:"37vw"}} 
                justifyContent={"space-evenly"}
                display={{base:'none',sm:'none',md:'flex'}}
            >
                {
                    // NavBar Elements
                    navItems.map((item,index)=>{
                        let a= navState===index?true:false;
                        return(
                            <Link to={item==="home"?"/":`/${item}`} key={index}>
                                <Button 
                                    variant={"ghost"} 
                                    colorScheme={a?'teal':'gray'} 
                                    onClick={()=>setNavState(index)}
                                    fontSize={{base:"10",sm:"11",md:"13",lg:"16"}}
                                >
                                    {item.toUpperCase()}
                                </Button>
                            </Link>
                        )
                    })
                }
                <a href={'#contactUs'} >
                    <Button 
                        variant={"ghost"} 
                        colorScheme={navState===3?'teal':'gray'} 
                        onClick={()=>setNavState(3)}
                        fontSize={{base:"10",sm:"11",md:"13",lg:"16"}}
                    >
                        CONTACT US
                    </Button>
                </a>
            </HStack>

            <HStack 
                bgColor={"#eaeaea"} 
                h={"12"} 
                borderRadius={10} 
                justify={"space-evenly"} 
                w={{base:"24vw",sm:"26vw",md:"28vw",xl:"30vw"}}
                display={{base:'none',md:'flex'}}
                cursor={"pointer"}
                onClick={()=>setSearchDrawer(true)}
            >
                <SearchIcon boxSize={5}ml={3}/>
                <Input
                    h={"70%"} 
                    w={{base:"21vw",sm:"22vw",md:"23vw",xl:"25vw"}} 
                    placeholder='Search clothes'
                    cursor={"pointer"}
                onClick={()=>setSearchDrawer(true)}
                />
            </HStack>
            
            <HStack w={20} display={{base:'flex',md:'none'}}justify="space-evenly">
                <SearchIcon boxSize={5}ml={{md:3}} cursor={"pointer"} 
                onClick={()=>setSearchDrawer(true)}/>
                <HamburgerIcon boxSize={7} cursor={"pointer"}/>
            </HStack>
        </HStack>
        <Drawer
            isOpen={searchDrawer}
            placement='bottom'
            size={"full"}
        >
            <DrawerOverlay />
            <DrawerContent>
                <CloseIcon cursor={"pointer"} 
                    mt={3}
                    mr={3}
                    alignSelf={"end"} 
                    onClick={()=> setSearchDrawer(false)}
                />
                <Center >
                    <HStack 
                        bgColor={"#eaeaea"} 
                        // {{base:12}}
                        h={"14"} 
                        borderRadius={10} 
                        justify={"space-evenly"} 
                        w={{base:"260px",sm:"280px",md:"340px",xl:"380px"}}
                    >
                        <SearchIcon boxSize={5}ml={3}/>
                        <Input
                            h={"80%"} 
                            w={{base:"200px",sm:"220px",md:"300px",xl:"320px"}} 
                            placeholder='Search clothes'
                        />
                    </HStack>
                </Center>
                <SearchElements/>
            </DrawerContent>
        </Drawer>
    </>
  )
}