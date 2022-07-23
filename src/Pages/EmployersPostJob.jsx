import { Box } from "@chakra-ui/react";
import React from "react";
import FooterEPJ from "../components/EmployersPostJob/FooterEPJ";
import FormEPI from "../components/EmployersPostJob/FormEPI";
import HeaderEPJ from "../components/EmployersPostJob/HeaderEPJ";

const EmployersPostJob = () => {
  return (
    <Box>
      <Box>
        <HeaderEPJ />
      </Box>
      <Box>
        <FormEPI />
      </Box>
      <Box>
        <FooterEPJ />
      </Box>
    </Box>
  );
};

export default EmployersPostJob;
