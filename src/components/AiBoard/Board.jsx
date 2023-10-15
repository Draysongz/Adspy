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
      <Flex
        h={["100vh", "100vh", "100vh"]}
        maxW="70vw"
        flexDir={["row", "row", "column"]}
        bg={useColorModeValue("gray.50", "gray.800")}
        color={useColorModeValue("gray.900", "white")}
      >
        <Box alignItems="center" justifyContent="center" mt={10} mx={"10vw"}>
          <VStack>
            <Flex gap={30}>
              <Text>Enter Board Title</Text>
              <Button
                colorScheme="teal"
                variant="outline"
                leftIcon={<BsFillShareFill />}
                rounded="none"
              >
                Share
              </Button>
            </Flex>
            <Box border="2px solid" borderColor="#0066B2">
              <Flex gap={10}>
                <Card maxW="sm">
                  <CardHeader>
                    <Flex spacing="4">
                      <Flex
                        flex="1"
                        gap="4"
                        alignItems="center"
                        flexWrap="wrap"
                      >
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
                      <Flex
                        flex="1"
                        gap="4"
                        alignItems="center"
                        flexWrap="wrap"
                      >
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
                      <Flex
                        flex="1"
                        gap="4"
                        alignItems="center"
                        flexWrap="wrap"
                      >
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
                      <Flex
                        flex="1"
                        gap="4"
                        alignItems="center"
                        flexWrap="wrap"
                      >
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
          </VStack>
        </Box>
      </Flex>
    </>
  );
}
