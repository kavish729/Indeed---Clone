import React from "react";
import {
  Heading,
  Box,
  Flex,
  Text,
  FormLabel,
  Center,
  Container,
  Button,
} from "@chakra-ui/react";
import { AiFillStar } from "react-icons/ai";
import { FaUserAlt, FaUserCircle } from "react-icons/fa";
const CompareRating = () => {
  let RatingComponent = ({ label, s1, s2 }) => {
    return (
      <Box margin="30px 0px 20px 0px">
        <Flex gap="10%">
          <Flex w="30% ">
            <Center width="50px">
              <Text>{s1}</Text> <AiFillStar color="purple" />{" "}
            </Center>
            <Text>{label}</Text>
          </Flex>
          <Flex w="30%">
            <Center borderRadius="15" w="50px" bg="pink.100">
              <Text>{s2}</Text> <AiFillStar color="purple" />{" "}
            </Center>
            <Text>{label}</Text>
          </Flex>
        </Flex>
      </Box>
    );
  };

  let TileComponent = ({ title, p1, p2, d1, d2 }) => {
    return (
      <Box margin="50px 0px 20px 0px">
        <Heading size="lg" marginBottom="50px">
          {title}
        </Heading>
        <Flex gap="20%">
          <Box
            border="1px solid gray"
            borderRadius="10px"
            padding="10px"
            width="50%"
          >
            {title === "CEO approval" ? (
              <Center
                borderRadius="15"
                bg="gray.100"
                width="80px"
                marginTop="-15%"
                padding="30px 20px 0px 20px"
              >
                <FaUserAlt fontSize="50px" color="gray" />{" "}
              </Center>
            ) : (
              ""
            )}
            <Flex>
              <Heading margin="10px 10px 0px 10px" size="lg">
                {p1}
              </Heading>
            </Flex>
            <Text width="100%">{d1}</Text>
          </Box>
          <Box
            border="1px solid gray"
            borderRadius="10px"
            padding="10px"
            width="50%"
          >
            {title === "CEO approval" ? (
              <Center
                borderRadius="15"
                bg="gray.100"
                width="80px"
                marginTop="-15%"
                padding="30px 20px 0px 20px"
              >
                <FaUserAlt fontSize="50px" color="gray" />{" "}
              </Center>
            ) : (
              ""
            )}
            <Flex>
              <Heading margin="10px 10px 0px 10px" size="lg">
                {p2}
              </Heading>
            </Flex>
            <Text width="100%">{d2}</Text>
          </Box>
        </Flex>
      </Box>
    );
  };

  let ReviewsComponent = () => {
    return (
      <Flex gap="20%" padding='10px 0px 20px 0px '>
        <Box>
          <Flex padding='0px 0px 5px 0px '>
           <Center> <Heading  fontSize="sm">4.0</Heading> <AiFillStar color="purple" />
            <Text fontSize="sm">on 20 July 2022</Text></Center>
          </Flex >
          <Heading padding='0px 0px 10px 0px ' fontSize="md">Competitive and Learning</Heading>
          <Flex fontSize="10px" padding='0px 0px 5px 0px '>
            <FaUserCircle />
            <Text>
              Software Development Engineer Intern(Current Employee) - Chennai,
              Tamil Nadu
            </Text>
          </Flex>
          <Text>
            Can learn lot in short span of time.Intern Period was 4 months.Had
            mentors to guide work every day and learnt to use lot of
            Technologies in short span of time.They treat Interns as Employees
            and respect.
          </Text>
        </Box>
        <Box>
          <Flex padding='0px 0px 5px 0px '>
           <Center> <Heading  fontSize="sm">4.0</Heading> <AiFillStar color="purple" />
            <Text fontSize="sm">on 20 July 2022</Text></Center>
          </Flex >
          <Heading padding='0px 0px 10px 0px ' fontSize="md">Competitive and Learning</Heading>
          <Flex fontSize="10px" padding='0px 0px 5px 0px '>
            <FaUserCircle />
            <Text>
              Software Development Engineer Intern(Current Employee) - Chennai,
              Tamil Nadu
            </Text>
          </Flex>
          <Text>
            Can learn lot in short span of time.Intern Period was 4 months.Had
            mentors to guide work every day and learnt to use lot of
            Technologies in short span of time.They treat Interns as Employees
            and respect.
          </Text>
        </Box>
      </Flex>
    );
  };

  return (
    <Container maxW="100%" margin='0px 0px 50px 0px'>
      <Heading>Compare company ratings</Heading>
      <Text marginBottom="30px">
        Compare management, culture and compensation ratings for Samsung
        Electronics and Qualcomm.
      </Text>
      <RatingComponent label="Overall Rating" s1="4.0" s2="4.1" />
      <RatingComponent label="Work/life balance" s1="3.6" s2="3.8" />
      <RatingComponent label="Compensation and benefits" s1="3.9" s2="4.0" />
      <RatingComponent label="Job security and advancement" s1="3.5" s2="3.5" />
      <RatingComponent label="Management" s1="3.5" s2="3.5" />
      <RatingComponent label="Culture" s1="3.7" s2="3.8" />

      <TileComponent
        title="CEO approval"
        p1="81%"
        p2="79%"
        d1="approve of Kim, Ki Nam; Kim, Hyun Suk; Koh, Dong Jin's performance"
        d2="approve of Cristiano Amon, President and CEO's performance"
      />
      <TileComponent
        title="Salary satisfaction"
        p1="74%"
        p2="75%"
        d1="think they are paid fairly at Samsung Electronics"
        d2="think they are paid fairly at Qualcomm"
      />
      <Flex gap="10%" marginTop="50px" marginBottom="20px">
        <Heading>Samsung Electronics reviews</Heading>
        <Heading>Qualcomm reviews</Heading>
      </Flex>
      <ReviewsComponent />
      <ReviewsComponent />
      <ReviewsComponent />
      <ReviewsComponent />
      <ReviewsComponent />
      <Flex gap='50%'>
        <Button color='brandColor'size='lg' variant='outline'>See all reviews</Button>
        <Button color='brandColor' size='lg' variant='outline'>See all reviews</Button>
      </Flex>
    </Container>
  );
};

export default CompareRating;
