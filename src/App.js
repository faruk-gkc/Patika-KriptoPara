import React, { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [coins, setCoins] = useState([]);

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

  console.log(coins)
  return <div className="container">
      <h3 className="text-center">Kripto Para</h3>
  </div>;
};

export default App;
