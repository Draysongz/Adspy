import React from "react";
import { Box, Flex, Heading, Text, Button, Center } from "@chakra-ui/react";
import { FiPlay } from "react-icons/fi";
import Link from "next/link";

const Hero = () => {
  return (
    <Flex
      bgColor={"#0066B2"}
      minH={"50vh"}
      minW={"60vw"}
      w={["99.9vw", "100vw", "100vw", "98.7vw"]}
      overflowX={"hidden"}
    >
      <Flex direction="column" py={"8rem"} gap={4} w={"99vw"}>
        <Center>
          <Box textAlign={"center"} minW={"60vw"}>
            <Heading
              width={["80vw", "70vw", "70vw", "58vw"]}
              fontSize={["20px", "24px", "36px"]}
              color={"white"}
            >
              Spy on your competitors winning ads, write compelling copies +
              plan and organize tasks in your workspace
            </Heading>
          </Box>
        </Center>

        <Center>
          <Box textAlign={"center"}>
            <Text
              width={"45vw"}
              display={["none", "none", "none", "block"]}
              color={"white"}
            >
              Knoweth is your all-in-one platform that helps you spy on your
              competitors ads, write compelling copies, or plan & organize your
              task
            </Text>
          </Box>
        </Center>

        <Center>
          <Flex gap={4} direction={["column", "column", "column", "row"]}>
            <Button
              background={"white"}
              borderRadius={"md"}
              fontSize={"md"}
              color={"#0066B2"}
            >
              <Link href="/adspy">Start spying with Knoweth</Link>
            </Button>
            <Button
              borderRadius={"md"}
              color={"white"}
              leftIcon={<FiPlay />}
              fontSize={"md"}
              border={"0.8px solid #F8F8F8"}
              variant={"outline"}
            >
              {" "}
              Watch How it works
            </Button>
          </Flex>
        </Center>
      </Flex>
    </Flex>
  );
};

export default Hero;
