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

const Login = () => {
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
            <Link href="/contact">
              <Text>Contact Us</Text>
            </Link>
          </Flex>

          <Flex gap={3} px={8}>
            <Link href="/register">
              <Button borderRadius={"md"} w={"13vw"} color={"white"}>
                Create Account
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
                          <Link href="/contact">
                            <Text>Contact Us</Text>
                          </Link>
                        </Flex>

                        <Flex gap={3} mt={6}>
                          <Link href="/register">
                            <Button
                              borderRadius={"md"}
                              w={["30vw"]}
                              color={"white"}
                            >
                              Create Account
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
          mt={["25%", "25%", "10%", "5%"]}
          w={["85vw", "85vw", "75vw", "45vw"]}
          direction={"column"}
        >
          <Heading>Login</Heading>
          <Text color={"#1B1D29"}>Enter Your Personal Details</Text>
        </Flex>

        <Flex w={["85vw", "85vw", "75vw", "45vw"]}>
          <FormControl isRequired onSubmit={onSubmit}>
            <FormLabel fontWeight={"500"}>Email Address/ Username</FormLabel>
            <Input
              type="email"
              placeholder="Enter your email address/ Username"
              _placeholder={{ color: "#C5C0C0" }}
            />
            <FormLabel mt={4} fontWeight={"500"}>
              Password
            </FormLabel>
            <Input
              type="text"
              placeholder="Enter your password"
              _placeholder={{ color: "#C5C0C0" }}
            />
            <Link href="/forgot">
              <Text mt={2} color={"#0066B2"}>
                Forgot Password?
              </Text>
            </Link>
            <Button
              mt={2}
              borderRadius={"md"}
              w={["80vw", "80vw", "75vw", "45vw"]}
            >
              Login
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
                Login With Google
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
                Login With Facebook
              </Button>
            </Flex>
            <Text mt={3} textAlign={"center"}>
              Don&apos;t Have An Account?{" "}
              <Link href="/register">
                <span style={{ color: "#0066B2" }}>Register</span>
              </Link>
            </Text>
          </FormControl>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Login;
