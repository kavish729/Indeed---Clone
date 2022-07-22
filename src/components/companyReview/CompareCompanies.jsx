import {
  Box,
  Center,
  Container,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Link,
  Text,
} from "@chakra-ui/react";
import React from "react";
import{Link as RouteLink} from 'react-router-dom';
import { AiFillStar } from "react-icons/ai";
import { useSelector } from "react-redux";


const CompareCompanies = () => {
  const { data } = useSelector((state) => state.appReducer);
  return (
    <Container maxW='100%' >
      <Heading size="md" marginBottom="20px">
        Compare working at
      </Heading>
      <SimpleGrid columns={["1", "1", "1", "2", "2"]} gap="10px">
        {data.map((company) => {
          return (
          <Link as={RouteLink} to='/comparecompanies' key={company.id}> <Flex
              key={company.id}
              justifyContent="space-evenly"
              padding="20px"
              border="1px solid"
              borderRadius="10px"
              borderColor="gray.300"
              textAlign="center"
            >
              <Box>
                <Image
                  src={company.logo}
                  shadow="lg"
                  p="5px"
                  margin="auto"
                  boxSize="50px"
                  borderRadius="10px"
                />
                <Heading size="sm">{company.company}</Heading>
                <Box
                  justifyContent="space-between"
                  display={["block", "block", "flex", "flex", "flex"]}
                >
                  <Heading size="sm" display="flex">
                    <Text>{company.ratings}.0</Text>
                    <AiFillStar color="indigo" />
                  </Heading>

                  <Text>{company.reviews} reviews</Text>
                </Box>
              </Box>

              <Center margin="5px">
                <Text>Vs</Text>
              </Center>
              <Box>
                <Image
                  src={company.logo}
                  shadow="lg"
                  p="5px"
                  margin="auto"
                  boxSize="50px"
                  borderRadius="10px"
                />
                <Heading size="sm">{company.company}</Heading>
                <Box
                  justifyContent="space-between"
                  display={["block", "block", "flex", "flex", "flex"]}
                >
                  <Heading size="sm" display="flex">
                    <Text>{company.ratings}.0</Text>
                    <AiFillStar color="indigo" />
                  </Heading>

                  <Text>{company.reviews} reviews</Text>
                </Box>
              </Box>
            </Flex></Link>
          );
        })}
      </SimpleGrid>
    </Container>
  );
};

export default CompareCompanies;
