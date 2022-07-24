
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getJobs } from "../../redux/appReducer/actions";
import { Box, Flex, Text, Icon } from "@chakra-ui/react";
import { MdMoney, MdOutlineAllInbox } from "react-icons/md";
import Parser from "html-react-parser";
import { Link } from "react-router-dom";




const Jobfeeds = () => {
  const [jobId, setJobId]=useState(0);
  const dispatch = useDispatch();
  const jobs = useSelector((state) => state.appReducer.jobs);
  localStorage.setItem("jobId2",jobId)
  useEffect(() => {
    dispatch(getJobs());
  }, [dispatch]);
  
  return (
    <Box color="grey.100">
      {jobs.map((item) => {
        return (
          <Link key={item.id} onClick={()=>setJobId(item.id)}  to="/">
            <Box
              key={item.id}
              borderRadius="md"
              boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
              border="1px solid grey"
              marginLeft="10rem"
              w="30rem"
              marginBottom="1rem"
            >
              <Box margin="1rem 1rem 1rem 1rem">
                <Text fontSize="xl" fontWeight="700">
                  {" "}
                  {item.jobTitle}
                </Text>
                <Text fontWeight="500" fontSize="lg">
                  {item.companyName}
                </Text>
                <Text fontWeight="400" fontSize="lg">
                  {item.location}
                </Text>
                <Flex>
                  <Flex bg="#a9acad" fontWeight="bold" color="black">
                    <Icon
                      margin=".1rem .1rem .1rem .1rem"
                      marginTop=".2em"
                      as={MdMoney}
                    />
                    <Box marginLeft=".2rem">
                      ₹{item.startSalary}- ₹{item.endSalary}
                    </Box>
                  </Flex>
                  <Flex
                    marginLeft="1rem"
                    bg="#a9acad"
                    fontWeight="bold"
                    color="black"
                  >
                    <Icon
                      margin=".1rem .1rem .1rem .1rem"
                      marginTop=".2em"
                      as={MdOutlineAllInbox}
                    />
                    <Box marginLeft=".2rem">{item.jobType}</Box>
                  </Flex>
                </Flex>
                <Box fontSize=".8rem" color="gray" margin="1rem 1rem 1rem 1rem">
                  {Parser(item.jobDetails)}
                </Box>
              </Box>
            </Box>
          </Link>
        );
      })}
    </Box>
  );
};

export default Jobfeeds;
