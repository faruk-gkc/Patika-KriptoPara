import React, { useState, useEffect } from "react";
import axios from "axios";
import { BeatLoader } from "react-spinners";
import Coin from "./components/Coin";
import './components/App.css' 

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState(true);
  const [theme, setTheme] = useState(false);

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
  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredCoins = coins.filter((coin) =>
  coin.name.toLowerCase().includes(search.toString().toLowerCase())
);

const handleDarkMode = () => {
  const body = document.querySelector("body");
  theme ? body.classList.remove("bg-dark") : body.classList.add("bg-dark");
  setTheme(!theme);
};

  return (
    <div className={ (theme) ? 'container text-white' : 'container'} >
      <h3 className="text-center display-4 mb-3">Kripto Para Uygulaması</h3>
      <hr />
      <form className="text-center mb-3">
        <input type="text" placeholder="Search.." onChange={handleChange} />
      </form>
      <div className="DarkMode" >
      <label className="switch" onChange={handleDarkMode} >
        <input type="checkbox" defaultChecked={theme === 'dark' ? true : false} />
        <span className="slider round" ></span>
      </label>
    </div>
      <div className="text-center ">
        {isLoading ? (
          <BeatLoader color="blue" />
        ) : (
          <>
            <table className={ (theme) ? 'table table-dark mx-auto' : 'table mx-auto'}>
              <thead>
                <tr className>
                  <td className="p-2">Image</td>
                  <td className="p-2">Name</td>
                  <td className="p-2">Price</td>
                  <td className="p-2">24H Volume</td>
                  <td className="p-2">24H % Change</td>
                  <td className="p-2">Market Cap</td>
                </tr>
              </thead>
              <tbody>
                {
                filteredCoins.map((coin) => {
                  return (
                    <Coin
                      key={coin.id}
                      name={coin.name}
                      image={coin.image}
                      symbol={coin.symbol}
                      price={coin.current_price}
                      market_cap={coin.market_cap}
                      total_volume={coin.total_volume}
                      price_change_24h={coin.price_change_percentage_24h}
                    />
                  );
                })}
              </tbody>
            </table>
          </>
        )}
      </div>
    </div>
  );
};

export default App;
