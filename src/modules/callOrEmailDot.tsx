import assets from '../assets/assetIndex';
import './callOrEmailDot.css'

function CallOrEmailDot() {

  return (
    <a href='mailto:reineyurkowski@gmail.com'>
      <div id='callOrEmailDot'>
        <br/>
        <img
          id=''
          className=''
          src={assets.mailIcon}
          alt='mail icon. click to email'
        />
      </div>
    </a>
  )
}

export default CallOrEmailDot;