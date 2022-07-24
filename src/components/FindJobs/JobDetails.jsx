import React, { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import {  getSingleJobs } from "../../redux/appReducer/actions";
import { Box, Flex, Text, Icon, Button } from "@chakra-ui/react";
import { MdMoney, MdOutlineAllInbox } from "react-icons/md";
import Parser from "html-react-parser";
import { Link } from "react-router-dom";

const JobDetails = () => {
  let id = localStorage.getItem("jobId2");
  const dispatch = useDispatch();
  const details = useSelector((state) => state.appReducer.single);
  useEffect(() => {
    if (details?.length === 0) {
      dispatch(getSingleJobs(id));
    }
  }, [dispatch, id, details?.length]);
  console.log("id", id);

  console.log("details single", details);
  return (
    <div>
      <Box color="grey.100">
        <Box
          borderRadius="md"
          boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
          border="1px solid grey"
          marginLeft="1rem"
          w="30rem"
          marginBottom="1rem"
        >
          <Box margin="1rem 1rem 1rem 1rem">
            <Text fontSize="xl" fontWeight="700">
              {details.jobTitle}
            </Text>
            <Text fontWeight="500" fontSize="lg">
              {details.companyName}
            </Text>
            <Text fontWeight="400" fontSize="lg">
              {details.location}
            </Text>
            <Flex>
              <Flex bg="#a9acad" fontWeight="bold" color="black">
                <Icon
                  margin=".1rem .1rem .1rem .1rem"
                  marginTop=".2em"
                  as={MdMoney}
                />
                <Box marginLeft=".2rem">
                  ₹{details.startSalary}- ₹{details.endSalary}
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
                <Box marginLeft=".2rem">{details.jobType}</Box>
              </Flex>
            </Flex>
            <Link to='/applyjobs'><Button margin='1rem 1rem 1rem 1rem' colorScheme='blue'>Apply Now</Button></Link>
            <Box fontSize=".8rem" color="gray" margin="1rem 1rem 1rem 1rem">
              {/* {Parser(details.jobDescription)} */}
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default JobDetails;
