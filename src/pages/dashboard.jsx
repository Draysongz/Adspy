import Board from "@/components/AiBoard/AiBoard";
import { Stack, useColorModeValue } from "@chakra-ui/react";
import React from "react";
// import "./css/dashboard.css";

const Dashboard = () => {
  return (
    <>
      <Stack
        spacing={4}
        bg={useColorModeValue("white", "gray.700")}
        rounded={"xl"}
        boxShadow={"lg"}
        p={10}
        my={4}
        direction={"row"}
      >
        {" "}
        <Board direction={"row"} />
      </Stack>
    </>
  );
};

export default Dashboard;
