import { Container, Heading } from '@chakra-ui/react';
import React from 'react';
import{useParams}from 'react-router-dom'

const Snapshot = () => {
    const {id}=useParams()
    return (
        <Container height='1000px'>
    <Heading>About Us</Heading>
  </Container>
    );
};

export default Snapshot;