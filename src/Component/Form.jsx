import { useRef } from "react";

export default function From() {
  const inputRef = useRef(null);

  function handleFocusInput() {
    inputRef.current.focus();
  }
  return (
    <>
      <input ref={inputRef} />
      <button onClick={handleFocusInput}>Focus The Input</button>
    </>
  );
}
