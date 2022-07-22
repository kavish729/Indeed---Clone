import React from "react";
import {
  Heading,
  Text,
  Flex,
  Image,
  Box,
  HStack,
  Center,
  Button,
  Container,
} from "@chakra-ui/react";
import { AiFillStar } from "react-icons/ai";
import { useSelector } from "react-redux";
import { FaBalanceScaleRight } from "react-icons/fa";
const CompareHeader = () => {
  const { data } = useSelector((state) => state.appReducer);
  const company = data.find((c) => c.id == 6);
  return (
    <Container maxW='100%' margin='10px 0px 50px 0px'>
      <Flex gap='10px'>
        <Box>
          <Heading size="lg" color="gray">
            Compare working at
          </Heading>
          <Heading size="2xl" margin='10px 0px 20px 0px' >Samsung Electronics vs Qualcomm</Heading>
          <Text fontSize="lg">
            Compare company reviews, salaries and ratings to find out if Samsung
            Electronics or Qualcomm is right for you. Samsung Electronics is
            most highly rated for Compensation and benefits and Qualcomm is most
            highly rated for Compensation and benefits.
          </Text>
          <Text fontSize="lg" margin='20px 0px 30px 0px'>
            Learn more, read reviews and see open jobs
          </Text>
        </Box>
        <Box color='brandColor'>
          <FaBalanceScaleRight margin="0px" padding="0px" fontSize="300px"  />
        </Box>
      </Flex>
      <Flex gap="20px">
        <Flex
          display={["block", "block", "block", "flex", "flex"]}
          shadow={["none", "none", "none", "lg", "lg"]}
          borderRadius="10px"
          padding="20px 10px 20px 10px"
        >
          <Flex margin="5px">
            <Image
              src={company.logo}
              shadow="lg"
              margin="0px 10px 0px 0px "
              p="5px"
              boxSize="80px"
              borderRadius="10px"
            />
            <Box>
              <Heading size="md">{company.company}</Heading>

              <HStack color="indigo">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
              </HStack>
              <Box> {company.reviews} reviews</Box>
            </Box>
          </Flex>
          <Center justifyContent={["left", "left", "left", "center", "center"]}>
            <Button margin="5px" size="lg" variant="outline" color="brandColor">
              change
            </Button>
          </Center>
        </Flex>
        <Flex
          display={["block", "block", "block", "flex", "flex"]}
          shadow={["none", "none", "none", "lg", "lg"]}
          borderRadius="10px"
          padding="20px 10px 20px 10px"
        >
          <Flex margin="5px">
            <Image
              src={company.logo}
              shadow="lg"
              margin="0px 10px 0px 0px "
              p="5px"
              boxSize="80px"
              borderRadius="10px"
            />
            <Box>
              <Heading size="md">{company.company}</Heading>

              <HStack color="indigo">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
              </HStack>
              <Box> {company.reviews} reviews</Box>
            </Box>
          </Flex>
          <Center justifyContent={["left", "left", "left", "center", "center"]}>
            <Button margin="5px" size="lg" variant="outline" color="brandColor">
              change
            </Button>
          </Center>
        </Flex>
      </Flex>
    </Container>
  );
};

export default CompareHeader;
