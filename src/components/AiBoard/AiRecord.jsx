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
import Board from "./AiBoard";

export default function AiRecord() {
  return (
    <>
      {" "}
      <Flex
        spacing={4}
        bg={useColorModeValue("white", "gray.700")}
        rounded={"xl"}
        boxShadow={"lg"}
        p={5}
        my={4}
      >
        <Stack>
          <Text>What&rsquo;s on your mind?</Text>
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
        <Stack>
          <Text>
            Lorem ipsum dolor sit amet consectetur. Purus nec proin consequat
            nullam dignissim blandit leo metus malesuada. i to rtor amet
            scelerisque. Scelerisque enim tempor mi a nunc rtor amet
            scelerisque. Scelerisque enim tempor mi a nunc ..rtor rtor amet
            scelerisque. Scelerisque enim tempor mi a nunc tortor.rtor amet
            scelerisque. Scelerisque enim tempor scelerisque. Scelerisque enim
            tempor mi a nunc tortor.rtor amet scelerisque. Scelerisque enim
            tempor mi a nunc tortor.
          </Text>
          <Flex>
            <Button variant="link">Edit</Button>
            <Button variant="link" color={"red"}>
              Delete
            </Button>
          </Flex>
        </Stack>
      </Flex>
    </>
  );
}
