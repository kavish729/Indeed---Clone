import React from 'react';
import { Container,Grid, GridItem } from "@chakra-ui/react";

const Snapshot_about = () => {
    return (
        <Container maxW='100%'>
            <Grid 
  h='300px'
  w='900px'
  templateRows='repeat(2, 1fr)'
  templateColumns='repeat(12, 1fr)'
  gap={4}
>
  <GridItem rowSpan={2} colSpan={3} border='1px'borderColor='gray.200' borderRadius='10px' >
    CEO
  </GridItem>
  <GridItem colSpan={4} bg='papayawhip'borderRadius='10px'border='1px'borderColor='gray.200' />
  <GridItem colSpan={2} bg='papayawhip'borderRadius='10px' />
  <GridItem colSpan={2} bg='papayawhip' borderRadius='10px'/>
  <GridItem colSpan={2} bg='papayawhip'borderRadius='10px' />
  <GridItem colSpan={2} bg='papayawhip'borderRadius='10px' />
  <GridItem colSpan={2} bg='tomato'borderRadius='10px' />
  <GridItem colSpan={2} bg='tomato'borderRadius='10px' />
</Grid>
            
        </Container>
    );
};

export default Snapshot_about;