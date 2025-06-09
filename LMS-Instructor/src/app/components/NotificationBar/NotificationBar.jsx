import { Fragment, useState } from "react";
import {
  Box, Card, Icon, Badge, Button, IconButton, Popover
} from "@mui/material";
import { styled } from "@mui/material/styles";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ClearIcon from "@mui/icons-material/Clear";

import useSettings from "app/hooks/useSettings";
import useNotification from "app/hooks/useNotification";
import { getTimeDifference } from "app/utils/utils.js";
import { Paragraph, Small } from "../Typography";

const NotificationCard = styled(Box)(({ theme }) => ({
  position: "relative",
  "&:hover": {
    "& .messageTime": { display: "none" },
    "& .deleteButton": { opacity: 1 }
  },
  "& .messageTime": { color: theme.palette.text.secondary },
  "& .icon": { fontSize: "1.25rem" }
}));

const DeleteButton = styled(IconButton)(() => ({
  opacity: 0,
  position: "absolute",
  right: 5,
  top: 5,
  background: "rgba(0, 0, 0, 0.04)"
}));

const CardLeftContent = styled("div")(({ theme }) => ({
  padding: "12px 8px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  background: "rgba(0, 0, 0, 0.01)",
  "& small": {
    fontWeight: "500",
    marginLeft: "16px",
    color: theme.palette.text.secondary
  }
}));

const Heading = styled("span")(({ theme }) => ({
  fontWeight: "500",
  marginLeft: "16px",
  color: theme.palette.text.secondary
}));

export default function NotificationBar() {
  const { settings } = useSettings();
  const { deleteNotification, clearNotifications, notifications } = useNotification();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <Fragment>
      <IconButton onClick={handleClick}>
        <Badge color="secondary" badgeContent={notifications?.length}>
          <NotificationsIcon sx={{ color: "text.primary" }} />
        </Badge>
      </IconButton>

      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        PaperProps={{ sx: { width: 350, p: 2, maxHeight: 500, overflowY: "auto" } }}
      >
        <Box display="flex" alignItems="center" mb={2}>
          <NotificationsIcon color="primary" />
          <h5 style={{ marginLeft: 8, fontWeight: 500 }}>Notifications</h5>
        </Box>

        {notifications?.map((notification) => (
          <NotificationCard key={notification.id} mb={2}>
            <DeleteButton
              size="small"
              className="deleteButton"
              onClick={() => deleteNotification(notification.id)}
            >
              <ClearIcon className="icon" />
            </DeleteButton>

            <Card sx={{ boxShadow: 3 }}>
              <CardLeftContent>
                <Box display="flex">
                  <Icon className="icon" color={notification.icon.color}>
                    {notification.icon.name}
                  </Icon>
                  <Heading>{notification.heading}</Heading>
                </Box>
                <Small className="messageTime">
                  {getTimeDifference(new Date(notification.timestamp))} ago
                </Small>
              </CardLeftContent>

              <Box px={2} pt={1} pb={2}>
                <Paragraph m={0}>{notification.title}</Paragraph>
                <Small color="text.secondary">{notification.subtitle}</Small>
              </Box>
            </Card>
          </NotificationCard>
        ))}

        {!!notifications?.length && (
          <Button fullWidth onClick={clearNotifications}>
            Clear Notifications
          </Button>
        )}
      </Popover>
    </Fragment>
  );
}
