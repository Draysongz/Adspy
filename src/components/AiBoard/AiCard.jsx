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
  Image,
  Heading,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  FormControl,
  Input,
  FormLabel,
  InputGroup,
  InputRightElement,
  CardFooter,
  Editable,
  EditableInput,
  EditableTextarea,
  EditablePreview,
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
// import Image from "next/image";
import { useRouter } from "next/router";
import Board from "./Board";

export default function AiCard() {
  return (
    <>
      <Flex gap={30} justify={"space-between"}>
        <Text fontSize={"2xl"}>Enter Card Title</Text>
        <Button
          colorScheme="teal"
          variant="outline"
          leftIcon={<BsFillShareFill />}
          rounded="none"
        >
          Share
        </Button>
      </Flex>
      <Stack
        spacing={4}
        bg={useColorModeValue("white", "gray.700")}
        rounded={"xl"}
        boxShadow={"lg"}
        p={10}
        my={4}
      >
        {" "}
        <Box border={"1px solid #0066B2"} p={5} bg={"rgba(0, 102, 178, 0.10)"}>
          {" "}
          <Image
            objectFit="contain"
            width={"20"}
            height="20"
            // src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            alt="Chakra UI"
          />
          <Flex direction={"column"}>
            <Text>
              {" "}
              <IconButton
                variant="ghost"
                colorScheme="gray"
                aria-label="See menu"
                icon={<BsThreeDots />}
              />
              Description
            </Text>
            <Card maxW="lg">
              <CardHeader>
                <Flex spacing="4" justify={"space-between"}>
                  <IconButton
                    variant="ghost"
                    colorScheme="gray"
                    aria-label="See menu"
                    icon={<BsThreeDots />}
                  />{" "}
                  <IconButton
                    variant="ghost"
                    colorScheme="gray"
                    aria-label="See menu"
                    icon={<BsThreeDots />}
                  />{" "}
                  <IconButton
                    variant="ghost"
                    colorScheme="gray"
                    aria-label="See menu"
                    icon={<BsThreeDots />}
                  />{" "}
                  <IconButton
                    variant="ghost"
                    colorScheme="gray"
                    aria-label="See menu"
                    icon={<BsThreeDots />}
                  />{" "}
                  <IconButton
                    variant="ghost"
                    colorScheme="gray"
                    aria-label="See menu"
                    icon={<BsThreeDots />}
                  />{" "}
                  <IconButton
                    variant="ghost"
                    colorScheme="gray"
                    aria-label="See menu"
                    icon={<BsThreeDots />}
                  />
                </Flex>
              </CardHeader>{" "}
              <CardBody>
                // Click the text to edit
                <Editable defaultValue="Take some chakra">
                  <EditablePreview />
                  <EditableTextarea />
                </Editable>
              </CardBody>
              <CardFooter>
                <Stack direction="row" spacing={4} align="center">
                  <Button colorScheme="teal" variant="solid">
                    Add Tab
                  </Button>
                  <Button colorScheme="teal" variant="link">
                    Cancel
                  </Button>
                </Stack>
              </CardFooter>
            </Card>
          </Flex>
        </Box>
      </Stack>
    </>
  );
}
