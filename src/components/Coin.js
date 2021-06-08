import React from "react";

const Coin = ({ name, image, symbol, price,market_cap,total_volume,price_change_24h }) => {
  console.log("Name:", name);
  return (
    <tr className="text-center mx-auto">
      <td>
        <img src={image} alt={name} />
      </td>
      <td>
          <h3>{name}</h3>
          <small>{symbol.toUpperCase()}</small>
      </td>
      <td>
          ${price}
      </td>
      <td>
          ${total_volume.toLocaleString()}
      </td>
      <td>
          {price_change_24h.toFixed(2)}%
      </td>
      <td>
          ${market_cap.toLocaleString()}
      </td>
    </tr>
  );
};

export default Coin;
