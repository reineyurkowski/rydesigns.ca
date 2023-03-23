import './home.css'

function ArrayToUl(input:string[], listId = "noIdAssigned") 
  {
    let inputMapped = input.map((list, index) => 
      <li key={index} id={input[index]}>{list}</li>
    )
    return(
      <ul id={listId}>{inputMapped}</ul>
    )
}

function isInViewport(element:any) {
  const rect = element.getBoundingClientRect();
  return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function ClickableImage(
  containerId:string = "generatedImageContainer", 
  link:string = "https://twitter.com/reineyurkowski", 
  image:string = "https://developer.valvesoftware.com/w/images/thumb/5/5b/Missing_textures_example.png/400px-Missing_textures_example.png", 
  imageId:string = "generatedImage", 
  description:string = "this is an image") {
  return (
    <a id={containerId} href={link} target="_blank">
      <img id={imageId} src={image} alt={description}/>
    </a>
  )
}

function Home() {

  return (
    <div id='home'>
      <h1 id='title'>
        Good Designs <br/> Can Set Things In Motion
      </h1>
      {/* <h1 id='titleShadow'>
        Design Can Set Things In Motion
      </h1> */}
      <div id="titleImageContainer">
        <div id="titleImage">
          <img 
            id='titleImageFlair'
            src='./src/assets/roundedSquare.svg'
          />
          <img 
            id='titleImageFlair'
            src='./src/assets/roundedSquare.svg'
          />
          <img 
            id='titleImageFlair'
            src='./src/assets/roundedSquare.svg'
          />
        </div>
      </div>

      <h2>What we Offer:</h2>
      
      {/* {ArrayToUl([
          "websites that scale",
          "websites that are accessible",
          "webinsites that are unique",
        ],
        "whatWeOfferList",
        )
      } */}
      <div>
        <ul id='whatWeOfferList'>
          <li id=''>WEBSITES THAT <span id="scaleText"> SCALE </span>
          <p id='paragraphScale'> 
            with websites like this, you don't need to worry about
            sites scaling poorly, or if you want to change colors,
            that works good too.
          </p>
          </li>
          
          <li id=''>
            WEBSITES THAT ARE ACCESSIB
            <img id='accessibleIcon' src='/src/assets/commonIcons/898px-Wheelchair_symbol.png'/>
            E
            <p id='paragraphAccessible'> 
              make sure your users can get what they need, with proper 
              accessibility tags, scaling, contract, and other much needed
              settings to help the 250million people with some sort of visual 
              impairment
            </p>
          </li>
          <li id='websitesThatAreUnique'> WEBSITES THAT ARE <span id='uniqueText'> UNIQUE </span>
            <p id='paragraphUnique'> 
              help you, your product, or your brand stand out with a unique,
              identifiable, website.
            </p>
          </li>

          {/* <div>
            <h3> interested? </h3>
            <div> call or message today </div>
          </div> */}
        </ul>
      </div>
      
      
      {/* ❌  experience */}


      ❌  skills
      <div id='skillWhereItMatters'>
        <h2> SKILL WHERE IT MATTERS </h2>
        <div className='homeHorizontalRow'>

          <div>
            {ClickableImage(
              "html5ImageContainer", 
              'https://en.wikipedia.org/wiki/HTML',
              './src/assets/mediaKits/html5-resources/HTML5_Badge.svg',
              'html5Logo',
              'the html 5 badge'
            )}
            <p>
              {/* HTML5 is a coding language used to create websites. It's like a blueprint that tells web browsers how to display text, images, videos, buttons, and other content on a webpage. HTML5 is important because it enables website creators to design sites that are interactive, responsive, visually appealing, and work on different devices and platforms. It's used for features such as audio and video playback, graphics, and mobile support, making it a critical component of the modern web. */}
              HTML5 is a coding language used to create websites. It's like a blueprint that tells web browsers how to display content on a webpage. It enables website creators to design sites that are interactive, visually appealing, and work on different devices.
            </p>
          </div>

          <div>
            {ClickableImage(
              "css3ImageContainer", 
              'https://en.wikipedia.org/wiki/CSS',
              './src/assets/mediaKits/css-resources/by daPhyre/CSS3_logo.svg',
              'css3Logo',
              'the css 3 badge'
            )}
            <p>
              {/* CSS3 (Cascading Style Sheets) is a language used to add style, layout, and formatting to websites. It's like a set of rules that tells web browsers how to display elements on a webpage, such as fonts, colors, spacing, and more. CSS3 is important because it enables website creators to enhance the look and feel of their sites, making them more attractive, engaging, and user-friendly. */}
              CSS3 is a language used to add style and formatting to websites. It's like a set of rules that tells web browsers how to display elements on a webpage, making sites more attractive and user-friendly.
            </p>
          </div>
          <div>
            {ClickableImage(
              "css3ImageContainer", 
              'https://en.wikipedia.org/wiki/JavaScript',
              './src/assets/mediaKits/js-resources/jsLogo.svg',
              'jsLogo',
              'the unofficial js logo'
            )}
            <p>
              {/* JavaScript is a programming language used to create interactive and dynamic elements on websites. It's like a tool that allows developers to add functionality to a webpage, such as user input validation, animations, pop-ups, and more. JavaScript is important because it enables website creators to create engaging and responsive web experiences, making websites more fun, interactive, and personalized for users. */}
              JavaScript is a programming language used to create interactive and dynamic elements on websites. It enables website creators to add functionality such as animations and user input validation, making websites more engaging and personalized for users.
            </p>
          </div>
        </div>
        <br/>
        <br/>
        <br/>
        <h3> AND A LITTLE EXTRA </h3>
        <div className='homeHorizontalRow'>
          <div>
            {ClickableImage(
              "yarnJsImageContainer", 
              'https://yarnpkg.com/',
              './src/assets/mediaKits/yarn-resources/yarnKitten.svg',
              'yarnLogo',
              'the yarn package manager logo'
            )}
            <p>yarn</p>
          </div>
          <div>
            {ClickableImage(
              "reactJsImageContainer", 
              'https://reactnative.dev/',
              './src/assets/mediaKits/reactJs-resources/React-icon.svg',
              'reactLogo',
              'the reactJs logo'
            )}
            <p>reactJs</p>
          </div>
          <div>
            {ClickableImage(
              "viteImageContainer", 
              'https://vitejs.dev/',
              './src/assets/mediaKits/vite-resources/ViteJs-logo.svg',
              'yarnLogo',
              'the yarn package manager logo'
            )}
            <p>vite</p>
          </div>
          <div>
            {ClickableImage(
              "githubImageContainer", 
              'https://github.com/',
              './src/assets/mediaKits/github-resources/github-mark/github-mark-white.svg',
              'githubLogo',
              'github data backup logo'
            )}
            <p>github</p>
          </div>
        </div>

        <div>
          <h2>cross platform support</h2> 
          <div className='homeHorizontalRow'>
            {/* 
            android
            ios
            linux
            macOS
            windows
            */}
              <div>
                {ClickableImage(
                  "androidImageContainer", 
                  'https://www.android.com/',
                  './src/assets/mediaKits/google/android/Android_symbol_green_RGB.svg',
                  'androidLogo',
                  'android logo'
                )}
                <p>android</p>
              </div>
              <div>
                {ClickableImage(
                  "iOsImageContainer", 
                  'https://www.apple.com/ca/ios/',
                  './src/assets/mediaKits/apple-resources/iOS/IOS_logo.svg',
                  'iosLogo',
                  'logo of iOS'
                )}
                <p>iOS</p>
              </div>
              <div>
                {ClickableImage(
                  "linuxImageContainer", 
                  'https://www.linuxfoundation.org/',
                  './src/assets/mediaKits/linux-resources/Linux_Logo_in_Linux_Libertine_Font.svg',
                  'linuxLogo',
                  'linux mascot tux, a penguin who is sitting down.'
                )}
                <p>linux</p>
              </div>
              <div>
                {ClickableImage(
                  "macOsContainer", 
                  'https://www.apple.com/ca/macos/',
                  './src/assets/mediaKits/apple-resources/macOS/MacOS_logo.svg',
                  'macOsLogo',
                  'macOS Logo'
                )}
                <p>macOS</p>
              </div>
              <div>
                {ClickableImage(
                  "windowsContainer", 
                  'https://www.microsoft.com/en-ca/windows/',
                  './src/assets/mediaKits/microsoft/windowsLogo.png',
                  'windowsLogo',
                  'windows logo in blue'
                )}
                <p>Windows</p>
              </div>
          </div>
          
          <h3>& cross browser support</h3> 
          <div className='homeHorizontalRow'>
            <div>
              {ClickableImage(
                "chromeImageContainer", 
                'https://www.chrome.com/',
                './src/assets/mediaKits/google/chrome/Google_Chrome_icon_(February_2022).svg',
                'chromeLogo',
                'chrome browser logo'
              )}
              <p>chrome</p>
            </div>
            <div>
              {ClickableImage(
                "viteImageContainer", 
                'https://www.firefox.com/',
                './src/assets/mediaKits/mozilla/firefox/Firefox_logo,_2019.svg',
                'firefoxLogo',
                'logo of mozillas firefox'
              )}
              <p>firefox</p>
            </div>
            <div>
              {ClickableImage(
                "safariImageContainer", 
                'https://www.apple.com/safari/',
                './src/assets/mediaKits/apple-resources/safari/Safari_browser_logo.svg',
                'safariLogo',
                'apples safari logo'
              )}
              <p>safari</p>
            </div>
          </div>
        </div>


      </div>

      ❌  testimonials


      ❌  pricing


      ❌  availability


      ❌  communication


      ❌  customer service


      ❌  specialization


      ❌  value proposition (open source stack)


      ❌  YOU are in control 


      ❌  SEO forward


      ❌  awards and recognition


      ❌  process


      ❌  guarantees


      ❌  social proof


      ❌  blog or resources


      ❌  availability for follow up work (and why you should care)


      ❌  personalization


      ❌  portfolio
    </div>
  )
}


export default Home