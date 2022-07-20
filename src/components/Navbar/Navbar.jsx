import React from 'react';
import {
  Box,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Flex,
  Spacer,
} from '@chakra-ui/react';
import './Navbar.css';
import Indeed from './Icons/indeed.svg';
import UkrenSupport from './Icons/ukraine_support.png';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <Box w="100%" h="5rem">
      <Flex justifyContent="space-between" margin="12px" className="navbar">
        <Box h="3.25rem" w="100%"  display="flex">
          <Box className="indeed">
            <NavLink to="/">
              <img width="150" height="30" src={Indeed} alt="indeed icon" />
            </NavLink>
          </Box>
          <Box className="ukraine">
            <NavLink to="/">
              <img width="58px" src={UkrenSupport} alt="indeed icon" />
            </NavLink>
          </Box>
          <Box w="100%" marginLeft="2rem">
            <Tabs w="100%" variant="unstyled">
              <TabList>
                <NavLink to="/">
                  <Tab
                    marginTop="10px"
                    _hover={{
                      marginTop: '10px',
                      borderBottom: '2px solid #2f5eaa',
                      color: '#2f5eaa',
                    }}
                  >
                    FindJobs
                  </Tab>
                </NavLink>
                <NavLink to="/companies">
                  <Tab
                    marginTop="10px"
                    _hover={{
                      marginTop: '10px',
                      borderBottom: '2px solid #2f5eaa',
                      color: '#2f5eaa',
                    }}
                  >
                    Company reviews
                  </Tab>
                </NavLink>
                <NavLink to="/salary">
                  <Tab
                    marginTop="10px"
                    _hover={{
                      marginTop: '10px',
                      borderBottom: '2px solid #2f5eaa',
                      color: '#2f5eaa',
                    }}
                  >
                    Salary Guide
                  </Tab>
                </NavLink>
              </TabList>
            </Tabs>
          </Box>
        </Box>
        <Box h="3.25rem" w="30%" border="1px solid blue"></Box>
      </Flex>
    </Box>
  );
};

export default Navbar;
