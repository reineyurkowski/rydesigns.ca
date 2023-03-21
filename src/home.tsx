import './home.css'

function Home() {
  return (
    <div>
      <h1 id='title'>
        Good Designs <br/> Can Set Things In Motion
      </h1>
      {/* <h1 id='titleShadow'>
        Design Can Set Things In Motion
      </h1> */}
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
    
  )
}

export default Home