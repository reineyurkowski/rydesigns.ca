import './header.css'

import { useState, useEffect } from "react";

//images
import assets from './assets/assetIndex';



function Header() {
  let [headerHeight, setHeaderHeight] = useState('4rem')

  return (
    <header style={{height: headerHeight}}>
      <div className='headerItem'>item</div>
      <div className='headerItem'>item</div>
      <div className='headerItem'>item</div>
      <div className='headerItem'>item</div>
    </header>
  )
}

export default Header;