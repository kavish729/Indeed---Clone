import React from 'react';
import { Box, Container, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import JobCarsosel from './JobCarousel'
const Snapshot_jobs = () => {
 
    

    return (
        <Container maxW='100%'>
            <Heading margin='30px 0px 20px 0px'>Jobs</Heading>
            <Text color='gray' fontSize='sm'>You’re seeing all 142 jobs at Flipkart.com because we can’t find any available jobs at Flipkart.com close to Kochi, Kerala at the moment</Text>
            <JobCarsosel/>

        </Container>
    );
};

export default Snapshot_jobs;