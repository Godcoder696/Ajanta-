    // chakra ui imps
import {
    Button,
    HStack,
    Image
} from '@chakra-ui/react';

// react-router-dom imp
import { Link } from 'react-router-dom';

// icons
import { HamburgerIcon, SearchIcon } from '@chakra-ui/icons';

// logo
import AjantaBlack from '../Assets/Logo/Ajanta Sirsa.png';

// hooks
import { useEffect } from 'react';

import { AppState } from '../Context/AppProvider';
import NavMobDrawer from './NavMobDrawer';


export default function NavBar() {

    // nav state: which button pressed
    const {navState,setNavState}= AppState()

    // navBar items
    const navItems=["home","about us","men","women"]

    const {searchDrawer,setSearchDrawer}= AppState()
    const {setNavDrawer,NavDrawer}= AppState()

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
    useEffect(()=>{
        setSearchDrawer(searchDrawer)
    },[searchDrawer])

  return (
    <>
        {/* NavBar */}
        <HStack id='navBar'
            bgColor={"white"} 
            p={{base:3,md:2}}
            w="100%" 
            justify={{base:"space-between"}}
            zIndex={1}
        >

            {/* Logo */}

            <Link to={"/"} boxSize={{base:10,sm:11,md:12,lg:13}} >
                <Image src={AjantaBlack} alt='Ajanta' boxSize={12} ml={2}/>
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
            </HStack>
            
            <HStack w={20} display={{base:'flex',md:'none'}}justify="space-evenly">
                <SearchIcon boxSize={5}ml={{md:3}} cursor={"pointer"} 
                onClick={()=>setSearchDrawer(true)}/>
                <HamburgerIcon boxSize={7} cursor={"pointer"} onClick={()=>setNavDrawer(true)}/>
            </HStack>
        </HStack>

        <NavMobDrawer></NavMobDrawer>
    </>
  )
}