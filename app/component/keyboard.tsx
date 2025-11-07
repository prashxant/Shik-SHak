import { keys } from "@/lib/keys";



 export const Keyboard = () => {



 const baseStyle ="m-0.5 flex text-md  items-center justify-center size-16 border-2 border-neutral-700 rounded-[10px] bg-[#0A090D] text-white shadow-slate-200 shadow-lg/50 hover:shadow-none cursor-pointer transition duration-200 hover:scale-95";
 const arrowStyle ="flex text-md   items-center justify-center h-8 w-16 border-2 border-neutral-700 rounded-[10px] bg-[#0A090D] text-white shadow-slate-200 shadow-lg/50 hover:shadow-none cursor-pointer transition duration-200 hover:scale-95";

  return (
  <div className="rounded-2xl p-2  bg-zinc-800 ">
    {keys.map((group, i) => (
      <div className="flex flex-row rounded-md" key={i}>
        {group.map((key, j) => {

          if (key.name === "Left") {
            return (
              <div
                key="arrow-cluster"
                className="flex flex-col items-center justify-center ml-2"
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
)}
