import { useState } from "react";
import {
  Avatar,
  Box,
  Flex,
  Icon,
  Text,
  Stack,
  Button,
  Drawer,
  DrawerContent,
  IconButton,
  useDisclosure,
  DrawerOverlay,
  useColorModeValue,
  Card,
  CardHeader,
  CardBody,
  // Image,
  Heading,
  Editable,
  EditableInput,
  EditableTextarea,
  EditablePreview,
  FormControl,
  Input,
  FormLabel,
  InputGroup,
  InputRightElement,
  CardFooter,
} from "@chakra-ui/react";
import {
  ViewIcon,
  ViewOffIcon,
  ChevronDownIcon,
  EditIcon,
} from "@chakra-ui/icons";
// Here we have used react-icons package for the icons
import { FaBell } from "react-icons/fa";
import { AiOutlineTeam, AiOutlineHome } from "react-icons/ai";
import {
  BsFolder2,
  BsCalendarCheck,
  BsFillShareFill,
  BsThreeDots,
} from "react-icons/bs";
import { FiMenu } from "react-icons/fi";
import { RiFlashlightFill } from "react-icons/ri";
import knoweth from "../../images/knoweth.png";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import Board from "./Board";

export default function AiFiles() {
  return (
    <>
      {" "}
      <Flex gap={30} justify={"space-between"}>
        <Text fontSize={"2xl"}>Files</Text>
        <Button
          colorScheme="teal"
          variant="solid"
          // leftIcon={<BsFillShareFill />}
          rounded="none"
        >
          Add Files
        </Button>
      </Flex>
      <Flex
        spacing={4}
        bg={useColorModeValue("white", "gray.700")}
        rounded={"xl"}
        boxShadow={"lg"}
        p={5}
        my={4}
      >
        <Icon></Icon>
        <Stack>
          <Heading>Title</Heading>
          <Text>&lbrace; Date Added &rbrace;</Text>
          <Flex>
            <Button variant="link">Edit</Button>
            <Button variant="link" color={"red"}>
              Delete
            </Button>
          </Flex>
        </Stack>
      </Flex>
      <Flex
        spacing={4}
        bg={useColorModeValue("white", "gray.700")}
        rounded={"xl"}
        boxShadow={"lg"}
        p={5}
        my={4}
      >
        <Icon></Icon>
        <Stack>
          <Heading>Title</Heading>
          <Text>&lbrace; Date Added &rbrace;</Text>
          <Flex>
            <Button variant="link">Edit</Button>
            <Button variant="link" color={"red"}>
              Delete
            </Button>
          </Flex>
        </Stack>
      </Flex>
      <Stack
        spacing={4}
        bg={useColorModeValue("white", "gray.700")}
        rounded={"xl"}
        boxShadow={"lg"}
        p={10}
        my={4}
      ></Stack>
    </>
  );
}
