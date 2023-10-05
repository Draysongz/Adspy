"use client";

import React from "react";
import {
  Box,
  Flex,
  Text,
  Button,
  Card,
  CardBody,
  Center,
  Heading,
  InputLeftElement,
  InputGroup,
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  AccordionIcon,
  Spacer,
  Drawer,
  DrawerContent,
  DrawerOverlay,
  DrawerBody,
  DrawerCloseButton,
  useDisclosure,
  Input,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { useRef } from "react";
import knoweth from "../images/knoweth.png";
import Link from "next/link";
import Image from "next/image";
import { FiPlay } from "react-icons/fi";
import { Search2Icon } from "@chakra-ui/icons";
import meta from "../images/meta.svg";
import linkedin from "../images/linkedin.svg";
import pen from "../images/pen.svg";
import twitter from "../images/twitter.svg";
import writing from "../images/writing.svg";
import youtube from "../images/youtube.svg";
import Footer from "../components/Footer";
import Nav from "@/components/Nav";

const Products = () => {
  const btnRef = useRef();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Flex direction={"column"} gap={10}>
      <>
        <Nav />
        {/* <Flex
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
            <Link href="/login">
              <Button borderRadius={"md"} w={"8vw"} variant={"outline"}>
                Login
              </Button>
            </Link>
          </Flex>
        </Flex> */}

        {/* <Flex
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
                          <Link href="/login">
                            <Button
                              borderRadius={"md"}
                              w={"28vw"}
                              variant={"outline"}
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
        </Flex> */}
      </>

      <Flex
        bgColor={"#0066B2"}
        minH={"50vh"}
        minW={"60vw"}
        w={["99.9vw", "100vw", "100vw", "98.7vw"]}
        overflowX={"hidden"}
      >
        <Flex direction="column" py={"8rem"} gap={5} w={"99vw"}>
          <Center>
            <Box textAlign={"center"} minW={"60vw"}>
              <Heading
                width={["80vw", "70vw", "70vw", "58vw"]}
                fontSize={["20px", "24px", "36px"]}
                color={"white"}
              >
                Our Products
              </Heading>
            </Box>
          </Center>

          <Center>
            <Box textAlign={"center"}>
              <Text
                width={"45vw"}
                display={["none", "none", "none", "block"]}
                color={"white"}
              >
                Knoweth helps you spy on your competitors&apos; ads, write
                compelling copies, or plan & organize your task
              </Text>
            </Box>
          </Center>

          <Center>
            <Flex gap={4} direction={["column", "column", "column", "row"]}>
              <Button
                background={"white"}
                borderRadius={"md"}
                fontSize={"md"}
                color={"#0066B2"}
              >
                Start spying with Knoweth
              </Button>
              <Button
                borderRadius={"md"}
                color={"white"}
                leftIcon={<FiPlay />}
                fontSize={"md"}
                border={"0.8px solid #F8F8F8"}
                variant={"outline"}
              >
                {" "}
                Watch How it works
              </Button>
            </Flex>
          </Center>

          <Center>
            <Box w={["90vw", "90vw", "85vw", "45vw"]}>
              <InputGroup bgColor={"white"} borderRadius="md">
                <InputLeftElement color={"#1B1D29"}>
                  <Search2Icon />
                </InputLeftElement>
                <Input type="search" placeholder="Search" />
              </InputGroup>
            </Box>
          </Center>
        </Flex>
      </Flex>

      <Flex direction={"column"} gap={10}>
        <Flex
          justifyContent={"space-evenly"}
          direction={["column", "column", "row", "row"]}
          gap={5}
        >
          <Card h={["30vh", "35vh", "23vh", "35vh"]} minW={"27vw"}>
            <CardBody>
              <Flex direction={"column"} gap={5}>
                <Image src={meta} alt="meta" width={"20"} />
                <Heading fontSize={"md"}>
                  Meta Ads (Facebook & Instagram)
                </Heading>
                <Text>
                  Spy on your competitors ads within <br />
                  Facebook and Instagram
                </Text>
              </Flex>
            </CardBody>
          </Card>

          <Card h={["30vh", "35vh", "23vh", "35vh"]} minW={"27vw"}>
            <CardBody>
              <Flex direction={"column"} gap={5}>
                <Image src={youtube} alt="meta" width={"20"} />
                <Heading fontSize={"md"}>Google and Youtube Ads</Heading>
                <Text>
                  Spy on your competitors ads on
                  <br /> Youtube and Google
                </Text>
              </Flex>
            </CardBody>
          </Card>

          <Card h={["30vh", "35vh", "23vh", "35vh"]} minW={"27vw"}>
            <CardBody>
              <Flex direction={"column"} gap={5}>
                <Image src={linkedin} alt="meta" width={"20"} />
                <Heading fontSize={"md"}>LinkedIn Ads</Heading>
                <Text>
                  Spy on your competitors ads on
                  <br />
                  Linkedin
                </Text>
              </Flex>
            </CardBody>
          </Card>
        </Flex>

        <Flex
          justifyContent={"space-evenly"}
          direction={["column", "column", "row", "row"]}
          gap={5}
        >
          <Card h={["30vh", "35vh", "23vh", "35vh"]} minW={"27vw"}>
            <CardBody>
              <Flex direction={"column"} gap={5}>
                <Image src={twitter} alt="meta" width={"20"} />
                <Heading fontSize={"md"}>Twitter Ads</Heading>
                <Text>
                  Spy on your competitors ads within <br />
                  Twitter
                </Text>
              </Flex>
            </CardBody>
          </Card>

          <Card h={["35vh", "35vh", "23vh", "35vh"]} minW={"27vw"}>
            <CardBody>
              <Flex direction={"column"} gap={5}>
                <Image src={writing} alt="meta" width={"20"} />
                <Heading fontSize={"md"}>AI Writing</Heading>
                <Text>
                  Write compelling copies and find the <br />
                  right audience for your brand with AI
                </Text>
              </Flex>
            </CardBody>
          </Card>

          <Card h={["30vh", "35vh", "23vh", "35vh"]} minW={"27vw"}>
            <CardBody>
              <Flex direction={"column"} gap={5}>
                <Image src={pen} alt="meta" width={"20"} />
                <Heading fontSize={"md"}>Workplace</Heading>
                <Text>
                  Organize and plan your task for your <br />
                  next ad campaign
                </Text>
              </Flex>
            </CardBody>
          </Card>
        </Flex>
      </Flex>

      <Flex
        w={["100vw", "100vw", "98.7vw"]}
        bgColor={"#fff"}
        p={10}
        gap={5}
        direction={"column"}
      >
        <Heading fontSize={["md", "md", "4xl"]} textAlign={"center"}>
          Frequently Asked Questions (FAQ)
        </Heading>

        <Accordion allowToggle>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  Can I use Knoweth to spy on my competitors ads?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Yes. You can spy on your competitor's ad and know their winning
              creative and funnels. Create your FREE account, choose the
              platform you want, input the keyword or advertiser name, and start
              spying. Check "How it Works" to find out more.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  Is Knoweth FREE to use?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Yes. You can spy on your competitor's ad and know their winning
              creative and funnels. Create your FREE account, choose the
              platform you want, input the keyword or advertiser name, and start
              spying. Check "How it Works" to find out more.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  Can I use Knoweth to run ads?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Yes. You can spy on your competitor's ad and know their winning
              creative and funnels. Create your FREE account, choose the
              platform you want, input the keyword or advertiser name, and start
              spying. Check "How it Works" to find out more.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  How do I write copy?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Yes. You can spy on your competitor's ad and know their winning
              creative and funnels. Create your FREE account, choose the
              platform you want, input the keyword or advertiser name, and start
              spying. Check "How it Works" to find out more.
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Flex>

      <Footer />
    </Flex>
  );
};

export default Products;
