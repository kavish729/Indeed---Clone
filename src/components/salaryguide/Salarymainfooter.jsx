import React from "react";
import {
  Box,
  Image,
  Stack,
  Heading,
  List,
  Link,
  Icon,
  ListItem,
} from "@chakra-ui/react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
const Chakrafooter = () => {
  return (
    <Box bg="black" padding="50px" fontFamily="Helvetica Neue" width="100%" >
      <Box
        display={{ sm: "block", md: "flex" }}
        justifyContent="space-between"
        width="85%"
        ml="50px"
        color="white"
      >
        <Stack>
          <Image
            height="48px"
            width="160px"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR0OK5sOiH8FFuuHFUKhhvVeCoQAdjeGUqOg&usqp=CAU"
          />
        </Stack>
        <Stack>
          <Box
            display={{ sm: "block", md: "flex" }}
            justifyContent="space-between"
            gap={{ sm: "20px", md: "45px" }}
          >
            <Stack lineHeight="2.02em">
              <Heading fontSize="18px" mb="10px">
                Explore Indeed
              </Heading>
              <List listStyle="none">
                <ListItem
                  fontSize="14px"
                  cursor="pointer"
                  _hover={{ color: "#509fff", textDecoration: "underline" }}
                >
                  Career Explorer
                </ListItem>
                <ListItem
                  fontSize="14px"
                  fontWeight="400"
                  cursor="pointer"
                  _hover={{ color: "#509fff ", textDecoration: "underline" }}
                >
                  Career Advice
                </ListItem>
                <ListItem
                  fontSize="14px"
                  fontWeight="400"
                  cursor="pointer"
                  _hover={{ color: "#509fff ", textDecoration: "underline" }}
                >
                  Browse Jobs
                </ListItem>
              </List>
            </Stack>
            <Stack lineHeight="2.02em">
              <List>
                <ListItem
                  mt="40px"
                  fontSize="14px"
                  fontWeight="400"
                  cursor="pointer"
                  _hover={{ color: "#509fff ", textDecoration: "underline" }}
                >
                  Browse Companies
                </ListItem>
                <ListItem
                  fontSize="14px"
                  fontWeight="400"
                  cursor="pointer"
                  _hover={{ color: "#509fff ", textDecoration: "underline" }}
                >
                  Salaries
                </ListItem>
                <ListItem
                  fontSize="14px"
                  fontWeight="400"
                  cursor="pointer"
                  _hover={{ color: "#509fff ", textDecoration: "underline" }}
                >
                  Indeed Events
                </ListItem>
              </List>
            </Stack>
            <Stack lineHeight="2.02em">
              <List>
                <ListItem
                  mt="40px"
                  fontSize="14px"
                  fontWeight="400"
                  cursor="pointer"
                  _hover={{ color: "#509fff ", textDecoration: "underline" }}
                >
                  Work at Indeed
                </ListItem>
                <ListItem
                  fontSize="14px"
                  fontWeight="400"
                  cursor="pointer"
                  _hover={{ color: "#509fff ", textDecoration: "underline" }}
                >
                  Countries
                </ListItem>
                <ListItem
                  fontSize="14px"
                  fontWeight="400"
                  cursor="pointer"
                  _hover={{ color: "#509fff ", textDecoration: "underline" }}
                >
                  About
                </ListItem>
              </List>
            </Stack>
          </Box>
        </Stack>
        <Stack>
          <Heading fontSize="18px" mb="18px">
            Follow us
          </Heading>
          <Box display={{ sm: "block", md: "flex" }} gap="20px">
            <Icon
              fontSize="23px"
              cursor="pointer"
              _hover={{ color: "teal.300" }}
            >
              <FaTwitter />
            </Icon>
            <Icon fontSize="23px" _hover={{ color: "teal.300" }}>
              <FaFacebook />
            </Icon>
            <Icon fontSize="23px" _hover={{ color: "teal.300" }}>
              <FaYoutube />
            </Icon>
            <Icon fontSize="23px" _hover={{ color: "teal.300" }}>
              <FaInstagram />
            </Icon>
          </Box>
        </Stack>
      </Box>

      <List
        color="white"
        display={{ sm: "block", md: "flex" }}
        gap="10px"
        ml="50px"
        mt="20px"
        fontFamily="Helvetica Neue"
      >
        <ListItem
          cursor="pointer"
          fontSize="15px"
          _hover={{ color: "#509fff", textDecoration: "underline" }}
        >
          © 2021 Indeed -
        </ListItem>
        <ListItem
          cursor="pointer"
          fontSize="15px"
          _hover={{ color: "#509fff", textDecoration: "underline" }}
        >
          {" "}
          Privacy -{" "}
        </ListItem>
        <ListItem
          cursor="pointer"
          fontSize="15px"
          _hover={{ color: "#509fff", textDecoration: "underline" }}
        >
          Accessibility at Indeed -{" "}
        </ListItem>
        <ListItem
          cursor="pointer"
          fontSize="15px"
          _hover={{ color: "#509fff", textDecoration: "underline" }}
        >
          Privacy Center -{" "}
        </ListItem>
        <ListItem
          cursor="pointer"
          fontSize="15px"
          _hover={{ color: "#509fff", textDecoration: "underline" }}
        >
          Cookies
        </ListItem>
      </List>
    </Box>
  );
};

export default Chakrafooter;
