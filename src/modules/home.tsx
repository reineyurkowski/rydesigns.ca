import '../style.css'

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
            src='/src/assets/roundedSquare.svg'
          />
          <img 
            id='titleImageFlair'
            src='/src/assets/roundedSquare.svg'
          />
          <img 
            id='titleImageFlair'
            src='/src/assets/roundedSquare.svg'
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


      {/* ❌  skills */}
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
              'viteLogo',
              'vite application wrapper'
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
          <h2>CROSS PLATFORM SUPPORT</h2> 
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
          
          <h3>& CROSS BROWSER SUPPORT</h3> 
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
          <br/>
          <div className='homeHorizontalRow'>
            <p id='note'>
              note: if you do not see your browser listed, it is most
              likely a chrome derivatives, such chrome derivatives are:
              <a href='https://www.microsoft.com//edge'>edge, </a>
              <a href='https://brave.com/'>brave, </a>
              <a href='https://www.opera.com/gx'>operaGx, </a>
              <a href='https://vivaldi.com/'>vivaldi, </a>
              <a href='https://www.chromium.org/chromium-projects/'>chromium, </a>
              with the acception of:
              <a href='https://www.torproject.org/download/'>ToR browsers,</a>
              which are often chrome 
            </p>
            <br/>
            <p id='note'>
              as well, as of June 15, 2022 internet explorer has been 
              discontinued. Thus support for it is no longer advised.
            </p>
          </div>
        </div>

      </div>

      {/* ❌  testimonials */}
      

      {/* ❌  pricing  */}
      <div>
        <h2>Pricing Information</h2>
        <p>Our website design prices start at $500 for the first page, and $250 for each additional page. The final cost of your website will depend on the specific features and design elements you require. We will provide you with a formal quote based on your needs.</p>
        <br/>
        <p>Please note that website hosting and domain registration are not included in our pricing. You will need to arrange for these services and cover the associated costs separately.</p>
        <br/>
        <p>If you have any questions or would like to get started on a project, please contact us and we will be happy to assist you.</p>
      </div>

      ❌  availability
      <div>
        <h2>Availability</h2>
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
          <div><strong>Monday:</strong> Not Available</div>
          <div><strong>Tuesday:</strong> 3-5pm</div>
          <div><strong>Wednesday:</strong> 9am-5pm</div>
          <div><strong>Thursday:</strong> 9am-5pm</div>
          <div><strong>Friday:</strong> 12pm-5pm</div>
          <div><strong>Saturday:</strong> Available</div>
          <div><strong>Sunday:</strong> Available</div>
        </div>
        <br/>
        <br/>
        <p>note: availability may be sparse due to work hours, 
          if unavailable please email and or leave a message. </p>
      </div>

      {/* ❌  communication */}
      <div>
        <h2>Updates and Support</h2>
        <p>
          Updates on your website's progress will be given at least weekly, 
          or at any other preferred time interval that we agree on.
          <br/>
          <br/>
          i will offer one week (7days after day of deliver) for bug and 
          resolution. all work will need to be scheduled and will likely have
          a 3-5 day turn around (no promises on turn around however, will
          need to be discussed and given updates as it happens). 
          <br/>
          <br/>
          after that time will need to be scheduled and compensated for.
        </p>
      </div>

      {/* ❌  customer service */}
      {/* ❌  specialization */}
      {/* ❌  value proposition (open source stack) */}

      <div>
        <p>
          <h3>Why Open Source Software is the Smart Choice for Your Website
            <img id='wossitscfywIcon' src='./src/assets/mediaKits/commonIcons/mid holecut.png'/>
          </h3>
          <ul>
            <li>Freedom to modify: Open source software is freely available for anyone to use, modify, and distribute. This means you have the freedom to customize the software to suit your needs.</li>
            <br/>
            <li>Freedom to choose: Because open source software is not owned by any one company, you have the freedom to choose from a wide variety of hosting providers. This can help you save money and avoid being locked into a single provider.</li>
            <br/>
            <li>Constantly updated: Open source software is constantly being updated and improved by a community of developers. This means you can benefit from new features and bug fixes without having to pay for upgrades.</li>
            <br/>
            <li>Freedom to migrate: One of the biggest advantages of open source software is that it gives you the freedom to migrate to another service if you find that your current provider is not meeting your needs. Because the source code is open, you can easily move your website to another provider that supports the same software.</li>
          </ul>
        </p>
      </div>

      {/* ❌  YOU are in control  */}


      {/* ❌  SEO forward */}
      <div>
        <h3>SEO</h3>
        <p>
          SEO, or Search Engine Optimization, 
          is the practice of improving your website's visibility and ranking on 
          search engine results pages (SERPs). It matters because the higher your 
          website appears in search engine results, the more likely people are to 
          find and visit your website.
          <br/>
          <br/>
          To apply SEO, we will use various techniques including keyword research,
          on-page optimization, and link building 
          (via good social media management) to help improve your website's 
          visibility and ranking. This will help drive more organic traffic to 
          your website and ultimately help you achieve your business goals.
        </p>
      </div>

      {/* ❌  awards and recognition */}

      {/* ❌  process */}
      <div>
        <h3>THE PROCESS</h3>
        <p>
          When building a web project, React and Vite are commonly used 
          tools to help create fast and responsive websites with minimal 
          configuration. React is a JavaScript library used to create 
          reusable components and build complex user interfaces, while Vite 
          is a development server that allows for quick testing and changes. 
          HTML, CSS, and JavaScript are used to structure and style the 
          website while adding interactivity and functionality. Additionally, 
          implementing search engine optimization techniques helps ensure that 
          the website is easily discoverable by search engines. Overall, React 
          and Vite allow for efficient web development and a seamless browsing 
          experience for users.
        </p>
      </div>

      {/* ❌  guarantees */}
      <div>
        <h3>GUARANTEES</h3>
        <ol>
          <li>Timely Delivery Guarantee:<br/> 
            Ensure that the project will be completed within the 
            agreed-upon timeframe, and offer compensation or discounts 
            if there are any delays.
          </li>
          <br/>
          <li>Quality Assurance Guarantee: <br/>
            Ensure that the final product will be of high quality and 
            free of errors. Offer to fix any issues that arise within 
            a certain period after delivery.
          </li>
          <br/>
          <li>Communication Guarantee: <br/>
            Commit to clear and timely communication throughout the project, 
            offering regular updates and being responsive to client inquiries.
          </li>
          <br/>
          <li>Privacy Guarantee: <br/>
            Assure clients that their personal and business 
            information will be kept confidential and secure.
          </li>
        </ol>
      </div>

      {/* ❌  social proof */}
      {/* ❌  blog or resources */}


      {/* ❌  availability for follow up work (and why you should care) */}
        <div>
          <h3>AVAILABILITY FOR FOLLOW UP WORK</h3>
          <p>
            As a client, you may consider rehiring me in the future because 
            I prioritize delivering high-quality work that meets your specific 
            needs and exceeds your expectations. I strive to maintain open and 
            effective communication throughout the project to ensure your 
            satisfaction. Additionally, I stay up-to-date with industry trends 
            and continuously improve my skills to provide you with the best 
            possible service. With a proven track record of success and a 
            dedication to your satisfaction, I am confident that I can meet 
            your needs and earn your trust for future projects.
          </p>
          <p>
            In addition to providing high-quality work, I also prioritize 
            optimizing your website for search engines. By implementing 
            effective SEO strategies, your website can reach a wider audience 
            and attract more potential customers. I stay up-to-date with the 
            latest SEO techniques and best practices to ensure that your website 
            is not only visually appealing, but also ranks well in search engine 
            results. With my expertise in both web design and SEO, I can provide 
            a comprehensive solution to help your business succeed online.
          </p>
        </div>

      {/* ❌  personalization */}
      <div>
        <h3>PERSONALIZATION</h3>
        <p>
          Unlike many web designers who use pre-made templates or themes, 
          my websites are custom-built from scratch to meet your specific 
          needs and goals. This approach not only ensures that your website 
          stands out from the crowd with a unique and personalized design, 
          but also allows for greater flexibility in terms of functionality 
          and features. With a custom-built website, you can have full control 
          over the design and layout, as well as the ability to easily make 
          updates and changes in the future. Additionally, a custom-built website 
          can better reflect your brand identity and effectively communicate your 
          message to your target audience. So, if you want a website that truly 
          represents your business and sets you apart from the competition, 
          consider a custom-built website by me.
        </p>
      </div>

      {/* ❌  portfolio */}
    </div>
  )
}


export default Home
