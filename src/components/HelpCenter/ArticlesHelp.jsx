import {
  Box,
  Flex,
  Grid,
  Heading,
  Icon,
  Image,
  Link,
  Text,
  useColorMode,
  useMediaQuery,
} from "@chakra-ui/react";
import React from "react";
import { BsArrowRight } from "react-icons/bs";

const articleData = [
  {
    id: Date.now() * Math.random() * 300,
    articla_image:
      "https://theme.zdassets.com/theme_assets/499832/c40885bb35f3a4536d326729167fdaea39caccea.svg",
    articla_heading: "My Indeed Account",
    articla_query1: "How Do I Reset My Password?",
    articla_query2: "I Can't Sign In To My Account",
    more_articla_query: "Explore more articles",
  },
  {
    id: Date.now() * Math.random() * 300,
    articla_image:
      "	https://theme.zdassets.com/theme_assets/499832/1dbbb69f200b91766bc89d80885adcf67de2be88.svg",
    articla_heading: "Company Pages & Reviews",
    articla_query1: "How Do I See All Reviews on Company Pages?",
    articla_query2: "How to Add and Delete Your Company Reviews",
    more_articla_query: "Explore more articles",
  },
  {
    id: Date.now() * Math.random() * 300,
    articla_image:
      "https://theme.zdassets.com/theme_assets/499832/27b11e664903f5c4cec1cf1dbd53b7854e3a5c9f.svg",
    articla_heading: "Job Alerts",
    articla_query1: "How to create a Job Alert",
    articla_query2: "How to Cancel Job Alert Emails",
    more_articla_query: "Explore more articles",
  },
  {
    id: Date.now() * Math.random() * 300,
    articla_image:
      "https://theme.zdassets.com/theme_assets/499832/a61bc87ffdeefdcfa0fc42389305142e287e3c6b.svg",
    articla_heading: "Job Search Tips",
    articla_query1: "Getting Started With Your Job Search",
    articla_query2: "Guidelines for a Safe Job Search",
    more_articla_query: "Explore more articles",
  },
  {
    id: Date.now() * Math.random() * 300,
    articla_image:
      "https://theme.zdassets.com/theme_assets/499832/1e46d6b0affc46bf0e19d01dad5be19f3426290f.svg",
    articla_heading: "Indeed Resume",
    articla_query1: "How Do I Replace an Existing Resume on My Account?",
    articla_query2: "How Do I View My Resume on Indeed?",
    more_articla_query: "Explore more articles",
  },
  {
    id: Date.now() * Math.random() * 300,
    articla_image:
      "	https://theme.zdassets.com/theme_assets/499832/e4c72ac3207b3bb5229bf85b4691abc6266e7aa1.svg",
    articla_heading: "Applying for a Job",
    articla_query1: "How to apply to a job on Indeed",
    articla_query2: "",
    more_articla_query: "Explore more articles",
  },
  {
    id: Date.now() * Math.random() * 300,
    articla_image:
      "	https://theme.zdassets.com/theme_assets/499832/afa468401cff0088ed7865bbc1df64e1d1760fec.svg",
    articla_heading: "Indeed Assessments",
    articla_query1:
      "Seeing My Assessments Score or Which Questions I Answered Correctly",
    articla_query2: "",
    more_articla_query: "Explore more articles",
  },
  {
    id: Date.now() * Math.random() * 300,
    articla_image:
      "	https://theme.zdassets.com/theme_assets/499832/1db2bcec1fc1ac099f4aa10493a715966f9f1c2d.svg",
    articla_heading: "Technical Support",
    articla_query1:
      "My web browser is not up to date. How can I get the latest version?",
    articla_query2: "Troubleshooting Device Issues With Indeed Interview",
    more_articla_query: "Explore more articles",
  },
  {
    id: Date.now() * Math.random() * 300,
    articla_image:
      "https://theme.zdassets.com/theme_assets/499832/5803406e2048438d334c974ea741941a6a289878.svg",
    articla_heading: "Accessibility",
    articla_query1: "Screen reader compatibility",
    articla_query2: "Keyboard",
    more_articla_query: "Explore more articles",
  },
];

export const ArticlesHelp = () => {
  const { colorMode } = useColorMode();
  const [isSmallerThan530] = useMediaQuery("(max-width: 530px)");
  const [isSmallerThan720] = useMediaQuery("(max-width: 720px)");

  console.log(isSmallerThan530);

  return (
    <Box w="90%" m="auto">
      <Flex pt="76px" flexWrap="wrap" justifyContent="center" gap="25px">
        {articleData.map((data) => (
          <Box
            key={data.id}
            h="176px"
            border="1px solid #68686841"
            maxW={isSmallerThan530 ? "37rem" : "37rem"}
            p="16px"
            rounded="5px"
            display="flex"
            alignItems="center"
          >
            <Flex>
              {isSmallerThan530 ? (
                ""
              ) : (
                <Box m="11px 5px" w="150px" h="120px">
                  <Image
                    h="120px"
                    w="150px"
                    src={data.articla_image}
                    alt={data.articla_heading}
                  />
                </Box>
              )}
              <Box>
                <Flex
                  w={
                    isSmallerThan530
                      ? "85vw"
                      : isSmallerThan720
                      ? "50vw"
                      : "421px"
                  }
                  textAlign="left"
                  direction={"column"}
                  alignItems="left"
                  gap="10px"
                >
                  <Heading
                    fontSize="24px"
                    color={colorMode === "light" ? "#2d2d2d" : "#fff"}
                  >
                    <Link>{data.articla_heading}</Link>
                  </Heading>
                  <Text
                    _hover={{ color: "#949494" }}
                    fontSize="16px"
                    color={colorMode === "light" ? "#595959" : "#fff"}
                  >
                    <Link textDecoration="underline">
                      {data.articla_query1}
                    </Link>
                  </Text>
                  <Text
                    _hover={{ color: "#949494" }}
                    fontSize="16px"
                    color={colorMode === "light" ? "#595959" : "#fff"}
                  >
                    <Link textDecoration="underline">
                      {data.articla_query2}
                    </Link>
                  </Text>
                  <Text
                    as="b"
                    color="#6792f0"
                    _hover={{ color: "#3f73d3" }}
                    fontSize="17px"
                  >
                    <Link display="flex" gap="10px">
                      {data.more_articla_query}
                      <Image
                        src={
                          "https://theme.zdassets.com/theme_assets/499832/83551c87a7e3e299f7b1eed4fd613526749d9e43.svg"
                        }
                        alt=""
                      />
                    </Link>
                  </Text>
                </Flex>
              </Box>
            </Flex>
          </Box>
        ))}
      </Flex>
    </Box>
  );
};
