import { Container } from '@chakra-ui/react';
import{Link} from 'react-router-dom';
import React from 'react';

const Navbar = () => {
    return (
        <Container>
            <Link to='/companyreview'>Company Review</Link>
            
        </Container>
        
    );
};

export default Navbar;