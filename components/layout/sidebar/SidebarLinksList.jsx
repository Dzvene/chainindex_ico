import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import GridViewIcon from "@mui/icons-material/GridView";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import LogoutIcon from "@mui/icons-material/Logout";
import { SidebarLink } from "./SidebarLink";

export const SidebarLinksList = ({ state }) => {
  return (
    <div
      className={`${state} lg:flex flex-col justify-center lg:h-screen items-start gap-2`}>
      <SidebarLink Icon={HomeOutlinedIcon} href="/" title="home" />
      <SidebarLink
        Icon={GridViewIcon}
        href="/marketplace"
        title="marketplace"
      />
      <SidebarLink
        Icon={AddCircleOutlineIcon}
        href="/create-ico"
        title="create ico"
      />
      <SidebarLink Icon={LogoutIcon} href="/" title="logout" />
    </div>
  );
};
