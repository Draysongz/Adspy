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
  Card,
  CardBody,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Center,
  Select,
  HStack,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  CardFooter,
} from "@chakra-ui/react";
import { ChevronDownIcon, EditIcon } from "@chakra-ui/icons";
// Here we have used react-icons package for the icons
import { CiViewBoard } from "react-icons/ci";
import { FaBell } from "react-icons/fa";
import { PiNotePencilThin, PiUsersThree } from "react-icons/pi";
import { AiOutlineTeam, AiOutlineHome } from "react-icons/ai";
import { BsFilter, BsThreeDots, BsThreeDotsVertical } from "react-icons/bs";
import { FiMenu, FiSettings, FiUsers } from "react-icons/fi";
import { BiSupport } from "react-icons/bi";
import { HiOutlineLogout } from "react-icons/hi";
import {
  MdOutlineDashboard,
  MdOutlineSubtitles,
  MdOutlineNotificationAdd,
} from "react-icons/md";
import { IoBarChartOutline } from "react-icons/io5";
import knoweth from "../../images/knoweth.png";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

export default function Subscription() {
  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <Box
      as="section"
      bg={useColorModeValue("gray.50", "gray.700")}
      minH="100vh"
    >
      <SidebarContent display={{ base: "none", md: "unset" }} />{" "}
      <Drawer isOpen={isOpen} onClose={onClose} placement="left">
        <DrawerOverlay />
        <DrawerContent>
          <SidebarContent w="full" borderRight="none" />
        </DrawerContent>
      </Drawer>{" "}
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
          {/* {" "}
              <Flex>
                <Heading>Hello Knoweth,</Heading>
                <Text>Welcome Back</Text>
              </Flex> */}
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
          bg={useColorModeValue("gray.50", "gray.700")}
        >
          <HStack
            justify={"space-between"}
            flexDirection={["column", "column", "column", "column", "row"]}
          >
            {" "}
            <Card minW={"xs"} my={5}>
              <Flex justify="flex-end">
                {" "}
                <Menu>
                  <MenuButton
                    size="sm"
                    border="1px solid #747474"
                    as={Button}
                    rounded="none"
                    variant="outline"
                    color="#747474"
                    rightIcon={<ChevronDownIcon />}
                  >
                    Monthly
                  </MenuButton>
                  <MenuList>
                    <MenuItem>Download</MenuItem>
                    <MenuItem>Create a Copy</MenuItem>
                    <MenuItem>Mark as Draft</MenuItem>
                  </MenuList>
                </Menu>
              </Flex>
              <CardBody>
                <Flex direction={"column"} gap={5}>
                  <Text
                    color="#747474"
                    font-size="18px"
                    font-style="normal"
                    font-weight="500"
                  >
                    Basic Plan Users
                  </Text>
                  <Heading
                    color="#1B1D29"
                    font-size="32px"
                    font-style="normal"
                    font-weight="500"
                  >
                    150,000
                  </Heading>
                </Flex>
              </CardBody>
              <CardFooter>
                {" "}
                <Text>
                  <span style={{ color: "#F00" }}>10%</span> Less than last
                  month
                </Text>
              </CardFooter>
            </Card>
            <Card my={5} minW={"xs"}>
              {" "}
              <Flex justify="flex-end">
                {" "}
                <Menu>
                  <MenuButton
                    size="sm"
                    border="1px solid #747474"
                    as={Button}
                    rounded="none"
                    variant="outline"
                    color="#747474"
                    rightIcon={<ChevronDownIcon />}
                  >
                    Monthly
                  </MenuButton>
                  <MenuList>
                    <MenuItem>Download</MenuItem>
                    <MenuItem>Create a Copy</MenuItem>
                    <MenuItem>Mark as Draft</MenuItem>
                  </MenuList>
                </Menu>
              </Flex>
              <CardBody>
                <Flex direction={"column"} gap={5}>
                  <Text
                    color="#747474"
                    font-size="18px"
                    font-style="normal"
                    font-weight="500"
                  >
                    Pro plan Subscribers
                  </Text>
                  <Heading
                    color="#1B1D29"
                    font-size="32px"
                    font-style="normal"
                    font-weight="500"
                  >
                    150,000{" "}
                  </Heading>
                </Flex>{" "}
              </CardBody>
              <CardFooter>
                {" "}
                <Text>
                  {" "}
                  <span style={{ color: "#F00" }}>10%</span> Less than last
                  month
                </Text>
              </CardFooter>
            </Card>
            <Card my={5} minW={"xs"}>
              {" "}
              <Flex justify="flex-end">
                {" "}
                <Menu>
                  <MenuButton
                    size="sm"
                    border="1px solid #747474"
                    as={Button}
                    rounded="none"
                    variant="outline"
                    color="#747474"
                    rightIcon={<ChevronDownIcon />}
                  >
                    Monthly
                  </MenuButton>
                  <MenuList>
                    <MenuItem>Download</MenuItem>
                    <MenuItem>Create a Copy</MenuItem>
                    <MenuItem>Mark as Draft</MenuItem>
                  </MenuList>
                </Menu>
              </Flex>
              <CardBody>
                <Flex direction={"column"} gap={5}>
                  <Text
                    color="#747474"
                    font-size="18px"
                    font-style="normal"
                    font-weight="500"
                  >
                    Advance Plan Subscribers
                  </Text>
                  <Heading
                    color="#1B1D29"
                    font-size="32px"
                    font-style="normal"
                    font-weight="500"
                  >
                    150,000
                  </Heading>
                </Flex>
              </CardBody>
              <CardFooter>
                <Text>
                  <span style={{ color: "#1ABF3F" }}>10%</span> Higher than last
                  month
                </Text>
              </CardFooter>
            </Card>
          </HStack>
          {/* Dashboard and Notification */}
          <Stack
            w={"full"}
            bg={useColorModeValue("white", "gray.700")}
            rounded={"xl"}
            boxShadow={"lg"}
          >
            <Flex justify={"space-between"}>
              <Flex p={5} gap="5">
                <Heading
                  fontSize={"20px"}
                  fontStyle="normal"
                  fontWeight={"400"}
                  mt={1}
                >
                  Subscribers
                </Heading>
                <Button bg={"#F1F0F0"} color={"#1B1D29"} size="sm">
                  Select
                </Button>
              </Flex>
              <Flex p={8}>
                <Icon as={BsFilter}></Icon>
              </Flex>
            </Flex>
          </Stack>
          {/* Subscripers and tables */}{" "}
          <Stack
            spacing={4}
            bg={useColorModeValue("white", "gray.700")}
            rounded={"xl"}
            boxShadow={"lg"}
            p={10}
            my={4}
          >
            <br></br>
            <TableContainer>
              <Table variant="unstyled" colorScheme="teal">
                <Thead
                  bg="rgba(216, 216, 216, 0.10)"
                  border={" 1px white solid"}
                  borderRadius={"4xl"}
                >
                  <Tr>
                    <Th>User</Th>
                    <Th>Email</Th>
                    <Th>Subscription</Th>
                    <Th>Status </Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td>
                      {" "}
                      <Avatar
                        ml="4"
                        size="sm"
                        name="Ahmad"
                        src="https://avatars2.githubusercontent.com/u/37842853?v=4"
                        cursor="pointer"
                      />
                      Knoweth Knoweth
                    </Td>

                    <Td>Knoweth@gmail.com</Td>
                    <Td>Monthly Pro Plan</Td>
                    <Td>
                      <Button
                        bg={"rgba(26, 191, 63, 0.20)"}
                        color={"#1ABF3F"}
                        size="sm"
                      >
                        Active
                      </Button>
                    </Td>
                  </Tr>
                  <Tr>
                    <Td>
                      {" "}
                      <Avatar
                        ml="4"
                        size="sm"
                        name="Ahmad"
                        src="https://avatars2.githubusercontent.com/u/37842853?v=4"
                        cursor="pointer"
                      />
                      Knoweth Knoweth
                    </Td>

                    <Td>Knoweth@gmail.com</Td>
                    <Td>Monthly Pro Plan</Td>
                    <Td>
                      <Button
                        bg={"rgba(26, 191, 63, 0.20)"}
                        color={"#1ABF3F"}
                        size="sm"
                      >
                        Active
                      </Button>
                    </Td>
                  </Tr>
                  <Tr>
                    <Td>
                      {" "}
                      <Avatar
                        ml="4"
                        size="sm"
                        name="Ahmad"
                        src="https://avatars2.githubusercontent.com/u/37842853?v=4"
                        cursor="pointer"
                      />
                      Knoweth Knoweth
                    </Td>

                    <Td>Knoweth@gmail.com</Td>
                    <Td>Monthly Pro Plan</Td>
                    <Td>
                      <Button
                        bg={"rgba(255, 0, 0, 0.20)"}
                        color={"#FF0000"}
                        size="sm"
                      >
                        Inactive
                      </Button>
                    </Td>
                  </Tr>
                </Tbody>
                <Tfoot>
                  <Tr>
                    <Td>
                      {" "}
                      <Avatar
                        ml="4"
                        size="sm"
                        name="Ahmad"
                        src="https://avatars2.githubusercontent.com/u/37842853?v=4"
                        cursor="pointer"
                      />
                      Knoweth Knoweth
                    </Td>

                    <Td>Knoweth@gmail.com</Td>
                    <Td>Monthly Pro Plan</Td>
                    <Td>
                      <Button
                        bg={"rgba(26, 191, 63, 0.20)"}
                        color={"#1ABF3F"}
                        size="sm"
                      >
                        Active
                      </Button>
                    </Td>
                  </Tr>
                  <Tr>
                    <Td>
                      {" "}
                      <Avatar
                        ml="4"
                        size="sm"
                        name="Ahmad"
                        src="https://avatars2.githubusercontent.com/u/37842853?v=4"
                        cursor="pointer"
                      />
                      Knoweth Knoweth
                    </Td>

                    <Td>Knoweth@gmail.com</Td>
                    <Td>Monthly Pro Plan</Td>
                    <Td>
                      <Button
                        bg={"rgba(26, 191, 63, 0.20)"}
                        color={"#1ABF3F"}
                        size="sm"
                      >
                        Active
                      </Button>
                    </Td>
                  </Tr>
                  <Tr>
                    <Td>
                      {" "}
                      <Avatar
                        ml="4"
                        size="sm"
                        name="Ahmad"
                        src="https://avatars2.githubusercontent.com/u/37842853?v=4"
                        cursor="pointer"
                      />
                      Knoweth Knoweth
                    </Td>

                    <Td>Knoweth@gmail.com</Td>
                    <Td>Monthly Pro Plan</Td>
                    <Td>
                      <Button
                        bg={"rgba(26, 191, 63, 0.20)"}
                        color={"#1ABF3F"}
                        size="sm"
                      >
                        Active
                      </Button>
                    </Td>
                  </Tr>
                  <Tr>
                    <Td>
                      {" "}
                      <Avatar
                        ml="4"
                        size="sm"
                        name="Ahmad"
                        src="https://avatars2.githubusercontent.com/u/37842853?v=4"
                        cursor="pointer"
                      />
                      Knoweth Knoweth
                    </Td>

                    <Td>Knoweth@gmail.com</Td>
                    <Td>Monthly Pro Plan</Td>
                    <Td>
                      <Button
                        bg={"rgba(26, 191, 63, 0.20)"}
                        color={"#1ABF3F"}
                        size="sm"
                      >
                        Active
                      </Button>
                      <Icon p="1px" as={BsThreeDotsVertical} />
                    </Td>
                  </Tr>
                </Tfoot>
              </Table>
            </TableContainer>
          </Stack>
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
        <NavItem icon={MdOutlineDashboard}>
          <Link href="/admin/dash">Dashboard</Link>
        </NavItem>
        <NavItem icon={MdOutlineSubtitles}>
          <Link href="/admin/subs">Subscriptions</Link>
        </NavItem>
        <NavItem icon={FiUsers}>
          <Link href="/admin/userDash">Users</Link>
        </NavItem>
        <NavItem icon={IoBarChartOutline}>
          <Link href="/admin/finances">Finances</Link>
        </NavItem>
        <NavItem icon={PiUsersThree}>Affilates</NavItem>
        <NavItem icon={MdOutlineNotificationAdd}>Notifications</NavItem>

        <Menu>
          <MenuButton
            as={Button}
            variant="ghost"
            rightIcon={<ChevronDownIcon />}
          >
            <NavItem icon={FiSettings}> Settings</NavItem>
          </MenuButton>
          <MenuList>
            <MenuItem onClick={() => router.push("/profileDash")}>
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
// const SidebarContent = ({ ...props }) => (

// );

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
