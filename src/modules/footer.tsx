import '../style.css'

import assets from '../assets/assetIndex';

function Footer() {
  
  return (
    <footer>  
      <div id='horizontalRow'>

        <div id='footerSignature'>
          <a
            href='/'
            target='_blank'
          >
            <img  
              id="footerReineYurkowskiSignature"
              src={`${assets.fullThicc}`}
              alt='twitter logo'
            />
          </a>
        </div>

        <div id="footerSocials">
          <a 
            href='https://www.artstation.com/reineyurkowski'
            target='_blank'
          >
            <img  
              id="artstationLogo"
              src={assets.artstationLogo}
              alt='artstation Logo'
            />
          </a>
          <a 
            href='https://www.facebook.com/ryDesignsBC/'
            target='_blank'
          >
            <img  
              id="facebookLogo"
              src={assets.facebookLogo}
              alt='facebook logo'
            />
          </a>
          <a
            href='https://www.instagram.com/reineyurkowski/'
            target='_blank'
          >
            <img  
              id="instagramLogo"
              src={assets.instagramLogo}
              alt='instagram logo'
            />
          </a>
          <a 
            href='https://www.linkedin.com/in/reine-y-326025a9/'
            target='_blank'
          >
            <img  
              id="linkedInLogo"
              src={assets.linkedinLogo}
              alt='linked in logo'
            />
          </a>
          {/* <a
            href='https://linktr.ee/reineyurkowski'
            target='_blank'
          >
            <img  
              id="linktreeLogo"
              src={assets.linktreeLogo}
              alt='linktree logo'
            />
          </a> */}
          <a
            href='https://twitter.com/reineyurkowski'
            target='_blank'
          >
            <img  
              id="twitterLogo"
              src={assets.twitterLogo}
              alt='twitter logo'
            />
          </a>
          {
          /* <a
            href=''
            target='_blank'
          >
            <img  
              id=""
              src="./src/assets/mediaKits/"
              alt=''
            />
          </a> */
          }
        </div>

        <div id="footerContact">
          <br/>
          <a href="tel:+1-(250)-216-2556">
            phone: <br/> +1-(250)-216-2556
          </a>
          <a href="mailto:reineyurkowski@gmail.com">
            email: <br/> reineyurkowski@gmail.com
          </a>
          <br/>
        </div>

      </div>

      <div id='horizontalRow'>
          <p id='disclaimer'>
            Disclaimer: 
            <br/>
            The content on this webpage may contain copyrighted material or intellectual property owned by third parties. 
            <br/>
            We do not claim ownership over any of the images, videos, or other media that may appear on this website. 
            <br/>
            All trademarks, logos, and service marks displayed on this website are the property of their respective owners.
          </p>
      </div>
    </footer>
  )
}

export default Footer;