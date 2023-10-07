import React, { useState, useEffect } from "react";
import {
  Box,
  Flex,
  Image,
  Text,
  Button,
  Card,
  CardBody,
  CardFooter,
  Spacer,
  Drawer,
  DrawerContent,
  DrawerOverlay,
  DrawerBody,
  DrawerCloseButton,
  useDisclosure,
  Wrap,
  WrapItem,
  Avatar,
  Heading,
  Tabs,
  Tab,
  TabPanel,
  TabList,
  TabPanels,
  VStack,
  HStack,
  Select,
  FormLabel,
  Icon,
  Input,
  Circle,
  Stack,
} from "@chakra-ui/react";
import { BiLike, BiShare, BiChat } from "react-icons/bi";
import { HamburgerIcon } from "@chakra-ui/icons";
import { useRef } from "react";
import Link from "next/link";
import { UpDownIcon } from "@chakra-ui/icons";
import { FcGoogle } from "react-icons/fc";
import axios from "axios";
import { Country } from "country-state-city";
import AdsCard from "@/components/adsCard";
import { useRouter } from "next/navigation";

const Adspy = () => {
  const btnRef = useRef();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [searchMode, setSearchMode] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [sortBy, setSortBy] = useState("Likes");
  const [selectedCountry, setSelectedCountry] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [adType, setAdType] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [platform, setPlatform] = useState("");
  const [adsData, setAdsData] = useState([]);
  const [adSnapshotUrls, setAdSnapshotUrls] = useState([]);
  const [pageNames, setPageNames] = useState({});

  const countries = Country.getAllCountries();
  const countryOptions = countries.map((country) => (
    <option key={country.isoCode} value={country.isoCode}>
      {country.name}
    </option>
  ));

  const router=useRouter()
  console.log(adsData);

  const handleSearchAds = () => {
    // Define your API endpoint
    const endpoint = "https://graph.facebook.com/v18.0/ads_archive"; // Replace vX.Y with the actual API version

    // Add your API key to the query parameters
    const apiKey =
      "EAAEscRYLMj8BO4ZAPystMBQylzOw0UqZBIg4ftCZCiHCZAZBj0PZB0CirrVWHGzo9y1emIXApMcK5WPHZBgtBndFNk76e3WkTUHsMVxVrKdBZAXIJ39f9QeFoF2jXvSXaoN0H31Bjb6Pqd6VNOcTUi0T8cVLOjO7PKO7QyT1WdZAzLDTduvte3LMnPtZCGz6da8G8MrNuPLctv";
    const queryParams = {
      search_terms: searchValue,
      active_status: "all",
      media_type: adType,
      publisher_platforms: platform ? [platform] : " Facebook",
      ad_reached_countries: selectedCountry ? selectedCountry : undefined,
      access_token: apiKey, // Include your API key here
      // Add other query parameters based on your input fields
    };

    // You can adjust queryParams as needed for other fields like sort, date, gender, age, etc.

    // Make a GET request to the Facebook Ad Library API
    axios
      .get(endpoint, { params: queryParams })
      .then((response) => {
        // Handle the API response data here
        console.log(response.data);
        setAdsData(response.data);
      })
      .catch((error) => {
        // Handle errors
        console.error(error);
      });
  };

  useEffect(() => {
    // Map through the adsData array and extract ad_snapshot_url into adSnapshotUrls state
    const extractedUrls = adsData.data?.map((ad) => ad.ad_snapshot_url);
    setAdSnapshotUrls(extractedUrls);
  }, [adsData]);

  useEffect(() => {
    console.log(adSnapshotUrls);
    const getPageNameForUrl = async (adSnapshotUrl) => {
      try {
        const response = await fetch("/api/getPageName", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ adSnapshotUrl }),
        });

        const data = await response.json();
       
        return data;
      } catch (error) {
        console.error("Error fetching page name:", error);
        return null; // Handle the error as needed
      }
    };

    // Asynchronous function to batch process page name requests
    const fetchPageNames = async (adSnapshotUrls) => {
      const pageNamePromises = adSnapshotUrls?.map((adSnapshotUrl) =>
        getPageNameForUrl(adSnapshotUrl)
      );

      try {
        const pageNames = await Promise.all(pageNamePromises);

        // pageNames now contains the resolved page names for each URL
        console.log(pageNames);
        setPageNames(pageNames);
      } catch (error) {
        console.error("Error fetching page names in batch:", error);
        return []; // Handle the error as needed
      }
    };

    if (adSnapshotUrls != undefined) {
      fetchPageNames(adSnapshotUrls);
    }
  }, [adSnapshotUrls]);

  useEffect(() => {
    console.log(pageNames);
  }, [pageNames]);

  const clearAll = () => {
    setSearchMode("");
    setAdType("");
    setAge("");
    setPlatform("");
    setEndDate("");
    setSearchValue("");
    setEndDate("");
    setGender("");
    setSelectedCountry("");
    setSortBy("");
    setStartDate("");
    setAdsData([])
    setPageNames([])
    setAdSnapshotUrls([])
  };

  return (
    <Flex direction={"column"}>
      <>
        <Card>
          <Flex
            p={4}
            alignItems={"center"}
            justifyContent={"space-between"}
            display={["none", "none", "flex"]}
          >
            <Box px={8}>
              <Image src={"/knoweth.png"} alt="logo" />
            </Box>

            <Flex px={8} alignItems={"center"} gap={7}>
              <Flex gap={3} alignItems={"center"}>
                <Wrap>
                  <WrapItem>
                    <Avatar
                      name="Dan Abrahmov"
                      src="https://bit.ly/dan-abramov"
                    />
                  </WrapItem>
                </Wrap>
                <Flex direction={"column"}>
                  <Text color={"#1B1D29"} fontSize={"lg"}>
                    Felix Ohaeri
                  </Text>
                  <Text mt={"-5%"} color={"#BFBEBE"}>
                    test4@gmail.com
                  </Text>
                </Flex>
              </Flex>

              <HamburgerIcon
                ref={btnRef}
                onClick={onOpen}
                boxSize={9}
                color={"#000"}
              />
            </Flex>
          </Flex>
        </Card>

        <Flex
          display={["block", "block", "none", "none"]}
          h={"12vh"}
          overflow={"hidden"}
          pos={"fixed"}
          zIndex={"1000"}
        >
          <Card borderRadius={"none"} bgColor={"#fff"} w={"100vw"} px={6}>
            <CardBody p={4}>
              <Flex alignItems={"center"}>
                <Box>
                  <Flex justifyContent={"center"}>
                    <Image src={"/knoweth.png"} alt="logo" w={"70%"} />
                  </Flex>
                </Box>
                <Spacer />

                <Box>
                  <HamburgerIcon
                    ref={btnRef}
                    onClick={onOpen}
                    boxSize={6}
                    color={"#000"}
                  />
                  <Drawer
                    isOpen={isOpen}
                    placement="top"
                    onClose={onClose}
                    finalFocusRef={btnRef}
                  >
                    <DrawerOverlay />
                    <DrawerContent>
                      <DrawerCloseButton />

                      <DrawerBody>
                        <Flex gap={10} direction={["column", "column"]}>
                          <Text>Products</Text>
                          <Text>How it works</Text>
                          <Text>Pricing</Text>
                          <Link to="/faq">
                            <Text>FAQS</Text>
                          </Link>
                          <Text>Contact Us</Text>
                        </Flex>

                        <Flex gap={3} mt={6}>
                          <Link to="/register">
                            <Button
                              borderRadius={"md"}
                              w={["30vw"]}
                              color={"white"}
                            >
                              Create Account
                            </Button>
                          </Link>
                          <Link to="/login">
                            <Button
                              borderRadius={"md"}
                              w={"28vw"}
                              variant={"outline"}
                            >
                              Login
                            </Button>
                          </Link>
                        </Flex>
                      </DrawerBody>
                    </DrawerContent>
                  </Drawer>
                </Box>
              </Flex>
            </CardBody>
          </Card>
        </Flex>
      </>

      <Flex
        mt={{ xs: "10", md: "none" }}
        bgColor={"#0066B2"}
        p={6}
        gap={10}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Box>
          <Text fontSize={"lg"} color={"#F8F8F8"}>
            Make more sales with Knoweth Pro!
          </Text>
        </Box>

        <Box>
          <Button
            color={"#1B1D29"}
            bgColor={"#fff"}
            fontSize={"md"}
            borderRadius={"md"}
          >
            Upgrade to Knoweth Pro
          </Button>
        </Box>
      </Flex>

      <Flex justifyContent={"center"} mt={10} direction={"column"} gap={10}>
        <Box alignSelf={"center"}>
          <Heading color={"#1B1D29"} fontWeight={"300"} fontSize={"32px"}>
            Search Ads Spy through filter
          </Heading>
        </Box>
        <Stack direction={"column"} justifyContent={"center"}>
          {" "}
          <Text p={1} textAlign={"center"} w={"60vw"} fontSize={"xl"}>
            Choose Adspy Platform
          </Text>
          <Box>
            <Tabs variant="unstyled">
              <TabList justifyContent={"center"}>
                <Flex bgColor={"#F5F4F4"} p={3}>
                  <Tab
                    onClick={() => setPlatform("facebook")}
                    borderRadius={"md"}
                    _selected={{ color: "white", bg: "blue.500" }}
                  >
                    <HStack spacing={3}>
                      <Image
                        borderRadius={"md"}
                        src={"/fb.svg"}
                        alt="meta"
                        width={"5"}
                      />
                      <Text
                        display={["none", "none", "flex", "flex", "flex"]}
                        fontSize={"lg"}
                      >
                        Facebook
                      </Text>
                    </HStack>
                  </Tab>
                  <Tab
                    borderRadius={"md"}
                    _selected={{ color: "white", bg: "blue.500" }}
                  >
                    <HStack>
                      <Image
                        borderRadius={"md"}
                        src={"/IG.svg"}
                        alt="meta"
                        width={"5"}
                      />
                      <Text
                        display={["none", "none", "flex", "flex", "flex"]}
                        fontSize={"lg"}
                      >
                        Instagram
                      </Text>
                    </HStack>
                  </Tab>
                  <Tab
                    borderRadius={"md"}
                    _selected={{ color: "white", bg: "blue.500" }}
                  >
                    <HStack>
                      <Image
                        borderRadius={"md"}
                        src={"/twitter.svg"}
                        alt="meta"
                        width={"5"}
                      />
                      <Text
                        display={["none", "none", "flex", "flex", "flex"]}
                        fontSize={"lg"}
                      >
                        Twitter
                      </Text>
                    </HStack>
                  </Tab>
                  <Tab
                    borderRadius={"md"}
                    _selected={{ color: "white", bg: "blue.500" }}
                  >
                    <HStack>
                      <Image src={"/linkedin.svg"} alt="meta" width={"5"} />
                      <Text
                        fontSize={"lg"}
                        display={["none", "none", "flex", "flex", "flex"]}
                      >
                        Linkedin
                      </Text>
                    </HStack>
                  </Tab>
                  <Tab
                    borderRadius={"md"}
                    _selected={{ color: "white", bg: "blue.500" }}
                  >
                    <HStack>
                      <Image
                        borderRadius={"md"}
                        src={"/youtube.svg"}
                        alt="meta"
                        width={"5"}
                      />
                      <Text
                        display={["none", "none", "flex", "flex", "flex"]}
                        fontSize={"lg"}
                      >
                        Youtube
                      </Text>
                    </HStack>
                  </Tab>
                  <Tab
                    borderRadius={"md"}
                    _selected={{ color: "white", bg: "blue.500" }}
                  >
                    <HStack>
                      <Icon as={FcGoogle} boxSize={4} />
                      <Text
                        display={["none", "none", "flex", "flex", "flex"]}
                        fontSize={"lg"}
                      >
                        Google
                      </Text>
                    </HStack>
                  </Tab>
                </Flex>
              </TabList>
              <TabPanels>
                <TabPanel mt={2}>
                  <Flex
                    flexDir={["column", "column", "row", "row", "row"]}
                    gap={5}
                    justifyContent={"center"}
                  >
                    <Flex direction={"column"}>
                      <FormLabel color={"#747474"}>Search by</FormLabel>
                      <Select
                        w={["15w", "15w", "15vw"]}
                        icon={<UpDownIcon />}
                        value={searchMode}
                        onChange={(e) => {
                          setSearchMode(e.target.value);
                        }}
                        placeholder="Search Mode"
                      >
                        <option value="Keyword">Keyword</option>
                        <option value="advertiser">advertiser</option>
                      </Select>
                    </Flex>

                    {searchMode && (
                      <Flex direction={"column"}>
                        <FormLabel color={"#747474"}>
                          Choose {searchMode}
                        </FormLabel>
                        <Input
                          w={["15w", "15w", "15vw"]}
                          type="text"
                          placeholder={`enter ${searchMode}`}
                          value={searchValue}
                          onChange={(e) => {
                            setSearchValue(e.target.value);
                          }}
                        />
                      </Flex>
                    )}

                    <Flex direction={"column"}>
                      <FormLabel color={"#747474"}>Sort by</FormLabel>
                      <Select
                        w={["15w", "15w", "15vw"]}
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                        icon={<UpDownIcon />}
                        placeholder="Sort by"
                      >
                        <option value="Likes">Likes</option>
                        <option value="Comments">Comments</option>
                        <option value="Shares">Shares</option>
                      </Select>
                    </Flex>

                    <Flex direction={"column"}>
                      <FormLabel color={"#747474"}>Choose Ad Country</FormLabel>
                      <Select
                        value={selectedCountry}
                        onChange={(e) => setSelectedCountry(e.target.value)}
                        w={["15w", "15w", "15vw"]}
                        icon={<UpDownIcon />}
                        placeholder="Choose Ad Country"
                      >
                        {countryOptions}
                      </Select>
                    </Flex>
                  </Flex>
                  <Flex
                    flexDir={["column", "column", "row", "row", "row"]}
                    gap={5}
                    mt={4}
                    justifyContent={"center"}
                  >
                    <Flex direction={"column"}>
                      <FormLabel color={"#747474"}>Enter Start date</FormLabel>
                      <Input
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                        w={["15w", "15w", "15vw"]}
                        type="date"
                      />
                    </Flex>

                    <Flex direction={"column"}>
                      <FormLabel color={"#747474"}>Enter End date</FormLabel>
                      <Input
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                        w={["15w", "15w", "15vw"]}
                        type="date"
                      />
                    </Flex>

                    <Flex direction={"column"}>
                      <FormLabel color={"#747474"}>Choose Ads Type</FormLabel>
                      <Select
                        w={["15w", "15w", "15vw"]}
                        icon={<UpDownIcon />}
                        value={adType}
                        onChange={(e) => {
                          setAdType(e.target.value);
                        }}
                        placeholder="Ad Type"
                      >
                        <option value="Image">Photo</option>
                        <option value="Video">Video</option>
                      </Select>
                    </Flex>

                    <Flex direction={"column"}>
                      <FormLabel color={"#747474"}>Gender</FormLabel>
                      <Select
                        w={["15w", "15w", "15vw"]}
                        icon={<UpDownIcon />}
                        value={gender}
                        onChange={(e) => {
                          setGender(e.target.value);
                        }}
                        placeholder="Gender"
                      >
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                      </Select>
                    </Flex>

                    <Flex direction={"column"}>
                      <FormLabel color={"#747474"}>Age</FormLabel>
                      <Input
                        w={["15w", "15w", "15vw"]}
                        placeholder="Age"
                        onChange={(e) => setAge(e.target.value)}
                        value={age}
                      />
                    </Flex>
                  </Flex>
                  <Flex
                    flexDir={["column", "column", "row", "row", "row"]}
                    gap={5}
                    justifyContent={"center"}
                    mt={4}
                  >
                    <Button
                      borderRadius={"md"}
                      w={"12w"}
                      onClick={handleSearchAds}
                      fontWeight={"400"}
                      h={"7vh"}
                      fontSize={"md"}
                    >
                      Search Ads
                    </Button>
                    <Button
                      borderRadius={"md"}
                      h={"7vh"}
                      onClick={clearAll}
                      color={"#1B1D29"}
                      w={"12w"}
                      variant={"outline"}
                    >
                      Clear All
                    </Button>
                  </Flex>
                </TabPanel>
                <TabPanel mt={2}>
                  <Flex
                    flexDir={["column", "column", "row", "row", "row"]}
                    gap={5}
                    justifyContent={"center"}
                  >
                    <Flex direction={"column"}>
                      <FormLabel color={"#747474"}>Search by</FormLabel>
                      <Select
                        w={["15w", "15w", "15vw"]}
                        icon={<UpDownIcon />}
                        value={searchMode}
                        onChange={(e) => {
                          setSearchMode(e.target.value);
                        }}
                        placeholder="Search Mode"
                      >
                        <option value="Keyword">Keyword</option>
                        <option value="advertiser">advertiser</option>
                      </Select>
                    </Flex>

                    {searchMode && (
                      <Flex direction={"column"}>
                        <FormLabel color={"#747474"}>
                          Choose {searchMode}
                        </FormLabel>
                        <Input
                          w={["15w", "15w", "15vw"]}
                          type="text"
                          placeholder={`enter ${searchMode}`}
                        />
                      </Flex>
                    )}

                    <Flex direction={"column"}>
                      <FormLabel color={"#747474"}>Sort by</FormLabel>
                      <Select
                        w={["15w", "15w", "15vw"]}
                        icon={<UpDownIcon />}
                        placeholder="Sort by"
                      >
                        <option value="Likes">Likes</option>
                        <option value="Comments">Comments</option>
                        <option value="Shares">Shares</option>
                      </Select>
                    </Flex>

                    <Flex direction={"column"}>
                      <FormLabel color={"#747474"}>Choose Ad Country</FormLabel>
                      <Select
                        value={selectedCountry}
                        onChange={(e) => setSelectedCountry(e.target.value)}
                        w={["15w", "15w", "15vw"]}
                        icon={<UpDownIcon />}
                        placeholder="Choose Ad Country"
                      >
                        {countryOptions}
                      </Select>
                    </Flex>
                  </Flex>
                  <Flex
                    flexDir={["column", "column", "row", "row", "row"]}
                    gap={5}
                    mt={4}
                    justifyContent={"center"}
                  >
                    <Flex direction={"column"}>
                      <FormLabel color={"#747474"}>Enter Start date</FormLabel>
                      <Input w={["15w", "15w", "15vw"]} type="date" />
                    </Flex>

                    <Flex direction={"column"}>
                      <FormLabel color={"#747474"}>Enter End date</FormLabel>
                      <Input w={["15w", "15w", "15vw"]} type="date" />
                    </Flex>

                    <Flex direction={"column"}>
                      <FormLabel color={"#747474"}>Choose Ads Type</FormLabel>
                      <Select
                        w={["15w", "15w", "15vw"]}
                        icon={<UpDownIcon />}
                        value={adType}
                        onChange={(e) => {
                          setAdType(e.target.value);
                        }}
                        placeholder="Ad Type"
                      >
                        <option value="Photo">Photo</option>
                        <option value="Video">Video</option>
                      </Select>
                    </Flex>

                    <Flex direction={"column"}>
                      <FormLabel color={"#747474"}>Gender</FormLabel>
                      <Select
                        w={["15w", "15w", "15vw"]}
                        icon={<UpDownIcon />}
                        value={adType}
                        onChange={(e) => {
                          setAdType(e.target.value);
                        }}
                        placeholder="Gender"
                      >
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                      </Select>
                    </Flex>

                    <Flex direction={"column"}>
                      <FormLabel color={"#747474"}>Age</FormLabel>
                      <Input w={["15w", "15w", "15vw"]} placeholder="Age" />
                    </Flex>
                  </Flex>
                  <Flex
                    flexDir={["column", "column", "row", "row", "row"]}
                    gap={5}
                    justifyContent={"center"}
                    mt={4}
                  >
                    <Button
                      borderRadius={"md"}
                      w={"12w"}
                      onClick={handleSearchAds}
                      fontWeight={"400"}
                      h={"7vh"}
                      fontSize={"md"}
                    >
                      Search Ads
                    </Button>
                    <Button
                      borderRadius={"md"}
                      h={"7vh"}
                      onClick={clearAll}
                      color={"#1B1D29"}
                      w={"12w"}
                      variant={"outline"}
                    >
                      Clear All
                    </Button>
                  </Flex>
                </TabPanel>
                <TabPanel mt={2}>
                  <Flex
                    flexDir={["column", "column", "row", "row", "row"]}
                    gap={5}
                    justifyContent={"center"}
                  >
                    <Flex direction={"column"}>
                      <FormLabel color={"#747474"}>Search by</FormLabel>
                      <Select
                        w={["15w", "15w", "15vw"]}
                        icon={<UpDownIcon />}
                        value={searchMode}
                        onChange={(e) => {
                          setSearchMode(e.target.value);
                        }}
                        placeholder="Search Mode"
                      >
                        <option value="Keyword">Keyword</option>
                        <option value="advertiser">advertiser</option>
                      </Select>
                    </Flex>

                    {searchMode && (
                      <Flex direction={"column"}>
                        <FormLabel color={"#747474"}>
                          Choose {searchMode}
                        </FormLabel>
                        <Input
                          w={["15w", "15w", "15vw"]}
                          type="text"
                          placeholder={`enter ${searchMode}`}
                        />
                      </Flex>
                    )}

                    <Flex direction={"column"}>
                      <FormLabel color={"#747474"}>Sort by</FormLabel>
                      <Select
                        w={["15w", "15w", "15vw"]}
                        icon={<UpDownIcon />}
                        placeholder="Sort by"
                      >
                        <option value="Likes">Likes</option>
                        <option value="Comments">Comments</option>
                        <option value="Shares">Shares</option>
                      </Select>
                    </Flex>

                    <Flex direction={"column"}>
                      <FormLabel color={"#747474"}>Choose Ad Country</FormLabel>
                      <Select
                        value={selectedCountry}
                        onChange={(e) => setSelectedCountry(e.target.value)}
                        w={["15w", "15w", "15vw"]}
                        icon={<UpDownIcon />}
                        placeholder="Choose Ad Country"
                      >
                        {countryOptions}
                      </Select>
                    </Flex>
                  </Flex>
                  <Flex
                    flexDir={["column", "column", "row", "row", "row"]}
                    gap={5}
                    justifyContent={"center"}
                    mt={4}
                  >
                    <Flex direction={"column"}>
                      <FormLabel color={"#747474"}>Enter Start date</FormLabel>
                      <Input w={["15w", "15w", "15vw"]} type="date" />
                    </Flex>

                    <Flex direction={"column"}>
                      <FormLabel color={"#747474"}>Enter End date</FormLabel>
                      <Input w={["15w", "15w", "15vw"]} type="date" />
                    </Flex>

                    <Flex direction={"column"}>
                      <FormLabel color={"#747474"}>Choose Ads Type</FormLabel>
                      <Select
                        w={["15w", "15w", "15vw"]}
                        icon={<UpDownIcon />}
                        value={adType}
                        onChange={(e) => {
                          setAdType(e.target.value);
                        }}
                        placeholder="Ad Type"
                      >
                        <option value="Photo">Photo</option>
                        <option value="Video">Video</option>
                      </Select>
                    </Flex>

                    <Flex direction={"column"}>
                      <FormLabel color={"#747474"}>Gender</FormLabel>
                      <Select
                        w={["15w", "15w", "15vw"]}
                        icon={<UpDownIcon />}
                        value={adType}
                        onChange={(e) => {
                          setAdType(e.target.value);
                        }}
                        placeholder="Gender"
                      >
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                      </Select>
                    </Flex>

                    <Flex direction={"column"}>
                      <FormLabel color={"#747474"}>Age</FormLabel>
                      <Input w={["15w", "15w", "15vw"]} placeholder="Age" />
                    </Flex>
                  </Flex>
                  <Flex
                    flexDir={["column", "column", "row", "row", "row"]}
                    gap={5}
                    justifyContent={"center"}
                    mt={4}
                  >
                    <Button
                      borderRadius={"md"}
                      w={"12w"}
                      fontWeight={"400"}
                      h={"7vh"}
                      fontSize={"md"}
                    >
                      Search Ads
                    </Button>
                    <Button
                      borderRadius={"md"}
                      h={"7vh"}
                      onClick={clearAll}
                      color={"#1B1D29"}
                      w={"12w"}
                      variant={"outline"}
                    >
                      Clear All
                    </Button>
                  </Flex>
                </TabPanel>
                <TabPanel mt={2}>
                  <Flex
                    flexDir={["column", "column", "row", "row", "row"]}
                    gap={5}
                    justifyContent={"center"}
                  >
                    <Flex direction={"column"}>
                      <FormLabel color={"#747474"}>Search by</FormLabel>
                      <Select
                        w={["15w", "15w", "15vw"]}
                        icon={<UpDownIcon />}
                        value={searchMode}
                        onChange={(e) => {
                          setSearchMode(e.target.value);
                        }}
                        placeholder="Search Mode"
                      >
                        <option value="Keyword">Keyword</option>
                        <option value="advertiser">advertiser</option>
                      </Select>
                    </Flex>

                    {searchMode && (
                      <Flex direction={"column"}>
                        <FormLabel color={"#747474"}>
                          Choose {searchMode}
                        </FormLabel>
                        <Input
                          w={["15w", "15w", "15vw"]}
                          type="text"
                          placeholder={`enter ${searchMode}`}
                        />
                      </Flex>
                    )}

                    <Flex direction={"column"}>
                      <FormLabel color={"#747474"}>Sort by</FormLabel>
                      <Select
                        w={["15w", "15w", "15vw"]}
                        icon={<UpDownIcon />}
                        placeholder="Sort by"
                      >
                        <option value="Likes">Likes</option>
                        <option value="Comments">Comments</option>
                        <option value="Shares">Shares</option>
                      </Select>
                    </Flex>

                    <Flex direction={"column"}>
                      <FormLabel color={"#747474"}>Choose Ad Country</FormLabel>
                      <Select
                        value={selectedCountry}
                        onChange={(e) => setSelectedCountry(e.target.value)}
                        w={["15w", "15w", "15vw"]}
                        icon={<UpDownIcon />}
                        placeholder="Choose Ad Country"
                      >
                        {countryOptions}
                      </Select>
                    </Flex>
                  </Flex>
                  <Flex
                    flexDir={["column", "column", "row", "row", "row"]}
                    gap={5}
                    justifyContent={"center"}
                    mt={4}
                  >
                    <Flex direction={"column"}>
                      <FormLabel color={"#747474"}>Enter Start date</FormLabel>
                      <Input w={["15w", "15w", "15vw"]} type="date" />
                    </Flex>

                    <Flex direction={"column"}>
                      <FormLabel color={"#747474"}>Enter End date</FormLabel>
                      <Input w={["15w", "15w", "15vw"]} type="date" />
                    </Flex>

                    <Flex direction={"column"}>
                      <FormLabel color={"#747474"}>Choose Ads Type</FormLabel>
                      <Select
                        w={["15w", "15w", "15vw"]}
                        icon={<UpDownIcon />}
                        value={adType}
                        onChange={(e) => {
                          setAdType(e.target.value);
                        }}
                        placeholder="Ad Type"
                      >
                        <option value="Photo">Photo</option>
                        <option value="Video">Video</option>
                      </Select>
                    </Flex>

                    <Flex direction={"column"}>
                      <FormLabel color={"#747474"}>Gender</FormLabel>
                      <Select
                        w={["15w", "15w", "15vw"]}
                        icon={<UpDownIcon />}
                        value={adType}
                        onChange={(e) => {
                          setAdType(e.target.value);
                        }}
                        placeholder="Gender"
                      >
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                      </Select>
                    </Flex>

                    <Flex direction={"column"}>
                      <FormLabel color={"#747474"}>Age</FormLabel>
                      <Input w={["15w", "15w", "15vw"]} placeholder="Age" />
                    </Flex>
                  </Flex>
                  <Flex
                    flexDir={["column", "column", "row", "row", "row"]}
                    gap={5}
                    justifyContent={"center"}
                    mt={4}
                  >
                    <Button
                      borderRadius={"md"}
                      w={"12w"}
                      fontWeight={"400"}
                      h={"7vh"}
                      fontSize={"md"}
                    >
                      Search Ads
                    </Button>
                    <Button
                      borderRadius={"md"}
                      h={"7vh"}
                      onClick={clearAll}
                      color={"#1B1D29"}
                      w={"12w"}
                      variant={"outline"}
                    >
                      Clear All
                    </Button>
                  </Flex>
                </TabPanel>
                <TabPanel mt={2}>
                  <Flex
                    flexDir={["column", "column", "row", "row", "row"]}
                    gap={5}
                    justifyContent={"center"}
                  >
                    <Flex direction={"column"}>
                      <FormLabel color={"#747474"}>Search by</FormLabel>
                      <Select
                        w={["15w", "15w", "15vw"]}
                        icon={<UpDownIcon />}
                        value={searchMode}
                        onChange={(e) => {
                          setSearchMode(e.target.value);
                        }}
                        placeholder="Search Mode"
                      >
                        <option value="Keyword">Keyword</option>
                        <option value="advertiser">advertiser</option>
                      </Select>
                    </Flex>

                    {searchMode && (
                      <Flex direction={"column"}>
                        <FormLabel color={"#747474"}>
                          Choose {searchMode}
                        </FormLabel>
                        <Input
                          w={["15w", "15w", "15vw"]}
                          type="text"
                          placeholder={`enter ${searchMode}`}
                        />
                      </Flex>
                    )}

                    <Flex direction={"column"}>
                      <FormLabel color={"#747474"}>Sort by</FormLabel>
                      <Select
                        w={["15w", "15w", "15vw"]}
                        icon={<UpDownIcon />}
                        placeholder="Sort by"
                      >
                        <option value="Likes">Likes</option>
                        <option value="Comments">Comments</option>
                        <option value="Shares">Shares</option>
                      </Select>
                    </Flex>

                    <Flex direction={"column"}>
                      <FormLabel color={"#747474"}>Choose Ad Country</FormLabel>
                      <Select
                        value={selectedCountry}
                        onChange={(e) => setSelectedCountry(e.target.value)}
                        w={["15w", "15w", "15vw"]}
                        icon={<UpDownIcon />}
                        placeholder="Choose Ad Country"
                      >
                        {countryOptions}
                      </Select>
                    </Flex>
                  </Flex>
                  <Flex
                    flexDir={["column", "column", "row", "row", "row"]}
                    gap={5}
                    justifyContent={"center"}
                    mt={4}
                  >
                    <Flex direction={"column"}>
                      <FormLabel color={"#747474"}>Enter Start date</FormLabel>
                      <Input w={["15w", "15w", "15vw"]} type="date" />
                    </Flex>

                    <Flex direction={"column"}>
                      <FormLabel color={"#747474"}>Enter End date</FormLabel>
                      <Input w={["15w", "15w", "15vw"]} type="date" />
                    </Flex>

                    <Flex direction={"column"}>
                      <FormLabel color={"#747474"}>Choose Ads Type</FormLabel>
                      <Select
                        w={["15w", "15w", "15vw"]}
                        icon={<UpDownIcon />}
                        value={adType}
                        onChange={(e) => {
                          setAdType(e.target.value);
                        }}
                        placeholder="Ad Type"
                      >
                        <option value="Photo">Photo</option>
                        <option value="Video">Video</option>
                      </Select>
                    </Flex>

                    <Flex direction={"column"}>
                      <FormLabel color={"#747474"}>Gender</FormLabel>
                      <Select
                        w={["15w", "15w", "15vw"]}
                        icon={<UpDownIcon />}
                        value={adType}
                        onChange={(e) => {
                          setAdType(e.target.value);
                        }}
                        placeholder="Gender"
                      >
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                      </Select>
                    </Flex>

                    <Flex direction={"column"}>
                      <FormLabel color={"#747474"}>Age</FormLabel>
                      <Input w={["15w", "15w", "15vw"]} placeholder="Age" />
                    </Flex>
                  </Flex>
                  <Flex
                    flexDir={["column", "column", "row", "row", "row"]}
                    gap={5}
                    justifyContent={"center"}
                    mt={4}
                  >
                    <Button
                      borderRadius={"md"}
                      w={"12w"}
                      fontWeight={"400"}
                      h={"7vh"}
                      fontSize={"md"}
                    >
                      Search Ads
                    </Button>
                    <Button
                      borderRadius={"md"}
                      h={"7vh"}
                      onClick={clearAll}
                      color={"#1B1D29"}
                      w={"12w"}
                      variant={"outline"}
                    >
                      Clear All
                    </Button>
                  </Flex>
                </TabPanel>
                <TabPanel mt={2}>
                  <Flex
                    flexDir={["column", "column", "row", "row", "row"]}
                    gap={5}
                    justifyContent={"center"}
                  >
                    <Flex direction={"column"}>
                      <FormLabel color={"#747474"}>Search by</FormLabel>
                      <Select
                        w={["15w", "15w", "15vw"]}
                        icon={<UpDownIcon />}
                        value={searchMode}
                        onChange={(e) => {
                          setSearchMode(e.target.value);
                        }}
                        placeholder="Search Mode"
                      >
                        <option value="Keyword">Keyword</option>
                        <option value="advertiser">advertiser</option>
                      </Select>
                    </Flex>

                    {searchMode && (
                      <Flex direction={"column"}>
                        <FormLabel color={"#747474"}>
                          Choose {searchMode}
                        </FormLabel>
                        <Input
                          w={["15w", "15w", "15vw"]}
                          type="text"
                          placeholder={`enter ${searchMode}`}
                        />
                      </Flex>
                    )}

                    <Flex direction={"column"}>
                      <FormLabel color={"#747474"}>Sort by</FormLabel>
                      <Select
                        w={["15w", "15w", "15vw"]}
                        icon={<UpDownIcon />}
                        placeholder="Sort by"
                      >
                        <option value="Likes">Likes</option>
                        <option value="Comments">Comments</option>
                        <option value="Shares">Shares</option>
                      </Select>
                    </Flex>

                    <Flex direction={"column"}>
                      <FormLabel color={"#747474"}>Choose Ad Country</FormLabel>
                      <Select
                        value={selectedCountry}
                        onChange={(e) => setSelectedCountry(e.target.value)}
                        w={["15w", "15w", "15vw"]}
                        icon={<UpDownIcon />}
                        placeholder="Choose Ad Country"
                      >
                        {countryOptions}
                      </Select>
                    </Flex>
                  </Flex>
                  <Flex
                    flexDir={["column", "column", "row", "row", "row"]}
                    gap={5}
                    justifyContent={"center"}
                    mt={4}
                  >
                    <Flex direction={"column"}>
                      <FormLabel color={"#747474"}>Enter Start date</FormLabel>
                      <Input w={["15w", "15w", "15vw"]} type="date" />
                    </Flex>

                    <Flex direction={"column"}>
                      <FormLabel color={"#747474"}>Enter End date</FormLabel>
                      <Input w={["15w", "15w", "15vw"]} type="date" />
                    </Flex>
                  </Flex>
                  <Flex
                    flexDir={["column", "column", "row", "row", "row"]}
                    gap={5}
                    justifyContent={"center"}
                    mt={4}
                  >
                    <Button
                      borderRadius={"md"}
                      w={"12w"}
                      fontWeight={"400"}
                      h={"7vh"}
                      fontSize={"md"}
                    >
                      Search Ads
                    </Button>
                    <Button
                      borderRadius={"md"}
                      h={"7vh"}
                      onClick={clearAll}
                      color={"#1B1D29"}
                      w={"12w"}
                      variant={"outline"}
                    >
                      Clear All
                    </Button>
                  </Flex>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Box>
        </Stack>
        <Flex direction={"column"} justifyContent={"center"}></Flex>
      </Flex>
      <Flex gap={5} p={10} color="white" flexWrap={"wrap"} background={"blue"}>
        {adsData && adsData.data && adsData.data.length > 0 ? (
          adsData.data.map((ad, index) => (
            <Card h={'70vh'} w={"30vw"} key={index} onClick={()=>router.push(ad.ad_snapshot_url)}>
              <CardBody>
                <Flex direction={'column'} gap={5}>
                  <Flex alignItems={"center"} gap={2}>
                  {pageNames[index] && pageNames[index].originalImageUrl ? (
  <Image borderRadius={'full'} w={10} h={10} src={pageNames[index].originalImageUrl} alt="Original Image" />
) : (
  <Text> </Text>
)}
                    <Box>
                    {pageNames[index] &&  pageNames[index].pageName ? (
                    <Text>{JSON.parse(pageNames[index].pageName)}</Text>
                    ) : (
                    <Text>No page name available</Text>
                    )}
                      <Text>{ad.ad_delivery_start_time}</Text>
                    </Box>
                  </Flex>

                  <Flex>
                  {pageNames[index] && pageNames[index].htmlValue ? (
                      <Text dangerouslySetInnerHTML={{ __html: pageNames[index].htmlValue }} />
) : (
  <Text>NO ad description</Text>
)}
                  </Flex>

                  <Flex border={'2px solid red'} h={'30vh'} align="center" justify="center">

  {pageNames[index] && pageNames[index].adImageUrl ? (
    <Image borderRadius={'md'} w={'100%'} h={'100%'} maxW="100%" maxH="100%" src={pageNames[index].adImageUrl} alt="Original Image" />
  ) : (
    <Text>No Image Available</Text>
  )}
</Flex>

<Flex justifyContent={'space-between'} alignItems={'center'}>
  <Box>
  <Flex>
                  {pageNames[index] && pageNames[index].pageTitle ? (
                      <Heading fontSize={'lg'}>{pageNames[index].pageTitle}</Heading>
) : (
  <Text>NO ad description</Text>
)}
                  </Flex>

                  <Flex>
                  {pageNames[index] && pageNames[index].pageDescription ? (
                      <Text dangerouslySetInnerHTML={{ __html: pageNames[index].pageDescription }} />
) : (
  <Text>NO ad description</Text>
)}
                  </Flex>
  </Box>

  <Box>
    {pageNames[index] && pageNames[index].cta ?(
      <Button borderRadius={'md'}>{pageNames[index].cta}</Button>
    ) : (
      <Text>No cta button</Text>
    )}
  </Box>
</Flex>




                </Flex>
              </CardBody>
              <CardFooter 
              mt={'-2%'}
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
          ))
        ) : (
          <Text>No ads found</Text>
        )}
      </Flex>
    </Flex>
  );
};

export default Adspy;
