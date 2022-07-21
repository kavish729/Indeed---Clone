import { Container } from "@chakra-ui/react";
import React from "react";
import{Link} from 'react-router-dom';


const Navbar = () => {
  return <Container>
    <Link to='/companyreview'>Company Review</Link>
  </Container>;
};

export default Navbar;
