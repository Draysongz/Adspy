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
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  SimpleGrid,
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
import knoweth from "../../images/knoweth.png";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import tinyPen from "../../images/teenyicons-solid.svg";

export default function ProfileHome() {
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
          <Stack w={"full"}>
            {" "}
            <Heading>Hello Knoweth,</Heading>
            <Text>Welcome Back</Text>
            <br></br>
            <SimpleGrid columns={{ base: 1, md: 1 }} spacing={10} my={10}>
              <Card
                direction={{ base: "column", sm: "row" }}
                overflow="hidden"
                variant="outline"
                bg={"linear-gradient(210deg, #FFBE99 13.4%, #FD9094 86.6%)"}
              >
                <Stack>
                  <CardBody color={"white"}>
                    <Flex direction={"column"} gap={5}>
                      <Image src={tinyPen} alt="meta" width={"30"} />
                      <Heading fontSize={"md"}>Spy on competitors Ads</Heading>
                      <Text>
                        Spy on your competitors winning ads, write compelling
                        copies + plan and organize tasks in your workspace
                      </Text>
                    </Flex>
                  </CardBody>
                </Stack>
              </Card>

              <Card
                direction={{ base: "column", sm: "row" }}
                overflow="hidden"
                variant="outline"
                bg={"linear-gradient(60deg, #B23DEB 13.4%, #DE8FFF 86.6%)"}
              >
                <Stack>
                  <CardBody color={"white"}>
                    <Flex direction={"column"} gap={5}>
                      <Image src={tinyPen} alt="meta" width={"30"} />
                      <Heading fontSize={"md"}>Spy on competitors Ads</Heading>
                      <Text>
                        Spy on your competitors winning ads, write compelling
                        copies + plan and organize tasks in your workspace
                      </Text>
                    </Flex>
                  </CardBody>
                </Stack>
              </Card>

              <Card
                direction={{ base: "column", sm: "row" }}
                overflow="hidden"
                variant="outline"
                bg={"linear-gradient(60deg, #282828 13.4%, #693882 86.6%)"}
              >
                <Stack>
                  <CardBody color={"white"}>
                    <Flex direction={"column"} gap={5}>
                      <Image src={tinyPen} alt="meta" width={"30"} />
                      <Heading fontSize={"md"}>Spy on competitors Ads</Heading>
                      <Text>
                        Spy on your competitors winning ads, write compelling
                        copies + plan and organize tasks in your workspace
                      </Text>
                    </Flex>
                  </CardBody>
                </Stack>
              </Card>
            </SimpleGrid>
          </Stack>

          <Stack
            spacing={4}
            bg={useColorModeValue("auto", "gray.700")}
            rounded={"xl"}
            boxShadow={"lg"}
            p={6}
            my={4}
          ></Stack>
        </Box>
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
        <NavItem icon={AiOutlineHome}>
          <Link href="/profile/profileHome">Home</Link>
        </NavItem>
        <NavItem icon={BsEye}>
          <Link href="/">Ads Spy</Link>
        </NavItem>
        <NavItem icon={CiViewBoard}>Board</NavItem>
        <NavItem icon={PiNotePencilThin}>
          <Link href="/">Ai Writing</Link>
        </NavItem>
        <NavItem icon={AiOutlineTeam}>Affilates</NavItem>
        <NavItem icon={BsShield}>
          <Link href="/profile/manageSubscriptions">Manage Subscription</Link>
        </NavItem>

        <Menu>
          <MenuButton
            as={Button}
            variant="ghost"
            rightIcon={<ChevronDownIcon />}
          >
            <NavItem icon={FiSettings}> Settings</NavItem>
          </MenuButton>
          <MenuList>
            <MenuItem onClick={() => router.push("/profile/profileDash")}>
              Profile
            </MenuItem>
            <MenuItem onClick={() => router.push("/profile/profilePassword")}>
              Change Password
            </MenuItem>
          </MenuList>
        </Menu>
        <NavItem icon={BiSupport}>Support</NavItem>
        <NavItem icon={HiOutlineLogout}>Logout</NavItem>
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
