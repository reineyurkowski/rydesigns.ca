import './home.css'
import './home2.css'
import { useState, useEffect, useRef } from 'react';
import React from 'react';

//assets
import assets from './assets/assetIndex'

function Home2() {
  function SectionImage(
    src:any, alt:string, id:string, side:string,
    title:string,
    paragraph:string
  ){
    return(
      <div id='imageSectionContainer' style={
        side == 'left' 
        ? {
          display: 'flex', 
          flexDirection: 'row-reverse',
          paddingRight: '3rem',
          paddingBottom: '3rem'
        } 
        : {
          display: 'flex', 
          flexDirection: 'row',
          paddingLeft: '4rem',
          paddingBottom: '3rem'
        }
      }>
        <style>
          {`@media only screen and (max-width: 600px) {
            #imageSectionContainer {
              flex-direction: column;
            }
            #imageSectionContainer div:first-child {
              order: 2;
            }
            #imageSectionContainer div:last-child {
              order: 1;
            }
          }`}
        </style>
        <div style={{order: side === 'right' ? 2 : 1}}>
          <h3 id={title} className=''>{title}</h3>
          <p>
          {paragraph.split(/<br\s*\/?>/gi).map((line, index) => (
            <React.Fragment key={index}>
              {line}
              {index !== paragraph.length - 1 && <br />}
            </React.Fragment>
          ))}
          </p>
        </div>
        <div style={{order: side === 'left' ? 1 : 2}}>
          <img style={
              side == 'left' 
              ? {
                aspectRatio: 'fixed',
                borderRadius: '0% 50vh 50vh 0%', 
                marginRight: '3rem',
                maxWidth: '50vw',
                left: '0px'
              }
              : {
                aspectRatio: 'fixed',
                borderRadius: '50vh 0% 0% 50vh', 
                marginLeft: '3rem',
                maxWidth: '50vw',
                right: '0px'
              } 
            }
            src={src}
            alt={alt}
            id={id}
            className=''
          />
        </div>
      </div>
    );  
  }

  // function TypingEffect() {
  //   console.log('typing effect called')
  //   const [string, setString] = useState('hello');
  
  //   let typingState = "removing";
  //   function TextEffect() {
  //     if (typingState == 'removing') {
  //       function removeLastLetter() {
  //         setString(string.slice(0, -1));
  //       }
  //     }

  //     if (typingState == 'adding') {
  //       function addLastLetter() {
  //         setString(string + 'h');
  //       }
  //     }
      
  //     return(
  //       <div>test</div>
  //     )
  //   }
  //   return (
  //     <div>{window.onload = () => setInterval(TextEffect, 300)}</div>
  //   )
  // }
  
  
  // end of functions
  return (
    <div id="home2Container">
      <div id='titleWholeContainer'>
        <div>
          <div id='titleContainer'>
            <h1 className='title'>
              Good Designs Can:
            </h1>
            <h2 className='title' id='swapSection'>
              <span id='swapText'>
                Set Things In Motion ➡️
              </span>
            </h2>
            <img 
              id='encouragementToScroll'
              src={assets.ryAnimationGif}
              alt="ry logo there the y's tale extends into a down arrow encouraging the user to scroll."
              style={{zIndex: 1000}}
            />
          </div>
        </div>
          
        {/* <h1 id='titleShadow'>
          Design Can Set Things In Motion
        </h1> */}
        <div id="titleImageContainer">
          <div id="titleImage">
            <img 
              id='titleImageFlair'
              src={assets.roundedSquare}
              alt="rounded squares rotating clockwise"
            />
            <img 
              id='titleImageFlair'
              src={assets.roundedSquare}
              alt="rounded squares rotating clockwise"
            />
            <img 
              id='titleImageFlair'
              src={assets.roundedSquare}
              alt="rounded squares rotating clockwise"
              style={{overflow:'hidden'}}
            />
          </div>
        </div>
      </div>

      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>

      {/* <div id='testDiv'>
        <TypingEffect />
      </div> */}

      <div className='container'>
        {SectionImage(
          `${assets.boogieBoard}`,
          'small child on a boogie board taken by Reine Yurkowski in tofino bc canada',
          'id',
          'left',
          'FOCUS ON WHAT MATTERS',
          `As a web developer, photographer, and artist, I've always had a passion for creating beautiful, eye-catching designs that truly capture the essence of a person or business. 
          <br/>
          <br/>
          My story is one of dedication, hard work, and a deep love for what I do. I believe that every project I take on is an opportunity to showcase my skills and bring something truly unique to the table.`
        )}
      </div>
      <div className='container'>
        {SectionImage(
          //external image
          'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80',
          'picture of some sushi from unsplash from Derek Duran',
          'id',
          'right',
          'FOCUS ON YOUR SERVICE',
          `When it comes to web development, I understand that every business has its own unique needs and requirements. 
          <br/>
          <br/>
          That's why I work closely with each client to create a website that is tailored to their specific goals and objectives. 
          <br/>
          <br/>
          Whether you're looking for a simple, informative site or a more complex store-front, I have the skills and experience to get the job done right.`
        )}
      </div>

      <div className='container'>
        {SectionImage(
          `${assets.camera}`,
          'a picture of a canon camera pointed at a female surfer in the distance',
          'id',
          'left',
          `LET'S CAPTURE YOU`,
          `As a previous professional photographer, I specialize in capturing the essence of my subjects in a way that truly brings out their personality and style. 
          <br/>
          <br/>
          Whether you're looking for stunning headshots, beautiful family portraits, or eye-catching product photography, I can help you create the perfect image that truly captures who you are.`
        )}
      </div>
      <div className='container'>
        {SectionImage(
          `${assets.skull}`,
          'a hand drawn fox skull with various fauna growing out of it by Reine Yurkowski',
          'id',
          'right',
          `LET'S MAKE IT POP`,
          `As an artist, I have a passion for creating vibrant, eye-catching designs that really stand out. 
          <br/>
          <br/>
          Whether you're looking for a custom logo or branding package, or you need help designing eye-catching marketing materials, I have the creativity and expertise to help you make your vision a reality. 
          <br/>
          <br/>
          Let's work together to make your brand truly stand out from the crowd.`
        )}
      </div>

      <div className='container'>
        {SectionImage(
          //external image
          'https://images.unsplash.com/photo-1643930825365-af2452a0acc5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80',
          'handicapped sign on a wood post by Jakub Pabis',
          'id',
          'left',
          `REACH A WIDER AUDIENCE`,
          `Accessibility is a crucial aspect of web development that is often overlooked. 
          <br/>
          <br/>
          As a web developer, I believe that it's my responsibility to ensure that every website I create is accessible to all users, regardless of their abilities. 
          <br/>
          <br/>
          This means ensuring that the website is easy to navigate, the content is readable, and the design is inclusive of all users, including those with visual, auditory, or motor impairments.`
        )}
      </div>
      <div className='container'>
        {SectionImage(
          //external image
          'https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y29kZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60',
          'photo of code on a screen by Markus Spiske',
          'id',
          'right',
          `MODERN IN THE RIGHT WAY`,
          `In my work as a web developer, I make use of modern web standards like HTML5, CSS3, JS, and React to create websites that are visually stunning, functional, and easy to use. 
          <br/>
          <br/>
          This allows for cleaner, more sophisticated styling, with animations, and dynamic interactive functionality on web pages. `
        )}
      </div>

      <div className='container'>
        <div id='imageSectionContainer' style={
          'left' == 'left' 
          ? {
            justifyContent: 'space-between', 
            display: 'flex', 
            flexDirection: 'row-reverse',
            paddingRight: '2rem'
          } 
          : {
            justifyContent: 'space-between', 
            display: 'flex', 
            flexDirection: 'row',
            paddingLeft: '2rem'
          }
          
        }>
          <style>
            {`@media only screen and (max-width: 600px) {
              #imageSectionContainer {
                flex-direction: column;
              }
              #imageSectionContainer div:first-child {
                order: 2;
              }
              #imageSectionContainer div:last-child {
                order: 1;
              }
            }`}
          </style>
          <div className='interested'>
            <h3 id={''} className=''>INTERESTED? LET'S CHAT</h3>
            <h4>phone:</h4>
            <br/>
            <p>
              <a href='tel:+1-(250)-216-2556'>
                +1·(250)·216·2556
              </a>
            </p>
              <br/>
              <br/>
              <br/>
              <h4>email:</h4>
              <br/>
              <a href='mailto:reineyurkowski@gmail.com'>
                reineyurkowski@gmail.com
              </a>
          </div>
          <div>
            <img style={{
              borderRadius: '0% 50vh 50vh 0%',
              left: '0px'
            }}
              src={assets.ry}
              alt={'picture of reine yurkowski'}
              id={'id'}
              className=''
            />
          </div>
        </div>
      </div>

      <div className='ctaSection'>
          <h3>Want To Learn More About Me?</h3>
          <a href='about'>
            <div id='textButton'> 
              About Me
            </div>
          </a>
      </div>
    </div>
  )
}

export default Home2;