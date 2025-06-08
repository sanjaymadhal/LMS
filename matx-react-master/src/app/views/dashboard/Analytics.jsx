import { Fragment } from "react";
import { Card, Grid, Box, Icon, IconButton, styled, useTheme } from "@mui/material";
import { Span } from "app/components/Typography";
import { Small } from "app/components/Typography";
import VideocamIcon from "@mui/icons-material/Videocam";
import PeopleIcon from "@mui/icons-material/People";
import AssignmentIcon from "@mui/icons-material/Assignment";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import ArrowRightAlt from "@mui/icons-material/ArrowRightAlt";
import Tooltip from "@mui/material/Tooltip";

import RowCards from "./shared/RowCards";
import StatCards from "./shared/StatCards";
import Campaigns from "./shared/Campaigns";
import StatCards2 from "./shared/StatCards2";
import DoughnutChart from "./shared/Doughnut";
import UpgradeCard from "./shared/UpgradeCard";
import TopSellingTable from "./shared/TopSellingTable";

const StyledCard = styled(Card)(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "24px !important",
  background: theme.palette.background.paper,
  [theme.breakpoints.down("sm")]: { padding: "16px !important" }
}));

const ContentBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  "& small": { color: theme.palette.text.secondary },
  "& .icon": { opacity: 0.6, fontSize: "44px", color: theme.palette.primary.main }
}));

const Heading = styled("h6")(({ theme }) => ({
  margin: 0,
  marginTop: "4px",
  fontSize: "14px",
  fontWeight: "500",
  color: theme.palette.primary.main
}));

const Title = styled("h5")(() => ({
  margin: 0,
  fontSize: "1rem",
  fontWeight: "500",
  textTransform: "capitalize"
}));

const SubTitle = styled("span")(({ theme }) => ({
  fontSize: "0.875rem",
  color: theme.palette.text.secondary
}));

const H4 = styled("h4")(({ theme }) => ({
  fontSize: "1rem",
  fontWeight: "500",
  marginBottom: "1rem",
  textTransform: "capitalize",
  color: theme.palette.text.secondary
}));

export default function Analytics() {
  const theme = useTheme();
  
  const cardList = [
    { 
      name: "Today's Classes", 
      amount: "3 Classes", 
      Icon: VideocamIcon,
      path: "/live-classroom"
    },
    { 
      name: "Active Students", 
      amount: "42 Students", 
      Icon: PeopleIcon,
      path: "/students/list"
    },
    { 
      name: "Pending Assignments", 
      amount: "12 to Grade", 
      Icon: AssignmentIcon,
      path: "/assignments/grade"
    },
    { 
      name: "Upcoming Events", 
      amount: "2 Events Today", 
      Icon: CalendarTodayIcon,
      path: "/calendar"
    }
  ];

  return (
    <Box pt={2} pb={4}>
      <Grid container spacing={3}>
        {cardList.map((item, index) => (
          <Grid item xs={12} md={6} lg={3} key={index}>
            <StyledCard elevation={6}>
              <ContentBox>
                <item.Icon className="icon" />
                <Box ml="12px">
                  <Small>{item.name}</Small>
                  <Heading>{item.amount}</Heading>
                </Box>
              </ContentBox>

              <Tooltip title="View Details" placement="top">
                <IconButton>
                  <ArrowRightAlt />
                </IconButton>
              </Tooltip>
            </StyledCard>
          </Grid>
        ))}
      </Grid>

      <Grid container spacing={3} sx={{ mt: 2 }}>
        <Grid item xs={12} md={8}>
          <Card sx={{ p: 2 }}>
            <Title>Upcoming Classes</Title>
            <Box sx={{ mt: 2 }}>
              {["Introduction to Programming - 10:00 AM", "Data Structures - 1:30 PM", "Web Development - 3:45 PM"].map((cls, index) => (
                <Box key={index} sx={{ 
                  p: 2, 
                  mb: 1, 
                  display: "flex", 
                  alignItems: "center", 
                  justifyContent: "space-between",
                  bgcolor: theme.palette.background.default,
                  borderRadius: 1
                }}>
                  <Box display="flex" alignItems="center">
                    <Icon color="primary">schedule</Icon>
                    <Span sx={{ ml: 1 }}>{cls}</Span>
                  </Box>
                  <IconButton size="small">
                    <Icon>launch</Icon>
                  </IconButton>
                </Box>
              ))}
            </Box>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card sx={{ p: 2, height: "100%" }}>
            <Title>Quick Actions</Title>
            <Box sx={{ mt: 2 }}>
              {[
                { label: "Start Live Class", icon: "videocam" },
                { label: "Create Assignment", icon: "assignment" },
                { label: "Message Students", icon: "email" },
                { label: "Generate Content with AI", icon: "psychology" }
              ].map((action, index) => (
                <Box key={index} sx={{ 
                  p: 2, 
                  mb: 1, 
                  display: "flex", 
                  alignItems: "center",
                  bgcolor: theme.palette.primary.light,
                  color: theme.palette.primary.contrastText,
                  borderRadius: 1,
                  cursor: "pointer",
                  "&:hover": { bgcolor: theme.palette.primary.main }
                }}>
                  <Icon>{action.icon}</Icon>
                  <Span sx={{ ml: 1 }}>{action.label}</Span>
                </Box>
              ))}
            </Box>
          </Card>
        </Grid>
      </Grid>

      <Grid container spacing={3} sx={{ mt: 2 }}>
        <Grid item xs={12} md={8} lg={8}>
          <StatCards />
          <TopSellingTable />
          <StatCards2 />

          <H4>Ongoing Projects</H4>
          <RowCards />
        </Grid>

        <Grid item xs={12} md={4} lg={4}>
          <Card sx={{ px: 3, py: 2, mb: 3 }}>
            <Title>Traffic Sources</Title>
            <SubTitle>Last 30 days</SubTitle>

            <DoughnutChart
              height="300px"
              color={[theme.palette.primary.dark, theme.palette.primary.main, theme.palette.primary.light]}
            />
          </Card>

          <UpgradeCard />
          <Campaigns />
        </Grid>
      </Grid>
    </Box>
  );
}