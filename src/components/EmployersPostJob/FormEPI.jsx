import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Icon,
  Input,
  Text,
} from "@chakra-ui/react";
import {
  BsExclamationCircleFill,
  BsFillQuestionCircleFill,
} from "react-icons/bs";
import React, { useReducer, useState } from "react";

const reducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "companyName": {
      return {
        ...state,
        companyName: payload,
      };
    }
    case "numOfEmployees": {
      return {
        ...state,
        numOfEmployees: payload,
      };
    }
    case "FirstLastName": {
      return {
        ...state,
        numOfEmployees: payload,
      };
    }
    case "phoneNumber": {
      return {
        ...state,
        phoneNumber: payload,
      };
    }
    case "hiringRole": {
      return {
        ...state,
        hiringRole: payload,
      };
    }
    case "hiringBudget": {
      return {
        ...state,
        hiringBudget: payload,
      };
    }
    case "aboutUs": {
      return {
        ...state,
        aboutUs: payload,
      };
    }
    default: {
      return state;
    }
  }
};

const initState = {
  companyName: "",
  numOfEmployees: "",
  FirstLastName: "",
  phoneNumber: "",
  hiringRole: "",
  hiringBudget: "",
  aboutUs: "",
};

const FormEPI = () => {
  // const [input, setInput] = useState("");
  const [state, setter] = useReducer(reducer, initState);

  const isErrorCompanyName = state.companyName === "";
  // const isErrorFirstLastName = state.FirstLastName === "";

  return (
    <Box pt="80px" w="72%" m="auto">
      <form>
        <Box m="0px 0px 16px" color="#2d2d2d" fontWeight="700">
          <Text fontSize="28px">Create an employer account</Text>
        </Box>
        <Box color="#767676" fontSize="16px">
          <Text>
            You haven't posted a job before, so you'll need to create an
            employer account.
          </Text>
        </Box>
        {/* Accordion start here */}
        <Box w="55%">
          <Accordion
            allowMultiple
            mt="30px"
            border="1px solid rgb(212, 210, 208)"
            rounded="lg"
          >
            <AccordionItem bg="#ffffff">
              <AccordionButton border="1px solid rgb(212, 210, 208)">
                <Box
                  flex="1"
                  display="flex"
                  fontWeight="bold"
                  fontSize="16px"
                  textAlign="left"
                  gap="15px"
                  p="9px 16px"
                >
                  <Text>
                    <Icon
                      mt="2px"
                      fontSize="20px"
                      as={BsFillQuestionCircleFill}
                    />
                  </Text>
                  Not here to post a job?
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
          {/* Accordion end here */}

          <Box mt="30px">
            <FormControl isInvalid={isErrorCompanyName}>
              <FormLabel
                color={isErrorCompanyName ? "#a9252b" : "#2d2d2d"}
                fontSize="1.0450rem"
                lineHeight="1.5"
                fontWeight="700"
              >
                Your company's name*
              </FormLabel>
              <Input
                outline="1px solid #767676"
                type="text"
                value={state.companyName}
                onChange={(e) =>
                  setter({ type: "companyName", payload: e.target.value })
                }
              />
              {isErrorCompanyName ? (
                <FormErrorMessage>
                  <Icon as={BsExclamationCircleFill} /> &nbsp; Add a company
                  name.
                </FormErrorMessage>
              ) : (
                ""
              )}
            </FormControl>
          </Box>
        </Box>
      </form>
    </Box>
  );
};

export default FormEPI;
