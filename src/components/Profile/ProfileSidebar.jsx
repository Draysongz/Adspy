import { useState } from "react";
import {
  Avatar,
  Box,
  Flex,
  Icon,
  Text,
  Stack,
  Button,
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
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import {
  ViewIcon,
  ViewOffIcon,
  ChevronDownIcon,
  EditIcon,
} from "@chakra-ui/icons";
// Here we have used react-icons package for the icons
import { FaBell } from "react-icons/fa";
import { AiOutlineTeam, AiOutlineHome } from "react-icons/ai";
import { BsFolder2, BsCalendarCheck } from "react-icons/bs";
import { FiMenu } from "react-icons/fi";
import { RiFlashlightFill } from "react-icons/ri";
import knoweth from "../../images/knoweth.png";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import ChangePassword from "./changepassword";

export default function ProfileSidebar() {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const [showPassword, setShowPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

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
        <ChangePassword />
        {/* <Box
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
            <Stack direction={["column", "row"]}>
              <FormLabel w={"sm"}>Old Password</FormLabel>
              <FormControl id="password" isRequired>
                <InputGroup width="auto">
                  <Input type={showPassword ? "text" : "password"} />
                  <InputRightElement h={"full"}>
                    <Button
                      variant={"ghost"}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }
                    >
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
            </Stack>
            <Stack direction={["column", "row"]}>
              <FormLabel w={"sm"}>New Password</FormLabel>
              <FormControl id="newPassword" isRequired>
                <InputGroup>
                  <Input type={showNewPassword ? "text" : "password"} />
                  <InputRightElement h={"full"}>
                    <Button
                      variant={"ghost"}
                      onClick={() =>
                        setShowNewPassword(
                          (showNewPassword) => !showNewPassword
                        )
                      }
                    >
                      {showNewPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
            </Stack>
            <Stack direction={["column", "row"]}>
              {" "}
              <FormLabel w={"sm"}>Confirm Password</FormLabel>
              <FormControl id="confirmPassword" isRequired>
                <InputGroup>
                  <Input type={showConfirmPassword ? "text" : "password"} />
                  <InputRightElement h={"full"}>
                    <Button
                      variant={"ghost"}
                      onClick={() =>
                        setShowConfirmPassword(
                          (showConfirmPassword) => !showConfirmPassword
                        )
                      }
                    >
                      {showConfirmPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
            </Stack>

            <Stack spacing={5} pt={2}>
              <Button
                loadingText="Submitting"
                maxW="xs"
                bg={"#0066B2"}
                color={"white"}
                _hover={{
                  bg: "#31CD31",
                }}
                rounded={"lg"}
              >
                Update password
              </Button>
            </Stack>
          </Stack>
        </Box> */}
      </Box>
    </Box>
  );
}

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
        <NavItem icon={AiOutlineHome}>Home</NavItem>
        <NavItem icon={AiOutlineTeam}>Ads Spy</NavItem>
        <NavItem icon={BsFolder2}>Board</NavItem>
        <NavItem icon={BsCalendarCheck}>Ai Writing</NavItem>
        <NavItem icon={AiOutlineHome}>Affilates</NavItem>
        <NavItem icon={AiOutlineTeam}>Manage Subscription</NavItem>

        <Menu>
          <MenuButton
            as={Button}
            variant="ghost"
            rightIcon={<ChevronDownIcon />}
          >
            <NavItem icon={BsFolder2}> Settings</NavItem>
          </MenuButton>
          <MenuList>
            <MenuItem onClick={() => router.push("/profileDash")}>
              Profile
            </MenuItem>
            <MenuItem>Change Password</MenuItem>
          </MenuList>
        </Menu>
        <NavItem icon={BsCalendarCheck}>Support</NavItem>
        <NavItem icon={BsCalendarCheck}>Logout</NavItem>
      </Flex>
    </Box>
  );
};

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
      color={useColorModeValue("inherit", "gray.400")}
      _hover={{
        bg: useColorModeValue("gray.100", "gray.900"),
        color: useColorModeValue("gray.900", "gray.200"),
      }}
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
