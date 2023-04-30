import React from "react";
import { Alert, Button } from "@material-tailwind/react";
import { ExclamationTriangleIcon } from "@heroicons/react/24/solid";

export default function Notification(notification, setNotification) {
  const { message, type, open } = notification;
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setNotification({
      ...notification,
      open: false,
    });
  };

  if(!open) {
    return null
  }
  return (
    <Alert
      className="h-14"
      show={open}
      color={type}
      icon={<ExclamationTriangleIcon className="h-6 w-6" />}
      dismissible={{
        onClose: () => handleClose(),
        action: (
          <Button
            variant="text"
            color="white"
            size="sm"
            onClick={() =>
              setNotification({
                ...notification,
                open: false,
              })
            }
          >
            Close
          </Button>
        ),
      }}
    >
      {message}
    </Alert>
  );
}
