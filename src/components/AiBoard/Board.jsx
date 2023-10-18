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

export default function Board() {
  return (
    <>
      <Flex gap={30} justify={"space-between"}>
        <Text fontSize={"2xl"}>Enter Board Title</Text>
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
          <Flex gap={10}>
            <Card maxW="sm">
              <CardHeader>
                <Flex spacing="4">
                  <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
                    <Box>
                      <Text>Card Title</Text>
                    </Box>
                  </Flex>
                  <IconButton
                    variant="ghost"
                    colorScheme="gray"
                    aria-label="See menu"
                    icon={<BsThreeDots />}
                  />
                </Flex>
              </CardHeader>{" "}
              <Image
                objectFit="cover"
                src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                alt="Chakra UI"
              />
              <CardBody>
                <Flex spacing="4" align="center" maxW={60}>
                  <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
                    <Box>
                      <Text>Card Title</Text>
                    </Box>
                  </Flex>
                  <IconButton
                    variant="ghost"
                    colorScheme="gray"
                    aria-label="See menu"
                    icon={<BsThreeDots />}
                  />
                </Flex>
                <Flex>
                  <Text>+ Add a Tab</Text>
                </Flex>
              </CardBody>
            </Card>

            <Card>
              <CardBody>
                {" "}
                <Flex spacing="4">
                  <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
                    <Box>
                      <Text>Add new list</Text>
                    </Box>
                  </Flex>
                  <IconButton
                    variant="ghost"
                    colorScheme="gray"
                    aria-label="See menu"
                    icon={<BsThreeDots />}
                  />
                </Flex>
                <Flex spacing="4" align="center">
                  <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
                    <Box>
                      <Text>Enter Card Title</Text>
                    </Box>
                  </Flex>
                </Flex>{" "}
                <Stack direction="row" spacing={4} align="center">
                  <Button colorScheme="teal" variant="solid">
                    Add Tab
                  </Button>
                  <Button colorScheme="teal" variant="link">
                    Cancel
                  </Button>
                </Stack>
              </CardBody>
            </Card>
          </Flex>
        </Box>
      </Stack>
    </>
  );
}
