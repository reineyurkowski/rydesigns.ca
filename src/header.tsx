import './header.css'

import { useState, useEffect } from "react";

function Logo() {
  const [headerHeight, setHeaderHeight] = useState("2.5rem");
  const [headerDisplay, setHeaderDisplay] = useState("flex");

  const [headerPositionType, setHeaderPositionType] = useState("sticky");

  const [headerLogoPaddingBottom, setHeaderLogoPaddingBottom] = useState("");

  useEffect(() => {
    // Check browser window size and set header type
    const setHeaderType = () => {
      if (window.innerWidth > 600) {
        //setting for mobile
        setHeaderDisplay("flex");
        setHeaderLogoPaddingBottom('0rem');
      } else {
        //setting for desktop
        setHeaderDisplay("block");
        setHeaderLogoPaddingBottom('3rem');
      }
    };
    setHeaderType(); // call the function once to set the initial header type

    // Add event listener to update header type when window is resized
    window.addEventListener("resize", setHeaderType);

    // Cleanup function to remove event listener when component unmounts
    return () => {
      window.removeEventListener("resize", setHeaderType);
    };
  }, []); // only run effect once on mount

  const handleLogoClick = () => {
    if (window.innerWidth <= 600) {
      if (headerHeight === "2.5rem") {
        setHeaderHeight("100vh");
        setHeaderDisplay("flex");
      } else if (headerHeight === "100vh") {
        setHeaderHeight("2.5rem");
        setHeaderDisplay("block");
      }
    }
  };

  return (
    <a href={window.innerWidth > 600 ? "/home" : undefined} onClick={handleLogoClick}>
      <div id="logo">
        <img
          src="./src/assets/mediaKits/reineYurkowskiAssets/initialsThicc.svg"
          alt="Reine Yurkowski's signature"
          style={{ transform: "scaleX(1.5) skew(10deg, 10deg)" }}
        />
      </div>
      <style>
        {`
        #header {
          height: ${headerHeight};
          display: ${headerDisplay};
          
        }
        #logo {
          padding-bottom: ${headerLogoPaddingBottom}
        }
        `}
      </style>
    </a>
  );
}




function Header() {
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [headerHeight, setHeaderHeight] = useState("3rem");

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      if (prevScrollPos > currentScrollPos) {
        setHeaderHeight("3rem");
      } else {
        setHeaderHeight("0.0rem");
      }
      setPrevScrollPos(currentScrollPos);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <header id="header" style={{ height: headerHeight }}>
      <Logo />

      <div></div>
      {/* <a href="/home">
        <div>HOME</div>
      </a>
      <a href="/about">
        <div>ABOUT</div>
      </a>
      <a href="/pricing">
        <div>PRICING</div>
      </a>
      <a href="/contact">
        <div>CONTACT</div>
      </a> */}
      <div></div>
      <a href="mailto: reineyurkowski@gmail.com">
        <div>EMAIL</div>
      </a>
      <a href="tel: +1-(250)-216-2556">
        <div>PHONE</div>
      </a>
    </header>
  );
}


export default Header;
