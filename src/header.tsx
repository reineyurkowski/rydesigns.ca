import './header.css'

function Header() {
  

  return (
    <header>
      <a><div>
        <img
          src="./src/assets/mediaKits/reineYurkowskiAssets/fullThicc.svg"
          alt="Reine Yurkowski's signature"
        />
      </div></a>
      <div></div>
      <a><div>HOME</div></a>
      <a><div>CONTACT</div></a>
      <a><div>ABOUT</div></a>
      <div></div>
      <a href="mailto: reineyurkowski@gmail.com">
        <div>EMAIL</div>
      </a>
      <a href="tel: +1-(250)-216-2556">
        <div>LETS CALL!</div>
      </a>
    </header>
  )
}

export default Header;