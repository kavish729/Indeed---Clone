import {
  Button,
  Flex,
  Input,
  useColorMode,
  useMediaQuery,
} from "@chakra-ui/react";

export const SearchHelp = () => {
  const { colorMode } = useColorMode();
  const [isSmallerThan530] = useMediaQuery("(max-width: 530px)");

  return (
    <Flex
      justifyContent="center"
      m="auto"
      pb="30px"
      display={isSmallerThan530 ? "inline-block" : "flex"}
      alignItems="center"
      gap="10px"
      mt="80px"
      mb="82px"
      w={isSmallerThan530 ? "90%" : ""}
    >
      <Input
        placeholder="Search"
        color={colorMode === "light" ? "#040606" : "#f3f2f1"}
        p="0.875rem 1.25rem"
        border={colorMode === "light" ? "1px solid #2222" : "2px solid #333333"}
        h="60px"
        maxW="486px"
        fontWeight="400"
        fontSize="1.35rem"
        bg={colorMode === "light" ? "faf9f8" : "#040606"}
        _placeholder={{ color: "#999999" }}
        _focus={{
          border: "2px solid rgba(255,255,255)",
        }}
        outline="1px solid black"
      />
      <Button
        border="0px"
        p="0.875rem 1.25rem"
        fontWeight="700"
        fontSize="1.3rem"
        h="60px"
        bg="#2557a7"
        w={isSmallerThan530 ? "100%" : "145px"}
        _hover={{ bg: "#16499aca" }}
        color="white"
        _active={false}
        mt={isSmallerThan530 ? "10px" : ""}
        display={isSmallerThan530 ? "block" : ""}
      >
        Search
      </Button>
    </Flex>
  );
};
