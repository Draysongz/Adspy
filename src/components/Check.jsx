import React from "react";
import { Box, Flex, Heading, Text, Button, Image } from "@chakra-ui/react";
import commerce from "../images/commerce.png";
import estate from "../images/estate.png";
import beauty from "../images/beauty.png";
import fashion from "../images/fashion.png";
import more from "../images/more.png";
import check from "../images/check.png";
import IG from "../images/IG.svg";
import linked from "../images/linked.svg";
import x from "../images/x.svg";
import fb from "../images/fb.svg";
import yt from "../images/yt.svg";
const Check = () => {
  return (
    <Flex
      w={["100vw", "100vw", "100vw", "98.7vw"]}
      bgColor={"#F8F8F8"}
      p={10}
      gap={5}
      direction={"column"}
      overflowX={"hidden"}
    >
      <Box alignSelf={"center"} minW={"40vw"}>
        <Heading
          width={["100vw", "100vw", "100vw", "95vw"]}
          fontSize={["16px", "24px", "36px"]}
          textAlign={"center"}
        >
          Check Competitors Ads From Any Industry{" "}
        </Heading>

        <Flex
          direction={["column", "column", "column", "row"]}
          p={["7%", "7%", "8%", "7%"]}
          gap={5}
          width={"95vw"}
        >
          <Box
            backgroundRepeat={"no-repeat"}
            bgImage={commerce}
            bgSize={"cover"}
            w={["85vw", "85vw", "85vw", "16vw"]}
            position={"relative"}
            h={["45vh", "45vh", "44vh"]}
          >
            <Text
              w={["28vw", "28vw", "20vw", "8vw"]}
              textAlign={"center"}
              bottom={"5%"}
              pos={"absolute"}
              color={"white"}
            >
              E-commerce
            </Text>
          </Box>

          <Box
            backgroundRepeat={"no-repeat"}
            bgImage={fashion}
            bgSize={"cover"}
            w={["85vw", "85vw", "85vw", "16vw"]}
            position={"relative"}
            h={["45vh", "45vh", "44vh"]}
          >
            <Text
              w={["28vw", "28vw", "20vw", "8vw"]}
              textAlign={"center"}
              bottom={"5%"}
              pos={"absolute"}
              color={"white"}
            >
              Fashion
            </Text>
          </Box>

          <Box
            backgroundRepeat={"no-repeat"}
            bgImage={estate}
            bgSize={"cover"}
            w={["85vw", "85vw", "85vw", "16vw"]}
            position={"relative"}
            h={["45vh", "45vh", "44vh"]}
          >
            <Text
              w={["28vw", "28vw", "20vw", "8vw"]}
              textAlign={"center"}
              bottom={"5%"}
              pos={"absolute"}
              color={"white"}
            >
              Real estate
            </Text>
          </Box>

          <Box
            backgroundRepeat={"no-repeat"}
            bgImage={beauty}
            bgSize={"cover"}
            w={["85vw", "85vw", "85vw", "16vw"]}
            position={"relative"}
            h={["45vh", "45vh", "44vh"]}
          >
            <Text
              w={["28vw", "28vw", "20vw", "8vw"]}
              textAlign={"center"}
              bottom={"5%"}
              pos={"absolute"}
              color={"white"}
            >
              Beauty
            </Text>
          </Box>

          <Box
            backgroundRepeat={"no-repeat"}
            bgImage={more}
            bgSize={"cover"}
            w={["85vw", "85vw", "85vw", "16vw"]}
            position={"relative"}
            h={["45vh", "45vh", "44vh"]}
          >
            <Text
              w={["28vw", "28vw", "20vw", "8vw"]}
              textAlign={"center"}
              bottom={"5%"}
              pos={"absolute"}
              color={"white"}
            >
              more
            </Text>
          </Box>
        </Flex>
      </Box>

      <Flex
        direction={["column", "column", "column", "row"]}
        justifyContent={"space-between"}
        alignItems={"center"}
        px={10}
        py={5}
      >
        <Flex
          bgImage={check}
          h={["45vh", "45vh", "60vh"]}
          w={["85vw", "85vw", "85vw", "38vw"]}
          bgRepeat={"no-repeat"}
          bgSize={"cover"}
          direction={"column"}
          justifyContent={"space-between"}
        >
          <Flex
            w={["50vw", "50vw", "25vw", "14vw"]}
            alignItems={"center"}
            bgColor={"white"}
            h={"6vh"}
            gap={2}
            justifyContent={"flex-start"}
          >
            <Image src={IG} alt="instagram" w={"10%"} />
            <Text>Instagram Ads Library </Text>
          </Flex>

          <Flex alignItems={"center"} gap={2} justifyContent={"end"}>
            <Flex
              bgColor={"white"}
              h={"6vh"}
              w={["45vw", "45vw", "20vw", "14vw"]}
              alignItems={"center"}
            >
              <Image
                src={linked}
                alt="instagram"
                w={["17%", "17%", "20%", "10%"]}
              />
              <Text w={["50vw", "50vw", "50vw", "12vw"]}>
                Linkedin Ads Spy{" "}
              </Text>
            </Flex>
          </Flex>

          <Flex alignItems={"center"} gap={2} justifyContent={"start"}>
            <Flex
              bgColor={"white"}
              direction={"row"}
              w={["45vw", "45vw", "20vw", "14vw"]}
              h={"6vh"}
              alignItems={"center"}
            >
              <Image src={x} alt="instagram" w={["17%", "17%", "27%", "10%"]} />
              <Text w={["50vw", "50vw", "50vw", "12vw"]}>Twitter Ads Spy </Text>
            </Flex>
          </Flex>

          <Flex justifyContent={"space-between"}>
            <Flex alignItems={"center"} gap={2} justifyContent={"start"}>
              <Flex
                bgColor={"white"}
                direction={"row"}
                w={["45vw", "45vw", "24vw", "14vw"]}
                h={"6vh"}
                alignItems={"center"}
              >
                <Image
                  src={yt}
                  alt="instagram"
                  w={["17%", "17%", "27%", "10%"]}
                />
                <Text w={["50vw", "50vw", "50vw", "12vw"]}>
                  Youtube Ads Spy{" "}
                </Text>
              </Flex>
            </Flex>

            <Flex alignItems={"center"} gap={2} justifyContent={"start"}>
              <Flex
                bgColor={"white"}
                direction={"row"}
                w={["45vw", "45vw", "27vw", "14vw"]}
                h={"6vh"}
                alignItems={"center"}
              >
                <Image
                  src={fb}
                  alt="instagram"
                  w={["17%", "17%", "27%", "10%"]}
                />
                <Text w={["50vw", "50vw", "50vw", "12vw"]}>
                  Facebook Ads Spy{" "}
                </Text>
              </Flex>
            </Flex>
          </Flex>
        </Flex>

        <Flex direction={"column"} gap={5}>
          <Heading
            fontSize={["xl", "xl", "4xl", "4xl"]}
            mt={["8px", "8px", "8px", "0px"]}
            textAlign={"center"}
          >
            Check Competitors Ads With Knoweth
          </Heading>
          <Text textAlign={"justify"} w={["85vw", "85vw", "85vw", "38vw"]}>
            Do you want to run highly profitable ads but you&rsquo;re wondering,
            what is the best content to use, who should I target, and how can I
            write a compelling copy? Then, this is for you. With Knoweth, you
            can spy on your competitors&rsquo; ads, know their winning ad
            creatives (images, videos, and copies), who they are targeting, and
            their sales page. No more running ads without results. With Knoweth,
            you can now 10x your sales.
          </Text>

          <Button
            fontSize={"md"}
            borderRadius={"md"}
            alignSelf={["center", "center", "center", "start"]}
            w={["65vw", "65vw", "35vw", "25vw"]}
          >
            Know your competitors ads
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Check;
