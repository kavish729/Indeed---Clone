import { EditIcon } from '@chakra-ui/icons';
import {
  Avatar,
  Wrap,
  WrapItem,
  Box,
  Container,
  Flex,
  EditablePreview,
  Editable,
  EditableInput,
  Icon,
  Image,
  Heading,
  Text,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import LocationIcon from '../components/Navbar/Icons/location.svg';

const Profile = () => {
  const [user, setUser] = useState([]);
  const [iconName, setIconName] = useState('');
  const Name = iconName.toLocaleLowerCase();
  console.log('Name:', Name)

  useEffect(() => {
    if (localStorage.hasOwnProperty('token')) {
      let value = localStorage.getItem('token');
      value = JSON.parse(value);
      setUser(value.user);
    }
  }, []);
  useEffect(() => {
    setIconName(user.name+"   "+" -");
  },[user]);

  return (
    <Box>
      <Container maxW="container.sm">
        <Box>
          <Flex>
            <Wrap>
              <WrapItem>
                <Avatar
                  size="lg"
                  name={Name}
                  backgroundColor="transparent"
                  border="3px solid #085ff7"
                  margin="10px"
                />
              </WrapItem>
            </Wrap>
            <Box>
              <Text
                fontSize="1.5rem"
                fontWeight="bold"
                paddingTop="8px"
                paddingLeft="10px"
              >
                {user.name}
              </Text>
              <Box display="flex" marginTop="-2" marginLeft="15px">
                <Image marginTop="10px" height="1.5rem" src={LocationIcon} />
                <Editable
                  defaultValue="Bengaluru, Karnataka"
                  fontSize="1rem"
                  fontWeight="smaller"
                  marginBottom="8px"
                  paddingTop="5px"
                >
                  <EditablePreview />
                  <EditableInput />
                </Editable>
              </Box>
            </Box>
          </Flex>
        </Box>
        <Box paddingTop="40px">
          <Box
            p={5}
            paddingBottom="30px"
            marginBottom="30px"
            shadow="md"
            borderWidth="1px"
            borderRadius="10px"
          >
            <Heading fontSize="lg" paddingTop="4px">
              Contact Information
            </Heading>
            <Text mt={4}>{user.name}</Text>
            <Text mt={1}>{user.email}</Text>
            <Text mt={1}>{user.mobile}</Text>
            <Editable
              defaultValue="Bengaluru, Karnataka"
              fontSize="1rem"
              fontWeight="smaller"
              marginBottom="8px"
            >
              <EditablePreview />
              <Icon marginLeft="5px" h={3}>
                <EditIcon />
              </Icon>
              <EditableInput />
            </Editable>
          </Box>
          <Box
            p={5}
            paddingBottom="30px"
            marginBottom="30px"
            shadow="md"
            borderWidth="1px"
            borderRadius="10px"
          >
            <Box display="flex">
              <Heading fontSize="lg" paddingTop="4px" marginRight="70%">
                Job preferences
              </Heading>
              <Icon>
                <EditIcon />
              </Icon>
            </Box>
            <Editable
              defaultValue="Employers searching for candidates may see these when your resume is set to public.
Save specific details like desired pay and schedule that help us match you with better jobs"
              fontSize="1rem"
              fontWeight="smaller"
              marginBottom="8px"
              paddingTop="5px"
            >
              <EditablePreview />
              <EditableInput />
            </Editable>
          </Box>
        </Box>
      </Container>
      <Box marginLeft="35%" paddingTop="100px" paddingBottom="30px">
        <Breadcrumb separator="">
          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink href="/">© 2022 Indeed -</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem isCurrentPage color="blue">
            <BreadcrumbLink href="https://in.indeed.com/legal?hl=en&from=gnav-passport--passport-webapp">
              Cookies,
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem isCurrentPage color="blue">
            <BreadcrumbLink href="https://in.indeed.com/legal?hl=en&from=gnav-passport--passport-webapp">
              Privacy and Terms
            </BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </Box>
    </Box>
  );
};

export default Profile;
