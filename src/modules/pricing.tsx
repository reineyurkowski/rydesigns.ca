import React from "react";

import assets from "../assets/assetIndex";

import '../style.css'

function Pricing() {

  return(
    <div id="pricing"> 
      <h2>WEBPAGES (wp):</h2>
      <p>
        these are starting prices, depending on size and other factors price may go up.
        all prices include optimization for accessibility and SEO
      </p>

      <h3>NOTE:</h3>
            <p> 
              depending on what you wish to do, 
              you may be eligible for a discount. 
              <br/>
              IE 2d and 3d animation will be one finale price of
              40$/hr instead of $40/hr + $30/hr. 
              <br/>
              Depending on other details more discounts may be 
              applied.
              <br/>
              so please treat this page as if you were to hire us 
              to be doing one of these tasks at any one time.
            </p> 

      <div className="tableContainer">
        <table>
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Description</th>
              <th>Starting Price (in CAD)</th>
              <th>Technologies / Equipment </th>
            </tr>
          </thead>
          <tbody>
            <tr className="tableSeparator">
              <td>
                <b>WEBPAGES</b>
              </td>
            </tr>
            <tr>
              <td>First Webpage (Non-Reactive)</td>
              <td>First WP with no reactiveness</td>
              <td>$300</td>
              <td>HTML+CSS</td>
            </tr>
            <tr>
              <td>Other Webpages (Non-Reactive)</td>
              <td>Every WP after the first with no reactiveness</td>
              <td>$150</td>
              <td>HTML+CSS</td>
            </tr>
            <tr>
              <td>First Webpage (Reactive)</td>
              <td>First WP with relativeness (ie, mobile and desktop optimized)</td>
              <td>$500</td>
              <td>HTML+CSS+JS/React</td>
            </tr>
            <tr>
              <td>Other Webpages (Reactive)</td>
              <td>Every WP after the first reactiveness:</td>
              <td>$250</td>
              <td>HTML+CSS+JS/React</td>
            </tr>
            </tbody>
        </table>

        <table>
          {/* <thead>
            <tr>
              <th>Product Name</th>
              <th>Description</th>
              <th>Starting Price (in CAD)</th>
              <th>Technologies / Equipment </th>
            </tr>
          </thead> */}
          <tbody>
            <tr className="tableSeparator">
              <td>
                <b>WEB-BASED APPLICATIONS</b>
              </td>
            </tr>
            <tr>
              <td>Web Applications (on or offline)</td>
              <td>Forums, digital system management, etc.</td>
              <td>hard to estimate without more details, contact for more.</td>
              <td>HTML+CSS+JS/React</td>
            </tr>
            </tbody>
        </table>
        
        <table>
          {/* <thead>
            <tr>
              <th>Product Name</th>
              <th>Description</th>
              <th>Starting Price (in CAD)</th>
              <th>Technologies / Equipment </th>
            </tr>
          </thead> */}
          <tbody>
            <tr className="tableSeparator">
              <td>
                <b>3D ELEMENTS</b>
              </td>
            </tr>
            <tr>
              <td>3D Interactive Experiences with No/Some Existing Assets:</td>
              <td>A 3D experience or application with no existing assets yet</td>
              <td>+$400 to webpage price</td>
              <td>html+css+js/react+WebGL</td>
            </tr>
            <tr>
              <td>3D Interactive Experiences with Most/All Existing Assets:</td>
              <td>A 3D experience or application with at least 80% of the assets</td>
              <td>+$200 to webpage price</td>
              <td>html+css+js/react+WebGL</td>
            </tr>
            </tbody>
        </table>
        
        <table>
          {/* <thead>
            <tr>
              <th>Product Name</th>
              <th>Description</th>
              <th>Starting Price (in CAD)</th>
              <th>Technologies / Equipment </th>
            </tr>
          </thead> */}
          <tbody>
            <tr className="tableSeparator">
              <td>
                <b>PHOTOGRAPHY AND IMAGE EDITING</b>
              </td>
            </tr>
            <tr>
              <td>Photography</td>
              <td>Photo shoot, session includes equipment needed. 
                3 light edits/hour included. 
                (light edits being edits such as: color adjustments)
              </td>
              <td> 40$/hr</td>
              <td>Camera and photography light</td>
            </tr>
            <tr>
              <td>Photo Edits</td>
              <td>Large edits to photos such as photo bashing and other work.</td>
              <td>$30/edit</td>
              <td>various software</td>
            </tr>
            </tbody>
        </table>

        <table>
          {/* <thead>
            <tr>
              <th>Product Name</th>
              <th>Description</th>
              <th>Starting Price (in CAD)</th>
              <th>Technologies / Equipment </th>
            </tr>
          </thead> */}
          <tbody>
            <tr className="tableSeparator">
              <td>
                <b>HARDWARE CONSOLATION AND SETUP</b>
              </td>
            </tr>
            <tr>
              <td>Offline Local Recoverable Storage</td>
              <td>
                
              </td>
              <td> 40$/hr</td>
              <td>Camera and photography light</td>
            </tr>
            <tr>
              <td>Photo Edits</td>
              <td>Large edits to photos such as photo bashing and other work.</td>
              <td>$30/edit</td>
              <td>various software</td>
            </tr>
            </tbody>
        </table>
        
        <table>
          {/* <thead>
            <tr>
              <th>Product Name</th>
              <th>Description</th>
              <th>Starting Price (in CAD)</th>
              <th>Technologies / Equipment </th>
            </tr>
          </thead> */}
          <tbody>
            <tr className="tableSeparator">
              <td>
                <b>DESIGN WORK</b>
              </td>
            </tr>
            <tr>
              <td>Brand Identity</td>
              <td>establish: logo, colors, fonts and font-properties, tonality, and other important assets for your company</td>
              <td>$300</td>
              <td>various software</td>
            </tr>
            <tr>
              <td>Redo Assets</td>
              <td>if assets are not of high enough quality (ie, logo in a 64x64px image) they will need to be redone. you will be provided these new assets for future projects.</td>
              <td>$50/asset</td>
              <td>various software</td>
            </tr>
            <tr>
              <td>Illustrations</td>
              <td>high resolution artwork to be used for various reasons. can be raster or vector </td>
              <td>$80</td>
              <td>various software</td>
            </tr>
            </tbody>
        </table>
        
        <table>
          {/* <thead>
            <tr>
              <th>Product Name</th>
              <th>Description</th>
              <th>Starting Price (in CAD)</th>
              <th>Technologies / Equipment </th>
            </tr>
          </thead> */}
          <tbody>
            <tr className="tableSeparator">
              <td>
                <b>OTHER OFFERINGS</b>
              </td>
            </tr>
            <tr>
              <td>Videography</td>
              <td>Filming for various reason, such as but not limited too: adverts, infomercials, tutorials, and other video content</td>
              <td>$40/hr</td>
              <td>DSLR camera and or action camera with upto 2 formats of recording if needed</td>
            </tr>
            <tr>
              <td>Video Editing</td>
              <td>Editing the content to reflect the needs of the project.</td>
              <td>$40/hr</td>
              <td>various software</td>
            </tr>
            <tr>
              <td>Motion Graphics</td>
              <td>Visual Graphics for Whatever Might Be Needed</td>
              <td>$40/hr</td>
              <td>various software</td>
            </tr>
            <tr>
              <td>2D Animations</td>
              <td>2D animation to give you some flair</td>
              <td>$30/hr</td>
              <td>various hardware and software</td>
            </tr>
            <tr>
              <td>3D Animations (assets already existing)</td>
              <td>3D animation to give you some flair, and unique personality</td>
              <td>$40/hr</td>
              <td>various hardware and software</td>
            </tr>
            <tr>
              <td>Remote Audio Recording</td>
              <td>Need remote recording that's high quality? We can bring everything you might need. We worry about the tech, you worry about your performance.</td>
              <td>$40/hr</td>
              <td>various hardware and software</td>
            </tr>
            {/* 
            CATEGORY
            <tr>
              <td>
                <b>CATEGORY</b>
              </td>
            </tr> 
            */}
            {/* 
            ROW DATA
            <tr>
              <td>Name</td>
              <td>description</td>
              <td>$300</td>
              <td>Software/tools/languages</td>
            </tr> 
            */}
          </tbody>
        </table>
        <div>
          <h3>REMINDER:</h3>
          <p> 
            Depending on what you wish to do, 
            you may be eligible for a discount. 
            <br/>
            IE, "Remote Audio Recording" + "Videography"
            is eligible for a discount. down to $60/hr
            instead of $40/hr + $40/hr depending on conditions.
          </p> 
        </div>
        <div>
          <h3>JUSTIFYING THE COST:</h3>
          <p> 
            Some of you might consider the cost to be expensive
            for what some of it is, and that's totally understandable!
            <br/>
            The reason we charge such is for the following reasons:
          </p> 
            <ul>
            <li> Quality <br/>
                At our company, we prioritize quality and offer several benefits and assurances to ensure a top-notch experience. 
                With our personal storage and cloud storage system allows you access to your files for up to three months after the project is complete. 
                We also ensure that our products are accessible to the majority of users, making sure those who need screen readers, have issues with screen
                readers, or other such disabilities have a chance to access your site.
            </li>
            <li> Everything Needed Is Covered* <br/>
                We have a comprehensive approach to our projects and cover everything needed to ensure your satisfaction. 
                From initial concept to final product, we ensure that all bases are covered.
                <br/>
                NOTICE: please note, this does not include any hosting fees or anything of that manner. but is in relation to the product itself.
            </li>
            <li> Redundancy <br/>
                We understand the importance of redundancy in systems and processes. 
                That's why we take measures to ensure that our projects and products are backed up and redundant to minimize the risk of failure,
                and build our projects in a way that allow for easy scalability.
            </li>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Pricing;