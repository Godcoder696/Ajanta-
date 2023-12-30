import React from 'react'
import { AppState } from '../Context/AppProvider'
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Center, Drawer, DrawerContent, DrawerOverlay, HStack, Input, Link } from '@chakra-ui/react'
import { CloseIcon, SearchIcon } from '@chakra-ui/icons'

export default function NavMobDrawer() {
    const {navDrawer,setNavDrawer}= AppState()
  return (
    
    <Drawer
        isOpen={navDrawer}
        placement='right'
        size="full"
        onClose={()=>{
        setNavDrawer(!navDrawer)
        }}
    >
        <DrawerOverlay/>
        <DrawerContent>
        <CloseIcon cursor={"pointer"} 
            mt={3}
            mr={3}
            alignSelf={"end"} 
            onClick={()=> setNavDrawer(false)}
        />
            <Accordion mt={10}>
                <Link href="/">
                    <AccordionItem 
                        p={6} w={"100%"} bgColor={""}
                        fontSize={"x-large"} fontWeight={"bold"} color={"#184a49"}
                    >
                        HOME
                    </AccordionItem>
                </Link>
                <Link href="/men">
                    <AccordionItem 
                        p={6} w={"100%"} bgColor={""}
                        fontSize={"x-large"} fontWeight={"bold"} color={"#184a49"}
                    >
                        MEN
                    </AccordionItem>
                </Link>
                <Link href="/women">
                    <AccordionItem 
                        p={6} w={"100%"} bgColor={""}
                        fontSize={"x-large"} fontWeight={"bold"} color={"#184a49"}
                    >
                        WOMEN
                    </AccordionItem>
                </Link>
                <Link href="#contactUs">
                    <AccordionItem 
                        p={6} w={"100%"} bgColor={""}
                        fontSize={"x-large"} fontWeight={"bold"} color={"#184a49"}
                        // onClick={()=>setNavDrawer(false)}
                    >
                        CONTACT US
                    </AccordionItem>
                </Link>
            </Accordion>
        </DrawerContent>
    </Drawer>
  )
}
