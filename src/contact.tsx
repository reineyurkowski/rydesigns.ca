import React from "react";
import { useEffect, useState, useRef } from "react";

import assets from "./assets/assetIndex";

import './contact.css'

function Contact() {
  return (
    <div id='contact'>
      <h1>CONTACT</h1> 
      <div>
        <h2>Direct Contact</h2>
        <p>for any inquiries, please use these:</p> 
        <br/>
        <br/>
        <ul>
          <li>
            email: 
            <br/>
            <br/>
            <a href='mailto:reineyurkowski@gmail.com'>
              reineyurkowski@gmail.com
            </a>
          </li>
          <br/>
          <br/>
          <li>
            phone: 
            <br/>
            <br/>
            <a href='tel:+1-(250)-216-2556'>
              +1-(250)-216-2556
            </a>
          </li>
        </ul>
      </div>
      <div>
        <h2>Official Socials</h2>
        <p>stay in touch!</p>
        <div className="socialsContainer">
          <a href='https://www.facebook.com/ryDesignsBC' target="_blank">
              <img 
                src={assets.facebookLogo}
              />
              Facebook
          </a>
          <a href='https://www.linkedin.com/in/reine-y-326025a9/' target="_blank">
              <img style={{filter: 'grayscale(1) brightness(3)'}}
                src={assets.linkedinLogo}
              />
              linkedIn
          </a>
          <a href='https://www.instagram.com/reineyurkowski/' target="_blank">
              <img style={{filter: 'grayscale(1) brightness(3)'}}
                src={assets.instagramLogo}
              />
              instagram
          </a>
          <a href='https://twitter.com/reineyurkowski' target="_blank">
              <img 
                src={assets.twitterLogo}
              />
              twitter
          </a>
        </div>
      </div>
      <div>
        <h2>Official Socials (not monitored)</h2>
        <p>these will be rarely updated if ever, but you know these are at least the real deal!</p>
        <ul>
          <li>
            <a href='https://www.artstation.com/reineyurkowski' target="_blank">
              artstation
            </a>
          </li>
          <li>
            <a href='https://linktr.ee/reineyurkowski' target="_blank">
              linktree
            </a>
          </li>
          <li>
            <a href='https://www.tiktok.com/@yurkowskireine' target="_blank">
              tiktok
            </a>
          </li>
          <li>
            <a href='https://reineyurkowski.tumblr.com/' target="_blank">
              tumblr
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Contact;