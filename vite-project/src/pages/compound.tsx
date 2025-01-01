import { useState } from 'react'
import { Button } from '../component/button'
import {Card} from "../component/cards"
import { Open } from '../component/content'
import {Plus} from "../icons/plus"
import {Icon} from "../icons/shareIcon"
import { SideBar } from '../component/sidebar'
import {useContent} from '../hooks/useContent'

function DashBoard() {
    const [open ,setOpen] =useState(false);
    const contents = useContent();

 return <div  className='bg-grey-200 h-screen'>
<SideBar></SideBar>
<div >
 {open &&  <Open open={open} setOpen={setOpen}></Open>}  

 <div className='flex justify-end'>
  <Button text="Add Content" icon={<Plus></Plus>}   varient="secondary" onClick={()=>{setOpen(true)}}></Button>
  <Button text="Share-brain" icon={<Icon></Icon>}  varient="primary"></Button>
  </div>
  <div className='flex ml-80'>
  

{/* {contents.map(({type,link,title})=>
    <Card title={title} type={type} link={link}></Card>
)} */}


  </div>
 </div>
 </div>
}

export default DashBoard