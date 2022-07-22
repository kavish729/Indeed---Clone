import React from "react";
import {
  Container,
  Heading,
  Text,
  Box,
  FormLabel,
  Divider,
  Flex,
  Center,
  Button,
} from "@chakra-ui/react";
const CompareSalaries = () => {
  let SalaryComponent = ({title}) => {
    return (
      <Box margin="10px 0px 20px 0px">
        <FormLabel>{title}</FormLabel>
        <Divider />
        <Flex gap='25%'>
          <Flex>
            <Text fontSize="30px">₹19,998</Text>
            <Center><Text fontSize="sm">per month</Text></Center>
          </Flex>
          <Flex >
            <Text fontSize="30px">₹16,068</Text>
            <Center><Text fontSize="sm">per month</Text></Center>
          </Flex>
        </Flex>
      </Box>
    );
  };

  return (
    <Container maxW="100%" paddingBottom='50px'>
      <Heading marginBottom='20px'>Compare similar salaries</Heading>
      <Text marginBottom='20px' color="gray">
        Compare salary information for Samsung Electronics and Qualcomm.
        Salaries are taken from job posts or reported by employees and are not
        adjusted for level or location.
      </Text>
      <SalaryComponent title='New graduates' />
      <SalaryComponent title='Call center representative' />
      <SalaryComponent title='Bpo executive' />
      <SalaryComponent title='Software engineer' />
      <SalaryComponent title='Data entry clerk' />
      <Flex gap='25%'>
        <Button color='brandColor' variant='outline'>See more salaries</Button>
        <Button color='brandColor' variant='outline'>See more salaries</Button>
      </Flex>
      <Flex gap='10%' marginTop='20px'>
        <Box  borderRadius='10px' padding='20px' width='50%'shadow='lg'>
            <Text>65 jobs at Samsung Electronics</Text>
            <Button bg='brandColor' color='white'>View Jobs</Button>
        </Box>
        <Box  borderRadius='10px' padding='20px' width='50%'shadow='lg'>
            <Text>13 jobs at Qualcomm</Text>
            <Button bg='brandColor' color='white'>View Jobs</Button>
        </Box>
      </Flex>
    </Container>
  );
};

export default CompareSalaries;
