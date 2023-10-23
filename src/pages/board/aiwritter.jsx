// Import necessary modules and components for the AiSidebar component.
// Import various components and icons from Chakra UI and other packages.
// These components and icons will be used to build the sidebar and its content.
import { useState } from "react";
import {
  Avatar,
  Box,
  Flex,
  Icon,
  Drawer,
  DrawerContent,
  IconButton,
  useDisclosure,
  DrawerOverlay,
  useColorModeValue,
} from "@chakra-ui/react";
import {
  ViewIcon,
  ViewOffIcon,
  ChevronDownIcon,
  EditIcon,
} from "@chakra-ui/icons";
// Here we have used react-icons package for the icons
import { TbLayoutBoard } from "react-icons/tb";
import { FaBell } from "react-icons/fa";
import { AiOutlineTeam, AiOutlineHome, AiOutlineTag } from "react-icons/ai";
import { LuFiles } from "react-icons/lu";
import { SiBookstack } from "react-icons/si";
import { BsWindowStack } from "react-icons/bs";
import { FiMenu } from "react-icons/fi";
import { RiFlashlightFill } from "react-icons/ri";
import knoweth from "../../images/knoweth.png";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { AiWriter } from "../../components/AiBoard/aiWritter";
import { Convo } from "../../components/AiBoard/convo";
import UpgradeCTA from "../../components/UpgradeCTA";

// Define the AiSidebar component as a functional component that takes input, input change handler,
// submission handler, and messages as its props.
export default function AiSidebar(
  input,
  handleInputChange,
  handleSubmit,
  messages
) {
  // Initialize state variables using useState from React.
  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <Box
      as="section"
      bg={useColorModeValue("gray.50", "gray.700")}
      minH="100vh"
    >
      <SidebarContent display={{ base: "none", md: "unset" }} />
      <Drawer isOpen={isOpen} onClose={onClose} placement="left">
        <DrawerOverlay />
        <DrawerContent>
          <SidebarContent w="full" borderRight="none" />
        </DrawerContent>
      </Drawer>

      <Box ml={{ base: 0, md: 60 }} transition=".3s ease">
        <Flex
          as="header"
          align="center"
          justify={{ base: "space-between", md: "flex-end" }}
          w="full"
          px="4"
          borderBottomWidth="1px"
          borderColor={useColorModeValue("inherit", "gray.700")}
          bg={useColorModeValue("white", "gray.800")}
          boxShadow="sm"
          h="14"
        >
          <IconButton
            aria-label="Menu"
            display={{ base: "inline-flex", md: "none" }}
            onClick={onOpen}
            icon={<FiMenu />}
            size="md"
          />

          <Flex align="center">
            <Icon color="gray.500" as={FaBell} cursor="pointer" />
            <Avatar
              ml="4"
              size="sm"
              name="Ahmad"
              src="https://avatars2.githubusercontent.com/u/37842853?v=4"
              cursor="pointer"
            />
          </Flex>
        </Flex>{" "}
        <UpgradeCTA />
        <Box
          as="main"
          p={14}
          minH="25rem"
          bg={useColorModeValue("auto", "gray.800")}
        >
          {/* Components like AiWriter and others can be rendered here */}
          {/* <Convo /> */}
          <AiWriter {...(input, handleInputChange, handleSubmit, messages)} />
          {/* <Stack
            spacing={4}
            bg={useColorModeValue("white", "gray.700")}
            rounded={"xl"}
            boxShadow={"lg"}
            p={10}
            my={4}
            direction={"row"}
          >
            {" "}
            <Flex
              // as="side-bar"
              bg="#0066B2"
              h={"100vh"}
              w="244px"
              direction="column"
              justifyContent={"space-between"}
            >
              <Button
                border={"solid 0.5px rgba(255, 255, 255, 0.5)"}
                bg="transparent"
                borderRadius="5px"
                p="10px"
                m="10px"
              >
                + New Chat
              </Button>
              <UnorderedList p="10px" m="10px" h={"100%"}>
                <ListItem listStyleType={"none"} p="15px 0" cursor={"pointer"}>
                  BLUGH
                </ListItem>
              </UnorderedList>
              <Flex
                borderTop={"solid 0.5px rgba(255, 255, 255, 0.5)"}
                p="10px"
                m="10px"
              >
                <Text color="white">Made by ovpn</Text>
              </Flex>
            </Flex>
            <Flex
              h={"100vh"}
              w="100%"
              direction={"column"}
              justifyContent="space-between"
              alignItems="center"
              textAlign="center"
            >
              <Heading>AI Writer</Heading>
              <UnorderedList></UnorderedList>
              <Stack>
                <Flex
                  w="100%"
                  flexDirection="column"
                  justifyContent={"center"}
                  alignItems="center"
                >
                  {" "}
                  <FormControl
                    onSubmit={handleSubmit}
                    pos={"relative"}
                    w="100%"
                    maxW="650px"
                  >
                    <Input
                      value={input}
                      onChange={handleInputChange}
                      placeholder="What&rsquo;s on your mind?"
                      w="100%"
                      borderRadius="5px"
                      p="12px 15px"
                      bg="rgba(255,255,255,0.05)"
                      boxShadow="rgba(0,0,0,0.05) 0 54px 55px, rgba(0,0,0,0.05) 0 -12px 30px, rgba(0,0,0,0.05) 0 4px 6px, rgba(0,0,0,0.05) 0 12px 3px, rgba(0,0,0,0.05) 0 -3px 5px"
                    />{" "}
                    <Button
                      colorScheme="teal"
                      type="submit"
                      pos="absolute"
                      right="0"
                    >
                      &gt;
                    </Button>
                  </FormControl>
                </Flex>

                <Text color="gray.400" fontSize="11px" p="10px">
                  Free Research Preview. Ai Writer may produce inaccurate
                  information about people, places, or facts. Ai Writer
                  September 25 Version
                </Text>
              </Stack>
            </Flex>
          </Stack> */}
          {/* <Board /> */}
        </Box>
      </Box>
    </Box>
  );
}

