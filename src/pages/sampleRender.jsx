import AiSidebar from "@/components/AiBoard/SideBar";
import ChangePassword from "@/components/Profile/changepassword";
import ManageSubscriptions from "@/components/Profile/ManageSubscriptions";
import ProfileHome from "@/components/Profile/ProfileHome";
import ProfileSidebar from "@/components/Profile/ProfileSidebar";
import { Flex } from "@chakra-ui/react";
import UserDash from "./userDash";
import ProfileDash from "./userDash";

export default function SampleRender() {
  return (
    <>
      {" "}
      {/* <AiSidebar /> */}
      <ManageSubscriptions />
      {/*      <ProfileHome />  <ProfileDash /> <UserDash /> <ProfileSidebar /> */}
    </>
  );
}
