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
  Text,
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
      <Flex p={10} direction={"column"}>
        <Text textAlign={["center", "center", "start", "start"]}>
          Have further questions? Feel free to send us an email:
          <u>hello@Knoweth.co</u>
        </Text>
        <Accordion allowToggle py={5}>
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
                  Is Knoweth FREE to use?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              We have Free and Paid Features. Our AI writing and Board is free
              to use. You will also get a 7-day FREE trial to use our ADSPY,
              after choosing a plan.
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
              No. You can only spy/check your competitor&rsquo;s ad. However, we
              have resources we&rsquo;ve put together that can help you run ads
              effectively.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  How do I find the right audience?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              With our AI writing, you&rsquo;d be able to find the right
              audience to target for your ads.
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
              You can write a compelling copy using our AI writing.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  After spying on my competitor&rsquo;s ads, what do I do?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Create a board in our workspace and strategically organize your
              results.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  Who can use knoweth?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Anyone who has a business and wants to 10x their sales online
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  Can I get a free trial before choosing a plan?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              You will have to choose a plan before you can get a free trial.
              However, we have a free feature you can always use.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  Is there a support team?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Yes, you can always reach out to the support team if you
              experience any problem and we&rsquo;d be glad to assist you.
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Flex>
    </Flex>
  );
};

export default Faq;
