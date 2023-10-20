import { useState } from "react";
import {
  Avatar,
  Box,
  Flex,
  Icon,
  Text,
  Stack,
  Button,
  useColorModeValue,

  // Image,
  Heading,
} from "@chakra-ui/react";

// Here we have used react-icons package for the icons
import { FaBell } from "react-icons/fa";
import { AiOutlineTeam, AiOutlineHome } from "react-icons/ai";
import { BsImage } from "react-icons/bs";
import PiImageDuotone from "react-icons/pi";
import { FiMenu } from "react-icons/fi";
import duotone from "../../images/ph_image-duotone.svg";

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
        <Icon as={BsImage}></Icon>
        <Stack>
          <Heading>Title</Heading>
          <Text>{"{Date Added}"}</Text>
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
        <Icon as={BsImage}></Icon>
        <Stack>
          <Heading>Title</Heading>
          <Text>{"{Date Added}"}</Text>
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
