'use client'
import { arrowStyle, baseStyle, keys, ParentKeyboardStyle } from "@/lib/keys";

 export const Keyboard = () => {

  return (
    <div className={ParentKeyboardStyle} >
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
                    <div className={`${arrowStyle} h-7.5`}>↑</div>
                  </div>
                  <div className="flex justify-center">
                    <div className={`${arrowStyle} `}>←</div>
                    <div className={`${arrowStyle} `}>↓</div>
                    <div className={`${arrowStyle} `}>→</div>
                  </div>
                </div>
              );
            }
            if (["Up", "Down", "Right"].includes(key.name)) return null;

            return (
              <div className={`${baseStyle} ${key.className}`} key={j}>
                <div>{key.icon}</div>
                <div className="pt-1">{key.name}</div>
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );}
