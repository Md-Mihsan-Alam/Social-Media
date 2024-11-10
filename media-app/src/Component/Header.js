import React from 'react'
import { AiOutlineHome } from "react-icons/ai";
import { IoCreateOutline } from "react-icons/io5";
import { GrView } from "react-icons/gr";
import { HiMiniUserGroup } from "react-icons/hi2";

export default function Header({onSelect }) {
  return (
    <div className='container w-50 '>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Social Media</a>
          <button class="navbar-toggler" type="button"      data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      <div class="collapse navbar-collapse"   id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
           <a class="nav-link active" aria-current="page" href="#"  onClick={()=> onSelect('Home')}> <AiOutlineHome/> Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" href="#" onClick={()=> onSelect  ('CreatePost')}> <IoCreateOutline/> Create Post</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="#" onClick={()=> onSelect('Home')}> <GrView/> View Post</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="#"> <HiMiniUserGroup/> Groups</a>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
        <button class="btn btn-outline-info" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  </div>
  )
}
