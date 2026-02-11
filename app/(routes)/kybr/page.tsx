
import { NavbarHome } from "@/component/shared/NavbarHome";
import { Keyboard } from "../../../component/kybr/keyboard";



const page = () => {
  return (
    <div className="flex flex-col h-screen w-full items-center justify-center bg-zinc-900">
      <NavbarHome/>
      <Keyboard />
    </div>
  );
};
export default page;
