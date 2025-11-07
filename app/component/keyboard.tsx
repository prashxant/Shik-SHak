import { keys } from "@/lib/keys"


 export const Keyboard = () => {



  const baseStyle = "rounded-md cursor-pointer m-2 hover:scale-110 transition duration-200  size-18 flex justify-center  shadow-lg/50 overflow-hidden shadow-slate-200 hover:shadow-none items-center bg-[#0A090D] text-white";

  const esc = "" //same for delete , tab , esc

  const shift = ""

  const arrow = ""

  const caps = "" //same for caaps and return

  const space = ""



  return (
    <div className="w-7xl  bg-zinc-800 rounded-3xlp-4">

      {keys.map((group, i) => (
        <div
          className="flex  gap-2 rounded-md"
          key={i}
        >
          {group.map((key, j) => (
            <div className={`${baseStyle}   `} key={j}>
              {key.name}{" "}
            </div>
          ))}
        </div>
      ))}

    </div>
  );
}


