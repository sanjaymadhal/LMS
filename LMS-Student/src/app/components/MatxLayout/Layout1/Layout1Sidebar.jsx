import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import { Box, useTheme } from "@mui/material";
import { useLocation } from "react-router-dom";
import useMediaQuery from "@mui/material/useMediaQuery";
import MatxVerticalNav from "./MatxVerticalNav";
import { menuItems } from "app/utils/constant";
import { SidebarTheme } from "../MatxTheme";

const StyledBox = styled(Box)(({ theme }) => ({
  background: theme.palette.sidebar.background,
  height: "100%",
  overflow: "hidden",
  boxShadow: theme.shadows[3]
}));

const SideBarLogo = styled(Box)(({ theme }) => ({
  padding: "16px 24px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginBottom: "10px"
}));

const Logo = styled("img")({
  width: "auto",
  height: "32px"
});

const Title = styled("span")(({ theme }) => ({
  fontSize: "20px",
  fontWeight: 500,
  marginLeft: "8px",
  color: theme.palette.sidebar.text
}));

const Layout1Sidebar = () => {
  const theme = useTheme();
  const location = useLocation();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [open, setOpen] = useState(true);

  useEffect(() => {
    if (isSmallScreen) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  }, [isSmallScreen]);

  return (
    <SidebarTheme>
      <StyledBox className="sidebar">
        <SideBarLogo>
          <Logo src="/favicon.ico" alt="PyGenicArc Logo" /> {/* Updated logo source */}
          <Title>PyGenicArc</Title> {/* Updated company name */}
        </SideBarLogo>
        <MatxVerticalNav menuItems={menuItems} />
      </StyledBox>
    </SidebarTheme>
  );
};

export default Layout1Sidebar;
