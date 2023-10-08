import React from "react";
import {
  SimpleGrid,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Text,
  Heading,
  Button,
  Flex,
  Avatar,
  AvatarBadge,
  AvatarGroup,
  Box,
  Image,
  IconButton,
  Container,
  Center,
} from "@chakra-ui/react";
import { BiLike, BiShare, BiChat } from "react-icons/bi";
import { BsThreeDotsVertical } from "react-icons/bs";
// import Image from "next/image";
import facebook from "../images/fb.svg";

export default function AdsCard() {
  return (
    <>
      <Text color={"gray.500"} mt={10}>
        Results...
      </Text>
      <Center p={5}>
        <SimpleGrid
          justifyContent="center"
          columns={[1, null, 3]}
          spacing="40px"
        >
          <Card maxW="md">
            <CardHeader>
              <Flex spacing="4">
                <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
                  <Avatar name="Page Name" src="https://bit.ly/sage-adebayo" />

                  <Box>
                    {pageNames[index] && pageNames[index] !== "undefined" ? (
                      <Text>{JSON.parse(pageNames[index])}</Text>
                    ) : (
                      <Text>No page name available</Text>
                    )}
                    <Text>{ad.ad_delivery_start_time}</Text>
                  </Box>
                </Flex>
                <Image
                  borderRadius={"md"}
                  src={"/fb.svg"}
                  alt="meta"
                  width={"5"}
                />
              </Flex>
            </CardHeader>
            <CardBody>
              <Text>
                Lorem ipsum dolor sit amet consectetur. Habitant bibendum
                tincidunt nibh nibh fermentum aenean penatibus bibendum.
              </Text>
            </CardBody>
            <Image
              objectFit="cover"
              src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              alt="Chakra UI"
            />

            <CardFooter
              justify="space-between"
              flexWrap="wrap"
              sx={{
                "& > button": {
                  minW: "100px",
                },
              }}
            >
              <Button flex="1" variant="ghost" leftIcon={<BiLike />}>
                Like
              </Button>
              <Button flex="1" variant="ghost" leftIcon={<BiChat />}>
                Comment
              </Button>
              <Button flex="1" variant="ghost" leftIcon={<BiShare />}>
                Share
              </Button>
            </CardFooter>
          </Card>

          <Card maxW="md">
            <CardHeader>
              <Flex spacing="4">
                <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
                  <Avatar name="Page Name" src="https://bit.ly/sage-adebayo" />

                  <Box>
                    <Heading size="sm">Page Name</Heading>
                    <Text>Sponsored Ad</Text>
                  </Box>
                </Flex>
                <Image
                  borderRadius={"md"}
                  src={"/fb.svg"}
                  alt="meta"
                  width={"5"}
                />
              </Flex>
            </CardHeader>
            <CardBody>
              <Text>
                Lorem ipsum dolor sit amet consectetur. Habitant bibendum
                tincidunt nibh nibh fermentum aenean penatibus bibendum.
              </Text>
            </CardBody>
            <Image
              objectFit="cover"
              src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              alt="Chakra UI"
            />

            <CardFooter
              justify="space-around"
              flexWrap="wrap"
              sx={{
                "& > button": {
                  minW: "100px",
                },
              }}
            >
              <Button flex="1" variant="ghost" leftIcon={<BiLike />}>
                Like
              </Button>
              <Button flex="1" variant="ghost" leftIcon={<BiChat />}>
                Comment
              </Button>
              <Button flex="1" variant="ghost" leftIcon={<BiShare />}>
                Share
              </Button>
            </CardFooter>
          </Card>

          <Card maxW="md">
            <CardHeader>
              <Flex spacing="4">
                <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
                  <Avatar name="Page Name" src="https://bit.ly/sage-adebayo" />

                  <Box>
                    <Heading size="sm">Page Name</Heading>
                    <Text>Sponsored Ad</Text>
                  </Box>
                </Flex>
                <Image
                  borderRadius={"md"}
                  src={"/fb.svg"}
                  alt="meta"
                  width={"5"}
                />
                <IconButton
                  variant="ghost"
                  colorScheme="gray"
                  aria-label="See menu"
                  icon={<BsThreeDotsVertical />}
                />
              </Flex>
            </CardHeader>
            <CardBody>
              <Text>
                Lorem ipsum dolor sit amet consectetur. Habitant bibendum
                tincidunt nibh nibh fermentum aenean penatibus bibendum.
              </Text>
            </CardBody>
            <Image
              objectFit="cover"
              src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              alt="Chakra UI"
            />

            <CardFooter
              justify="center"
              flexWrap="wrap"
              sx={{
                "& > button": {
                  minW: "100px",
                },
              }}
            >
              <Button flex="1" variant="ghost" leftIcon={<BiLike />}>
                Like
              </Button>
              <Button flex="1" variant="ghost" leftIcon={<BiChat />}>
                Comment
              </Button>
              <Button flex="1" variant="ghost" leftIcon={<BiShare />}>
                Share
              </Button>
            </CardFooter>
          </Card>
        </SimpleGrid>
      </Center>
    </>
  );
}
