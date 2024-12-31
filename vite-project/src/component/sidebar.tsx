import { Logo } from "../icons/logo";
import { SideItem} from "./sidebarItem";

 export function SideBar(){
    return <div className="w-72 h-screen bg-white  absolute border-r">
      <div className="text-2xl flex pt-4 items-center">
         <div className="text-purple-800">
         <Logo></Logo>
         </div>
         Brainly</div>
      <div className="p-2">
      <SideItem name="twitter"></SideItem>
      </div>
<div className="p-2" >
<SideItem name ="youtube" ></SideItem>
</div>
    </div>
 }