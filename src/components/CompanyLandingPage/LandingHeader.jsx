import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  HStack,
  Image,
  Spacer,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { AiFillStar } from "react-icons/ai";
import { useSelector,useDispatch } from "react-redux";
import { getcompanyApi } from "../../redux/appReducer/actions";

const LandingHeader = ({ id }) => {
  const dispatch=useDispatch();
  
  useEffect(()=>{
    
    dispatch(getcompanyApi())
    
  },[]);
  const { data } = useSelector((state) => state.appReducer);
  const company = data.find((company) => company.id == id);
  return (
    <Container maxW="100%">
      <Image maxW='100%'  src="https://networkbuilders.intel.com/images/nb/Tech_mahindra_banner.png" />
      <Box marginTop='30px' display={["block", "block", "block", "flex", "flex"]}>
        <Box >
          <Flex direction="row">
            <Image
              src={company.logo}
              shadow="lg"
              margin="0px 10px 0px 0px "
              p="5px"
              boxSize="50px"
              borderRadius="10px"
            />
            <Box>
              <Heading size="sm">{company.company}</Heading>
              <Flex direction="row">
                <HStack color="indigo">
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                </HStack>
                <Box> {company.reviews} reviews</Box>
              </Flex>
            </Box>
          </Flex>
        </Box>
        <Spacer />
        <Flex  >
          <Button margin='10px'padding=' 10px 50px 10px 50px' width='50%' bg="brandColor" color="white">
            Follow
          </Button>
          <Button  width='50%'margin='10px' padding=' 10px 50px 10px 50px' variant="outline" color="brandColor">
            Write a review
          </Button>
        </Flex>
      </Box>
      {/* <HStack  marginTop='30px' maxW='100%' overflow='scroll'   justifyContent='space-between' >
                    <Link width='50px' to={`/companies/${id}/shapshot`}   ><Box padding='5px' maxW='100px'>Snapshot   </Box></Link>
                    <Link width='50px' to={`/companies/${id}/whyus`}      ><Box padding='5px' maxW='100px'>Why Join Us</Box></Link>
                    <Link width='50px' to={`/companies/${id}/reviews`}    ><Box padding='5px' maxW='100px'>Reviews    </Box></Link>
                    <Link width='50px' to={`/companies/${id}/salaries`}   ><Box padding='5px' maxW='100px'>Salaries   </Box></Link>
                    <Link width='50px' to={`/companies/${id}/jobs`}       ><Box padding='5px' maxW='100px'>Jobs       </Box></Link>
                    <Link width='50px' to={`/companies/${id}/questions`}  ><Box padding='5px' maxW='100px'>Questions  </Box></Link>
                    <Link width='50px' to={`/companies/${id}/interviews`} ><Box padding='5px' maxW='100px'>Interviews </Box></Link>
                    <Link width='50px' to={`/companies/${id}/photos`}     ><Box padding='5px' maxW='100px'>Photos     </Box></Link>
    </HStack> */}
    </Container>
  );
};

export default LandingHeader;
