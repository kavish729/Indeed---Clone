import React from "react";
import { Box, useColorMode } from "@chakra-ui/react";
import { NavHelp } from "../components/HelpCenter/NavHelp";
import { SearchHelp } from "../components/HelpCenter/SearchHelp";
import { ArticlesHelp } from "../components/HelpCenter/ArticlesHelp";
import { FooterHelp } from "../components/HelpCenter/FooterHelp";

export const HelpCenter = () => {
  const { colorMode } = useColorMode();
  document.title = "Custom Title";

  return (
    <Box>
      <Box p="1rem 1.5rem" bg={colorMode === "light" ? "#faf9f8" : "#0d171b"}>
        <NavHelp />
        <SearchHelp />
      </Box>
      <Box bg={colorMode === "light" ? "ffffff" : "#040606"}>
        <ArticlesHelp />
        <FooterHelp />
      </Box>
    </Box>
  );
};
