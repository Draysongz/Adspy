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
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
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

export default function ManageSubscriptions() {
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
            bg={useColorModeValue("white", "gray.700")}
            rounded={"xl"}
            boxShadow={"lg"}
            p={10}
            my={4}
          >
            <Heading size={"md"}>Subscriptions and Billing</Heading>{" "}
            <Box
              border={"1px solid #0066B2"}
              p={5}
              bg={"rgba(0, 102, 178, 0.10)"}
            >
              <Text color={"#747474"}>Active Subscription</Text>
              <Heading
                fontSize={"24px"}
                fontStyle="normal"
                fontWeight={"500"}
                mt={1}
              >
                PRO Plan (Recommended)
              </Heading>
              <Flex my={5} gap={5} justify={"space-between"}>
                <Flex gap={3}>
                  {" "}
                  <Button
                    bg={"rgba(26, 191, 63, 0.20)"}
                    color={"#1ABF3F"}
                    size="sm"
                  >
                    Active
                  </Button>
                  <Button
                    bg={"rgba(0, 102, 178, 0.23)"}
                    color={"#0066B2"}
                    size="sm"
                  >
                    Monthly
                  </Button>
                </Flex>

                <Button
                  variant={"outline"}
                  color={"#0066B2"}
                  rounded={"md"}
                  bg={"white"}
                  size={["sm", "md"]}
                >
                  Upgrade
                </Button>
              </Flex>
              <Text fontSize={"12px"} color={"#747474"}>
                Subscription Date: 20TH, August, 2023
              </Text>
              <Text fontSize={"12px"} color={"#747474"}>
                Next Billing Date: 20TH, September, 2023
              </Text>
            </Box>{" "}
            <Flex justify={"space-between"} p={5}>
              <Box>
                <Heading
                  fontSize={"20px"}
                  fontStyle={"normal"}
                  fontWeight={"500"}
                >
                  Cancel Subscription
                </Heading>
                <Text fontSize={"12px"} color={"#747474"} mt={2}>
                  By cancelling your subscription, your data and subscription
                  will be lost.
                </Text>
              </Box>{" "}
              <Button variant={"link"} color="#FF0000">
                Cancel Subscription
              </Button>
            </Flex>
            <br></br>
            <Heading>Billing History</Heading>
            <TableContainer>
              <Table variant="unstyled" colorScheme="teal">
                <TableCaption>
                  Imperial to metric conversion factors
                </TableCaption>
                <Thead
                  bg="rgba(216, 216, 216, 0.10)"
                  border={" 1px white solid"}
                  borderRadius={"4xl"}
                >
                  <Tr>
                    <Th>Date</Th>
                    <Th>Subscription</Th>
                    <Th>Status </Th>
                    <Th isNumeric>Price</Th>
                    <Th>Invoice</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td>11/12/2023</Td>
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
                    <Td isNumeric>N22,000</Td>
                    <Td color={"#0066B2"}>Download</Td>
                  </Tr>
                  <Tr>
                    <Td>11/12/2023</Td>
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
                    <Td isNumeric>N22,000</Td>
                    <Td color={"#0066B2"}>Download</Td>
                  </Tr>
                  <Tr>
                    <Td>11/12/2023</Td>
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
                    <Td isNumeric>N22,000</Td>
                    <Td color={"#0066B2"}>Download</Td>
                  </Tr>
                </Tbody>
                <Tfoot>
                  <Tr>
                    <Td>11/12/2023</Td>
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
                    <Td isNumeric>N22,000</Td>
                    <Td color={"#0066B2"}>Download</Td>
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
