import { Box, Flex, Text, useMediaQuery } from "@chakra-ui/react";
import React from "react";

const FooterEPJ = () => {
  const [isSmallerThan1500] = useMediaQuery("(max-width: 1500px)");
  const [isSmallerThan480] = useMediaQuery("(max-width: 480px)");

  return (
    <Box borderTop="1px solid #bdbdbda2" color="#595959" p="32px">
      <Flex
        fontSize="12px"
        display={isSmallerThan1500 ? "inline-block" : "flex"}
        justifyContent="space-between"
      >
        <Box>
          <Text>©2022 Indeed</Text>
        </Box>
        <Flex
          gap="5px"
          mt={isSmallerThan1500 ? "20px" : ""}
          direction={isSmallerThan480 ? "column" : "row"}
        >
          <Text cursor="pointer" borderBottom="1px solid #595959">
            Cookies, privacy and terms
          </Text>
          {isSmallerThan480 ? "" : "-"}
          <Text cursor="pointer" borderBottom="1px solid #595959">
            Privacy center
          </Text>
          {isSmallerThan480 ? "" : "-"}

          <Text cursor="pointer" borderBottom="1px solid #595959">
            Security
          </Text>
          {isSmallerThan480 ? "" : "-"}

          <Text cursor="pointer" borderBottom="1px solid #595959">
            Contact
          </Text>
        </Flex>
      </Flex>
    </Box>
  );
};

export default FooterEPJ;
