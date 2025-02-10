"use client";
import { createContext, useContext } from "react";
import { useLiveChatFullscreenWidgetInit } from "../hooks/useLiveChatFullscreenWidgetInit";
import { Badge } from "@livechat/design-system-react-components";

const LiveChatFullscreenContext = createContext(null);

export function useLiveChatFullscreen() {
  const context = useContext(LiveChatFullscreenContext);

  if (!context) {
    throw new Error(
      "You're trying to use LiveChatFullscreenContext without providing it at first. Wrap your code with 'LiveChatFullscreenProvider'"
    );
  }

  return context;
}

export function LiveChatFullscreenProvider({ children }) {
  const { widget, error } = useLiveChatFullscreenWidgetInit();

  if (!widget) {
    if (error) {
      return <div>Connecting to widget failed</div>;
    }

    return <div>Connecting to widget...</div>;
  }

  const context = {
    widget,
  };

  return (
    <LiveChatFullscreenContext.Provider value={context}>
      {typeof children === "function" ? children(context) : children}
    </LiveChatFullscreenContext.Provider>
  );
}
