import { Center, Image } from '@chakra-ui/react';
import React from 'react';
import { AppState } from '../../../Context/AppProvider';

function Card() {
  return (
    <>
        <Center
            w={"100%"}
            minH={{base:"220px",sm:"340px",md:"420px",xl:"470px"}}
        >
            <Center cursor={"pointer"} >
                <Image
                    src={"https://i.pinimg.com/564x/c2/fc/9d/c2fc9d585f744fdc86993f2d062848b1.jpg"}
                    h={{base:"220px", sm: "340px",md:"420px",xl:"470px"}}
                    w={{base:"150px",sm:"200px",md:"300px"}}
                    borderRadius={20}
                />
            </Center>
        </Center>
    </>
  )
}

export default Card
