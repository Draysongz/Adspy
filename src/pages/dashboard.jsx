import {
  Avatar,
  Box,
  Flex,
  Icon,
  Text,
  Stack,
  Button,
  Heading,
  BoxProps,
  Drawer,
  DrawerContent,
  IconButton,
  useDisclosure,
  DrawerOverlay,
  useColorModeValue,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  FormControl,
  Input,
  FormLabel,
  AvatarBadge,
  Center,
} from "@chakra-ui/react";
import { ChevronDownIcon, EditIcon } from "@chakra-ui/icons";
// Here we have used react-icons package for the icons
import { CiViewBoard } from "react-icons/ci";
import { FaBell } from "react-icons/fa";
import { PiNotePencilThin } from "react-icons/pi";
import { AiOutlineTeam, AiOutlineHome } from "react-icons/ai";
import { BsEye, BsShield } from "react-icons/bs";
import { FiMenu, FiSettings } from "react-icons/fi";
import { BiSupport } from "react-icons/bi";
import { HiOutlineLogout } from "react-icons/hi";
import knoweth from "../images/knoweth.png";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

export default function ProfileDash() {
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
        </Flex>

        <Box
          as="main"
          p={14}
          minH="25rem"
          bg={useColorModeValue("auto", "gray.800")}
        >
          <Stack
            spacing={4}
            w={"full"}
            bg={useColorModeValue("white", "gray.700")}
            rounded={"xl"}
            boxShadow={"lg"}
            p={6}
            my={4}
          >
            <FormControl id="userName">
              <FormLabel>User Icon</FormLabel>
              <Stack direction={["column", "row"]} spacing={6}>
                <Center flexDirection={["column", "row"]}>
                  <Avatar size="xl" src="https://bit.ly/sage-adebayo">
                    <AvatarBadge
                      as={IconButton}
                      size="sm"
                      rounded="full"
                      bottom="10px"
                      colorScheme={useColorModeValue("gray", "teal")}
                      aria-label="remove Image"
                      icon={<EditIcon />}
                    />
                  </Avatar>
                  <Flex gap={3} py={5} px={5}>
                    <Link href="/">
                      <Button borderRadius={"md"} maxW={"xs"} color={"white"}>
                        Upload photo
                      </Button>
                    </Link>
                    <Link href="/">
                      <Button
                        borderRadius={"md"}
                        maxW={"xs"}
                        variant={"outline"}
                      >
                        Delete photo
                      </Button>
                    </Link>
                  </Flex>
                </Center>
                {/* <Center w="full">
                  <ProfileModal w="full" />
                </Center> */}
              </Stack>
            </FormControl>
            <Stack direction={["column", "row"]} justifyContent="space-between">
              <FormControl id="firstName" isRequired>
                <FormLabel>First Name</FormLabel>
                <Input placeholder="Knoweth" type="text" />
              </FormControl>
              <FormControl id="lastName">
                <FormLabel>Last Name</FormLabel>
                <Input placeholder="Knoweth" type="text" />
              </FormControl>
            </Stack>
            <Stack direction={["column", "row"]} justifyContent="space-between">
              <FormControl id="email" isRequired>
                <FormLabel>Email address</FormLabel>
                <Input
                  placeholder="Knoweth@gmail.com"
                  _placeholder={{ color: "gray.500" }}
                  type="email"
                />
                <Text textColor={"#0066B2"} fontSize="sm">
                  Email cannot be changed***
                </Text>
              </FormControl>
              <FormControl id="telephone" isRequired>
                <FormLabel>Phone</FormLabel>
                <Input
                  placeholder="08111111111111"
                  _placeholder={{ color: "gray.500" }}
                  type="tel"
                />
              </FormControl>
            </Stack>

            <Stack>
              <Button
                bg={"#0066B2"}
                color={"white"}
                maxW="xs"
                _hover={{
                  bg: "#31CD31",
                }}
                rounded={"lg"}
              >
                Save Changes
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
}

const SidebarContent = ({ ...props }) => (
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
      <NavItem icon={AiOutlineHome}>Home</NavItem>
      <NavItem icon={BsEye}>Ads Spy</NavItem>
      <NavItem icon={CiViewBoard}>Board</NavItem>
      <NavItem icon={PiNotePencilThin}>Ai Writing</NavItem>
      <NavItem icon={AiOutlineTeam}>Affilates</NavItem>
      <NavItem icon={BsShield}>Manage Subscription</NavItem>
      <NavItem icon={FiSettings}>
        {" "}
        <Menu>
          <MenuButton
            as={Button}
            variant="ghost"
            rightIcon={<ChevronDownIcon />}
            bg={useColorModeValue("white", "gray.400")}
            _hover={{
              bg: useColorModeValue("#0066B2", "gray.900"),
              color: useColorModeValue("gray.900", "gray.200"),
            }}
          >
            {" "}
            Settings
          </MenuButton>
          <MenuList>
            <MenuItem onClick={() => router.push("/profileDash")}>
              Profile
            </MenuItem>
            <MenuItem onClick={() => router.push("/profile/profilePassword")}>
              Change Password
            </MenuItem>
          </MenuList>
        </Menu>{" "}
      </NavItem>

      <NavItem icon={BiSupport}>Support</NavItem>
      <NavItem icon={HiOutlineLogout}>Logout</NavItem>
    </Flex>
  </Box>
);

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
