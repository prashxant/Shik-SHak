"use client";

import { arrowStyle, baseStyle, keys, ParentKeyboardStyle } from "@/lib/keys";
import { useState } from "react";

const playSound = (keyName: string) => {
  const src = keyName === "Space" ? "/sounds/space.mp3" : "/sounds/key.mp3";

  const audio = new Audio(src);
  audio.volume = 0.35;
  audio.currentTime = 0;
  audio.play();
};

export const Keyboard = () => {
  const [typedText, setTypedText] = useState("");

  const handleKeyPress = (keyName: string) => {
    playSound(keyName)
    switch (keyName) {
      case "Backspace":
        setTypedText((prev) => prev.slice(0, -1));
        break;
      case "Space":
        setTypedText((prev) => prev + " ");
        break;
      case "Enter":
        setTypedText((prev) => prev + "\n");
        break;
      default:
        setTypedText((prev) => prev + keyName);
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <Screen typedText={typedText} />
      <KeyboardKeys onKeyPress={handleKeyPress} />
    </div>
  );
};
export const Screen = ({ typedText }: { typedText: string }) => {
  return (
    <div className=" bg-black mx-auto rounded-xl  p-4 font-mono shadow-inner">
      {typedText || "Type something..."}
    </div>
  );
}

export const KeyboardKeys = ({
  onKeyPress,
}: {
  onKeyPress: (key: string) => void;
}) => {
  return (
    <div className={ParentKeyboardStyle}>
      {keys.map((group, i) => (
        <div className="flex flex-row rounded-md" key={i}>
          {group.map((key, j) => {
            if (key.name === "Left") {
              return (
                <div
                  key="arrow-cluster"
                  className="ml-2 flex flex-col items-center justify-center"
                >
                  <div className="flex justify-center">
                    <div
                      className={`${arrowStyle} h-7.5`}
                      onClick={() => onKeyPress("Up")}
                    >
                      ↑
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <div
                      className={arrowStyle}
                      onClick={() => onKeyPress("Left")}
                    >
                      ←
                    </div>
                    <div
                      className={arrowStyle}
                      onClick={() => onKeyPress("Down")}
                    >
                      ↓
                    </div>
                    <div
                      className={arrowStyle}
                      onClick={() => onKeyPress("Right")}
                    >
                      →
                    </div>
                  </div>
                </div>
              );
            }

            if (["Up", "Down", "Right"].includes(key.name)) return null;

            return (
              <div
                key={j}
                className={`${baseStyle} ${key.className}`}
                onClick={() => onKeyPress(key.name)}
              >
                <div>{key.icon}</div>
                <div className="pt-1">{key.name}</div>
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
};
