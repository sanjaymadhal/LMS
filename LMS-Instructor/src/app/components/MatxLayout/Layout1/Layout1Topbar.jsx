import { memo, useState } from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import styled from "@mui/material/styles/styled";
import useTheme from "@mui/material/styles/useTheme";
import useMediaQuery from "@mui/material/useMediaQuery";
import { keyframes } from "@mui/system";
import Home from "@mui/icons-material/Home";
import Menu from "@mui/icons-material/Menu";
import Person from "@mui/icons-material/Person";
import Settings from "@mui/icons-material/Settings";
import { Grid, Tooltip, Chip } from '@mui/material';
import PowerSettingsNew from "@mui/icons-material/PowerSettingsNew";
import AppsIcon from "@mui/icons-material/Apps";
import School from "@mui/icons-material/School";
import Class from "@mui/icons-material/Class";
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import useAuth from "app/hooks/useAuth";
import useSettings from "app/hooks/useSettings";
import { Span } from "app/components/Typography";
import { MatxMenu, MatxSearchBox } from "app/components";
import { NotificationProvider } from "app/contexts/NotificationContext";
import { NotificationBar } from "app/components/NotificationBar";
import { themeShadows } from "app/components/MatxTheme/themeColors";
import { topBarHeight } from "app/utils/constant";

// Styled components
const StyledIconButton = styled(IconButton)(({ theme }) => ({
  color: theme.palette.text.primary,
  width: 40,
  height: 40,
  padding: 8
}));

const TopbarRoot = styled("div")({
  top: 0,
  zIndex: 96,
  height: topBarHeight,
  boxShadow: themeShadows[8],
  transition: "all 0.3s ease"
});

const TopbarContainer = styled("div")(({ theme }) => ({
  padding: "8px 20px",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  background: theme.palette.primary.main,
  color: theme.palette.text.primary
}));

const UserMenu = styled("div")({
  padding: 4,
  display: "flex",
  borderRadius: 24,
  cursor: "pointer",
  alignItems: "center",
  "& span": { margin: "0 8px" }
});

const StyledItem = styled(MenuItem)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  minWidth: 185,
  "& a": {
    width: "100%",
    display: "flex",
    alignItems: "center",
    textDecoration: "none",
    color: theme.palette.text.primary
  },
  "& span": { marginRight: "10px", color: theme.palette.text.primary }
}));

// Theme Switch Button
const ThemeToggleButton = styled(IconButton)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.05)',
  borderRadius: '50%',
  padding: 8,
  width: 40,
  height: 40,
  transition: 'all 0.3s ease',
  '&:hover': {
    backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.3)' : 'rgba(0, 0, 0, 0.1)',
    transform: 'scale(1.1)'
  }
}));

// Enhanced App Menu Animations
const slideIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-10px) scale(0.95);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`;

const bounceIn = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.3);
  }
  50% {
    opacity: 1;
    transform: scale(1.05);
  }
  70% {
    transform: scale(0.9);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
`;

const pulse = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
`;

const ripple = keyframes`
  0% {
    transform: scale(0);
    opacity: 1;
  }
  100% {
    transform: scale(4);
    opacity: 0;
  }
