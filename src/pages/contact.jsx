"use client";

import {
  Box,
  Flex,
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
import knoweth from "../images/knoweth copy.png";
import IG from "../images/IG.svg";
import x from "../images/x.svg";
import fb from "../images/fb.svg";
import linked from "../images/linked.svg";
import Image from "next/image";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import Nav from "@/components/Nav";

const Contact = () => {
  const btnRef = useRef();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const onSubmit = async (e) => {
    e.preventDefault();
    alert("fired...");
  };
  return (
    <Flex direction={"column"}>
      {/* navigation bar */}
      <Nav />
      {/* <>
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
                          <Text>Contact Us</Text>
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
      </> */}

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
          <Heading mb={5}>Contact Us</Heading>
          <Text color={"#1B1D29"} fontSize="sm">
            Got some questions or feedback? We are here to help. Reach out to us
            through the form below. Our team will get back to you as soon as
            possible
          </Text>
        </Flex>

        <Flex w={["85vw", "85vw", "75vw", "45vw"]}>
          <FormControl isRequired onSubmit={onSubmit}>
            <FormLabel fontWeight={"500"}>Name</FormLabel>
            <Input
              type="text"
              placeholder="Enter your Name"
              _placeholder={{ color: "#C5C0C0" }}
            />
            <FormLabel fontWeight={"500"}>Email Address</FormLabel>
            <Input
              type="email"
              placeholder="Enter your email address"
              _placeholder={{ color: "#C5C0C0" }}
            />
            <FormLabel mt={4} fontWeight={"500"}>
              How can we help you?
            </FormLabel>
            <Input
              type="text"
              placeholder="Enter your request or complaint"
              _placeholder={{ color: "#C5C0C0" }}
              size="lg"
              h={20}
            />
            <Button
              mt={5}
              borderRadius={"md"}
              w={["80vw", "80vw", "75vw", "45vw"]}
            >
              Submit
            </Button>
          </FormControl>
        </Flex>

        <Flex gap={5}>
          <Text>Connect with us</Text>
          <Flex
            justifyContent={"space-between"}
            gap={["5%", "5%", "10%", "10%"]}
          >
            <Box>
              <Image src={IG} alt="instagram" w={"90%"} />
            </Box>

            <Box>
              <Image src={fb} alt="facebook" w={"90%"} />
            </Box>

            <Box>
              <Image src={linked} alt="linkedIn" w={"90%"} />
            </Box>
            <Box>
              <Image src={x} alt="twitter" w={"90%"} />
            </Box>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Contact;
