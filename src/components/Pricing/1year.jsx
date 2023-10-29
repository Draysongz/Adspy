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

const plansList = [
  {
    title: "Basic Plan (Lifetime)",
    price2: "FREE",

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
    price: "(N72,000)",
    price2: "36,000Naira/ year",

    features: [
      "Enjoy all basic plan benefits",
      "Facebook ADSPY",
      "Instagram ADSPY",
      "Twitter ADSPY",
      "2 Months free",
    ],
    cta: "Start 14 Days Trial",
  },
  {
    title: "Advance Plan",
    price: "(N132,000)",
    price2: "66,000Naira/ year",
    features: [
      "Enjoy all Pro plan benefits",
      "Google Ad Spy",
      "YouTube Ad Spy",
      "LinkedIn Ad Spy",
      "2 months free + Access to exclusive ads resources",
    ],
    cta: "Start 14 Days Trial",
  },
];

const Year1 = () => {
  return (
    <Container maxW="7xl" py="8" px="0">
      <chakra.h2
        fontSize="5xl"
        fontWeight="bold"
        textAlign="center"
        mb={5}
      ></chakra.h2>
      <SimpleGrid columns={{ base: 1, md: 1, lg: 3 }} spacing={5} mt={4}>
        {plansList.map((plan, index) => (
          <PricingCard key={index} index={index} {...plan} />
        ))}
      </SimpleGrid>
    </Container>
  );
};

const PricingCard = ({ title, price, price2, features, cta, index }) => {
  const cardBg = useColorModeValue("white", "gray.800");
  const buttonBg = useColorModeValue("#0066B2", "gray.800");
  const txtClr = useColorModeValue("white", "gray.800");
  const ftxtClr = useColorModeValue("gray.900", "white");

  const cardBackgroundColor = index === 1 ? "blue.500" : cardBg;

  const buttonBackgroundColor = index === 1 ? "white" : buttonBg;

  const textColor = index === 1 ? "#0066B2" : txtClr;

  const featureTextColor = index === 1 ? "white" : ftxtClr;

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
        <Text fontSize="lg" fontWeight={"bold"} color={featureTextColor}>
          <s>{price}</s>
        </Text>
        <Text fontSize="2xl" fontWeight="bold" color={featureTextColor}>
          {price2}
        </Text>
      </Box>
      <VStack spacing={2} alignItems="flex-start" my={6}>
        {features.map((feature, index) => (
          <HStack key={index} spacing={3}>
            <Icon as={BiCheck} h={4} w={4} color="green.500" />
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

export default Year1;
