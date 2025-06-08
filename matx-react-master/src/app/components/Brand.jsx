import Box from "@mui/material/Box";
import styled from "@mui/material/styles/styled";
import { Span } from "./Typography";
import { MatxLogo } from "app/components";
import useSettings from "app/hooks/useSettings";
import SchoolIcon from "@mui/icons-material/School";

// STYLED COMPONENTS
const BrandRoot = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "20px 18px 20px 29px",
  background: theme.palette.primary.main
}));

const StyledSpan = styled(Span)(({ theme, mode }) => ({
  fontSize: 18,
  marginLeft: ".5rem",
  display: mode === "compact" ? "none" : "block",
  color: theme.palette.common.white
}));

export default function Brand({ children }) {
  const { settings } = useSettings();
  const leftSidebar = settings.layout1Settings.leftSidebar;
  const { mode } = leftSidebar;

  return (
    <BrandRoot>
      <Box display="flex" alignItems="center">
        <SchoolIcon sx={{ color: "#fff", fontSize: 28 }} />
        <StyledSpan mode={mode} className="sidenavHoverShow">
          EduFaculty
        </StyledSpan>
      </Box>

      <Box className="sidenavHoverShow" sx={{ display: mode === "compact" ? "none" : "block" }}>
        {children || null}
      </Box>
    </BrandRoot>
  );
}