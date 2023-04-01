import './header.css'

import { useState } from "react";

function Logo() {
  let headerHeightValueSmall = '2.5rem'
  let headerHeightValueLarge = '100vh'

  const [headerHeight, setHeaderHeight] = useState(headerHeightValueSmall);
  const [headerDisplay, setHeaderDisplay] = useState("block");
  const [headerBottomPadding, setHeaderBottomPadding] = useState('3rem')

  const handleLogoClick = () => {
    if (window.innerWidth <= 600) {
      if (headerHeight === headerHeightValueSmall) {
        setHeaderHeight("100vh");
        setHeaderDisplay("flex");
      } else if (headerHeight === headerHeightValueLarge) {
        setHeaderHeight("3rem");
        setHeaderDisplay("block");
      }
    }
  };

  return (
    <a 
      href={window.innerWidth > 600 ? "/home" : undefined} 
      onClick={handleLogoClick}
      >
      <div id="logo">
        <img
          src="./src/assets/mediaKits/reineYurkowskiAssets/initialsThicc.svg"
          alt="Reine Yurkowski's signature"
          style={{ transform: "scaleX(1.5) skew(10deg, 10deg)" }}
        />
      </div>
      <style>
        {`#header {
          height: ${headerHeight};
          display: ${headerDisplay};
        }
        #logo {
          margin-bottom: ${headerBottomPadding};
        }
        `}
      </style>
    </a>
  );
}



function Header() {
  

  return (
    <header id='header'>
      <Logo />

      <div></div>
      <a href='/home'><div>HOME</div></a>
      <a href='/about'><div>ABOUT</div></a>
      <a href='/pricing'><div>PRICING</div></a>
      <a href='/contact'><div>CONTACT</div></a>
      <div></div>
      <a href="mailto: reineyurkowski@gmail.com">
        <div>EMAIL</div>
      </a>
      <a href="tel: +1-(250)-216-2556">
        <div>PHONE</div>
      </a>
    </header>
  )
}

export default Header;