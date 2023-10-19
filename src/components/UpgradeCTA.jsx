import { Box, Flex, Text, Button } from "@chakra-ui/react";

export default function UpgradeCTA() {
  return (
    <>
      {" "}
      <Flex
        mt={{ xs: "10", md: "none" }}
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
    </>
  );
}
