import {
  Box,
  Container,
  Link,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Select,
  SimpleGrid,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";

function Byindustry() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Select
        color="teal"
        textDecoration="underline"
        w="350px"
        border="3px solid blue"
        borderRadius="20px"
        onClick={onOpen}
        placeholder="Choose an industry"
      ></Select>

      <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent maxW="1300px">
          <ModalHeader ml="20">Browse top paying jobs by industry</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {/* <Lorem count={2} /> */}
            <Box>
              <Container as={Stack} maxW={"6xl"} py={0}>
                <SimpleGrid
                  templateColumns={{ sm: "1fr 1fr", md: "2fr 2fr 2fr" }}
                  spacing={10}
                >
                  <Stack align={"flex-start"}>
                    <Link
                      cursor="pointer"
                      textDecoration="underline"
                      color="darkblue"
                      fontWeight="700"
                      fontSize="15px"
                      mb="5px"
                      lineHeight="30.02px"
                      href={"#"}
                      _hover={{ textDecoration: "none" }}
                    >
                      All Industries
                    </Link>
                    <Link
                      cursor="pointer"
                      lineHeight="30.02px"
                      textDecoration="underline"
                      as="u"
                      color="black"
                      fontWeight="700"
                      fontSize="15px"
                      mb="5px"
                      href={"#"}
                      _hover={{ textDecoration: "none" }}
                    >
                      Arts, Entertainment & Recreation
                    </Link>
                    <Link
                      cursor="pointer"
                      lineHeight="30.02px"
                      textDecoration="underline"
                      as="u"
                      color="black"
                      fontWeight="700"
                      fontSize="15px"
                      mb="5px"
                      href={"#"}
                      _hover={{ textDecoration: "none" }}
                    >
                      Financial Services
                    </Link>
                    <Link
                      cursor="pointer"
                      lineHeight="30.02px"
                      textDecoration="underline"
                      as="u"
                      color="black"
                      fontWeight="700"
                      fontSize="15px"
                      mb="5px"
                      href={"#"}
                      _hover={{ textDecoration: "none" }}
                    >
                      Human Resources & Staffing
                    </Link>
                    <Link
                      cursor="pointer"
                      lineHeight="30.02px"
                      textDecoration="underline"
                      as="u"
                      color="black"
                      fontWeight="700"
                      fontSize="15px"
                      mb="5px"
                      href={"#"}
                      _hover={{ textDecoration: "none" }}
                    >
                      Legal
                    </Link>
                    <Link
                      cursor="pointer"
                      lineHeight="30.02px"
                      textDecoration="underline"
                      as="u"
                      color="black"
                      fontWeight="700"
                      fontSize="15px"
                      mb="5px"
                      href={"#"}
                      _hover={{ textDecoration: "none" }}
                    >
                      Media & Mass Communication
                    </Link>
                    <Link
                      cursor="pointer"
                      lineHeight="30.02px"
                      textDecoration="underline"
                      as="u"
                      color="black"
                      fontWeight="700"
                      fontSize="15px"
                      mb="5px"
                      href={"#"}
                      _hover={{ textDecoration: "none" }}
                    >
                      Pharmaceutical & Biotechnology
                    </Link>
                    <Link
                      cursor="pointer"
                      lineHeight="30.02px"
                      textDecoration="underline"
                      as="u"
                      color="black"
                      fontWeight="700"
                      fontSize="15px"
                      href={"#"}
                      mb="25px"
                      _hover={{ textDecoration: "none" }}
                    >
                      Restaurants & Food Service
                    </Link>
                    <Link
                      cursor="pointer"
                      lineHeight="30.02px"
                      textDecoration="underline"
                      as="u"
                      color="black"
                      fontWeight="700"
                      fontSize="15px"
                      href={"#"}
                      mb="25px"
                      _hover={{ textDecoration: "none" }}
                    >
                      Tourism & Hospitality
                    </Link>
                  </Stack>
                  <Stack align={"flex-start"}>
                    <Link
                      cursor="pointer"
                      lineHeight="30.02px"
                      textDecoration="underline"
                      as="u"
                      color="black"
                      fontWeight="700"
                      fontSize="15px"
                      mb="5px"
                      href={"#"}
                      _hover={{ textDecoration: "none" }}
                    >
                      Aerospace & Defense
                    </Link>
                    <Link
                      cursor="pointer"
                      lineHeight="30.02px"
                      textDecoration="underline"
                      as="u"
                      color="black"
                      fontWeight="700"
                      fontSize="15px"
                      mb="5px"
                      href={"#"}
                      _hover={{ textDecoration: "none" }}
                    >
                      Construction, Repair & Maintenance Services
                    </Link>
                    <Link
                      cursor="pointer"
                      lineHeight="30.02px"
                      textDecoration="underline"
                      as="u"
                      color="black"
                      fontWeight="700"
                      fontSize="15px"
                      mb="5px"
                      href={"#"}
                      _hover={{ textDecoration: "none" }}
                    >
                      Government & Civil Services
                    </Link>
                    <Link
                      cursor="pointer"
                      lineHeight="30.02px"
                      textDecoration="underline"
                      as="u"
                      color="black"
                      fontWeight="700"
                      fontSize="15px"
                      mb="5px"
                      href={"#"}
                      _hover={{ textDecoration: "none" }}
                    >
                      Information Technology
                    </Link>
                    <Link
                      cursor="pointer"
                      lineHeight="30.02px"
                      textDecoration="underline"
                      as="u"
                      color="black"
                      fontWeight="700"
                      fontSize="15px"
                      mb="5px"
                      href={"#"}
                      _hover={{ textDecoration: "none" }}
                    >
                      Management & Consulting
                    </Link>
                    <Link
                      cursor="pointer"
                      lineHeight="30.02px"
                      textDecoration="underline"
                      as="u"
                      color="black"
                      fontWeight="700"
                      fontSize="15px"
                      mb="5px"
                      href={"#"}
                      _hover={{ textDecoration: "none" }}
                    >
                      Nonprofit & NGO
                    </Link>
                    <Link
                      cursor="pointer"
                      lineHeight="30.02px"
                      textDecoration="underline"
                      as="u"
                      color="black"
                      fontWeight="700"
                      fontSize="15px"
                      mb="5px"
                      href={"#"}
                      _hover={{ textDecoration: "none" }}
                    >
                      Power, Mining & Utilities
                    </Link>
                    <Link
                      cursor="pointer"
                      lineHeight="30.02px"
                      textDecoration="underline"
                      as="u"
                      color="black"
                      fontWeight="700"
                      fontSize="15px"
                      mb="5px"
                      href={"#"}
                      _hover={{ textDecoration: "none" }}
                    >
                      Retail & Wholesale
                    </Link>
                    <Link
                      cursor="pointer"
                      lineHeight="30.02px"
                      textDecoration="underline"
                      as="u"
                      color="black"
                      fontWeight="700"
                      fontSize="15px"
                      mb="5px"
                      href={"#"}
                      _hover={{ textDecoration: "none" }}
                    >
                      Transportation & Logistics
                    </Link>
                  </Stack>
                  <Stack align={"flex-start"}>
                    <Link
                      cursor="pointer"
                      lineHeight="30.02px"
                      textDecoration="underline"
                      as="u"
                      color="black"
                      fontWeight="700"
                      fontSize="15px"
                      mb="5px"
                      href={"#"}
                      _hover={{ textDecoration: "none" }}
                    >
                      Agriculture
                    </Link>
                    <Link
                      cursor="pointer"
                      lineHeight="30.02px"
                      textDecoration="underline"
                      as="u"
                      color="black"
                      fontWeight="700"
                      fontSize="15px"
                      mb="5px"
                      href={"#"}
                      _hover={{ textDecoration: "none" }}
                    >
                      Education
                    </Link>
                    <Link
                      cursor="pointer"
                      lineHeight="30.02px"
                      textDecoration="underline"
                      as="u"
                      color="black"
                      fontWeight="700"
                      fontSize="15px"
                      mb="5px"
                      href={"#"}
                      _hover={{ textDecoration: "none" }}
                    >
                      Healthcare
                    </Link>
                    <Link
                      cursor="pointer"
                      lineHeight="30.02px"
                      textDecoration="underline"
                      as="u"
                      color="black"
                      fontWeight="700"
                      fontSize="15px"
                      mb="5px"
                      href={"#"}
                      _hover={{ textDecoration: "none" }}
                    >
                      Insurance
                    </Link>
                    <Link
                      cursor="pointer"
                      lineHeight="30.02px"
                      textDecoration="underline"
                      as="u"
                      color="black"
                      fontWeight="700"
                      fontSize="15px"
                      mb="5px"
                      href={"#"}
                      _hover={{ textDecoration: "none" }}
                    >
                      Manufacturing
                    </Link>
                    <Link
                      cursor="pointer"
                      lineHeight="30.02px"
                      textDecoration="underline"
                      as="u"
                      color="black"
                      fontWeight="700"
                      fontSize="15px"
                      mb="5px"
                      href={"#"}
                      _hover={{ textDecoration: "none" }}
                    >
                      Personal Consumer Services
                    </Link>
                    <Link
                      cursor="pointer"
                      lineHeight="30.02px"
                      textDecoration="underline"
                      as="u"
                      color="black"
                      fontWeight="700"
                      fontSize="15px"
                      mb="5px"
                      href={"#"}
                      _hover={{ textDecoration: "none" }}
                    >
                      Real Estate
                    </Link>
                    <Link
                      cursor="pointer"
                      lineHeight="30.02px"
                      textDecoration="underline"
                      as="u"
                      color="black"
                      fontWeight="700"
                      fontSize="15px"
                      mb="5px"
                      href={"#"}
                      _hover={{ textDecoration: "none" }}
                    >
                      Telecommunications
                    </Link>
                  </Stack>
                </SimpleGrid>
              </Container>
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
export default Byindustry;
