import { useEffect, useState } from "react";
import { createFullscreenWidget } from "@livechat/agent-app-sdk";

export function useLiveChatFullscreenWidgetInit() {
  const [error, setError] = useState(false);
  const [widget, setWidget] = useState(null);

  useEffect(() => {
    void createFullscreenWidget().then(setWidget).catch(setError);
  }, []);

  return { widget, error };
}
