import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Link, Text } from '@chakra-ui/react'
import React from 'react'

export default function MobFooter() {
    const brands=["Raymond","Reid & Taylor","OCM","Siyaram","Monte Carlo","Oxemberg","J. Hampstead"]
    const oBrands=["Birla Century","Linen Club","Arvind"]
  return (
    <div id='contact-us'>
        <Accordion defaultIndex={[0]} allowMultiple>
            <AccordionItem>
                <h2>
                <AccordionButton p={6}>
                    <Text as="span" flex='1' textAlign='left' 
                        fontSize={"x-large"} fontWeight={"bold"} color={"#184a49"}
                    >
                        BRANDS
                    </Text>
                    <AccordionIcon />
                </AccordionButton>
                </h2>
                <AccordionPanel >
                    {brands.map((item,index)=>{return(<Text fontSize={"large"} key={index} p={3} fontWeight={"medium"}>{item.toUpperCase()}</Text>)})}
                </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
                <h2>
                <AccordionButton p={6}>
                    <Text as="span" flex='1' textAlign='left' 
                        fontSize={"x-large"} fontWeight={"bold"} color={"#184a49"}
                    >
                        OTHERS
                    </Text>
                    <AccordionIcon />
                </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                    {oBrands.map((item,index)=>{return(<Text fontSize={"large"} key={index} p={3} fontWeight={"medium"}>{item.toUpperCase()}</Text>)})}
                </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
                <h2>
                <AccordionButton p={6}>
                    <Text as="span" flex='1' textAlign='left' 
                        fontSize={"x-large"} fontWeight={"bold"} color={"#184a49"}
                    >
                        CONTACT US
                    </Text>
                    <AccordionIcon />
                </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                    <Text p={2} fontSize={"large"} fontWeight={"medium"}>01666-222231</Text>
                    <Text p={2} fontSize={"large"} fontWeight={"medium"}>
                    92543 22231</Text>
                    <Text p={2} fontSize={"large"} fontWeight={"medium"}>Ajantasirsa@gmail.com</Text>
                </AccordionPanel>
            </AccordionItem>
            <AccordionItem p={6}>
                <Link textAlign='left'  
                    target='_blank'
                    href="https://maps.app.goo.gl/JYJ2PmfBrctkfzeN7"
                    fontSize={"x-large"} fontWeight={"bold"} color={"#184a49"}
                    w={"100%"}
                >
                    LOCATE US
                </Link>
            </AccordionItem>
        </Accordion>
    </div>
  )
}
