import React, { useState } from 'react';
import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Image,
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  useToast,
  Text,
  Link,
} from '@chakra-ui/react';
import Indeed from './Icons/indeed.svg';
import './Signin.css';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../redux/authReducer/actions';
import { LOGIN_SUCCESS } from '../../redux/authReducer/actionType';
import {useNavigate} from "react-router-dom"
import {Link as SignupLink} from "react-router-dom";
const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch()
  const navigate=useNavigate()
  const toast = useToast();
  const Loading=useSelector((state)=>state.AuthReducer.Loading)
  
  const loginHandler = () => {
    if (
      email === '' ||
     password === ''
    ) {
      toast({
        title: 'Login Failed.',
        description: 'Enter valid email and password',
        status: 'error',
        duration: 3000,
        isClosable: true,
        position: 'top',
      });
    }
    if(email &&password){
      const params ={
        email,password
      }
      dispatch(login(params)).then((r)=>{
        if(r===LOGIN_SUCCESS){
           toast({
             title: 'Login Successful 🥳',
             description: "Enjoy your job search 👍",
             status: 'success',
             duration: 3000,
             isClosable: true,
             position: 'top',
           });
          navigate("/",{replace:true})
        }
        else{
          console.log("error")
        }
      })
    }
  };
  {
    return (
      <Box className="signup">
        <Stack minH={'50vh'} direction={{ base: 'column', md: 'row' }}>
          <Flex p={3} flex={1} align={'center'} justify={'center'}>
            <Stack className="signupbox" spacing={2} w={'full'} maxW={'md'}>
              <Image
                alt={'Login Image'}
                w="150px"
                marginLeft="30%"
                src={Indeed}
              />
              <br />
              <Heading fontSize={'2xl'}>Sign in</Heading>
              <FormControl id="email" isRequired>
                <FormLabel>Email address</FormLabel>
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <Input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </FormControl>
              <Stack>
                <Button
                  marginTop="20px"
                  colorScheme={'blue'}
                  variant={'solid'}
                  onClick={loginHandler}
                >
                  Sign in
                </Button>
              </Stack>
              <Text
                paddingTop="50px"
                paddingBottom="20px"
                fontSize={'lg'}
                color={'gray.600'}
              >
                Ready to take the next step?
                <br />
                <SignupLink to="/signup">
                  <Link color="blue.500">Create an account</Link>
                </SignupLink>
                ✌️
              </Text>
            </Stack>
          </Flex>
        </Stack>
        <Box marginTop="100px" paddingLeft="20px" paddingTop="30px">
          <Breadcrumb separator="">
            <BreadcrumbItem>
              <BreadcrumbLink href="https://in.indeed.com/career-advice">
                Career Advice
              </BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
              <BreadcrumbLink href="https://in.indeed.com/browsejobs">
                Browse Jobs
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink href="https://in.indeed.com/companies/browse-companies">
                Browse Companies
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink href="https://in.indeed.com/career/salaries">
                Salaries
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink href="https://www.indeedevents.com/en-in">
                Indeed Events
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink href="https://www.indeed.jobs/">
                Work at Indeed
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink href="https://in.indeed.com/worldwide">
                Countries
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink href="https://in.indeed.com/about">
                About
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink href="https://support.indeed.com/hc/en-in?redirect=false">
                Help Center
              </BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </Box>
        <br />
        <Box paddingLeft="20px" paddingBottom="30px">
          <Breadcrumb separator="">
            <BreadcrumbItem>
              <BreadcrumbLink>© 2022 Indeed</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
              <BreadcrumbLink href="https://in.indeed.com/accessibility?hl=en">
                Accessibility at Indeed
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink href="https://hrtechprivacy.com/">
                Privacy Center
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink href="https://hrtechprivacy.com/brands/indeed#Cookies">
                Cookies
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink href="https://hrtechprivacy.com/brands/indeed#privacypolicy">
                Privacy
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink href="https://in.indeed.com/legal?hl=en&from=gnav-passport--passport-webapp">
                Terms
              </BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </Box>
      </Box>
    );
  }
};
export default SignIn;
