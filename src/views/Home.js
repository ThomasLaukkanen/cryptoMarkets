import illu from '../assets/illu.svg'
import './Home.css'
function Home() {
  return (
    <div>
      <h1>Welcome to CryptoMarkets </h1>

      <p>The number one place for market info</p>
      <img className="frontImage" src={illu} alt="illustration" />
    </div>
  )
}

export default Home
