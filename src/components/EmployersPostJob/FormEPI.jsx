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
  Link,
  Select,
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
    case "firstLastName": {
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
  firstLastName: "",
  phoneNumber: "",
  hiringRole: "",
  hiringBudget: "",
  aboutUs: "",
};

const FormEPI = () => {
  // const [input, setInput] = useState("");
  const [state, setter] = useReducer(reducer, initState);

  const isErrorCompanyName = state.companyName === "";
  const isErrorFirstLastName = state.firstLastName === "";

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
            borderRadius="5px"
          >
            <AccordionItem borderRadius="15px">
              <AccordionButton
                bg="#F3F2F1"
                borderBottom="1px solid rgb(212, 210, 208)"
                _hover={{ border: "1px solid #2557A7" }}
                borderRadius="5px 5px 0px 0px"
              >
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
                <Box>
                  <Box fontSize="17px">
                    <Text color="#2d2d2d" as="b">
                      People looking for jobs:
                    </Text>
                    <Box mt="10px">
                      <Link textDecoration="underline" color="#2557A7">
                        Search for a new job
                      </Link>
                    </Box>
                    <Box mt="5px">
                      <Link textDecoration="underline" color="#2557A7">
                        Upload your resume
                      </Link>
                    </Box>
                  </Box>
                  <Box fontSize="17px" mt="20px">
                    <Text color="#2d2d2d" as="b">
                      Employers:
                    </Text>
                    <Box mt="10px">
                      <Link
                        lineHeight="2px"
                        textDecoration="underline"
                        color="#2557A7"
                      >
                        Open a previous job post
                      </Link>
                    </Box>
                    <Box mt="5px">
                      <Link textDecoration="underline" color="#2557A7">
                        Request access to company account
                      </Link>
                    </Box>
                  </Box>
                </Box>
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
                required
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
          {/* select number of emplyees part start here */}
          <Box mt="30px">
            <FormLabel
              color={"#2d2d2d"}
              fontSize="1.0450rem"
              lineHeight="1.5"
              fontWeight="700"
            >
              Your company's number of employees
            </FormLabel>
            <Select
              outline="1px solid black"
              placeholder="Select an option"
              p="5px"
              fontSize="1rem"
            >
              <option value="1to49">1 to 49</option>
              <option value="50to149">50 to 149</option>
              <option value="150to249">150 to 249</option>
              <option value="250to499">250 to 499</option>
              <option value="500to749">500 to 749</option>
              <option value="750to999">750 to 999</option>
              <option value="1000+">1000+</option>
            </Select>
          </Box>
          {/* end here */}

          {/* input first name and last name part start here */}
          <Box mt="30px">
            <FormControl isInvalid={isErrorFirstLastName}>
              <FormLabel
                color={isErrorFirstLastName ? "#a9252b" : "#2d2d2d"}
                fontSize="1.0450rem"
                lineHeight="1.5"
                fontWeight="700"
              >
                Your first and last name*
              </FormLabel>
              <Input
                outline="1px solid #767676"
                type="text"
                value={state.firstLastName}
                onChange={(e) =>
                  setter({ type: "firstLastName", payload: e.target.value })
                }
                required
              />
              {isErrorFirstLastName ? (
                <FormErrorMessage>
                  <Icon as={BsExclamationCircleFill} /> &nbsp; Add your name.
                </FormErrorMessage>
              ) : (
                ""
              )}
            </FormControl>
          </Box>
          {/* end here */}

          {/* input phoneNumber part start here */}
          <Box mt="30px">
            <FormControl>
              <FormLabel
                color={"#2d2d2d"}
                fontSize="1.0450rem"
                lineHeight="1.5"
                fontWeight="700"
              >
                Your phone number
              </FormLabel>
              <Input
                outline="1px solid #767676"
                type="number"
                value={state.phoneNumber}
                onChange={(e) =>
                  setter({ type: "phoneNumber", payload: e.target.value })
                }
                required
              />
            </FormControl>
          </Box>
          {/* end here */}

          {/* select hiring process part  start here*/}
          <Box mt="30px">
            <FormLabel
              color={"#2d2d2d"}
              fontSize="1.0450rem"
              lineHeight="1.5"
              fontWeight="700"
            >
              Your role in the hiring process
            </FormLabel>
            <Select
              outline="1px solid black"
              placeholder="Select an option"
              p="5px"
              fontSize="1rem"
            >
              <option value="OCEO">Owner / CEO</option>
              <option value="AOM">Assistant or Office Manager</option>
              <option value="RTA">Recruiter or Talent Acquisition</option>
              <option value="HRG">Human Resources Generalist</option>
              <option value="HM">Hiring Manager</option>
              <option value="other">Other</option>
            </Select>
          </Box>
          {/* end here */}

          {/* select hiring budget part  start here*/}
          <Box mt="30px">
            <FormLabel
              color={"#2d2d2d"}
              fontSize="1.0450rem"
              lineHeight="1.5"
              fontWeight="700"
            >
              Your typical hiring budget
            </FormLabel>
            <Select
              outline="1px solid black"
              placeholder="Select an option"
              p="5px"
              fontSize="1rem"
            >
              <option value="budgetRole">I have a budget for my role(s)</option>
              <option value="budgetNeeded">
                No planned budget but I can spend if needed
              </option>
              <option value="spendHiring">
                I'm not able to spend on hiring
              </option>
            </Select>
          </Box>
          {/* end here */}
          {/* select hiring budget part  start here*/}
          <Box mt="30px">
            <FormLabel
              color={"#2d2d2d"}
              fontSize="1.0450rem"
              lineHeight="1.5"
              fontWeight="700"
            >
              How you heard about us
            </FormLabel>
            <Select
              outline="1px solid black"
              placeholder="Select an option"
              p="5px"
              fontSize="1rem"
            >
              <option value="budgetRole">
                Search engine (ex. Google, Bing, Yahoo)
              </option>
              <option value="budgetNeeded">Billboard</option>
              <option value="spendHiring">Podcast</option>
              <option value="spendHiring">Mail</option>
              <option value="spendHiring">Online video</option>
              <option value="spendHiring">Social media</option>
              <option value="spendHiring">
                Streaming audio (ex. Spotify, Pandora)
              </option>
              <option value="spendHiring">Radio (AM/FM/XM)</option>
              <option value="spendHiring">Word of mouth</option>
              <option value="spendHiring">Newspaper</option>
              <option value="spendHiring">Other</option>
            </Select>
          </Box>
          {/* end here */}
          {isErrorCompanyName || isErrorFirstLastName ? <Box></Box> : ""}
        </Box>
      </form>
    </Box>
  );
};

export default FormEPI;
