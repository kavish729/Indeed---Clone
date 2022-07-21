import {
  Box,
  Container,
  Heading,
  HStack,
  Flex,
  Image,
  Link,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import {AiFillStar} from 'react-icons/ai';
import{Link as RouterLink} from 'react-router-dom';

const PopularCompanies = () => {
  const { data } = useSelector((state) => state.appReducer);
  return (
    <Container
      maxW="100%"
      margin="50px 0px 50px 0px"
      textAlign="left"
    >
      <Heading size="md" textAlign="left" marginBottom='20px'>
        Popular Companies
      </Heading>
      <SimpleGrid columns={["1", "1", "2", "3", "3", "3"]} gap='50px'>
        {data.map((company) => {
          return (
            
            <Link key={company.id} as={RouterLink} to={`/companies/${company.id}`}>
            <Flex
              
              direction="column"
              gap="10px"
              padding="0px 0px 30px 0px"
              borderBottom={['1px ', '1px', '1px', 'none', 'none','none']} 
              borderColor='gray.200'
              fontSize='.7rem'
            >
              <Flex direction="row">
                <Image
                  src={company.logo}
                  shadow="lg"
                  margin="0px 10px 0px 0px "
                  p="5px"
                  boxSize="50px"
                  borderRadius="10px"
                  />
                <Box>
                  <Heading size="sm">{company.company}</Heading>
                  <Flex direction="row">
                    <HStack color='indigo'><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/></HStack>
                    <Box> {company.reviews} reviews</Box></Flex>
                </Box>
              </Flex>
              <Flex direction="row"  justifyContent='space-between'>
                <Text>Salaries</Text>
                <Text>Questions</Text>
                <Text>Open jobs</Text>
              </Flex>
            </Flex>
                  </Link>
          );
        })}
      </SimpleGrid>
    </Container>
  );
};

export default PopularCompanies;
