import React from "react";
import { Box, useColorMode } from "@chakra-ui/react";
import { NavHelp } from "../components/HelpCenter/NavHelp";
import { SearchHelp } from "../components/HelpCenter/SearchHelp";

export const HelpCenter = () => {
  const { colorMode } = useColorMode();

  return (
    <Box>
      <Box p="1rem 1.5rem" bg={colorMode === "light" ? "#faf9f8" : "#0d171b"}>
        <NavHelp />
        <SearchHelp />
      </Box>
    </Box>
  );
};
