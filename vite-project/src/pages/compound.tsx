import { useState } from 'react'
import { Button } from '../component/button'
import {Card} from "../component/cards"
import { Open } from '../component/content'
import {Plus} from "../icons/plus"
import {Icon} from "../icons/shareIcon"
import { SideBar } from '../component/sidebar'

function DashBoard() {
    const [open ,setOpen] =useState(false);
 return <div  className='bg-grey-200 h-screen'>
<SideBar></SideBar>
<div >
 {open &&  <Open open={open} setOpen={setOpen}></Open>}  

 <div className='flex justify-end'>
  <Button text="Add Content" icon={<Plus></Plus>}   varient="secondary" onClick={()=>{setOpen(true)}}></Button>
  <Button text="Share-brain" icon={<Icon></Icon>}  varient="primary"></Button>
  </div>
  <div className='flex ml-80'>
  <Card title="LinkedIn" type="linkedIn" link="https://www.linkedin.com/embed/feed/update/urn:li:share:7279095088448786432"></Card>
  <Card title="YOUTUBE" type="youtube" link="https://www.youtube.com/embed/oorC8yVE1BE?si=3_4ZyVL5Pcspe9KH"></Card>
  </div>
 </div>
 </div>
}

export default DashBoard