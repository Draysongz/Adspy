import AiSidebar from "@/components/AiBoard/SideBar";
import ChangePassword from "@/pages/profile/changepassword";
import ManageSubscriptions from "@/pages/profile/manageSubscriptions";
import ProfileHome from "@/pages/profile/profileHome";
import ProfileSidebar from "@/pages/profile/ProfileSidebar";
import { Flex } from "@chakra-ui/react";
import UserDash from "./admin/userDash";
import ProfileDash from "./admin/userDash";

export default function SampleRender() {
  return (
    <>
      {" "}
      <AiSidebar />
      {/* <ManageSubscriptions /> */}
      {/*      <ProfileHome />  <ProfileDash /> <UserDash /> <ProfileSidebar /> */}
    </>
  );
}
