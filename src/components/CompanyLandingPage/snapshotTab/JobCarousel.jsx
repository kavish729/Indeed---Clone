import React, { useEffect } from "react";
import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  IconButton,
  SimpleGrid,
  Spacer,
  Text,
  useBreakpointValue,
  VStack,
} from "@chakra-ui/react";
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
// And react-slick as our Carousel Lib
import Slider from "react-slick";
import { useSelector,useDispatch } from "react-redux";
import moment from "moment";
import { getJobs } from "../../../redux/appReducer/actions";

// Settings for the slider
const settings = {
  dots: false,
  arrows: false,
  fade: false,
  infinite: false,
  autoplay: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  variableWidth: false,
  slide: Box,
};

export default function Carousel() {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = React.useState(null);
  const { jobs } = useSelector((state) => state.appReducer);
  const dispatch=useDispatch();
  useEffect(()=>{
    if(jobs?.length==0){
        dispatch(getJobs())
    }
  },[]);
  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "30%", md: "10px" });
  
  const JobCard=({jobTitle,date,location})=>{
    const timeago = moment(date).fromNow();

    return <Box
    padding="10px"
    borderRadius="10px"
    margin="10px"
    width="210px"
    shadow="lg"
    height="300px"
    bg="white"
  >
    <Flex direction='column' gap='50px'>
      <Box  h='150px' >
        <Text fontSize="2xl">{jobTitle}</Text>
        <Text>{location}</Text>
      </Box>

      <Box h='150px' >
        <Text marginBottom='10px'>{timeago}</Text>
      <Center>
      <Button  width='100%' variant="outline" color="brandColor" padding="15px">
        View Job
      </Button>
      </Center>
      </Box>
    </Flex>
  </Box>
  }
  const BrowseJob=()=>{
    return (
        <Box margin='-20px'padding='30px'>
             <Heading size='lg'>Browse job by category</Heading>
        <SimpleGrid columns='3' spacing='10px'margin='10px 0px 20px 0px'>
        <Box shadow='lg' padding='20px' borderRadius='10px' bg='white' ><Flex ><Box><Heading size='sm'>Management</Heading><Text>9 Jobs</Text></Box><Spacer/><Center>{`>`}</Center></Flex></Box>
        <Box shadow='lg' padding='20px' borderRadius='10px' bg='white' ><Flex ><Box><Heading size='sm'>Software development</Heading><Text>18 Jobs</Text></Box><Spacer/><Center>{`>`}</Center></Flex></Box>
        <Box shadow='lg' padding='20px' borderRadius='10px' bg='white' ><Flex ><Box><Heading size='sm'>Information Design {'&'} Documentation</Heading><Text>6 Jobs</Text></Box><Spacer/><Center>{`>`}</Center></Flex></Box>
        <Box shadow='lg' padding='20px' borderRadius='10px' bg='white' ><Flex ><Box><Heading size='sm'>Art {'&'} Entertainment</Heading><Text>13 Jobs</Text></Box><Spacer/><Center>{`>`}</Center></Flex></Box>
        <Box shadow='lg' padding='20px' borderRadius='10px' bg='white' ><Flex ><Box><Heading size='sm'>Banking {'&'} Finance</Heading><Text>3 Jobs</Text></Box><Spacer/><Center>{`>`}</Center></Flex></Box>
        <Box shadow='lg' padding='20px' borderRadius='10px' bg='white' ><Flex ><Box><Heading size='sm'>Show other Catogeries</Heading><Text></Text></Box><Spacer/><Center>{`>`}</Center></Flex></Box>
        </SimpleGrid>
        <Heading size='sm'color='brandColor'>See all available jobs {'>'}</Heading>
        </Box>
    )
}
  return (
    <Box
      position={"relative"}
      marginTop='20px'
      height="450px"
      bg="#f3f2f1"
      borderRadius="10px"
      
      width='100%'
    >
      {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      {/* Left Icon */}
      <IconButton
        aria-label="left-arrow"
        colorScheme="gray"
        borderRadius="full"
        position="absolute"
        left={side}
        top={top}
        transform={"translate(0%, -50%)"}
        zIndex={2}
        onClick={() => slider?.slickPrev()}
      >
        <BiLeftArrowAlt />
      </IconButton>
      {/* Right Icon */}
      <IconButton
        aria-label="right-arrow"
        colorScheme="gray"
        borderRadius="full"
        position="absolute"
        right={side}
        top={top}
        transform={"translate(0%, -50%)"}
        zIndex={2}
        onClick={() => slider?.slickNext()}
      >
        <BiRightArrowAlt />
      </IconButton>
      {/* Slider */}
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {jobs.map((job) => {
          return (
            <Box key={job.jobkey}
            padding='10px'
            >
              <JobCard {...job}/>
            </Box>
          );
        })}
      </Slider>
      <BrowseJob/>
    </Box>
  );
}
