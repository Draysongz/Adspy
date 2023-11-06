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
import UpgradeCTA from "../../components/UpgradeCTA";
import AiRecord from "@/components/AiBoard/AiRecord";

// Define the AiSidebar component as a functional component that takes input, input change handler,
// submission handler, and messages as its props.
export default function AiSidebar() {
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
          <AiRecord />
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
        <NavItem icon={SiBookstack}>
          <Link href="/board/aiwritter">AiWritter</Link>
        </NavItem>
        <NavItem icon={BsWindowStack}>Cover</NavItem>
        <NavItem icon={AiOutlineTag}>Labels</NavItem>
        <NavItem icon={LuFiles}>
          {" "}
          <Link href="/board/files">Files</Link>
        </NavItem>
        <NavItem icon={SiBookstack}>
          {" "}
          <Link href="/board/records">Records</Link>
        </NavItem>
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
