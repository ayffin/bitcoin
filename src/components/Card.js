import React from "react";

const Card = ({name,symbol,rank,price_usd,percent_change_1h}) => {
  return(
    <div className = "dib ma2 br3 pa3 tc grow pa2 bg-light-yellow shadow-3 hover-bg-dark-green pa2">
      <h3>{name}</h3>
      <p>{symbol}</p>
      <p>{rank}</p>
      <p >
          {new Intl.NumberFormat('en-GB', {
              style: 'currency',
              currency: 'usd'
          }).format(price_usd)}
      </p>
      <p>{percent_change_1h}</p>
    </div>
  )
}
export default Card;
