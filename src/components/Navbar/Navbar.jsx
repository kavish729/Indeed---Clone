
import React from 'react';
import {
  Box,
  Tabs,
  TabList,
  Tab,
  Flex,
} from '@chakra-ui/react';
import './Navbar.css';
import Indeed from './Icons/indeed.svg';
import Message from './Icons/message.svg';
import Notification from './Icons/notification.svg';
import Profile from './Icons/profile.svg';
import UkrenSupport from './Icons/ukraine_support.png';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <Box w="100%" h="5rem">
      <Flex justifyContent="space-between" margin="12px" className="navbar">
        <Box h="3.25rem" w="100%" display="flex">
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
          <Box w="100%" marginLeft=".1rem">
            <Tabs w="100%" variant="unstyled">
              <TabList>
                <NavLink to="/">
                  <Tab
                    marginTop="12px"
                    _hover={{
                      marginTop: '12px',
                      borderBottom: '2px solid #2f5eaa',
                      color: '#2f5eaa',
                    }}
                  >
                    FindJobs
                  </Tab>
                </NavLink>
                <NavLink to="/companies">
                  <Tab
                    marginTop="12px"
                    _hover={{
                      marginTop: '12px',
                      borderBottom: '2px solid #2f5eaa',
                      color: '#2f5eaa',
                    }}
                  >
                    Company reviews
                  </Tab>
                </NavLink>
                <NavLink to="/salary">
                  <Tab
                    marginTop="12px"
                    _hover={{
                      marginTop: '12px',
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
        <Box
          h="3.25rem"
          w="50%"
          paddingBottom="5px"
          display="flex"
        >
          <Tabs w="100%" variant="unstyled">
            <TabList>
              <NavLink to="/message">
                <Tab
                  marginTop="11px"
                  _hover={{
                    marginTop: '11px',
                    borderBottom: '2px solid #2f5eaa',
                    color: '#2f5eaa',
                  }}
                >
                  <img
                    width="25rem"
                    height="100%"
                    src={Message}
                    alt="indeed icon"
                  />
                </Tab>
              </NavLink>
              <NavLink to="/notification">
                <Tab
                  marginTop="11px"
                  _hover={{
                    marginTop: '11px',
                    borderBottom: '2px solid #2f5eaa',
                    color: '#2f5eaa',
                  }}
                >
                  <img
                    width="25rem"
                    height="100%"
                    src={Notification}
                    alt="indeed icon"
                  />
                </Tab>
              </NavLink>
              <NavLink to="/profile">
                <Tab
                  marginTop="11px"
                  _hover={{
                    marginTop: '11px',
                    borderBottom: '2px solid #2f5eaa',
                    color: '#2f5eaa',
                  }}
                >
                  <img
                    width="25rem"
                    height="100%"
                    src={Profile}
                    alt="indeed icon"
                  />
                </Tab>
              </NavLink>
              <Tab
                h="25px"
                marginTop="18px"
                borderRight="1px solid #18181860"
              ></Tab>
              <NavLink to="/postjobs">
                <Tab
                  marginTop="12px"
                  _hover={{
                    marginTop: '12px',
                    borderBottom: '2px solid #2f5eaa',
                    color: '#2f5eaa',
                  }}
                >
                  Employers / Post Job
                </Tab>
              </NavLink>
            </TabList>
          </Tabs>
        </Box>
      </Flex>
    </Box>
  );
}
export default Navbar;
