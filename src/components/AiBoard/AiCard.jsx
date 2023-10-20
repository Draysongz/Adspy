import { useState } from "react";
import {
  Avatar,
  Box,
  Flex,
  Icon,
  Text,
  Stack,
  Button,
  IconButton,
  useColorModeValue,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Editable,
  EditableInput,
  EditableTextarea,
  EditablePreview,
  Center,
} from "@chakra-ui/react";

// Here we have used react-icons package for the icons
import { FaBell } from "react-icons/fa";
import { AiOutlineUnorderedList } from "react-icons/ai";
import {
  BsFillShareFill,
  BsThreeDots,
  BsImage,
  BsEmojiLaughing,
  BsFillGrid3X3GapFill,
} from "react-icons/bs";
import { PiTextAa, PiTextB } from "react-icons/pi";
import { FiMenu, FiLink2 } from "react-icons/fi";
import Link from "next/link";
// import Image from "next/image";
import { useRouter } from "next/router";

import duotone from "../../images/ph_image-duotone.svg";
import Image from "next/image";

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
        <Flex
          flexDir={"column"}
          border={"1px solid #0066B2"}
          p={5}
          bg={"rgba(0, 102, 178, 0.10)"}
          maxW="989px"
          h="668px"
          align={"center"}
          justify="center"
        >
          <Center bg="#D9D9D9" w={"739px"} h="85px">
            <Image src={duotone} />
          </Center>
          <Flex direction={"column"}>
            <Text>
              {" "}
              <IconButton
                variant="ghost"
                colorScheme="gray"
                aria-label="See menu"
                icon={<BsFillGrid3X3GapFill />}
              />
              Description
            </Text>
            <Card w="737px" h="433px" rounded={"none"}>
              <CardHeader borderBottom={"solid 0.5px #000000"}>
                <Flex justify={"space-between"}>
                  <Icon as={PiTextAa} /> <Icon as={PiTextB} />
                  <Icon as={AiOutlineUnorderedList} />
                  <Icon as={FiLink2} /> <Icon as={BsImage} />
                  <Icon as={BsEmojiLaughing} />
                </Flex>
              </CardHeader>
              <CardBody>
                // Click the text below to edit
                <Editable defaultValue="Take some chakra">
                  <EditablePreview />
                  <EditableTextarea />
                </Editable>
              </CardBody>
              <CardFooter>
                <Stack direction="row" spacing={4} align="center">
                  <Button colorScheme="teal" variant="solid" rounded={"md"}>
                    Add Tab
                  </Button>
                  <Button colorScheme="teal" variant="link">
                    Cancel
                  </Button>
                </Stack>
              </CardFooter>
            </Card>
          </Flex>
        </Flex>
      </Stack>
    </>
  );
}
