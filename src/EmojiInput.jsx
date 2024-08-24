import Picker from "@emoji-mart/react";
import { useState } from "react";

const EmojiInput = () => {
  const [isEmojiBoxOpen, setIsEmojiBoxOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const handleEmojiSelect = (emoji) => {
    setInputValue(inputValue + emoji.native);
  };

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
      )}
    </>
  );
};

export default EmojiInput;
