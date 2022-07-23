import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import {
  Box,
  Image,
  Flex,
  Text,
  Popover,
  PopoverTrigger,
  Button,
  PopoverContent,
  PopoverBody,
  Link,
  Icon,
  useColorMode,
  useMediaQuery,
} from "@chakra-ui/react";
import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { NavLink } from "react-router-dom";

// countries name
const languages = [
  "العربية",
  "Čeština",
  "Dansk",
  "Deutsch",
  "Ελληνικά",
  "English (AU)",
  "English (CA)",
  "English (GB)",
  "English (NZ)",
  "English (US)",
  "Español",
  "Español (Latinoamérica)",
  "Español (España)",
  " Español (US)",
  "Suomi",
  "English (GB)",
  "Français (Canada)",
  "עברית",
  "Magyar",
  "Bahasa Indonesia",
  "Italiano",
  "日本語",
  "한국어",
  "Nederlands",
  "Nederlands (België)",
  "Norsk",
  "Polski",
  "Português",
  "Português do Brasil",
  "Română",
  "Русский",
  "svenska",
  "ไทย",
  "Türkçe",
  "Українська",
  "Tiếng Việt",
  "简体中文",
  "繁體中文",
];

export const NavHelp = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [isSmallerThan507] = useMediaQuery("(max-width: 507px)");

  return (
    <Box>
      <Flex direction="row" justifyContent="space-between" h="42px">
        <Flex
          display={isSmallerThan507 ? "inline-block" : "flex"}
          direction="row"
          alignItems="center"
          gap="16px"
        >
          <NavLink to="/">
            <Image
              src="https://theme.zdassets.com/theme_assets/499832/0671704df754683d3a836feff8546bb108cc1f1b.svg"
              w="127.5"
              h="34"
            />
          </NavLink>
          <Text
            fontSize="1.25rem"
            as="b"
            color={colorMode === "light" ? "#2d2d2d" : "#f3f2f1"}
            mt="15px"
          >
            Help Centre
          </Text>
        </Flex>
        <Box>
          {/* select languages part */}
          <Popover isLazy>
            <PopoverTrigger>
              <Button
                color={colorMode === "light" ? "#2557a7" : "#386fc7"}
                _hover={false}
                _active={false}
                fontWeight="600"
                bg="transparent"
              >
                English {"(IN)"}{" "}
                <Icon ml="7px" fontSize="1.2rem" as={IoIosArrowDown} />
              </Button>
            </PopoverTrigger>
            <PopoverContent
              overflowX="hidden"
              overflowY="scroll"
              w="260px"
              color={colorMode === "light" ? "#424242" : "#fff"}
              rounded="5px"
              h="500px"
              textAlign="left"
              bg={colorMode === "light" ? "#fff" : "#000000"}
              fontSize="18px"
              fontWeight="400"
              p="0px 0px 0px 30px"
            >
              {languages.map((item, index) => (
                <PopoverBody
                  key={index}
                  w="300px"
                  h="38px"
                  mr="auto"
                  p="7px 40px 7px 0px"
                >
                  <Link>{item}</Link>
                </PopoverBody>
              ))}
            </PopoverContent>
          </Popover>
          {/* dark and ligght part  */}
          <Button
            onClick={toggleColorMode}
            bg="transparent"
            _active="false"
            _hover="false"
          >
            {colorMode === "light" ? (
              <SunIcon color="#457cd5" />
            ) : (
              <MoonIcon color="#9d9d9d" />
            )}
          </Button>
        </Box>
      </Flex>
    </Box>
  );
};
