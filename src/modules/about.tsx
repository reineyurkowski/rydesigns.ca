import React from "react";

import assets from "../assets/assetIndex";

import './style.css'
import './home2.css'
import './about.css'

function About() {
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

  return (
    <div id="about">
      <h1>ABOUT</h1>
      {SectionImage(
          `${assets.rySkiJump}`,
          'a photo of reine yurkowski at mt.washington in bc doing a large jump doing a grab called the "illegal grab". photo taken by andrew minder around 2017',
          'id',
          'right',
          `MY STORY`,
          `I was born and raised in British Columbia, Canada, and from a young age, I developed a deep love for art. 
          <br/>
          <br/>
          During my primary education, I was recognized for my talent a being nominated and winning many awards for my artwork. It was there that I discovered my passion for visual media. 
          <br/>
          <br/>
          As I got older, I became interested in web and graphic design. leading me to attend the College of New Caledonia (CNC) to study these fields and develop a high standard for my work. 
          <br/>
          <br/>
          Today, I approach every project with a desire to create something unique and stunning, while also striving to learn and improve my skills. 
          <br/>
          <br/>
          My passion for this field has never wavered. I am excited to continue exploring new ideas and pushing the boundaries of what's possible with visual art.`
        )}
        {SectionImage(
          `${assets.abstractFox}`,
          'an illustration of an abstract fox created by Reine Yurkowski',
          'id',
          'left',
          `MY PASSIONS`,
          `I have always been passionate about all forms of art and design, and this passion has led me down many exciting paths over the years. In 2019, I owned a company called "Tofino Action Photography," which allowed me to combine my love of photography. 
          <br/>
          <br/>
          Since then, I have been doing freelance commission work for over three years and have no intention of stopping anytime soon. 
          <br/>
          <br/>
          Throughout my career, I have honed my craft using a variety of tools and technologies, both 2D and 3D. From the latest software and digital tools to more traditional mediums like paint and pencils, I am always pushing the boundaries of what's possible and exploring new ways to bring my creative vision to life. 
          <br/>
          <br/>
          Whether I am working on a website, photographing a breathtaking landscape, or creating a stunning piece of art, I approach every project with the same level of passion and dedication to my craft.`
        )}
        {SectionImage(
          `https://images.unsplash.com/photo-1523998956902-6d4f549de43d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2048&q=80`,
          'a pink and white handicapped sigh pointing to a "step free" route. by: https://unsplash.com/@yomex4life',
          'id',
          'right',
          `MY PHILOSOPHY`,
          `My philosophy is rooted in the belief that art should be humane, expressive, and inclusive. For me, this means creating work that is not only visually stunning but also deeply meaningful and relatable to the audience. 
          <br/>
          <br/>
          I believe that the best art is that which expresses the subject as much as possible, whether it be a website, a photograph, or a piece of art. By truly understanding and empathizing with the subject, I am able to create work that truly resonates with people and brings their vision to life. 
          <br/>
          <br/>
          In addition to this, I am also committed to making my work as inclusive as possible, ensuring that everyone is represented and celebrated in my art. 
          <br/>
          <br/>
          What sets me apart is my passion and my determination to find a solution that works. Whether it's a difficult technical challenge or a creative roadblock, I am committed to pushing through and finding a solution that meets the needs of my clients while also creating work that is inspiring, impactful, and unforgettable.`
        )}
      {/* let's chat */}
      <div>
        <div id='imageSectionContainer' style={
          'left' == 'left' 
          ? {
            justifyContent: 'space-between', 
            display: 'flex', 
            flexDirection: 'row-reverse',
            paddingRight: '2rem',
            textAlign: 'left',
          } 
          : {
            justifyContent: 'space-between', 
            display: 'flex', 
            flexDirection: 'row',
            paddingLeft: '2rem',
            textAlign: 'left',
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
          <div>
            <h3 id={''} className=''>INTERESTED? LET'S CHAT</h3>
            <h4>phone:</h4>
            <p>
              <a href='tel:+1-(250)-216-2556'>
                +1·(250)·216·2556
              </a>
            </p>
              <br/>
              <br/>
              <br/>
              <h4>email:</h4>
              <a href='mailto:reineyurkowski@gmail.com'>
                reineyurkowski@gmail.com
              </a>
          </div>
          {/* the Image of this container */}
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
    </div>
  )
}

export default About;