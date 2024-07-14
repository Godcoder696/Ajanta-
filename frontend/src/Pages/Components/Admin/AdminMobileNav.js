import { Accordion, AccordionItem, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay } from '@chakra-ui/react'
import React from 'react'

function AdminMobileNav({mobileNav, setMobileNav, setNav}) {
    const nav=["Men","Women","Analytics"];
  return (
    <>
      <Drawer
            isOpen={mobileNav}
            placement='right'
            onClose={()=>{setMobileNav(false)}}
        >
            <DrawerOverlay />
            <DrawerContent>
                <DrawerCloseButton />

                <DrawerBody>
                    <Accordion mt={10}>
                        {
                            nav.map((item, key)=>{
                                return (
                                    <AccordionItem 
                                        p={6} w={"100%"} bgColor={""}
                                        fontSize={"x-large"} fontWeight={"bold"} color={"#184a49"}
                                        key={key}
                                        onClick={()=>{
                                            setNav(key)
                                            setMobileNav(false)
                                        }}
                                    >
                                        {item}
                                    </AccordionItem>
                                )
                            })
                        }
                </Accordion>
                    
                </DrawerBody>

            </DrawerContent>
        </Drawer>
    </>
  )
}

export default AdminMobileNav
