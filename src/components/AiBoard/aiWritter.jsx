"use client";
import { useChat } from "ai/react";
import {
  Avatar,
  Box,
  Flex,
  Icon,
  Text,
  Stack,
  Button,
  useColorModeValue,
  Heading,
  Form,
  FormControl,
  Input,
  FormLabel,
  InputGroup,
  InputRightElement,
  UnorderedList,
  ListItem,
  Textarea,
} from "@chakra-ui/react";

export function AiWriter() {
  const { input, handleInputChange, handleSubmit, messages } = useChat();

  console.log(messages);

  return (
    <Stack
      spacing={4}
      bg={useColorModeValue("white", "gray.700")}
      rounded={"xl"}
      boxShadow={"lg"}
      p={10}
      my={4}
      direction={"row"}
    >
      {" "}
      <Flex
        // as="side-bar"
        bg="#0066B2"
        h={"100vh"}
        w="244px"
        direction="column"
        justifyContent={"space-between"}
      >
        <Button
          border={"solid 0.5px rgba(255, 255, 255, 0.5)"}
          bg="transparent"
          borderRadius="5px"
          p="10px"
          m="10px"
        >
          + New Chat
        </Button>
        <UnorderedList p="10px" m="10px" h={"100%"}>
          <ListItem listStyleType={"none"} p="15px 0" cursor={"pointer"}>
            BLUGH
          </ListItem>
        </UnorderedList>
        <Flex
          borderTop={"solid 0.5px rgba(255, 255, 255, 0.5)"}
          p="10px"
          m="10px"
        >
          <Text color="white">Made by ovpn</Text>
        </Flex>
      </Flex>
      <Flex
        // as={"main"}
        h={"100vh"}
        w="100%"
        direction={"column"}
        justifyContent="space-between"
        alignItems="center"
        textAlign="center"
      >
        <Heading>AI Writer</Heading>
        {/* <UnorderedList></UnorderedList> */}
        <div>
          {/* text messages */}
          {messages.map((message) => {
            return (
              <div key={message.id}>
                {/*  Name of person talking */}
                {message.role === "assistant" ? (
                  <h3 className="text-lg font-semibold mt-2">
                    Stucco Assistant
                  </h3>
                ) : (
                  <h3 className="text-lg font-semibold mt-2">User</h3>
                )}

                {/* Formatting the message */}
                {message.content.split("\n").map((currentTextBlock, index) => {
                  if (currentTextBlock === "") {
                    return <p key={message.id + index}>&nbsp;</p>; // " "
                  } else {
                    return <p key={message.id + index}>{currentTextBlock}</p>;
                  }
                })}
              </div>
            );
          })}
          <Stack>
            <Flex
              w="100%"
              flexDirection="column"
              justifyContent={"center"}
              alignItems="center"
            >
              {" "}
              <form className="" onSubmit={handleSubmit}>
                <p>User Message</p>
                <Textarea
                  placeholder="What&rsquo;s on your mind?"
                  value={input}
                  onChange={handleInputChange}
                  w="100%"
                  borderRadius="5px"
                  p="12px 15px"
                  bg="rgba(255,255,255,0.05)"
                  boxShadow="rgba(0,0,0,0.05) 0 54px 55px, rgba(0,0,0,0.05) 0 -12px 30px, rgba(0,0,0,0.05) 0 4px 6px, rgba(0,0,0,0.05) 0 12px 3px, rgba(0,0,0,0.05) 0 -3px 5px"
                />
                <button
                  colorScheme="teal"
                  type="submit"
                  pos="absolute"
                  right="0"
                >
                  Send Message
                </button>
              </form>{" "}
              {/* <FormControl
                onSubmit={handleSubmit}
                pos={"relative"}
                w="100%"
                maxW="650px"
              >
                <Input
                  value={input}
                  onChange={handleInputChange}
                  placeholder="What&rsquo;s on your mind?"
                />{" "}
                <Button
                  colorScheme="teal"
                  type="submit"
                  pos="absolute"
                  right="0"
                >
                  &gt;
                </Button>
              </FormControl> */}
            </Flex>

            <Text color="gray.400" fontSize="11px" p="10px">
              Free Research Preview. Ai Writer may produce inaccurate
              information about people, places, or facts. Ai Writer September 25
              Version
            </Text>
          </Stack>{" "}
        </div>
      </Flex>
    </Stack>
  );
}
