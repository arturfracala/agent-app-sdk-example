import NotificationBadgeController from "./components/NotificationBadgeController";
import { LiveChatFullscreenProvider } from "./context/LiveChatFullscreenProvider";

export default function Home() {
  return (
    <LiveChatFullscreenProvider>
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <NotificationBadgeController />
      </div>
    </LiveChatFullscreenProvider>
  );
}
