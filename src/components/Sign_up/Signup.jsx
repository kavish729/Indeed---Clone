import React, { useReducer, useState } from 'react';
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
import './Signup.css';
import {REGISTER_SUCCESS} from "../../redux/authReducer/actionType"
import { useNavigate } from 'react-router-dom';
import { register } from '../../redux/authReducer/actions';
import {useDispatch} from "react-redux"
import { Link as SignupLink } from 'react-router-dom';

function reducer(state, action) {
  switch (action.type) {
    case 'name':
      return {
        ...state,
        name: action.payload,
      };
    case 'email':
      return {
        ...state,
        email: action.payload,
      };
    case 'mobile':
      return {
        ...state,
        mobile: action.payload,
      };
    case 'password':
      return {
        ...state,
        password: action.payload,
      };
    default:
      return state;
  }
}
const initialState = {
  name: '',
  email: '',
  mobile: '',
  password: '',
};
const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [state, setter] = useReducer(reducer, initialState);
  const navigate=useNavigate()
  const dispatch=useDispatch()
   const toast = useToast();
  const signupHandler=()=>{
     if (
       state.name === '' ||
       state.email === '' ||
       state.mobile === '' ||
       state.password === ''
     ) {
       toast({
         title: 'Enter all the information.',
         description: 'Enter all the information for creating a new account.',
         status: 'error',
         duration: 3000,
         isClosable: true,
         position: 'top',
       });
     }
    dispatch(register(state)).then((r)=>{
      if(r===REGISTER_SUCCESS){
        toast({
          title: 'Account created.',
          description: "We've created your account for you.",
          status: 'success',
          duration: 3000,
          isClosable: true,
          position: 'top',
        });
        navigate("/signin",{replace:true});
      }
    });
  }
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
              <Heading fontSize={'2xl'}>Create a new account</Heading>
              <FormControl id="name" isRequired>
                <FormLabel>Name</FormLabel>
                <Input
                  type="name"
                  value={state.name}
                  onChange={(e) =>
                    setter({ type: 'name', payload: e.target.value })
                  }
                />
              </FormControl>
              <FormControl id="email" isRequired>
                <FormLabel>Email address</FormLabel>
                <Input
                  type="email"
                  value={state.email}
                  onChange={(e) =>
                    setter({ type: 'email', payload: e.target.value })
                  }
                />
              </FormControl>
              <FormControl id="mobile" isRequired>
                <FormLabel>Mobile number</FormLabel>
                <Input
                  type="mobile"
                  value={state.mobile}
                  onChange={(e) =>
                    setter({ type: 'mobile', payload: e.target.value })
                  }
                />
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <Input
                  type="password"
                  value={state.password}
                  onChange={(e) =>
                    setter({ type: 'password', payload: e.target.value })
                  }
                />
              </FormControl>
              <Stack>
                <Button
                  marginTop="20px"
                  colorScheme={'blue'}
                  variant={'solid'}
                  onClick={signupHandler}
                >
                  Create Account
                </Button>
              </Stack>
              <Text
                paddingTop="20px"
                paddingBottom="20px"
                fontSize={'lg'}
                color={'gray.600'}
              >
                Already have an account?
                <br />
                <SignupLink to="/signin">
                  <Link color="blue.500">Sign in</Link>
                </SignupLink>
                ✌️
              </Text>
            </Stack>
          </Flex>
        </Stack>
        <Box paddingLeft="20px" paddingTop="30px">
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
export default Signup;
