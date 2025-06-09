import { Box, Card, Icon, styled, Typography } from "@mui/material";

const StyledCard = styled(Card)(({ theme }) => ({
  padding: "20px",
  marginBottom: "16px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "300px",
  textAlign: "center"
}));

const IconBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "80px",
  width: "80px",
  borderRadius: "50%",
  background: theme.palette.primary.light,
  marginBottom: "16px"
}));

export default function PlaceholderView({ title, icon, description }) {
  return (
    <Box pt={2} pb={4}>
      <StyledCard elevation={3}>
        <IconBox>
          <Icon sx={{ fontSize: 40, color: "primary.main" }}>{icon}</Icon>
        </IconBox>
        <Typography variant="h4" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body1" color="textSecondary">
          {description}
        </Typography>
      </StyledCard>
    </Box>
  );
}