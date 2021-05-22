import { useState, useEffect } from 'react'
import './Price.css'
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

  return (
    <div className="priceWrapper">
      <h1>Current Prices</h1>
      <div className="containerPrices">
        {items.map((item, index) => (
          <section key={index} className="listItem">
            <img className="tokenImg" src={item.image} alt={item.id} />
            <h3>{item.id}</h3>
            <p>
              Price: <strong> {item.current_price} $ </strong>
            </p>
            <p>
              Ath: <strong>{item.ath} $ </strong>
            </p>
            <p>
              Change from Ath <strong>{item.ath_change_percentage} % </strong>
            </p>
          </section>
        ))}
      </div>
    </div>
  )
}

export default Price
