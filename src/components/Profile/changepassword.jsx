import { useState } from "react";
import {
  Box,
  Stack,
  Button,
  useColorModeValue,
  FormControl,
  Input,
  FormLabel,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
// Here we have used react-icons package for the icons

export default function ChangePassword() {
  const [showPassword, setShowPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  return (
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
                    setShowNewPassword((showNewPassword) => !showNewPassword)
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
    </Box>
  );
}
