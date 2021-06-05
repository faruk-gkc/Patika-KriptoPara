import React, { useState, useEffect } from "react";
import axios from "axios";
import { BeatLoader } from "react-spinners";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState(true);

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
      .then((res) => {
        setCoins(res.data);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  console.log(coins);
  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div className="container">
      <h3 className="text-center">Kripto Para</h3>
      <div className="text-center">
        {isLoading ? (
          <BeatLoader color="blue" />
        ) : (
          <>
            <table className="table mx-auto">
              <thead>
                <tr>
                  <td className="p-4">Image</td>
                  <td className="p-4">Name</td>
                  <td className="p-4">Price</td>
                  <td className="p-4">24H % Change</td>
                </tr>
              </thead>
              <tbody>
                {
                  filteredCoins.map((coin)=>{
                    return(
                      <Coin key={coin.id}
                      name= {coin.name}
                      image={coin.image}
                      symbol={coin.symbol}
                      price={coin.current_price}
                      />
                    )
                  })
                }
              </tbody>
            </table>
          </>
        )}
      </div>
    </div>
  );
};

export default App;