`;

// Enhanced App Menu Components
const AppMenuContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(3),
  width: 380,
  maxHeight: 500,
  backgroundColor: theme.palette.background.paper,
  borderRadius: theme.spacing(2),
  border: `1px solid ${theme.palette.divider}`,
  boxShadow: theme.palette.mode === 'dark' 
    ? '0 20px 40px rgba(0,0,0,0.4), 0 15px 12px rgba(0,0,0,0.22)'
    : '0 20px 40px rgba(0,0,0,0.1), 0 15px 12px rgba(0,0,0,0.08)',
  position: 'relative',
  overflow: 'hidden',
  animation: `${slideIn} 0.3s ease-out`,
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 4,
    background: theme.palette.mode === 'dark'
      ? 'linear-gradient(90deg, #667eea 0%, #764ba2 100%)'
      : 'linear-gradient(90deg, #4facfe 0%, #00f2fe 100%)',
    borderRadius: '8px 8px 0 0'
  }
}));

const AppMenuHeader = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  textAlign: 'center',
  '& h6': {
    background: theme.palette.mode === 'dark'
      ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
      : 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    fontWeight: 700,
    fontSize: '1.2rem',
    marginBottom: theme.spacing(1)
  }
}));

const AppMenuItem = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: theme.spacing(2),
  borderRadius: theme.spacing(2),
  cursor: "pointer",
  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
  position: 'relative',
  overflow: 'hidden',
  background: theme.palette.mode === 'dark'
    ? 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)'
    : 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.6) 100%)',
  border: `1px solid ${theme.palette.divider}`,
  backdropFilter: 'blur(10px)',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: '-100%',
    width: '100%',
    height: '100%',
    background: theme.palette.mode === 'dark'
      ? 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)'
      : 'linear-gradient(90deg, transparent, rgba(255,255,255,0.8), transparent)',
    transition: 'left 0.6s ease',
  },
  '&:hover': {
    backgroundColor: theme.palette.mode === 'dark' 
      ? 'rgba(255,255,255,0.08)'
      : 'rgba(0,0,0,0.02)',
    transform: "translateY(-8px) scale(1.05)",
    boxShadow: theme.palette.mode === 'dark'
      ? '0 15px 35px rgba(0,0,0,0.3), 0 5px 15px rgba(0,0,0,0.2)'
      : '0 15px 35px rgba(0,0,0,0.1), 0 5px 15px rgba(0,0,0,0.08)',
    '&::before': {
      left: '100%',
    }
  },
  '&:active': {
    transform: "translateY(-4px) scale(1.02)",
  }
}));

const AppIcon = styled(Box)(({ theme }) => ({
  width: 64,
  height: 64,
  borderRadius: theme.spacing(2),
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginBottom: theme.spacing(1),
  position: 'relative',
  background: theme.palette.mode === 'dark'
    ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    : 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
  boxShadow: theme.palette.mode === 'dark'
    ? '0 8px 32px rgba(102, 126, 234, 0.3)'
    : '0 8px 32px rgba(79, 172, 254, 0.3)',
  transition: 'all 0.3s ease',
  '&::after': {
    content: '""',
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: '0',
    height: '0',
    borderRadius: '50%',
    background: 'rgba(255,255,255,0.3)',
    transform: 'translate(-50%, -50%)',
    transition: 'all 0.3s ease',
  },
  "& svg": {
    fontSize: 36,
    color: '#ffffff',
    filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.2))',
    transition: 'all 0.3s ease',
    position: 'relative',
    zIndex: 1,
  },
  '&:hover': {
    transform: 'rotate(10deg) scale(1.1)',
    '&::after': {
      width: '100%',
      height: '100%',
      animation: `${ripple} 0.6s ease-out`,
    },
    '& svg': {
      transform: 'scale(1.1)',
    }
  }
}));

const AppMenuTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.primary,
  fontSize: '0.85rem',
  textAlign: 'center',
  lineHeight: 1.3,
  fontWeight: 600,
  transition: 'all 0.3s ease',
  textShadow: theme.palette.mode === 'dark' 
    ? '0 1px 2px rgba(0,0,0,0.5)'
    : '0 1px 2px rgba(255,255,255,0.8)',
}));

const AppMenuButton = styled(IconButton)(({ theme }) => ({
  position: 'relative',
  background: theme.palette.mode === 'dark'
    ? 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)'
    : 'linear-gradient(135deg, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.02) 100%)',
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: '12px',
  padding: '12px',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: theme.palette.mode === 'dark'
      ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
      : 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    opacity: 0,
    transition: 'opacity 0.3s ease',
  },
  '&:hover': {
    transform: 'translateY(-2px)',
    boxShadow: theme.palette.mode === 'dark'
      ? '0 10px 25px rgba(0,0,0,0.3)'
      : '0 10px 25px rgba(0,0,0,0.1)',
    '&::before': {
      opacity: 0.1,
    },
    '& svg': {
      transform: 'scale(1.1) rotate(5deg)',
    }
  },
  '& svg': {
    position: 'relative',
    zIndex: 1,
    transition: 'all 0.3s ease',
    color: theme.palette.text.primary,
  }
}));

// Enhanced app menu items with more features
const appMenuItems = [
  { 
    name: "E-Learning", 
    icon: <School />, 
    path: "/elearning",
    description: "Online courses & tutorials",
    badge: "New",
    color: "#4CAF50"
  },
  { 
    name: "Virtual Classroom", 
    icon: <Class />, 
    path: "/virtual-classroom",
    description: "Live interactive sessions",
    badge: "Live",
    color: "#2196F3"
  },
  
];

const AppMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  

  const handleClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);
  const open = Boolean(anchorEl);

  return (
    <>
      <Tooltip title="Applications" arrow>
        <AppMenuButton onClick={handleClick}>
          <AppsIcon />
        </AppMenuButton>
      </Tooltip>

      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        PaperProps={{
          elevation: 0,
          sx: {
            mt: 1,
            borderRadius: 3,
            overflow: 'visible',
            background: 'transparent',
            boxShadow: 'none'
          }
        }}
        transitionDuration={300}
      >
        <AppMenuContainer>
          <AppMenuHeader>
            <Typography variant="h6">
              Applications
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Choose your workspace
            </Typography>
          </AppMenuHeader>
          
          <Grid container spacing={2}>
            {appMenuItems.map((item, index) => (
              <Grid item xs={4} key={index}>
                <Link to={item.path} style={{ textDecoration: 'none' }}>
                  <AppMenuItem 
                    onClick={handleClose}
                    sx={{
                      animationDelay: `${index * 0.1}s`,
                      animation: `${bounceIn} 0.6s ease-out backwards`
                    }}
                  >
                    <Box position="relative">
                      <AppIcon>
                        {item.icon}
                      </AppIcon>
                      {item.badge && (
                        <Chip
                          label={item.badge}
                          size="small"
                          sx={{
                            position: 'absolute',
                            top: -8,
                            right: -8,
                            minWidth: 20,
                            height: 20,
                            fontSize: '0.7rem',
                            fontWeight: 'bold',
                            background: item.badge === 'New' ? '#4CAF50' : 
                                       item.badge === 'Live' ? '#F44336' : '#FF9800',
                            color: 'white',
                            animation: item.badge === 'Live' ? `${pulse} 2s infinite` : 'none'
                          }}
                        />
                      )}
                    </Box>
                    <AppMenuTitle variant="caption">
                      {item.name}
                    </AppMenuTitle>
                    <Typography 
                      variant="caption" 
                      sx={{ 
                        color: 'text.secondary',
                        fontSize: '0.7rem',
                        opacity: 0.8,
                        textAlign: 'center',
                        mt: 0.5
                      }}
                    >
                      {item.description}
                    </Typography>
                  </AppMenuItem>
                </Link>
              </Grid>
            ))}
          </Grid>
        </AppMenuContainer>
      </Popover>
    </>
  );
};

const Layout1Topbar = () => {
  const theme = useTheme();
  const { settings, updateSettings } = useSettings();
  const { logout, user } = useAuth();
  const isMdScreen = useMediaQuery(theme.breakpoints.down("md"));

  // Function to toggle between light and dark mode
  const toggleTheme = () => {
    console.log("Current settings:", settings);
    const currentTheme = settings.theme?.palette?.type || 'light';
    console.log("Current theme type:", currentTheme);
    const newThemeType = currentTheme === 'light' ? 'dark' : 'light';
    console.log("Switching to:", newThemeType);
    
    updateSettings({
      theme: {
        ...settings.theme,
        palette: {
          ...settings.theme?.palette,
          type: newThemeType
        }
      }
    });
  };

  const updateSidebarMode = (sidebarSettings) => {
    updateSettings({
      layout1Settings: {
        leftSidebar: {
          ...sidebarSettings
        }
      }
    });
  };

  const handleSidebarToggle = () => {
    let { layout1Settings } = settings;
    let mode;
    if (isMdScreen) {
      mode = layout1Settings.leftSidebar.mode === "close" ? "mobile" : "close";
    } else {
      mode = layout1Settings.leftSidebar.mode === "full" ? "close" : "full";
    }
    updateSidebarMode({ mode });
  };

  const isDarkMode = theme.palette.mode === 'dark' || 
                     settings.theme?.palette?.type === 'dark' || 
                     false;

  return (
    <TopbarRoot>
      <TopbarContainer>
        <Box display="flex">
          <StyledIconButton onClick={handleSidebarToggle}>
            <Menu />
          </StyledIconButton>
        </Box>

        <Box display="flex" alignItems="center" gap={1}>
          <MatxSearchBox />
          
          {/* Enhanced App Menu */}
          <AppMenu />

          {/* Theme Toggle Button */}
          <Tooltip title={`Switch to ${isDarkMode ? "light" : "dark"} mode`}>
            <ThemeToggleButton onClick={toggleTheme} color="inherit">
              {isDarkMode ? <Brightness7Icon /> : <Brightness4Icon />}
            </ThemeToggleButton>
          </Tooltip>
          
          <NotificationProvider>
            <NotificationBar />
          </NotificationProvider>
          
          {/* User Menu */}
          <MatxMenu
            menuButton={
              <UserMenu>
                <Avatar src={user?.avatar} sx={{ cursor: "pointer" }} />
              </UserMenu>
            }
          >
            <StyledItem>
              <Link to="/">
                <Home />
                <Span sx={{ marginInlineStart: 1 }}>Home</Span>
              </Link>
            </StyledItem>

            <StyledItem>
              <Link to="/page-layouts/user-profile">
                <Person />
                <Span sx={{ marginInlineStart: 1 }}>Profile</Span>
              </Link>
            </StyledItem>

            <StyledItem>
              <Settings />
              <Span sx={{ marginInlineStart: 1 }}>Settings</Span>
            </StyledItem>

            <StyledItem onClick={logout}>
              <PowerSettingsNew />
              <Span sx={{ marginInlineStart: 1 }}>Logout</Span>
            </StyledItem>
          </MatxMenu>
        </Box>
      </TopbarContainer>
    </TopbarRoot>
  );
};

export default memo(Layout1Topbar);
