import React, { useEffect } from "react";
import {
  Box,
  Center,
  Container,
  Flex,
  Heading,
  Text,
} from "@chakra-ui/react";
import { useSelector,useDispatch } from "react-redux";
import { getJobs } from "../../../redux/appReducer/actions";
const Snapshot_salaries = () => {
  const { jobs } = useSelector((state) => state.appReducer);
    const salaries=jobs.filter((job)=>job.id<=110);
    console.log(salaries)
    const dispatch=useDispatch();
    useEffect(()=>{
      if(jobs?.length==0){
          dispatch(getJobs())
      }
    },[]);
  return (
    <Container maxW="100%" margin="200px 0px 20px 0px">
      <Heading>Salaries</Heading>
      <Text fontSize="sm" color="gray">
        Salary estimated from 47,684 employees, users, and past and present job
        advertisements on Indeed.
      </Text>
      <Box display='grid' gridTemplateColumns='repeat(4,1fr)' margin="10px 0px 20px 0px">
        
        {salaries.map(({ jobkey, startSalary, jobTitle, salaryType }) => {
          return (
            <Box key={jobkey} padding="20px" bg="white">
                <Text fontSize='xl' marginBottom='10px'>{jobTitle}</Text>
              <Flex>
                <Heading size="md">₹ {startSalary}</Heading>
                <Text fontSize='12px'> per month</Text>
              </Flex>
            </Box>
          );
        })}
      </Box>
      <Heading size='sm' color='brandColor '>Explore more salaries {'>'}</Heading>
    </Container>
  );
};

export default Snapshot_salaries;
