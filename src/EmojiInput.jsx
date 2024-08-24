import Picker from "@emoji-mart/react";
import { useEffect, useRef, useState } from "react";

const EmojiInput = () => {
  const [isEmojiBoxOpen, setIsEmojiBoxOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const pickerRef = useRef(null);

  const handleEmojiSelect = (emoji) => {
    setInputValue(inputValue + emoji.native);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      console.log("Hello");

      if (
        isEmojiBoxOpen &&
        pickerRef.current &&
        !pickerRef.current.contains(e.target)
      ) {
        setIsEmojiBoxOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isEmojiBoxOpen]);

  return (
    <>
      <form>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            setIsEmojiBoxOpen(!isEmojiBoxOpen);
          }}>
          emoji
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            alert(`Message sent: ${inputValue}`);
            setInputValue("");
          }}>
          Send
        </button>
      </form>

      {isEmojiBoxOpen && (
        <div ref={pickerRef}>
          <Picker
            onEmojiSelect={handleEmojiSelect}
            theme="dark"
            style={{
              width: "400px",
              minWidth: "250px",
              resize: "horizontal",
              overflow: "auto",
            }}
            previewPosition="none"
          />
        </div>
      )}
    </>
  );
};

export default EmojiInput;
