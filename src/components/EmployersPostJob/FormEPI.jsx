import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Icon,
  Image,
  Input,
  Link,
  Select,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import {
  BsExclamationCircleFill,
  BsFillQuestionCircleFill,
} from "react-icons/bs";
import React, { useReducer } from "react";

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
        firstLastName: payload,
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
  companyName: " ",
  numOfEmployees: "",
  firstLastName: " ",
  phoneNumber: "",
  hiringRole: "",
  hiringBudget: "",
  aboutUs: "",
};

const FormEPI = () => {
  // const [input, setInput] = useState("");
  const [state, setter] = useReducer(reducer, initState);
  const [isSmallerThan1220] = useMediaQuery("(max-width: 1220px)");
  const [isSmallerThan480] = useMediaQuery("(max-width: 480px)");
  const [isSmallerThan720] = useMediaQuery("(max-width: 720px)");

  const isErrorCompanyName = state.companyName === "";
  const isErrorFirstLastName = state.firstLastName === "";

  const handleSubmit = (e) => {
    e.preventDefault();

    setter({ type: "companyName", payload: " " });
    setter({ type: "numOfEmployees", payload: "" });
    setter({ type: "firstLastName", payload: " " });
    setter({ type: "phoneNumber", payload: "" });
    setter({ type: "hiringRole", payload: "" });
    setter({ type: "hiringBudget", payload: "" });
    console.log(state);
  };

  return (
    <Box pt="80px" w={isSmallerThan720 ? "95%" : "75%"} m="auto">
      <form onSubmit={handleSubmit}>
        <Flex justifyContent={isSmallerThan720 ? "center" : ""}>
          {/* Accordion start here */}
          <Box w={isSmallerThan1220 ? "90%" : "55%"}>
            <Box m="0px 0px 16px" color="#2d2d2d" fontWeight="700">
              <Text fontSize="28px">Create an employer account</Text>
            </Box>
            <Box color="#767676" fontSize="16px">
              <Text>
                You haven't posted a job before, so you'll need to create an
                employer account.
              </Text>
            </Box>
            <Accordion
              allowMultiple
              mt="30px"
              outline="1px solid rgb(212, 210, 208)"
              borderRadius="5px"
            >
              <AccordionItem borderRadius="15px">
                <AccordionButton
                  bg="#F3F2F1"
                  borderBottom="1px solid rgb(212, 210, 208)"
                  _hover={{
                    outline: "2px solid #2557A7",
                    backgroundColor: "rgba(126, 195, 255, 0.15)",
                  }}
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

            {/* companyName part  start here*/}
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
            {/* end here */}

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
                onChange={(e) => {
                  setter({ type: "numOfEmployees", payload: e.target.value });
                }}
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
                onChange={(e) => {
                  setter({ type: "hiringRole", payload: e.target.value });
                }}
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
                onChange={(e) => {
                  setter({ type: "hiringBudget", payload: e.target.value });
                }}
              >
                <option value="budgetRole">
                  I have a budget for my role(s)
                </option>
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
                onChange={(e) => {
                  setter({ type: "aboutUs", payload: e.target.value });
                }}
              >
                <option value="budgetRole">
                  Search engine (ex. Google, Bing, Yahoo)
                </option>
                <option value="Billboard">Billboard</option>
                <option value="Podcast">Podcast</option>
                <option value="Mail">Mail</option>
                <option value="onlineVideo">Online video</option>
                <option value="socialMedia">Social media</option>
                <option value="streamingAudio">
                  Streaming audio (ex. Spotify, Pandora)
                </option>
                <option value="Radio">Radio (AM/FM/XM)</option>
                <option value="WOM">Word of mouth</option>
                <option value="Newspaper">Newspaper</option>
                <option value="OtherAboutUs">Other</option>
              </Select>
            </Box>
            {/* end here */}
            {/* {isErrorCompanyName || isErrorFirstLastName ? <Box></Box> : ""} */}
            <Box mt="10px" mb="20px" display="flex" justifyContent="flex-end">
              <Input
                type="submit"
                value="Save and continue"
                bg="#2557a7"
                color="white"
                fontWeight="700"
                fontSize="16px"
                p="9px 16px"
                w={isSmallerThan480 ? "100%" : "181px"}
                alignItems="center"
                h="46px"
                cursor="pointer"
                _hover={{ bg: "#124699ea" }}
                _active={false}
              />
            </Box>
          </Box>
          {isSmallerThan1220 ? (
            ""
          ) : (
            <Box w="50%" pl="50px" pt="50px">
              <Image
                src={
                  "https://storage.cloudconvert.com/tasks/90443d60-1f4e-4de7-b871-0a7f16c5ecd2/svgexport-5.png?AWSAccessKeyId=cloudconvert-production&Expires=1658722699&Signature=l6Rw%2BdoAgv0bDYVc%2Bn1BzwLZBhs%3D&response-content-disposition=inline%3B%20filename%3D%22svgexport-5.png%22&response-content-type=image%2Fpng"
                }
                alt="girl image"
                w="60vw"
              />
            </Box>
          )}
        </Flex>
      </form>
    </Box>
  );
};

export default FormEPI;
