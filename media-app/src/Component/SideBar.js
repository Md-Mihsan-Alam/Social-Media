import React from 'react'
import { AiOutlineHome } from "react-icons/ai";
import { BsFillPeopleFill } from "react-icons/bs";
import { IoCreateOutline } from "react-icons/io5";
import { GrView } from "react-icons/gr";
import { IoMdTv } from "react-icons/io";
import { HiMiniUserGroup } from "react-icons/hi2";
import { IoBarChart } from "react-icons/io5";
import { IoMdSettings } from "react-icons/io";
import PostList from './PostList';
import CreatePost from './CreatePost';

export default function SideBar({onSelect }) {

  // const ShowPost = () =>{
  //   <PostList/>
  // }
  // const ShowForm = () =>{
  //   return(
  //     <CreatePost/>
  //   )
    
  // }

  return (
<div>
    <div class="row">
        <div class="col-2 w-25 mt-5 p-4">
            <div class="list-group mt-3" id="list-tab" role="tablist">
              
              <a class="list-group-item list-group-item-action active list-group-item-secondary text-start" id="list-home-list" data-bs-toggle="list" href="#list-home" role="tab" aria-controls="list-home" onClick={()=> onSelect('Home')}><AiOutlineHome/>  Home</a>
              <a class="list-group-item list-group-item-action list-group-item-secondary text-start" id="list-profile-list" data-bs-toggle="list" href="#list-profile" role="tab" aria-controls="list-profile" onClick={()=> onSelect('CreatePost')}><IoCreateOutline/>  Create Post</a>
                
            </div>
        </div>
    </div>
</div>
  )
}
