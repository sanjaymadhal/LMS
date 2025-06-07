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
// Material Dashboard 2 React components
import { useEffect } from "react";
import { useLocation, NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import Link from "@mui/material/Link";
import Icon from "@mui/material/Icon";
import pygenicLogo from "assets/images/parclogo.png";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";
import SidenavCollapse from "examples/Sidenav/SidenavCollapse";
import SidenavRoot from "examples/Sidenav/SidenavRoot";

import {
  useMaterialUIController,
  setMiniSidenav,
  setTransparentSidenav,
  setWhiteSidenav,
} from "context";

function Sidenav({ color, brand, brandName, routes, ...rest }) {
  const [controller, dispatch] = useMaterialUIController();
  const { miniSidenav, transparentSidenav, whiteSidenav, darkMode, sidenavColor } = controller;
  const location = useLocation();
  const collapseName = location.pathname.replace("/", "");

  let textColor = "white";
  if (transparentSidenav || (whiteSidenav && !darkMode)) {
    textColor = "dark";
  } else if (whiteSidenav && darkMode) {
    textColor = "inherit";
  }

  const toggleSidenav = () => setMiniSidenav(dispatch, !miniSidenav);

  useEffect(() => {
    function handleMiniSidenav() {
      setMiniSidenav(dispatch, window.innerWidth < 1200);
      setTransparentSidenav(dispatch, window.innerWidth >= 1200 && transparentSidenav);
      setWhiteSidenav(dispatch, window.innerWidth >= 1200 && whiteSidenav);
    }

    window.addEventListener("resize", handleMiniSidenav);
    handleMiniSidenav();

    return () => window.removeEventListener("resize", handleMiniSidenav);
  }, [dispatch, location]);

  const renderRoutes = routes.map(({ type, name, icon, title, noCollapse, key, href, route }) => {
    if (type === "collapse") {
      return href ? (
        <Link
          href={href}
          key={keyVal}
          target="_blank"
          rel="noreferrer"
          sx={{ textDecoration: "none" }}
        >
          <SidenavCollapse
            name={name}
            icon={icon}
            active={keyVal === collapseName}
            noCollapse={noCollapse}
          />
        </Link>
      ) : (
        <NavLink key={key} to={route}>
          <SidenavCollapse name={name} icon={icon} active={key === collapseName} />
        </NavLink>
      );
    } else if (type === "title") {
      return (
        <MDTypography
          key={key}
          color={textColor}
          display="block"
          variant="caption"
          fontWeight="bold"
          textTransform="uppercase"
          pl={3}
          mt={2}
          mb={1}
          ml={1}
        >
          {title}
        </MDTypography>
      );
    } else if (type === "divider") {
      return (
        <Divider
          key={key}
          light={
            (!darkMode && !whiteSidenav && !transparentSidenav) ||
            (darkMode && !transparentSidenav && whiteSidenav)
          }
        />
      );
    }
    return null;
  });

  return (
    <SidenavRoot
      {...rest}
      variant="permanent"
      ownerState={{ transparentSidenav, whiteSidenav, miniSidenav, darkMode }}
    >
      <MDBox pt={3} pb={1} px={4} textAlign="center">
        <MDBox component={NavLink} to="/" display="flex" alignItems="center">
          <MDBox component="img" src={pygenicLogo} alt="PyGenicArc Logo" width="3rem" />
          <MDBox ml={1} display="flex" flexDirection="column">
            <MDTypography
              component="h6"
              variant="button"
              fontWeight="medium"
              color={textColor}
              lineHeight={1}
            >
              PyGenicArc
            </MDTypography>
            <MDTypography
              variant="caption"
              color={textColor}
              fontSize="0.7rem"
              fontStyle="italic"
              lineHeight={1}
              mt={0.3}
            >
              For Instructors
            </MDTypography>
          </MDBox>
        </MDBox>

        {/* Collapse Toggle Button */}
        <MDBox display="flex" justifyContent="center" mt={2}>
          <MDButton
            variant="outlined"
            color="white"
            size="small"
            onClick={toggleSidenav}
            sx={{ transition: "all 0.3s ease-in-out" }}
          >
            <Icon
              sx={{
                transition: "transform 0.3s",
                transform: miniSidenav ? "rotate(180deg)" : "rotate(0deg)",
              }}
            >
              {miniSidenav ? "chevron_right" : "chevron_left"}
            </Icon>
          </MDButton>
        </MDBox>
      </MDBox>

      <Divider light={!darkMode || (darkMode && whiteSidenav)} />
      <List>{renderRoutes}</List>

      <MDBox p={2} mt="auto">
        <NavLink to="/profile" style={{ textDecoration: "none" }}>
          <MDButton variant="gradient" color={sidenavColor} fullWidth>
            <Icon sx={{ mr: 1 }}>person</Icon>
            Profile
          </MDButton>
        </NavLink>
      </MDBox>
    </SidenavRoot>
  );
}

Sidenav.defaultProps = {
  color: "info",
  brand: "",
};

Sidenav.propTypes = {
  color: PropTypes.oneOf(["primary", "secondary", "info", "success", "warning", "error", "dark"]),
  brand: PropTypes.string,
  brandName: PropTypes.string.isRequired,
  routes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Sidenav;
