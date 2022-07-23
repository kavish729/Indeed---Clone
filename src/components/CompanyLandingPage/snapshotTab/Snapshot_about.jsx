import React, { useEffect } from "react";
import {
  Box,
  Center,
  Container,
  Flex,
  Grid,
  GridItem,
  Heading,
  Link,
  Spacer,
  Text,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import { getcompanyApi } from "../../../redux/appReducer/actions";
const Snapshot_about = () => {
  const { id } = useParams();
  const dispatch=useDispatch();

  const { data } = useSelector((state) => state.appReducer);
  useEffect(()=>{
    if(data?.length==0){
        dispatch(getcompanyApi())
    }
  },[]);
  const company = data.find((c) => c.id == id);
  return (
    <Container maxW="100%">
      <Heading marginBottom="20px">About the company</Heading>
      <Grid
        h="300px"
        w="900px"
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(12, 1fr)"
        gap={4}
        marginBottom="50px"
      >
        <GridItem
          rowSpan={2}
          colSpan={3}
          padding="0px"
          bgImg={company.ceo_image}
          bgPos="center"
          bgSize="cover"
          bgClip="border-box"
          bgRepeat="no-repeat"
          border="1px"
          borderColor="gray.200"
          borderRadius="10px"
        />
        <GridItem
          colSpan={4}
          borderRadius="10px"
          border="1px"
          borderColor="gray.200"
          padding="20px"
        >
          <Heading fontSize='12px'>CEO</Heading>
          <Text>{company.ceo_name}</Text>
          <Center gap="20px">
            <Heading>84%</Heading>{" "}
            <Box w="150px" h="15px" bg="gray.200" borderRadius="7.5px">
              <Box w="84%" h="15px" bg="blue.400" borderRadius="7.5px"></Box>
            </Box>
          </Center>
          <Text fontSize="12px" color="gray">
            approve of Rajesh Gopinathan's performance
          </Text>
        </GridItem>
        <GridItem
          colSpan={2}
          border="1px"
          borderColor="gray.200"
          padding="20px"
          borderRadius="10px"
        >
            <Flex direction='column' gap='60px' >
                <Heading fontSize='12px'>Founded</Heading>
                <Text>{company.founded_year}</Text>
            </Flex>
            
        </GridItem>
        <GridItem
          colSpan={2}
          border="1px"
          borderColor="gray.200"
          padding="20px"
          borderRadius="10px"
        >
            <Flex direction='column' gap='60px' >
                <Heading fontSize='12px'>Company size</Heading>
                <Text>{company.company_size}</Text>
            </Flex>
        </GridItem>
        <GridItem
          colSpan={2}
          border="1px"
          borderColor="gray.200"
          padding="20px"
          borderRadius="10px"
        >
            <Flex direction='column' gap='60px' >
                <Heading fontSize='12px'>Revenue</Heading>
                <Text>{company.revenue}</Text>
            </Flex>
        </GridItem>
        <GridItem
          colSpan={2}
          border="1px"
          borderColor="gray.200"
          padding="20px"
          borderRadius="10px"
        >
            <Flex direction='column' gap='60px' >
                <Heading fontSize='12px'>Industry</Heading>
                <Text>Information Technology</Text>
            </Flex>
        </GridItem>
        <GridItem
          colSpan={2}
          border="1px"
          borderColor="gray.200"
          padding="20px"
          borderRadius="10px"
        >
            <Flex direction='column' gap='60px' >
                <Heading fontSize='12px'>Headquarters</Heading>
                <Text>Banglore</Text>
            </Flex>
        </GridItem>
        <GridItem
          colSpan={2}
          border="1px"
          borderColor="gray.200"
          padding="20px"
          borderRadius="10px"
        >
            <Flex direction='column' gap='60px' >
                <Heading fontSize='12px'>Link</Heading>
                <Link color='blue'>{company.company}</Link>
            </Flex>
        </GridItem>
      </Grid>
      <Text  color='gray'>{company.description}</Text>
      <Link color='brandColor' fontWeight='bold'>Learn more {'>'}</Link>
    </Container>
  );
};

export default Snapshot_about;
