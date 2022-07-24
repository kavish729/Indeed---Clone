import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Image,
  Select,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import Messages from '../images/message.png';
import Archive from '../images/Archive.png';
import Spam from '../images/spam.png';
import { useNavigate } from 'react-router-dom';

const Message = () => {
  const [currentValue, setCurrentValue] = useState(0);
  const navigate = useNavigate();
  const buttonHandler = () => {
    navigate('/', { replace: true });
  };
  console.log('Current Value', currentValue);
  return (
    <Box marginTop="-27px">
      <Container maxW="100%" backgroundColor="#f3f2f1">
        <Flex paddingTop="20px">
          <Box h="800" w="35%" marginLeft="50px">
            <Box
              h="800"
              w="100%"
              border="1px solid rgba(134, 134, 134, 0.281)"
              borderRadius="10px"
              backgroundColor="white"
            >
              <Heading fontSize="20px" padding="15px">
                Messages
              </Heading>
              <Select
                border="1px solid black"
                padding="10px"
                onClick={(e) => {
                  setCurrentValue(e.target.value);
                }}
              >
                <option value="inbox">Inbox</option>
                <option value="archive">Archive</option>
                <option value="spam">Spam</option>
              </Select>
              <hr />
            </Box>
          </Box>
          <Box h="800" w="100%" marginLeft="20px">
            <Box
              h="800"
              w="95%"
              border="1px solid rgba(134, 134, 134, 0.281)"
              borderRadius="10px"
              backgroundColor="white"
            >
              {currentValue === 'inbox' ? (
                <Box margin="18%" h="400px">
                  <Image marginLeft="35%" width="180px" src={Messages} />

                  <Box>
                    <Heading textAlign="center" fontSize="25px" padding="15px">
                      Welcome to Messages
                    </Heading>
                    <Heading
                      marginLeft="25%"
                      w="50%"
                      textAlign="center"
                      fontSize="15px"
                      fontWeight="smaller"
                      padding="15px"
                    >
                      When an employer contacts you, you will see messages here.
                    </Heading>
                    <Button
                      onClick={buttonHandler}
                      marginLeft="25%"
                      w="300px"
                      backgroundColor="#2557a7"
                      color="#FFFFFF"
                      _hover={{ color: 'white', backgroundColor: '#103673' }}
                    >
                      Find Jobs
                    </Button>
                  </Box>
                </Box>
              ) : (
                  <Box margin="18%" h="400px">
                    <Image marginLeft="35%" width="180px" src={Messages} />

                    <Box>
                      <Heading
                        textAlign="center"
                        fontSize="25px"
                        padding="15px"
                      >
                        Welcome to Messages
                      </Heading>
                      <Heading
                        marginLeft="25%"
                        w="50%"
                        textAlign="center"
                        fontSize="15px"
                        fontWeight="smaller"
                        padding="15px"
                      >
                        When an employer contacts you, you will see messages
                        here.
                      </Heading>
                      <Button
                        onClick={buttonHandler}
                        marginLeft="25%"
                        w="300px"
                        backgroundColor="#2557a7"
                        color="#FFFFFF"
                        _hover={{ color: 'white', backgroundColor: '#103673' }}
                      >
                        Find Jobs
                      </Button>
                    </Box>
                  </Box>
                ) && currentValue === 'archive' ? (
                <Box margin="18%" h="400px">
                  <Image marginLeft="35%" width="180px" src={Archive} />

                  <Box>
                    <Heading
                      marginLeft="25%"
                      w="50%"
                      textAlign="center"
                      fontSize="15px"
                      fontWeight="smaller"
                      padding="15px"
                    >
                      You have no archived messages
                    </Heading>
                    <Button
                      onClick={buttonHandler}
                      marginLeft="25%"
                      w="300px"
                      backgroundColor="#2557a7"
                      color="#FFFFFF"
                      _hover={{ color: 'white', backgroundColor: '#103673' }}
                    >
                      Find Jobs
                    </Button>
                  </Box>
                </Box>
              ) : (
                  <Box margin="18%" h="400px">
                    <Image marginLeft="35%" width="180px" src={Messages} />

                    <Box>
                      <Heading
                        textAlign="center"
                        fontSize="25px"
                        padding="15px"
                      >
                        Welcome to Messages
                      </Heading>
                      <Heading
                        marginLeft="25%"
                        w="50%"
                        textAlign="center"
                        fontSize="15px"
                        fontWeight="smaller"
                        padding="15px"
                      >
                        When an employer contacts you, you will see messages
                        here.
                      </Heading>
                      <Button
                        onClick={buttonHandler}
                        marginLeft="25%"
                        w="300px"
                        backgroundColor="#2557a7"
                        color="#FFFFFF"
                        _hover={{ color: 'white', backgroundColor: '#103673' }}
                      >
                        Find Jobs
                      </Button>
                    </Box>
                  </Box>
                ) && currentValue === 'spam' ? (
                <Box margin="18%" h="400px">
                  <Image marginLeft="35%" width="180px" src={Spam} />
                  <Box>
                    <Heading
                      marginLeft="25%"
                      w="50%"
                      textAlign="center"
                      fontSize="15px"
                      fontWeight="smaller"
                      padding="15px"
                    >
                      You have no messages in the spam folder
                    </Heading>
                    <Button
                      onClick={buttonHandler}
                      marginLeft="25%"
                      w="300px"
                      backgroundColor="#2557a7"
                      color="#FFFFFF"
                      _hover={{ color: 'white', backgroundColor: '#103673' }}
                    >
                      Find Jobs
                    </Button>
                  </Box>
                </Box>
              ) : (
                <Box margin="18%" h="400px">
                  <Image marginLeft="35%" width="180px" src={Messages} />

                  <Box>
                    <Heading textAlign="center" fontSize="25px" padding="15px">
                      Welcome to Messages
                    </Heading>
                    <Heading
                      marginLeft="25%"
                      w="50%"
                      textAlign="center"
                      fontSize="15px"
                      fontWeight="smaller"
                      padding="15px"
                    >
                      When an employer contacts you, you will see messages here.
                    </Heading>
                    <Button
                      onClick={buttonHandler}
                      marginLeft="25%"
                      w="300px"
                      backgroundColor="#2557a7"
                      color="#FFFFFF"
                      _hover={{ color: 'white', backgroundColor: '#103673' }}
                    >
                      Find Jobs
                    </Button>
                  </Box>
                </Box>
              )}
            </Box>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default Message;
