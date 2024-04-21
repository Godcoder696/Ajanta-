import { CloseIcon } from '@chakra-ui/icons'
import { Accordion, AccordionItem, Drawer, DrawerContent, DrawerOverlay, Link } from '@chakra-ui/react'
import React from 'react'
import { AppState } from '../Context/AppProvider'

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
                <a href="#contact-us">
                    <AccordionItem 
                        p={6} w={"100%"} bgColor={""}
                        fontSize={"x-large"} fontWeight={"bold"} color={"#184a49"}
                        onClick={()=>setNavDrawer(false)}
                    >
                        CONTACT US
                    </AccordionItem>
                </a>
            </Accordion>
        </DrawerContent>
    </Drawer>
  )
}
