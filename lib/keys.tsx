export const ParentKeyboardStyle =
  "rounded-2xl bg-zinc-800 p-2 shadow-xl shadow-sky-300/50";

export const baseStyle =
  "m-0.5 flex text-md items-center justify-center size-16 border-2 border-neutral-700 rounded-[10px] bg-[#0A090D] text-white shadow-slate-200 shadow-lg/50 active:shadow-none cursor-pointer transition duration-200 active:scale-95";

export const arrowStyle =
  "flex text-md   items-center justify-center h-8 w-16 border-2 border-neutral-700 rounded-[10px] bg-[#0A090D] text-white shadow-slate-200 shadow-lg/50   active:shadow-none cursor-pointer transition duration-200 active:scale-95";

import {
  Globe,
  One,
  Three,
  Two,
  Four,
  Five,
  Six,
  Seven,
  Eight,
  Nine,
  Ten,
  Twleve,
  Eleven,
  LockButton,
} from "@/component/kybr/svg";
import { ReactNode } from "react";

type KeyConfig = {
  name: string;
  icon?: ReactNode | string;
  className?: string;
};

const key = (
  name: string,
  icon: ReactNode | string = "",
  className = "",
): KeyConfig => ({ name, icon, className });

const wide = (name: string, className: string): KeyConfig =>
  key(name, "", className);

export const keys: KeyConfig[][] = [

  [
    wide("esc", "w-30 justify-start items-end pb-2 pl-4"),
    key("F1", <One />, "flex-col text-sm"),
    key("F2", <Two />, "flex-col text-sm"),
    key("F3", <Three />, "flex-col text-sm"),
    key("F4", <Four />, "flex-col text-sm"),
    key("F5", <Five />, "flex-col text-sm"),
    key("F6", <Six />, "flex-col text-sm"),
    key("F7", <Seven />, "flex-col text-sm"),
    key("F8", <Eight />, "flex-col text-sm"),
    key("F9", <Nine />, "flex-col text-sm"),
    key("F10", <Ten />, "flex-col text-sm"),
    key("F11", <Eleven />, "flex-col text-sm"),
    key("F12", <Twleve />, "flex-col text-sm"),
    key("",<LockButton/>),
  ],


  [
    key("`", "~", "flex-col"),
    key("1", "!", "flex-col"),
    key("2", "@", "flex-col"),
    key("3", "#", "flex-col"),
    key("4", "$", "flex-col"),
    key("5", "%", "flex-col"),
    key("6", "^", "flex-col"),
    key("7", "&", "flex-col"),
    key("8", "*", "flex-col"),
    key("9", "(", "flex-col"),
    key("0", ")", "flex-col"),
    key("-", "_", "flex-col"),
    key("=", "+", "flex-col"),
    wide("delete", "w-30 justify-end items-end pb-2 pr-4"),
  ],


  [
    wide("tab", "w-30 justify-start items-end pb-2 pl-4"),
    ...["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"].map((k) => key(k)),
    key("[", "{", "flex-col"),
    key("]", "}", "flex-col"),
    key("\\", "|", "flex-col"),
  ],


  [
    wide("caps lock", "w-33 justify-start items-end pb-2 pl-4"),
    ...["A", "S", "D", "F", "G", "H", "J", "K", "L"].map((k) => key(k)),
    key(";", ":", "flex-col"),
    key("'", `"`, "flex-col pt-2"),
    wide("return", "w-30 justify-end items-end pb-2 pr-4"),
  ],


  [
    wide("shift", "w-40 justify-start items-end pb-2 pl-4"),
    ...["Z", "X", "C", "V", "B", "N", "M"].map((k) => key(k)),
    key(",", "<", "flex-col"),
    key(".", ">", "flex-col"),
    key("/", "?", "flex-col"),
    wide("shift", "w-40 justify-end items-end pb-2 pr-4"),
  ],


  [
    key("fn", <Globe />, "text-sm justify-between gap-4 pb-1 items-end"),
    key("control", "^", "flex-col text-sm items-start pl-1.5"),
    key("option", "⌥", "flex-col text-sm items-start pl-1.5"),
    key("command", "⌘", "w-19 flex-col text-sm items-start pl-1.5"),
    key("", "", "w-[23rem]"),
    key("command", "⌘", "w-19 flex-col text-sm items-end pr-1.5"),
    key("option", "⌥", "flex-col text-sm items-end pr-1.5"),
    key("Left", "", "h-9 flex-col"),
  ],
];
