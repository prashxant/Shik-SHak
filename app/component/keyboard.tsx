import { keys } from "@/lib/keys"


 export const Keyboard = () => {



 const baseStyle ="m-0.5  flex text-md   items-center justify-center size-16 border-2 border-neutral-700 rounded-[10px] bg-[#0A090D] text-white shadow-slate-200 shadow-lg/50 hover:shadow-none cursor-pointer transition duration-200 hover:scale-95";

  return (
    <div className="rounded-xl bg-zinc-800 p-1">
      {keys.map((group, i) => (
        <div className="flex flex-row  rounded-md" key={i}>
          {group.map((key, j) => (
            <div className={`${baseStyle} ${key.className} `} key={j}>
              <div>{key.icon}</div>
              <div className="pt-1">{key.name}</div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}


