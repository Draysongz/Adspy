import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import PricingTabs from "@/components/Pricing/monthly";
import { Flex, Heading, Text } from "@chakra-ui/react";

export default function pricing() {
  return (
    <div>
      <Nav />
      <Flex justify={"center"} align={"center"} direction={"column"} my={10}>
        <Heading>Pricing Plans</Heading>
        <Text mt={5} textAlign={"center"}>
          Choose the right plan for you! It is completely FREE to create an
          account
        </Text>
      </Flex>

      <PricingTabs />
      <Faq />
      <Footer />
    </div>
  );
}
