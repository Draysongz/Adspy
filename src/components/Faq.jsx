import React from "react";
import {
  Box,
  Flex,
  Heading,
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";

const Faq = () => {
  return (
    <Flex
      w={["100vw", "100vw", "98.7vw"]}
      bgColor={"#F8F8F8"}
      p={10}
      gap={5}
      direction={"column"}
    >
      <Heading textAlign={"center"}>Frequently Asked Questions (FAQ)</Heading>

      <Accordion allowToggle>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                Can I use Knoweth to spy on my competitors ads?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Text>
              You can spy on your competitor&rsquo;s ad and know their winning
              creative and funnels. Create your FREE account, choose the
              platform you want, input the keyword or advertiser name, and start
              spying. Check &ldquo;How it Works&rdquo; to find out more.
            </Text>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                Is Knoweth FREE to use?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            Yes. You can spy on your competitor&rsquo;s ad and know their
            winning creative and funnels. Create your FREE account, choose the
            platform you want, input the keyword or advertiser name, and start
            spying. Check &ldquo;How it Works&rdquo; to find out more.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                Can I use Knoweth to run ads?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            Yes. You can spy on your competitor&rsquo;s ad and know their
            winning creative and funnels. Create your FREE account, choose the
            platform you want, input the keyword or advertiser name, and start
            spying. Check &ldquo;How it Works&rdquo; to find out more.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                How do I write copy?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            Yes. You can spy on your competitor&rsquo;s ad and know their
            winning creative and funnels. Create your FREE account, choose the
            platform you want, input the keyword or advertiser name, and start
            spying. Check &ldquo;How it Works&rdquo; to find out more.
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Flex>
  );
};

export default Faq;
