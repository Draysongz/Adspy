import { useState } from "react";
import {
  useColorMode,
  Switch,
  Flex,
  IconButton,
  Icon,
  Text,
  HStack,
  VStack,
  useDisclosure,
  useColorModeValue,
  Button,
} from "@chakra-ui/react";
import { FiSettings, FiLogOut } from "react-icons/fi";
import { BiSolidDashboard, BiSolidNotepad } from "react-icons/bi";
import { FaBitcoin, FaPaypal, FaGift } from "react-icons/fa";

import knoweth from "../../../public/knoweth.png";
import board from "../../../public/fluent_board-24-regular.svg";
import files from "../../../public/lucide_files.svg";
import records from "../../../public/vaadin_records.svg";
import label from "../../../public/fluent-emoji-high-contrast_label.svg";
import writing from "../../../public/material-symbols_full-coverage-outline.svg";
import Link from "next/link";
import Image from "next/image";

export const SideBarFunc = () => {
  return (
    <Flex
      bg={useColorModeValue("white", "gray.900")}
      color={useColorModeValue("#000", "gray.200")}
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      h={["100vh", "100vh", "100vh"]}
      w={{ base: 20, md: "30vw" }}
    >
      <Flex
        flexDir={["row", "row", "column", "column", "column"]}
        // position="fixed"
        top="1rem"
        left="1rem"
        align="flex-start"
        justifyContent={"space-between"}
      >
        {/* Desktop */}
        <Flex
          as="nav"
          flexDir={["row", "row", "column", "column", "column"]}
          align={["center", "center", "center", "flex-start", "flex-start"]}
          wrap={["wrap", "wrap", "nowrap", "nowrap", "nowrap"]}
          justifyContent="center"
          display={["flex", "flex", "flex", "flex", "flex"]}
          mt={5}
        >
          <Flex>
            {/* Mobile */}
            {/* <IconButton
              justifySelf={"flex-end"}
              onClick={onToggle}
              icon={
                isOpen ? (
                  <CloseIcon w={3} h={3} />
                ) : (
                  <HamburgerIcon w={5} h={5} />
                )
              }
              variant={"outline"}
              aria-label={"Toggle Navigation"}
              display={{ md: "none" }}
              ml={"auto"}
            /> */}
          </Flex>
          <Flex
            mt={{ base: 20, md: 10 }}
            cursor={"pointer"}
            flexDir={["row", "row", "column", "column", "column"]}
            align={[
              "center",
              "center",
              "flex-start",
              "flex-start",
              "flex-start",
            ]}
            wrap={["wrap", "wrap", "nowrap", "nowrap", "nowrap"]}
            justifyContent="center"
            mx="5"
            gap={5}
          >
            <Link href="/">
              <HStack
                borderRadius="sm"
                _hover={{
                  bg: "#0066B2",
                  color: "#ffffff",
                }}
                display={["flex", "flex", "flex", "flex", "flex"]}
              >
                <Image width={"30%"} mr={"1"} src={board} alt="board" />
                <Text
                  p={1}
                  fontSize="lg"
                  className="active"
                  display={["none", "none", "flex", "flex", "flex"]}
                >
                  Board
                </Text>{" "}
              </HStack>
            </Link>

            <Link href="/">
              <HStack
                borderRadius="sm"
                _hover={{
                  textDecor: "none",
                  bg: "#0066B2",
                  color: "#ffffff",
                }}
                display={["flex", "flex", "flex", "flex", "flex"]}
              >
                <Image width="150px" mr={"1"} src={board} alt="board" />
                <Text
                  p={1}
                  fontSize="lg"
                  display={["none", "none", "flex", "flex", "flex"]}
                >
                  Card
                </Text>
              </HStack>
            </Link>

            <Link href="/">
              <HStack
                borderRadius="sm"
                _hover={{
                  textDecor: "none",
                  bg: "#0066B2",
                  color: "#ffffff",
                }}
                display={["flex", "flex", "flex", "flex", "flex"]}
              >
                <Image
                  align={"center"}
                  width="150px"
                  mr={"1"}
                  src={writing}
                  alt="writing"
                />
                <Text
                  p={1}
                  fontSize="lg"
                  display={["none", "none", "flex", "flex", "flex"]}
                >
                  Cover
                </Text>
              </HStack>
            </Link>

            <Link href="/">
              <HStack
                borderRadius="sm"
                _hover={{
                  textDecor: "none",
                  bg: "#0066B2",
                  color: "#ffffff",
                }}
                display={["flex", "flex", "flex", "flex", "flex"]}
              >
                <Image
                  align={"center"}
                  width="150px"
                  mr={"1"}
                  src={label}
                  alt="board"
                />
                <Text
                  p={1}
                  fontSize="lg"
                  display={["none", "none", "flex", "flex", "flex"]}
                >
                  AI Writing
                </Text>
              </HStack>
            </Link>

            <Link href="/">
              <HStack
                borderRadius="sm"
                _hover={{
                  textDecor: "none",
                  bg: "#0066B2",
                  color: "#ffffff",
                }}
                display={["flex", "flex", "flex", "flex", "flex"]}
              >
                <Image
                  align={"center"}
                  width="150px"
                  mr={"1"}
                  src={files}
                  alt="board"
                />
                <Text
                  p={1}
                  fontSize="lg"
                  display={["none", "none", "flex", "flex", "flex"]}
                >
                  Files
                </Text>
              </HStack>
            </Link>

            <Link href="/">
              <HStack
                border="8px outline"
                borderRadius="sm"
                _hover={{
                  textDecor: "none",
                  bg: "#0066B2",
                  color: "#ffffff",
                }}
                display={["flex", "flex", "flex", "flex", "flex"]}
              >
                <Image
                  align={"center"}
                  width="150px"
                  mr={"1"}
                  src={records}
                  alt="board"
                  color="#ffffff"
                />
                <Text
                  p={1}
                  fontSize="lg"
                  display={["none", "none", "flex", "flex", "flex"]}
                >
                  Records
                </Text>
              </HStack>
            </Link>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};
