"use client";
import { useLiveChatFullscreen } from "../context/LiveChatFullscreenProvider";
import { Button } from "@livechat/design-system-react-components";

function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const NotificationBadgeController = () => {
  const context = useLiveChatFullscreen();

  const handleClick = async () => {
    const count = randomIntFromInterval(1, 6);
    await context?.widget?.setNotificationBadge(count);
  };

  const handleClickX = async () => {
    await context?.widget?.setNotificationBadge(0);
  };

  return (
    <div className="flex gap-4">
      <Button onClick={handleClick} kind="primary">
        set notification
      </Button>
      <Button onClick={handleClickX} kind="secondary">
        clear notification
      </Button>
    </div>
  );
};

export default NotificationBadgeController;
