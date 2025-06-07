/**
=========================================================
* Material Dashboard 2 React - v2.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { useState, useEffect } from "react";

// react-router components
import { useLocation, Link, useNavigate } from "react-router-dom";

// prop-types is a library for typechecking of props.
import PropTypes from "prop-types";

// @material-ui core components
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Icon from "@mui/material/Icon";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDInput from "components/MDInput";

// Material Dashboard 2 React example components
import Breadcrumbs from "examples/Breadcrumbs";
import NotificationItem from "examples/Items/NotificationItem";

// Custom styles for DashboardNavbar
import {
  navbar,
  navbarContainer,
  navbarRow,
  navbarIconButton,
  navbarMobileMenu,
} from "examples/Navbars/DashboardNavbar/styles";

// Material Dashboard 2 React context
import {
  useMaterialUIController,
  setTransparentNavbar,
  setMiniSidenav,
  setOpenConfigurator,
} from "context";

function DashboardNavbar({ absolute, light, isMini }) {
  const [navbarType, setNavbarType] = useState();
  const [controller, dispatch] = useMaterialUIController();
  const { miniSidenav, transparentNavbar, fixedNavbar, openConfigurator, darkMode } = controller;
  const [openNotifMenu, setOpenNotifMenu] = useState(false);
  const [openProfileMenu, setOpenProfileMenu] = useState(false);
  const [anchorNotifEl, setAnchorNotifEl] = useState(null);
  const [anchorProfileEl, setAnchorProfileEl] = useState(null);
  const route = useLocation().pathname.split("/").slice(1);
  const navigate = useNavigate();

  useEffect(() => {
    if (fixedNavbar) {
      setNavbarType("sticky");
    } else {
      setNavbarType("static");
    }

    function handleTransparentNavbar() {
      setTransparentNavbar(dispatch, (fixedNavbar && window.scrollY === 0) || !fixedNavbar);
    }

    window.addEventListener("scroll", handleTransparentNavbar);
    handleTransparentNavbar();

    return () => window.removeEventListener("scroll", handleTransparentNavbar);
  }, [dispatch, fixedNavbar]);

  const handleMiniSidenav = () => setMiniSidenav(dispatch, !miniSidenav);

  // Notifications Menu Handlers
  const handleOpenNotifMenu = (event) => {
    setAnchorNotifEl(event.currentTarget);
    setOpenNotifMenu(true);
  };
  const handleCloseNotifMenu = () => setOpenNotifMenu(false);

  // Profile Menu Handlers
  const handleOpenProfileMenu = (event) => {
    setAnchorProfileEl(event.currentTarget);
    setOpenProfileMenu(true);
  };
  const handleCloseProfileMenu = () => setOpenProfileMenu(false);

  const handleGoToProfile = () => {
    handleCloseProfileMenu();
    navigate("/profile");
  };

  const handleGoToSettings = () => {
    handleCloseProfileMenu();
    setOpenConfigurator(dispatch, true);
  };

  const handleSignOut = () => {
    handleCloseProfileMenu();
    // Add sign out logic here
  };

  const handleOpenELearning = () => {
    window.open("https://example.com/coming-soon", "_blank");
  };

  const renderNotifMenu = () => (
    <Menu
      anchorEl={anchorNotifEl}
      anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
      open={openNotifMenu}
      onClose={handleCloseNotifMenu}
      sx={{ mt: 2 }}
    >
      <NotificationItem icon={<Icon>email</Icon>} title="Check new messages" />
      <NotificationItem icon={<Icon>podcasts</Icon>} title="Manage Podcast sessions" />
      <NotificationItem icon={<Icon>shopping_cart</Icon>} title="Payment successfully completed" />
    </Menu>
  );

  const renderProfileMenu = () => (
    <Menu
      anchorEl={anchorProfileEl}
      anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
      open={openProfileMenu}
      onClose={handleCloseProfileMenu}
      sx={{ mt: 2 }}
    >
      <MenuItem onClick={handleGoToProfile}>
        <Icon sx={{ mr: 1 }}>person</Icon>
        Your profile
      </MenuItem>
      <MenuItem onClick={handleGoToSettings}>
        <Icon sx={{ mr: 1 }}>settings</Icon>
        Settings
      </MenuItem>
      <MenuItem onClick={handleSignOut}>
        <Icon sx={{ mr: 1 }}>logout</Icon>
        Sign out
      </MenuItem>
    </Menu>
  );

  const iconsStyle = ({ palette: { dark, white, text }, functions: { rgba } }) => ({
    color: () => {
      let colorValue = light || darkMode ? white.main : dark.main;
      if (transparentNavbar && !light) {
        colorValue = darkMode ? rgba(text.main, 0.6) : text.main;
      }
      return colorValue;
    },
  });

  return (
    <AppBar
      position={absolute ? "absolute" : navbarType}
      color="inherit"
      sx={(theme) => navbar(theme, { transparentNavbar, absolute, light, darkMode })}
    >
      <Toolbar sx={(theme) => navbarContainer(theme)}>
        <MDBox color="inherit" mb={{ xs: 1, md: 0 }} sx={(theme) => navbarRow(theme, { isMini })}>
          <Breadcrumbs icon="home" title={route[route.length - 1]} route={route} light={light} />
        </MDBox>
        {isMini ? null : (
          <MDBox sx={(theme) => navbarRow(theme, { isMini })}>
            <MDBox pr={1}>
              <MDInput label="Search here" />
            </MDBox>
            <MDBox color={light ? "white" : "inherit"}>
              {/* Notifications */}
              <IconButton
                size="small"
                disableRipple
                color="inherit"
                sx={navbarIconButton}
                aria-controls="notification-menu"
                aria-haspopup="true"
                onClick={handleOpenNotifMenu}
              >
                <Icon sx={iconsStyle}>notifications</Icon>
              </IconButton>

              {/* E-learning Icon */}
              <IconButton
                size="small"
                disableRipple
                color="inherit"
                sx={navbarIconButton}
                onClick={handleOpenELearning}
              >
                <Icon sx={iconsStyle}>school</Icon>
              </IconButton>

              {/* Profile Icon */}
              <IconButton
                size="small"
                disableRipple
                color="inherit"
                sx={navbarIconButton}
                aria-controls="profile-menu"
                aria-haspopup="true"
                onClick={handleOpenProfileMenu}
              >
                <Icon sx={iconsStyle}>account_circle</Icon>
              </IconButton>

              {/* Sidebar Toggle */}
              <IconButton
                size="small"
                disableRipple
                color="inherit"
                sx={navbarMobileMenu}
                onClick={handleMiniSidenav}
              >
                <Icon sx={iconsStyle} fontSize="medium">
                  {miniSidenav ? "menu_open" : "menu"}
                </Icon>
              </IconButton>

              {/* Render Menus */}
              {renderNotifMenu()}
              {renderProfileMenu()}
            </MDBox>
          </MDBox>
        )}
      </Toolbar>
    </AppBar>
  );
}

// Setting default values for the props of DashboardNavbar
DashboardNavbar.defaultProps = {
  absolute: false,
  light: false,
  isMini: false,
};

// Typechecking props for the DashboardNavbar
DashboardNavbar.propTypes = {
  absolute: PropTypes.bool,
  light: PropTypes.bool,
  isMini: PropTypes.bool,
};

export default DashboardNavbar;
