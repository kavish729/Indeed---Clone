import React from "react";
import { Box } from "@chakra-ui/react";
import { NavHelp } from "../components/HelpCenter/NavHelp";

export const HelpCenter = () => {
  return (
    <Box>
      <Box p="1rem 1.5rem" bg="#faf9f8">
        <NavHelp />
      </Box>
    </Box>
  );
};
