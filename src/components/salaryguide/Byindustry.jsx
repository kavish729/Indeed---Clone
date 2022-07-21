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
                        Business Management, Administrative & Customer Support
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
                        Construction & Extraction
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
                        Food & Beverage
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
                        Manufacturing & Utilities
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
                        Personal Service
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
                        Sales & Retail
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
                        Technology
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
                        Agriculture, Fishing & Forestry
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
                        Cleaning & Grounds Maintenance
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
                        Education & Instruction
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
                        Marketing, Advertising & Public Relations
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
                        Repair, Maintenance & Installation
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
                        Science & Research
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
                        Transportation
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
                        Architecture & Engineering
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
                        Community & Social Services
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
                        Finance & Accounting
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
                        Media, Arts & Design
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
                        Safety, Security & Defence Service
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
                        Supply Chain & Logistics
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
                        Travel, Attractions & Events
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