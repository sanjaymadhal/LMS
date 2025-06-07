// SidenavRoot.js
import Drawer from "@mui/material/Drawer";
import { styled } from "@mui/material/styles";

export default styled(Drawer)(({ theme, ownerState }) => {
  const { palette, boxShadows, transitions, breakpoints, functions } = theme;
  const { transparentSidenav, whiteSidenav, miniSidenav, darkMode } = ownerState;

  const sidebarWidth = 250;
  const { transparent, gradients, white, background } = palette;
  const { xxl } = boxShadows;
  const { pxToRem, linearGradient } = functions;

  let backgroundValue = darkMode
    ? background.sidenav
    : linearGradient(gradients.dark.main, gradients.dark.state);

  if (transparentSidenav) {
    backgroundValue = transparent.main;
  } else if (whiteSidenav) {
    backgroundValue = white.main;
  }

  const drawerOpenStyles = () => ({
    background: backgroundValue,
    transform: "translateX(0)",
    transition: transitions.create(["width", "background-color", "transform"], {
      easing: transitions.easing.sharp,
      duration: 400,
    }),
    [breakpoints.up("xl")]: {
      boxShadow: transparentSidenav ? "none" : xxl,
      left: 0,
      width: sidebarWidth,
    },
  });

  const drawerCloseStyles = () => ({
    background: backgroundValue,
    transition: transitions.create(["width", "background-color", "transform"], {
      easing: transitions.easing.sharp,
      duration: 400,
    }),
    [breakpoints.up("xl")]: {
      boxShadow: transparentSidenav ? "none" : xxl,
      left: 0,
      width: pxToRem(96),
      overflowX: "hidden",
    },
  });

  return {
    "& .MuiDrawer-paper": {
      position: "fixed",
      top: 0,
      height: "100vh",
      boxShadow: xxl,
      border: "none",
      ...(miniSidenav ? drawerCloseStyles() : drawerOpenStyles()),
    },
  };
});
