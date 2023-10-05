import {
  Box,
  Flex,
  Image,
  Text,
  Button,
  Card,
  CardBody,
  Heading,
  Spacer,
  Drawer,
  DrawerContent,
  DrawerOverlay,
  DrawerBody,
  DrawerCloseButton,
  useDisclosure,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import React from "react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { useRef } from "react";
import knoweth from "../images/knoweth.png";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";

const Register = () => {
  const btnRef = useRef();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const onSubmit = async (e) => {
    e.preventDefault();
    alert("fired...");
  };
  return (
    <Flex direction={"column"}>
      {/* navigation bar */}
      <>
        <Flex
          p={4}
          alignItems={"center"}
          justifyContent={"space-between"}
          display={["none", "none", "flex"]}
        >
          <Box px={8}>
            <Image src={knoweth} alt="logo" />
          </Box>

          <Flex gap={10}>
            <Text>Products</Text>
            <Text>How it works</Text>
            <Text>Pricing</Text>
            <Link href="/faq">
              <Text>FAQS</Text>
            </Link>
            <Text>Contact Us</Text>
          </Flex>

          <Flex gap={3} px={8}>
            <Link href="/register">
              <Button borderRadius={"md"} w={"13vw"} color={"white"}>
                Login
              </Button>
            </Link>
          </Flex>
        </Flex>

        <Flex
          display={["block", "block", "none", "none"]}
          h={"12vh"}
          overflow={"hidden"}
          pos={"fixed"}
          zIndex={"1000"}
        >
          <Card borderRadius={"none"} bgColor={"#fff"} w={"100vw"} px={6}>
            <CardBody p={4}>
              <Flex alignItems={"center"}>
                <Box>
                  <Flex justifyContent={"center"}>
                    <Image src={knoweth} alt="logo" w={"70%"} />
                  </Flex>
                </Box>
                <Spacer />

                <Box>
                  <HamburgerIcon
                    ref={btnRef}
                    onClick={onOpen}
                    boxSize={6}
                    color={"#000"}
                  />
                  <Drawer
                    isOpen={isOpen}
                    placement="top"
                    onClose={onClose}
                    finalFocusRef={btnRef}
                  >
                    <DrawerOverlay />
                    <DrawerContent>
                      <DrawerCloseButton />

                      <DrawerBody>
                        <Flex gap={10} direction={["column", "column"]}>
                          <Text>Products</Text>
                          <Text>How it works</Text>
                          <Text>Pricing</Text>
                          <Link href="/faq">
                            <Text>FAQS</Text>
                          </Link>
                          <Text>Contact Us</Text>
                        </Flex>

                        <Flex gap={3} mt={6}>
                          <Link href="/register">
                            <Button
                              borderRadius={"md"}
                              w={["30vw"]}
                              color={"white"}
                            >
                              Login
                            </Button>
                          </Link>
                        </Flex>
                      </DrawerBody>
                    </DrawerContent>
                  </Drawer>
                </Box>
              </Flex>
            </CardBody>
          </Card>
        </Flex>
      </>

      <Flex
        justifyContent={"space-between"}
        gap={5}
        alignItems={"center"}
        direction={"column"}
      >
        <Flex
          mt={["22%", "22%", "10%", "0%"]}
          w={["85vw", "85vw", "75vw", "45vw"]}
          direction={"column"}
        >
          <Heading> Create Account</Heading>
          <Text color={"#1B1D29"}>Enter Your Personal Details</Text>
        </Flex>

        <Flex w={["85vw", "85vw", "75vw", "45vw"]}>
          <FormControl isRequired onSubmit={onSubmit}>
            <FormLabel fontWeight={"500"}>Full Name</FormLabel>
            <Input
              type="text"
              placeholder="Enter your full name"
              _placeholder={{ color: "#C5C0C0" }}
            />
            <FormLabel mt={2} fontWeight={"500"}>
              Email Address
            </FormLabel>
            <Input
              type="email"
              placeholder="Enter your email address"
              _placeholder={{ color: "#C5C0C0" }}
            />
            <FormLabel mt={2} fontWeight={"500"}>
              Username
            </FormLabel>
            <Input
              type="text"
              placeholder="Enter your username"
              _placeholder={{ color: "#C5C0C0" }}
            />
            <FormLabel mt={2} fontWeight={"500"}>
              Phone Number
            </FormLabel>
            <Input
              type="number"
              placeholder="Enter your Phone number"
              _placeholder={{ color: "#C5C0C0" }}
            />
            <FormLabel mt={2} fontWeight={"500"}>
              Password
            </FormLabel>
            <Input
              type="text"
              placeholder="Enter your password"
              _placeholder={{ color: "#C5C0C0" }}
            />
            <Button
              mt={2}
              borderRadius={"md"}
              w={["80vw", "80vw", "75vw", "45vw"]}
            >
              Register
            </Button>
            <Flex
              gap={5}
              mt={4}
              justifyContent={"space-between"}
              direction={["column", "column", "row"]}
            >
              <Button
                type={"submit"}
                leftIcon={<FcGoogle />}
                color={"#0066B2"}
                fontSize={"lg"}
                fontWeight={"300"}
                borderRadius={"md"}
                w={["80vw", "80vw", "30vw", "20vw"]}
                variant={"outline"}
              >
                Sign Up With Google
              </Button>

              <Button
                type={"submit"}
                leftIcon={<BsFacebook />}
                color={"#0066B2"}
                fontSize={"lg"}
                fontWeight={"300"}
                borderRadius={"md"}
                w={["80vw", "80vw", "30vw", "20vw"]}
                variant={"outline"}
              >
                Sign Up With Facebook
              </Button>
            </Flex>
            <Text mt={3} textAlign={"center"}>
              Already have An Account?{" "}
              <Link href="/login">
                <span style={{ color: "#0066B2" }}>Login</span>
              </Link>
            </Text>
          </FormControl>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Register;
