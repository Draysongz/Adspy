import {
  chakra,
  VStack,
  HStack,
  Text,
  Flex,
  Container,
  Box,
  Icon,
  Button,
  SimpleGrid,
  useColorModeValue,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Center,
} from "@chakra-ui/react";
// Here we have used react-icons package for the icons
import { BiCheck } from "react-icons/bi";
import Month3 from "@/components/Pricing/3months";
import Month6 from "@/components/Pricing/6months";
import Year1 from "@/components/Pricing/1year";
import Year2 from "@/components/Pricing/2years";

//Array of Pricing Plans
const plansList = [
  {
    title: "Basic Plan (Lifetime)",
    price: "FREE",

    features: [
      "Write compelling copy",
      "Find the right target audience interest",
      "Plan and organize your task",
      "Collaborate with your team",
    ],
    cta: "Get Started",
  },
  {
    title: "PRO Plan (Recommended)",
    price: "6,000Naira/Month",

    features: [
      "Enjoy all basic plan benefits",
      "Facebook ADSPY",
      "Instagram ADSPY",
      "Twitter ADSPY",
    ],
    cta: "Start 14 Days Trial",
  },
  {
    title: "Advance Plan",
    price: "11,000 Naira/Month",

    features: [
      "Enjoy all Pro plan benefits",
      "Google Ad Spy",
      "YouTube Ad Spy",
      "LinkedIn Ad Spy",
    ],
    cta: "Start 14 Days Trial",
  },
];

//Container for displaying cards
const ThreeTiersPricing = () => {
  return (
    <Container maxW="7xl" py="8" px="0">
      <chakra.h2
        fontSize="5xl"
        fontWeight="bold"
        textAlign="center"
      ></chakra.h2>
      <SimpleGrid columns={{ base: 1, md: 1, lg: 3 }} spacing={1} mt={4}>
        {plansList.map((plan, index) => (
          <PricingCard key={index} index={index} {...plan} />
        ))}
      </SimpleGrid>
    </Container>
  );
};

//Pricing card render

const PricingCard = ({ title, price, icon, features, cta, index }) => {
  const cardBackgroundColor =
    index === 1 ? "blue.500" : useColorModeValue("white", "gray.800");

  const buttonBackgroundColor =
    index === 1 ? "white" : useColorModeValue("#0066B2", "gray.800");

  const textColor =
    index === 1 ? "#0066B2" : useColorModeValue("white", "gray.800");

  const featureTextColor =
    index === 1 ? "white" : useColorModeValue("gray.900", "white");

  return (
    <Box
      minW={{ base: "xs", sm: "xs", lg: "sm" }}
      rounded="md"
      bg={cardBackgroundColor}
      boxShadow="md"
      marginInline="auto"
      my={5}
      p={10}
    >
      <Box textAlign="center">
        <chakra.h2 fontSize="2xl" fontWeight="bold" color={featureTextColor}>
          {title}
        </chakra.h2>
        <Text fontSize="3xl" fontWeight="bold" color={featureTextColor}>
          {price}
        </Text>
        {/* <Text fontSize="md" color="gray.500">
          per month
        </Text> */}
      </Box>
      <VStack spacing={2} alignItems="flex-start" my={6}>
        {features.map((feature, index) => (
          <HStack key={index} spacing={3}>
            <Icon as={BiCheck} fontSize={"lg"} h={4} w={4} color="green.500" />
            <Text fontSize="sm" color={featureTextColor}>
              {feature}
            </Text>
          </HStack>
        ))}
      </VStack>
      <Center>
        {" "}
        <Button
          bg={buttonBackgroundColor}
          variant="solid"
          color={textColor}
          size="md"
          rounded="md"
          w="50%"
        >
          {cta}
        </Button>
      </Center>
    </Box>
  );
};

const PricingTabs = () => {
  return (
    <Box>
      <Tabs variant="unstyled">
        <TabList justifyContent={"center"}>
          <Flex
            bgColor={"#F5F4F4"}
            p={1}
            borderRadius={"md"}
            justify={"center"}
            minW={{ base: "sm", sm: "sm", md: "lg", lg: "2xl" }}
          >
            <Tab
              borderRadius={"md"}
              _selected={{ color: "white", bg: "blue.500" }}
            >
              <HStack spacing={3}>
                <Text
                  display={["flex", "flex", "flex", "flex", "flex"]}
                  fontSize={["xs", "sm", "lg"]}
                >
                  Monthly
                </Text>
              </HStack>
            </Tab>
            <Tab
              borderRadius={"md"}
              _selected={{ color: "white", bg: "blue.500" }}
            >
              <HStack>
                <Text
                  display={["flex", "flex", "flex", "flex", "flex"]}
                  fontSize={["xs", "sm", "lg"]}
                >
                  3 Months
                </Text>
              </HStack>
            </Tab>
            <Tab
              borderRadius={"md"}
              _selected={{ color: "white", bg: "blue.500" }}
            >
              <HStack>
                <Text
                  display={["flex", "flex", "flex", "flex", "flex"]}
                  fontSize={["xs", "sm", "lg"]}
                >
                  6 Months
                </Text>
              </HStack>
            </Tab>
            <Tab
              borderRadius={"md"}
              _selected={{ color: "white", bg: "blue.500" }}
            >
              <HStack>
                <Text
                  fontSize={["xs", "sm", "lg"]}
                  display={["flex", "flex", "flex", "flex", "flex"]}
                >
                  Yearly
                </Text>
              </HStack>
            </Tab>
            <Tab
              borderRadius={"md"}
              _selected={{ color: "white", bg: "blue.500" }}
            >
              <HStack>
                <Text
                  fontSize={["xs", "sm", "lg"]}
                  display={["flex", "flex", "flex", "flex", "flex"]}
                >
                  2 Years
                </Text>
              </HStack>
            </Tab>
          </Flex>
        </TabList>
        <TabPanels>
          <TabPanel mt={2}>
            <ThreeTiersPricing />
          </TabPanel>
          <TabPanel mt={2}>
            <Month3 />
          </TabPanel>
          <TabPanel mt={2}>
            <Month6 />
          </TabPanel>
          <TabPanel mt={2}>
            <Year1 />
          </TabPanel>
          <TabPanel mt={2}>
            <Year2 />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};
export default PricingTabs;