// SidebarContent component for rendering the sidebar navigation.
const SidebarContent = ({ ...props }) => {
  const router = useRouter();
  return (
    <Box
      as="nav"
      pos="fixed"
      top="0"
      left="0"
      zIndex="sticky"
      h="full"
      pb="10"
      overflowX="hidden"
      overflowY="auto"
      bg={useColorModeValue("white", "gray.800")}
      borderColor={useColorModeValue("inherit", "gray.700")}
      borderRightWidth="1px"
      w="60"
      {...props}
    >
      <Flex px="10" py="5" align="center">
        <Link href="/">
          <Image src={knoweth} alt="logo" />
        </Link>
      </Flex>
      <Flex
        direction="column"
        as="nav"
        fontSize="md"
        color="gray.600"
        aria-label="Main Navigation"
      >
        <NavItem icon={TbLayoutBoard}>
          {" "}
          <Link href="/board/board">Board</Link>
        </NavItem>
        <NavItem icon={TbLayoutBoard}>
          <Link href="/board/card">Card</Link>
        </NavItem>
        <NavItem icon={SiBookstack} active>
          <Link href="/board/aiwritter">AiWritter</Link>
        </NavItem>
        <NavItem icon={BsWindowStack}>Cover</NavItem>
        <NavItem icon={AiOutlineTag}>Labels</NavItem>
        <NavItem icon={LuFiles}>Files</NavItem>
        <NavItem icon={SiBookstack}>Records</NavItem>
      </Flex>
    </Box>
  );
};

// NavItem component for rendering individual navigation links.
const NavItem = (props) => {
  const color = useColorModeValue("gray.600", "gray.300");

  const { icon, children } = props;
  return (
    <Flex
      align="center"
      px="4"
      py="3"
      cursor="pointer"
      role="group"
      fontWeight="semibold"
      transition=".15s ease"
      color={useColorModeValue("gray.900", "gray.400")}
      _hover={{
        bg: useColorModeValue("#0066B2", "gray.900"),
        color: useColorModeValue("gray.900", "gray.200"),
      }}
      rounded={"lg"}
    >
      {icon && (
        <Icon
          mx="2"
          boxSize="4"
          _groupHover={{
            color: color,
          }}
          as={icon}
        />
      )}
      {children}
    </Flex>
  );
};
