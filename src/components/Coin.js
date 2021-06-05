import React from "react";

const Coin = ({ name, image, symbol, price }) => {
  console.log("Name:", name);
  return (
    <tr>
      <td>
        <img src={image} alt={name} />
      </td>
      <td>
          <h3>{name}</h3>
          <small>{symbol.toUpperCase()}</small>
      </td>
      <td>
          {price}
      </td>
    </tr>
  );
};

export default Coin;
