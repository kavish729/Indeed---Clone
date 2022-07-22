import React from "react";
import { Heading,Box, Text,FormLabel,Flex,Divider, Container } from "@chakra-ui/react";
const CompareInformation = () => {
  return (
    <Container maxW='100%'>
      <Heading >Compare company information</Heading>
      <Text marginBottom='20px'>
        Compare revenue, industry and employee numbers for Samsung Electronics
        and Qualcomm.
      </Text>
     <Box margin='10px 0px 20px 0px'>
     <FormLabel>Industry</FormLabel>
      <Divider />
      <Flex justifyContent='space-between'>
        <Text>Manufacturing</Text>
        <Text>Information Technology</Text>
      </Flex>
     </Box>
     <Box margin='10px 0px 20px 0px'>
     <FormLabel>Revenue</FormLabel>
      <Divider />
      <Flex justifyContent='space-between'>
        <Text>more than $1TCr</Text>
        <Text>more than $1TCr</Text>
      </Flex>
     </Box>
     <Box margin='10px 0px 20px 0px'>
     <FormLabel>Number of Employees</FormLabel>
      <Divider />
      <Flex justifyContent='space-between'>
        <Text>more than 10,000</Text>
        <Text>more than 10,000</Text>
      </Flex>
     </Box>
     <Box margin='10px 0px 20px 0px'>
     <FormLabel>Headquarters</FormLabel>
      <Divider />
      <Flex justifyContent='space-between'>
        <Text>Suwon</Text>
        <Text>San Diego California, United States</Text>
      </Flex>
     </Box>
     
     
    </Container>
  );
};

export default CompareInformation;
