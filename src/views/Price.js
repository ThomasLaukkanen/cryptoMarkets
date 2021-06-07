import { useState, useEffect } from 'react'
import './Price.css'
import { Link } from 'react-router-dom'
function Price() {
  useEffect(() => {
    fetchItems()
  }, [])

  const [items, setItems] = useState([])

  const fetchItems = async () => {
    const data = await fetch(
      'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'
    )
    const items = await data.json()
    console.log(items)
    setItems(items)
  }
  function checkString(input) {
    return input.toString()[0] !== '-' ? 'green' : 'red'
  }

  return (
    <div className="priceWrapper">
      <h1>Current Prices</h1>
      <div className="containerPrices">
        {items.map((item, index) => (
          <section key={index} className="listItem">
            <img className="tokenImg" src={item.image} alt={item.id} />
            <Link to={`/price/${item.id}`}>
              {' '}
              <h3 className="itemId">{item.id}</h3>
            </Link>
            <p>
              Price:{' '}
              <span className={item.current_price > item.ath ? 'green' : 'red'}>
                <strong> {item.current_price} $ </strong>
              </span>
            </p>
            <p>
              Ath: <strong>{item.ath} $ </strong>
            </p>
            <p>
              Change from Ath{' '}
              <span className={checkString(item.ath_change_percentage)}>
                <strong>{item.ath_change_percentage} % </strong>
              </span>
            </p>
            <p>
              Price change 24h:{' '}
              <span className={checkString(item.price_change_percentage_24h)}>
                {item.price_change_percentage_24h}
              </span>
            </p>
          </section>
        ))}
      </div>
    </div>
  )
}

export default Price
