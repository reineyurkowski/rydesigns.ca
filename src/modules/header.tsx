import './header.css'

import { useState, useEffect, useRef } from "react";

//images
import assets from '../assets/assetIndex';



function Header() {
  let [headerHeight, setHeaderHeight] = useState('auto')

  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const prevScrollY = useRef(0);

  const [scrollPos, setScrollPos] = useState(0);
  const [scrollDirection, setScrollDirection] = useState('none');

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const currentScrollPos = window.pageYOffset;
  //     if (currentScrollPos > scrollPos) {
  //       setScrollDirection('down');
  //       setHeaderHeight('0.3rem');
  //     } else {
  //       setScrollDirection('up');
  //       setHeaderHeight('auto');
  //     }
  //     setScrollPos(currentScrollPos);
  //   };

  //   window.addEventListener('scroll', handleScroll);
  //   return () => window.removeEventListener('scroll', handleScroll);
  // }, [scrollPos]);

  // Render your header component with scrollDirection as a prop
  return (
    <header 
      id='header' 
      className=''
      style={{height: headerHeight}}
    >
      <div>
        <div id='logoHeader' className='headerItem'> 
          <a href='/home'>
            <img
              src={assets.initialsThicc}
              alt='reineYurkowskiSignature'
            />
          </a>
        </div>
        <a href='/'>
          <div id='homeHeader' className='headerItem headerItemWithText'> Home </div>
        </a>
        <a href='/about'>
          <div id='aboutHeader' className='headerItem headerItemWithText'> About </div>
        </a>   
        <a href='/pricing'>
          <div id='pricingHeader' className='headerItem headerItemWithText'> Pricing </div>
        </a>   
        <a href='/contact'>
          <div id='contactHeader' className='headerItem headerItemWithText'> Contact </div>
        </a>   
      </div>
    </header>
  )
}

export default Header;