import React from "react";
import { Box, Flex, Heading, Text, Button, Center } from "@chakra-ui/react";
import yti from "../images/yti.svg";
import Image from "next/image";

const Steps = () => {
  return (
    <Flex
      w={["100vw", "100vw", "98.7vw"]}
      bgColor={"#F8F8F8"}
      p={10}
      gap={5}
      direction={"column"}
    >
      <Box alignSelf={"center"} minW={"40vw"}>
        <Heading
          width={["80vw", "70vw", "70vw", "70vw"]}
          fontSize={["16px", "24px", "36px"]}
          textAlign={"center"}
        >
          Ready to Identify Winning Ads Creatives and Funnel to Implement in
          your Business?{" "}
        </Heading>
        <Text mt={2} textAlign={"center"}>
          Check the Easy & Simple Steps to Create Ads
        </Text>
      </Box>
      <Center display={"flex"} flexDir={"column"}>
        <Flex
          width={"80vw"}
          h={["40vh", "50vh", "68vh"]}
          justifyContent={"center"}
          bgColor={"#0076B2;"}
        >
          <Image src={yti} alt="youtube icon" />
        </Flex>

        <Flex
          justifyContent={"space-between"}
          direction={["column", "column", "row"]}
          gap={5}
          mt={4}
          w={"80vw"}
        >
          <Flex gap={4} direction={"column"}>
            <Heading as="h5" textAlign={"center"}>
              Step 1
            </Heading>
            <Text textAlign={"center"}>Create a free account</Text>
          </Flex>

          <Flex gap={4} direction={"column"}>
            <Heading as="h5" textAlign={"center"}>
              Step 2
            </Heading>
            <Text textAlign={"center"} w={["80vw", "80vw", "18vw"]}>
              Search for ads based on specific keywords
            </Text>
          </Flex>

          <Flex gap={4} direction={"column"}>
            <Heading as="h5" textAlign={"center"}>
              Step 3
            </Heading>
            <Text textAlign={"center"}>Write compelling copy</Text>
          </Flex>

          <Flex gap={4} direction={"column"}>
            <Heading as="h5" textAlign={"center"}>
              {" "}
              Step 4
            </Heading>
            <Text textAlign={"center"} w={["80vw", "80vw", "18vw"]}>
              Organize your results in the workspace
            </Text>
          </Flex>
        </Flex>
        <Button
          w={["85vw", "85vw", "30vw", "20vw"]}
          mt={10}
          borderRadius={"md"}
          fontSize={"md"}
          mb={20}
        >
          Try Knoweth Free
        </Button>
      </Center>
    </Flex>
  );
};

export default Steps;
