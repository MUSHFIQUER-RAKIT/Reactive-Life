import { useEffect, useState } from "react";

export default function Playground() {
  const [text, setText] = useState("a");
  // Initial Ak bar Render hbe
  useEffect(() => {
    function onTimeout() {
      console.log("⏰ " + text);
    }

    console.log('🔵 Schedule "' + text + '" log');
    const timeoutId = setTimeout(onTimeout, 3000);

    // CleanUp 
    return () => {
      console.log('🟡 Cancel "' + text + '" log');
      clearTimeout(timeoutId);
    };
  }, [text]);

  return (
    <>
      <label>
        What to log:{" "}
        <input value={text} onChange={e => setText(e.target.value)} />
      </label>
      <h1>{text}</h1>
    </>
  );
}
