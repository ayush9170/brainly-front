import{SideIcon} from "../icons/side"

export function SideItem({ name }: { name: string }){
return <div>
    <div className="flex items-center m-2 text-grey-500 cursor-pointer hover:bg-grey-200 rounded-md">
        <SideIcon></SideIcon>
        {name}
    </div>
</div>
}