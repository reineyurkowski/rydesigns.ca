import '../style.css'

import { useState, useEffect, useRef } from "react";

//images
import assets from '../assets/assetIndex';



function Header() {
  let [headerHeight, setHeaderHeight] = useState('auto')

  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const prevScrollY = useRef(0);

  const [scrollPos, setScrollPos] = useState(0);
  const [scrollDirection, setScrollDirection] = useState('none');

  let ChangeHeight = () => {
    
  }



  return (
    <header 
      id='header' 
      className=''
      style={{height: headerHeight}}
    >
      <div>
        <div id='logoHeader' className='headerItem'> 
          <a onClick={ChangeHeight}>
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
        <a href='/portfolio'>
          <div id='contactHeader' className='headerItem headerItemWithText'> Portfolio </div>
        </a>   
      </div>
    </header>
  )
}

export default Header;