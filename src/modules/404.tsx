import React from "react";

import assets from "../assets/assetIndex";

import '../style.css'

function Four04() {

  return (
    <div
      id="four04"
      // style={{width: '80%', margin: 'auto', maxWidth: '80%'}}
    >
      <h1>
        <span
          style={{color: 'var(--color1)'}}
        >
          404
        </span>
        , page not found
      </h1>
      <br/>
      <p> 
        you seemed to have tried accessing a page that doesn't exist.
        you can either try again, select one of the pages above, or check out this cool skull Reine Yurkowski drew.
      </p>
      <img
        id="four04Art"
        className=""
        src={assets.skull}
        alt='a fox skull reine yurkowski drew'
        //style={{maxWidth: '90%', borderRadius: '100%', border: '2px solid var(--color1)'}}
      />
    </div>
  )
}

export default Four04;