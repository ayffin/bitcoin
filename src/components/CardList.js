import React from "react";
import Card from "./Card";

const CardList = ({coinlist}) => {
  return(
    <div >
      {
        coinlist.map((user,i) =>{
          return (
            <Card
              key = {i}
              name= {coinlist[i].name}
              symbol= {coinlist[i].symbol}
              rank= {coinlist[i].rank}
              price_usd= {coinlist[i].price_usd}
              percent_change_1h= {coinlist[i].percent_change_1h}

            />
          )
        })
      }
    </div>

)}
export default CardList;
