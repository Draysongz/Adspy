import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import {
  Flex,
  Heading,
  Text,
  Box,
  Center,
  Button,
  Card,
  CardBody,
  SimpleGrid,
} from "@chakra-ui/react";
import yti from "../images/yti.svg";
import meta from "../images/meta.svg";
import linkedin from "../images/linkedin.svg";
import youtube from "../images/youtube.svg";
import Image from "next/image";
import tinyPen from "../images/teenyicons-solid.svg";

// const cardProp = [
//   { title: "Step 1", paragraph: "Create a FREE account" },
//   {
//     title: "Step 2",
//     paragraph:
//       "Search for Ads based on specific keywords, advertiser, duration etc...",
//   },
//   {
//     title: "Step 3",
//     paragraph: "Write compelling copy and find the right target audience",
//   },
//   {
//     title: "Step 4",
//     paragraph: "Organize your task in the workspace",
//   },
// ];

// const StepCard = ({ title, paragraph }) => {
//   return (
//     <Box
//       minW={{ base: "xs", sm: "xs", lg: "sm" }}
//       rounded="md"
//       bg={useColorModeValue("white", "gray.800")}
//       boxShadow="md"
//       marginInline="auto"
//       my={3}
//       p={6}
//     >
//       <Box textAlign="center">
//         <Icon as={icon} h={10} w={10} color="teal.500" />
//         <chakra.h2 fontSize="2xl" fontWeight="bold">
//           {title}
//         </chakra.h2>
//         <Text fontSize="7xl" fontWeight="bold">
//           <Text as="sup" fontSize="3xl" fontWeight="normal" top="-1em">
//             $
//           </Text>
//           {price}
//         </Text>
//         <Text fontSize="md" color="gray.500">
//           per month
//         </Text>
//       </Box>
//       <VStack spacing={2} alignItems="flex-start" my={6}>
//         {paragraph.map((feature, index) => (
//           <HStack key={index} spacing={3}>
//             <Icon as={BiCheck} h={4} w={4} color="green.500" />
//             <Text fontSize="sm" color="gray.500">
//               {feature}
//             </Text>
//           </HStack>
//         ))}
//       </VStack>
//     </Box>
//   );
// };

export default function HowItWorks() {
  return (
    <>
      {" "}
      <Nav />
      <Flex
        w={["100vw", "100vw", "98.7vw"]}
        bgColor={"#ffffff"}
        p={10}
        gap={5}
        direction={"column"}
      >
        <Box my={5} justify={"center"} align={"center"}>
          <Heading
            width={["80vw", "70vw", "70vw", "70vw"]}
            fontStyle="normal"
            fontWeight={"500"}
            fontSize={["24px", "28px", "48px"]}
            textAlign={"center"}
          >
            How It Works
          </Heading>
          <Text
            fontSize={["12px", "16px", "24px"]}
            fontStyle="normal"
            fontWeight={"400"}
            textAlign={"center"}
            p={10}
            width={["80vw", "70vw", "70vw", "80vw"]}
          >
            Are you ready to know your competitors winning ad campaigns? write
            compelling offers, find the right target audience, or organize your
            tasks? Watch video below to see how it works
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

          <Box my={10} justify={"center"} align={"center"}>
            <Heading
              width={["80vw", "70vw", "70vw", "70vw"]}
              fontStyle="normal"
              fontWeight={"500"}
              fontSize={["24px", "28px", "40px"]}
              textAlign={"center"}
            >
              4 Easy Steps To Get Started
            </Heading>
          </Box>

          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} my={10}>
            <Card maxW={"xs"}>
              <CardBody>
                <Flex direction={"column"} gap={5}>
                  <Image src={tinyPen} alt="meta" width={"30"} />
                  <Heading fontSize={"md"}>Step 1</Heading>
                  <Text>Create a FREE account</Text>
                </Flex>
              </CardBody>
            </Card>
            <Card maxW={"xs"}>
              <CardBody>
                <Flex direction={"column"} gap={5}>
                  <Image src={tinyPen} alt="meta" width={"30"} />
                  <Heading fontSize={"md"}>Step 2</Heading>
                  <Text>
                    Search for Ads based on specific keywords, advertiser,
                    duration etc...
                  </Text>
                </Flex>
              </CardBody>
            </Card>
            <Card maxW={"xs"}>
              <CardBody>
                <Flex direction={"column"} gap={5}>
                  <Image src={tinyPen} alt="meta" width={"30"} />
                  <Heading fontSize={"md"}>Step 3</Heading>
                  <Text>
                    Write compelling copy and find the right target audience
                  </Text>
                </Flex>
              </CardBody>
            </Card>
            <Card maxW={"xs"}>
              <CardBody>
                <Flex direction={"column"} gap={5}>
                  <Image src={tinyPen} alt="meta" width={"30"} />
                  <Heading fontSize={"md"}>Step 4</Heading>
                  <Text>Organize your task in the workspace</Text>
                </Flex>
              </CardBody>
            </Card>
          </SimpleGrid>

          <Box my={10} justify={"center"} align={"center"}>
            <Text
              fontSize={["16px", "16px", "40px"]}
              fontStyle="normal"
              fontWeight={"500"}
              textAlign={"center"}
              p={10}
              width={["80vw", "70vw", "70vw", "80vw"]}
            >
              Spy on your competitors winning ads, write compelling copies +
              plan and organize tasks in your workspace
            </Text>
            <Text
              fontSize={["none", "16px", "24px"]}
              display={["none", "flex"]}
              fontStyle="normal"
              fontWeight={"400"}
              textAlign={"center"}
              p={10}
              width={["80vw", "70vw", "70vw", "80vw"]}
            >
              Knoweth is your all-in-one platform that helps you spy on your
              competitor&rsquo;s ads, write compelling copies, or plan &
              organize your task
            </Text>
          </Box>
          <Button
            w={["50vw", "50vw", "30vw", "20vw"]}
            mt={10}
            borderRadius={"md"}
            fontSize={"md"}
            mb={20}
          >
            Start spying with Knoweth
          </Button>
        </Center>
      </Flex>
      <Faq />
      <Footer />
    </>
  );
}
