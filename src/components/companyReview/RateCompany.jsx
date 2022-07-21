import {  Center, Container, Heading, HStack, Icon } from "@chakra-ui/react";
import React from "react";
import { AiOutlineStar } from "react-icons/ai";
import { GiChecklist } from "react-icons/gi";
import {Link} from "react-router-dom";

const RateCompany = ({display}) => {
  return (
    <Container display={['none','none','none','block','block']} marginTop='20px' borderRadius="10px" maxW="100%" padding="30px" bg="ratecompany">
      <Center gap='20px'>
        <Icon fontSize="30px">
          <GiChecklist />
        </Icon>
        <Heading size="md">Rate your recent company:</Heading>{" "}
       <Link to='/employerquestions'> <HStack bg="white" padding="10px" borderRadius="10px" fontSize="20px">
          <AiOutlineStar />
          <AiOutlineStar />
          <AiOutlineStar />
          <AiOutlineStar />
          <AiOutlineStar />
        </HStack></Link>
      </Center>
    </Container>
  );
};

export default RateCompany;
