import { useOnlineStatus } from "./Hooks";

export default function ChatIndicator() {
  const isOnline = useOnlineStatus();
  return (
    <div>
      <div>I am {isOnline ? "Online" : "Offline"}</div>
    </div>
  );
}
