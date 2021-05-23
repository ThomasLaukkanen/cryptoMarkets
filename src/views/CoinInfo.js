import React, { useState, useEffect } from 'react'
import loader from '../assets/loader.gif'
import './CoinInfo.css'

function CoinInfo({ match }) {
  useEffect(() => {
    fetchItem()
  }, [])

  const [item, setItem] = useState([])
  const fetchItem = async () => {
    const data = await fetch(
      `https://api.coingecko.com/api/v3/coins/${match.params.id}?sparkline=true"`
    )
    const item = await data.json()
    setItem(item)
    console.log('new', item)
  }

  function createMarkup() {
    if (item.description) {
      return { __html: item.description['en'] }
    } else {
      return { __html: `<img src='${loader}'/>` }
    }
  }

  return (
    <div className="coinWrapper">
      {item ? (
        <article className="coinInfo">
          <h1>{item.name}</h1>
          <small>{item.genesis_date}</small>
          {/* <img src={item.image.large} alt={item.name} /> */}
          {item.description ? (
            <p dangerouslySetInnerHTML={createMarkup()} />
          ) : (
            <p>No info about this currency</p>
          )}
        </article>
      ) : (
        <p>Loading</p>
      )}
    </div>
  )
}

export default CoinInfo
