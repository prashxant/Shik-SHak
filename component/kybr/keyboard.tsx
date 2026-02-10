"use client";
import { motion, AnimatePresence } from "framer-motion";
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
  const [flashKey, setFlashKey] = useState<{
    value: string;
    id: number;
  } | null>(null);

  const handleKeyPress = (keyName: string) => {
    let display = keyName;
    playSound(keyName);

    if (keyName === "Space") display = "␣";
    if (keyName === "Enter") display = "⏎";
    if (keyName === "Backspace") display = "⌫";

    setFlashKey({
      value: display,
      id: Date.now(),
    });
  };

  return (
    <div className="flex flex-col gap-4">
      <Screen flashKey={flashKey} />
      <KeyboardKeys onKeyPress={handleKeyPress} />
    </div>
  );
};

export const Screen = ({
  flashKey,
}: {
  flashKey: { value: string; id: number } | null;
}) => {
  return (
   <div className="relative mx-auto  flex h-32 w-64 items-center justify-center overflow-hidden rounded-xl p-8 ">
      <AnimatePresence>
        {flashKey && (
          <motion.div
            key={flashKey.id}
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 1, opacity: 0 }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
            }}
            className="absolute inset-0 flex items-center justify-center font-pixel-circle text-6xl text-white-400"
          >
            {flashKey.value}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

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
