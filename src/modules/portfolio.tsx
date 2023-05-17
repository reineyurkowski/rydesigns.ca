import '../style.css'

import FizzBuzz from './portfilioFizzBuzz';
import ThreeScene from './ThreeJsExample';

import { useState, useEffect, useRef } from "react";

//images
import assets from '../assets/assetIndex';

function Img(src:any, alt:any) {
  return (
    <div>
      <img
        src={src}
        alt={alt}
      />
    </div>
  )
}

function Portfolio() {

  return (
    <div id='portfolio'>
      <h1>Portfolio</h1>
      <br/>
      <h2>Visual Medias</h2>
      <div>
        <div>
          <h4>Business Cards</h4>
          <div id="businessCardsDisplay">
            {Img(
              'https://cdna.artstation.com/p/assets/images/images/062/338/076/large/reine-yurkowski-screenshot-2023-04-30-at-7-44-59-pm.jpg?1682909116' ,
              'businessCards'
            )}
            {Img(
              'https://cdna.artstation.com/p/assets/images/images/062/337/420/large/reine-yurkowski-screenshot-2023-04-30-at-7-10-47-pm.jpg?1682907107',
              'businessCards'
            )}
            {Img(
              'https://cdnb.artstation.com/p/assets/images/images/062/337/421/large/reine-yurkowski-screenshot-2023-04-30-at-7-11-30-pm.jpg?1682907115',
              'businessCards'
            )}
            {Img(
              'https://cdnb.artstation.com/p/assets/images/images/062/193/171/large/reine-yurkowski-artboard1.jpg?1682555994',
              'businessCards'
            )}
            {Img(
              'https://cdnb.artstation.com/p/assets/images/images/062/193/175/large/reine-yurkowski-artboard2.jpg?168255600',
              'businessCards'
            )}
          </div>
          <a
            href='https://www.artstation.com/artwork/n04PdK'
          > complete project overview here</a>
          <br/><br/>
        </div>

        <div>
          <h4>Website Designs</h4>
          <div id="businessCardsDisplay">
            {Img(
              'https://cdna.artstation.com/p/assets/images/images/062/065/792/large/reine-yurkowski-small-business.jpg?1682284468',
              'Website Design'
            )}
            {Img(
              'https://cdna.artstation.com/p/assets/images/images/062/065/782/large/reine-yurkowski-artboard1.jpg?1682284450',
              'Website Design'
            )}
            {Img(
              'https://cdnb.artstation.com/p/assets/images/images/062/065/783/large/reine-yurkowski-forum-example.jpg?1682284456',
              'Website Design'
            )}
            {Img(
              'https://cdnb.artstation.com/p/assets/images/images/062/065/789/large/reine-yurkowski-indie-grunge.jpg?1682284462',
              'Website Design'
            )}
            
          </div>
          <a
            href='https://reineyurkowski.wordpress.com/'
          > check out a wordpress site here</a>
          <br/><br/>
        </div>

        <div>
          <h4>Posters And Covers</h4>
          <div id="businessCardsDisplay">
            {Img(
              'https://cdnb.artstation.com/p/assets/images/images/062/948/895/large/reine-yurkowski-adventureiscalling.jpg?1684332989',
              'Posters And Covers'
            )}
            {Img(
              'https://cdnb.artstation.com/p/assets/images/images/062/948/917/large/reine-yurkowski-preform.jpg?1684333022',
              'Posters And Covers'
            )}
            {Img(
              'https://cdnb.artstation.com/p/assets/images/images/062/948/917/large/reine-yurkowski-preform.jpg?1684333022',
              'Posters And Covers'
            )}          
          </div>
          <br/><br/>
        </div>

        <div>
          <h4>Custom Fonts</h4>
          <div id="businessCardsDisplay">
            {Img(
              'https://cdna.artstation.com/p/assets/images/images/062/066/870/large/reine-yurkowski-screenshot-2023-04-23-at-2-58-53-pm.jpg?1682287153',
              'Custom Font'
            )}       
            {Img(
              'https://cdna.artstation.com/p/assets/images/images/062/067/046/large/reine-yurkowski-screenshot-2023-04-23-at-3-07-40-pm.jpg?1682287672',
              'Custom Font'
            )}       
            {Img(
              'https://cdnb.artstation.com/p/assets/images/images/062/067/049/large/reine-yurkowski-screenshot-2023-04-23-at-2-58-26-pm.jpg?1682287680',
              'Custom Font'
            )}       
            {/* {Img(
              '',
              ''
            )}        */}
          </div>
          <br/><br/>
        </div>
      </div>

      <div style={{marginLeft:'5rem'}}>
        <h2>Interactive Coding</h2> 
        <div>
          <FizzBuzz />
        </div>
      </div>
      
      <div>
        <h2>3d Elements Aswell</h2> 
        <div>
          <ThreeScene />
        </div>
      </div>
    </div>
  )
}

export default Portfolio;