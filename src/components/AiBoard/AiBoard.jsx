import {
  Box,
  Flex,
  Heading,
  Icon,
  Text,
  Stack,
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
  Center,
  CardFooter,
} from "@chakra-ui/react";
import Image from "next/image";
import { BsFillShareFill, BsThreeDots } from "react-icons/bs";
import { SideBarFunc } from "./SideDash";
import duotone from "../../images/ph_image-duotone.svg";

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
          <Flex gap={10} direction={["column", "row"]}>
            <Card maxW="md" rounded={"none"}>
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
              <Center bg="#D9D9D9" maxW={"325px"} h="134px">
                <Image src={duotone} />
              </Center>
              <CardBody>
                <Flex
                  align="center"
                  justify={"center"}
                  border={"1px solid #006"}
                  p={2}
                >
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

            <Card maxW="325px" maxH="199px" rounded={"none"}>
              <CardHeader>
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
              </CardHeader>
              <CardBody>
                {" "}
                <Flex spacing="4" align="center">
                  <Flex
                    flex="1"
                    gap="4"
                    alignItems="center"
                    flexWrap="wrap"
                    border={"1px solid #006"}
                    p={2}
                  >
                    <Box>
                      <Text>Enter Card Title</Text>
                    </Box>
                  </Flex>
                </Flex>{" "}
                <Stack direction="row" spacing={4} align="center" p={2}>
                  <Button colorScheme="teal" variant="solid">
                    Add Tab
                  </Button>
                  <Button colorScheme="teal" variant="link">
                    Cancel
                  </Button>
                </Stack>
              </CardBody>
              <CardFooter> </CardFooter>
            </Card>
          </Flex>
        </Box>
      </Stack>
    </>
  );
}
