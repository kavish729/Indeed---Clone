import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  HStack,
  Image,
  Spacer,
} from "@chakra-ui/react";
import React from "react";
import { AiFillStar } from "react-icons/ai";
import { useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";

const LandingHeader = ({ id }) => {
  const { data } = useSelector((state) => state.appReducer);
  const company = data.find((company) => company.id == id);
  return (
    <Container maxW="100%">
      <Image src="https://networkbuilders.intel.com/images/nb/Tech_mahindra_banner.png" />
      <Box display={["block", "block", "flex", "flex", "flex"]}>
        <Box>
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
                <HStack color="indigo">
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                </HStack>
                <Box> {company.reviews} reviews</Box>
              </Flex>
            </Box>
          </Flex>
        </Box>
        <Spacer />
        <Box>
          <Button bg="brandColor" color="white">
            Follow
          </Button>
          <Button variant="outline" color="brandColor">
            Write a review
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default LandingHeader;
