import { Box, Button, Center, Container, Flex, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import {AiFillLike,AiOutlinePicCenter,AiFillCalendar}from 'react-icons/ai'

const CompareInterview = () => {
    let InterviewComponet=({label,logo})=>{
        return(
            <Box margin="10px 0px 20px 0px">
        <Flex gap="10%">
          <Flex w="30% ">
            <Center >
               {logo}
            </Center>
            <Text>{label}</Text>
          </Flex>
          <Flex w="30%">
            <Center >
              {logo}
            </Center>
            <Text>{label}</Text>
          </Flex>
        </Flex>
      </Box>
        );
    }

    return (
        <Container maxW='100%'>
            <Heading>Compare interview information</Heading>
            <Text marginBottom="30px">
            Compare interview process, length and difficulty for Samsung Electronics and Qualcomm.
      </Text>

      <InterviewComponet logo={<AiFillLike/>} label='Favorable experience'/>
      <InterviewComponet logo={<AiOutlinePicCenter/>} label='Medium difficulty'/>
      <InterviewComponet logo={<AiFillCalendar/>} label='Process is about a month'/>
      
      <Flex gap='25%'>
        <Button color='brandColor' variant='outline'>About interviews</Button>
        <Button color='brandColor' variant='outline'>About interviews</Button>
      </Flex>
        </Container>
    );
};

export default CompareInterview;