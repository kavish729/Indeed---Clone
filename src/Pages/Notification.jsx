import { Box, Button, Container, Flex, Heading, Image } from '@chakra-ui/react';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import NotifyImage  from '../images/notification.png';
const Notification = () => {
   const navigate = useNavigate();
   const buttonHandler = () => {
     navigate('/', { replace: true });
   };
  return (
    <Box marginTop="-27px">
      <Container maxW="100%" backgroundColor="#f3f2f1">
        <Flex paddingTop="20px">
          <Box marginLeft="300px" marginTop="100px" h="700px">
            <Box backgroundColor="white" w="800px">
              <Image marginLeft="40%" width="180px" src={NotifyImage} />
              <Heading textAlign="center" fontSize="25px" padding="15px">
                Nothing right now. Check back later!
              </Heading>
              <Heading
                marginLeft="25%"
                w="50%"
                textAlign="center"
                fontSize="15px"
                fontWeight="smaller"
                padding="15px"
              >
                This is where we’ll notify you about your job applications and
                other useful information to help you with your job search.
              </Heading>
              <Button
                onClick={buttonHandler}
                marginLeft="32%"
                marginBottom="100px"
                w="300px"
                backgroundColor="#2557a7"
                color="#FFFFFF"
                _hover={{ color: 'white', backgroundColor: '#103673' }}
              >
                Find Jobs
              </Button>
            </Box>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
}

export default Notification