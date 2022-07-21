import React from 'react'
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
} from '@chakra-ui/react';
import Indeed from "./Icons/indeed.svg"
import "./Signup.css"
const Signup = () => {

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
              <Input type="name" />
            </FormControl>
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input type="email" />
            </FormControl>
            <FormControl id="mobile" isRequired>
              <FormLabel>Mobile number</FormLabel>
              <Input type="mobile" />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <Input type="password" />
            </FormControl>
            <Stack>
              <Button marginTop="20px" colorScheme={'blue'} variant={'solid'}>
                Create Account
              </Button>
            </Stack>
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
}
export default Signup