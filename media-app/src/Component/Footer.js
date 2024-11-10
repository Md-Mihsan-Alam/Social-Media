import React from 'react'
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa6";
import { TiSocialLinkedin } from "react-icons/ti";


export default function Footer() {
  return (
    <div>
        <div class="card mt-5 bg-white bg-opacity-25 text-white">
            <div class="card-header fs-3 text-black">
              Social Media App
            </div>
          <div class="card-body">
              <h5 class="card-title">
                <a href="" class="btn">Meta</a>
                <a href="" class="btn">About</a>
                <a href="" class="btn">Blog</a>
                <a href="" class="btn">Jobs</a>
                <a href="" class="btn">Help</a>
                <a href="" class="btn">API</a>
                <a href="" class="btn">Privacy</a>
                <a href="" class="btn">Terms</a>
                <a href="" class="btn">Instagram</a>
                <a href="" class="btn">Lite</a>
                <a href="" class="btn">Threads</a>
                <a href="" class="btn">Contact</a>
                <a href="" class="btn">Uploading &</a>
                <a href="" class="btn">Non-Users</a>
                <a href="" class="btn">Meta</a>
                <a href="" class="btn">Verified</a>
              </h5>
              <p class="card-text text-black">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et error voluptatem ipsam fugit cum similique, sed, tenetur omnis assumenda quam labore tempore ad enim vel corporis, veniam minus sunt quaerat.</p>
              <a href="#" class="btn fs-4"><CiFacebook/> </a>
              <a href="" class="btn fs-4"> <FaInstagram/> </a>
              <a href="" class="btn fs-4"> <FaXTwitter/> </a>
              <a href="" class="btn fs-4"> <FaWhatsapp/> </a>
              <a href="" class="btn fs-4"> <FaTelegram/> </a>
              <a href="" class="btn fs-4"> <TiSocialLinkedin/> </a>
          </div>
        </div>
    </div>
  )
}
