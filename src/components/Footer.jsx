import React from "react";
import { Flex, Text, Heading, Box } from "@chakra-ui/react";
import IG from "../images/IG.svg";
import x from "../images/x.svg";
import fb from "../images/fb.svg";
import linked from "../images/linked.svg";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <Flex bgColor={"#0066B2"} color={"white"} direction={"column"}>
      <Flex
        p={["7%", "7%", "3%", "3%"]}
        w={["100vw", "100vw", "98vw", "98vw"]}
        justifyContent={"space-between"}
        gap={20}
        flexWrap={"wrap"}
      >
        <Flex direction={"column"} gap={5}>
          <Heading fontSize={"lg"}>Knoweth Products</Heading>
          <Text>Meta Ads spy</Text>
          <Text>Google & Youtube Ads spy</Text>
          <Text>Linkedin Ads spy</Text>
          <Text>Twitter Ads spy</Text>
          <Text>AI Writing</Text>
          <Text>Workspace</Text>
        </Flex>

        <Flex direction={"column"} gap={5}>
          <Heading fontSize={"lg"}>Legal</Heading>
          <Text>Terms of use</Text>
          <Text>Privacy policy</Text>
        </Flex>

        <Flex direction={"column"} gap={5}>
          <Heading fontSize={"lg"}>Resources</Heading>
          <Text>How it works</Text>
          <Text>Pricing</Text>
        </Flex>

        <Flex direction={"column"} gap={5}>
          <Heading fontSize={"lg"}>Support</Heading>
          <Link href="/contact">
            <Text>Contact Us</Text>
          </Link>
          <Text>FAQs</Text>
        </Flex>

        <Flex direction={"column"} gap={5}>
          <Heading fontSize={"lg"}>Connect</Heading>
          <Flex justifyContent={"space-between"} gap={["4%", "4%", "5%", "5%"]}>
            <Box>
              <Image src={IG} alt="instagram" w={"85%"} />
            </Box>

            <Box>
              <Image src={fb} alt="facebook" w={"85%"} />
            </Box>

            <Box>
              <Image src={linked} alt="linkedIn" w={"85%"} />
            </Box>
            <Box>
              <Image src={x} alt="twitter" w={"85%"} />
            </Box>
          </Flex>
        </Flex>
      </Flex>

      <Box alignSelf={"center"}>
        <Text>&copy;2023 Knoweth. All rights reserved</Text>
      </Box>
    </Flex>
  );
};

export default Footer;
