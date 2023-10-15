import {
  Box,
  Flex,
  Heading,
  Icon,
  Text,
  Stack,
  Image,
  IconButton,
  Button,
  useDisclosure,
  useColorMode,
  useColorModeValue,
  VStack,
  InputRightElement,
  SimpleGrid,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Avatar,
  HStack,
  InputGroup,
  Input,
  color,
  Center,
} from "@chakra-ui/react";
import { BsFillShareFill, BsThreeDots } from "react-icons/bs";
import { BiLike, BiChat, BiShare } from "react-icons/bi";
import Nav from "../Nav";
import { SideBarFunc } from "./SideDash";
import Board from "./Board";

export default function AiBoard() {
  return (
    <>
      <Nav />
      <Flex
        bgColor={"#0066B2"}
        p={6}
        gap={10}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Box>
          <Text fontSize={"lg"} color={"#F8F8F8"}>
            Make more sales with Knoweth Pro!
          </Text>
        </Box>

        <Box>
          <Button
            color={"#1B1D29"}
            bgColor={"#fff"}
            fontSize={"md"}
            borderRadius={"md"}
          >
            Upgrade to Knoweth Pro
          </Button>
        </Box>
      </Flex>
      <Flex
        h={["100vh", "100vh", "100vh"]}
        maxW="100vw"
        flexDir={["row", "row", "row"]}
        bg={useColorModeValue("gray.50", "gray.800")}
        color={useColorModeValue("gray.900", "white")}
      >
        <Flex></Flex>
        <SideBarFunc />
        <Board />
      </Flex>
    </>
  );
}
