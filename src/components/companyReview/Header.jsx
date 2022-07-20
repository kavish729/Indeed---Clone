import { Button, Container,Link, Flex, FormLabel, Heading, Input, Text, InputGroup, InputRightElement } from '@chakra-ui/react';
import React from 'react';
import {FaSearch} from 'react-icons/fa'

const Header = () => {
    
    return (
        <Container maxW='100%' marginTop='100px' textAlign={['center', 'center','left','left','left']}>
            <Heading size='2xl'textAlign='left' marginBottom='20px' >
            Find great places to work
            </Heading>
            <Text marginBottom='20px' size='lg'textAlign='left' color='grey'>Get access to millions of company reviews</Text>
            <FormLabel>Company name or job title</FormLabel>
            <Flex marginBottom='20px'  display={['block', 'block','flex','flex','flex']} gap='10px'>

            <InputGroup marginBottom='10px' maxW={['100%','100%','70%','70%','70%']}>
            <Input type="text"    />
            <InputRightElement color='gray' children={<FaSearch/>} />
            </InputGroup>
            
            <Button bg='brandColor' w={['100%','100%','30%','30%','30%']} color='white'   >Find Companies</Button>
            </Flex>
        <Link textDecoration='underline'color='brandColor' to='#'>Do you want to search for salaries?</Link>
        </Container>
    );
};

export default Header;