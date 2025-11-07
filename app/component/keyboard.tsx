import { keys } from "@/lib/keys"


 export const Keyboard = () => {



  const baseStyle ="rounded-md size-18 flex justify-center mt-1 shadow-slate-300 items-center bg-[#0A090D] text-white";

  const esc = "" //same for delete , tab , esc

  const shift = ""

  const arrow = ""

  const caps = "" //same for caaps and return

  const space = ""



  return (
    <div className="w-7xl rounded-3xl bg-zinc-800 p-4">
      
      {keys.map((group, i) => (
        <div
          className="flex gap-2 rounded-md  "
          key={i}
        >
          {group.map((key, j) => (
            <div className={`${baseStyle} `} key={j}>
              {key.name}{" "}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}


