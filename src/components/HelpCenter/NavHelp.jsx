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
  useTheme,
} from "@chakra-ui/react";
import React from "react";
import { IoIosArrowDown } from "react-icons/io";

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
  const theme = useTheme();

  console.log(theme);

  return (
    <Box>
      <Flex direction="row" justifyContent="space-between" h="42px">
        <Flex direction="row" alignItems="center" gap="16px">
          <Image
            src="https://theme.zdassets.com/theme_assets/499832/0671704df754683d3a836feff8546bb108cc1f1b.svg"
            w="127.5"
            h="34"
          />
          <Text fontSize="1.25rem" as="b" color="#2d2d2d" mt="15px">
            Help Centre
          </Text>
        </Flex>
        <Box>
          {/* select languages part */}
          <Popover isLazy>
            <PopoverTrigger>
              <Button color="#2557a7" fontWeight="600" bg="transparent">
                English {"(IN)"}{" "}
                <Icon ml="7px" fontSize="1.2rem" as={IoIosArrowDown} />
              </Button>
            </PopoverTrigger>
            <PopoverContent
              overflowX="hidden"
              overflowY="scroll"
              w="260px"
              color="#424242"
              rounded="5px"
              h="500px"
              textAlign="left"
              bg="white"
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
        </Box>
      </Flex>
    </Box>
  );
};
