import {
  Box,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Icon,
  Input,
  Text,
} from "@chakra-ui/react";
import { BsExclamationCircleFill } from "react-icons/bs";
import React, { useReducer, useState } from "react";

const reducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "companyName": {
      return {
        ...state,
        companyName: action.payload,
      };
    }
    case "numOfEmployees": {
      return {
        ...state,
        numOfEmployees: action.payload,
      };
    }
    case "FirstLastName": {
      return {
        ...state,
        numOfEmployees: action.payload,
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
};

const FormEPI = () => {
  const [input, setInput] = useState("");
  const [state, setter] = useReducer(reducer, initState);

  const handleInputChange = (e) => {
    const { name, value, type } = e.target;

    if (type === "checkbox") {
      setInput({ ...input, [name]: value });
    }
  };
  const isError = input === "";

  return (
    <Box pt="80px" w="72%" border="1px solid red" m="auto">
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
        <Box w="55%">
          <FormControl isInvalid={isError}>
            <FormLabel>Your company's name*</FormLabel>
            <Input type="text" value={input} onChange={handleInputChange} />
            {isError ? (
              <FormErrorMessage>
                <Icon as={BsExclamationCircleFill} /> &nbsp; Add a company name.
              </FormErrorMessage>
            ) : (
              ""
            )}
          </FormControl>
        </Box>
      </form>
    </Box>
  );
};

export default FormEPI;
