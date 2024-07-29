import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { CoinContext } from '../Context/Coinapi';
import Linechart from '../components/Linechart';

const Coin = () => {

  const { coinId } = useParams();
  const [coindata, setCoindata] = useState(null);
  const [histiricaldata, setHistiricaldata] = useState(null);
  const { currency } = useContext(CoinContext);

  const fetchcoindata = async () => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        'x-cg-demo-api-key': '	CG-e9gPbHSqdUtkTJUbZaKPbfsk'
      }
    };

    try {
      const response = await fetch(`https://api.coingecko.com/api/v3/coins/${coinId}`, options);
      const data = await response.json();
      setCoindata(data);
    } catch (err) {
      console.error(err);
    }
  };

  const fetchhistirocaldata = async () => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        'x-cg-demo-api-key': '	CG-e9gPbHSqdUtkTJUbZaKPbfsk'
      }
    };

    try {
      const response = await fetch(`https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=${currency.name}&days=10&interval=daily`, options);
      const data = await response.json();
      setHistiricaldata(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchcoindata();
    fetchhistirocaldata();
  }, [currency]);

  if (coindata && histiricaldata) {
    return (
      <div className='text-myfav-150 flex flex-col mx-auto items-center gap-5'>
        <div className='pt-10'>
          {coindata.image && <img src={coindata.image.large} className='max-w-[100px] mx-auto' alt={`${coindata.name} logo`} />}
          <p className='text-[40px]'><b>{coindata.name} ({coindata.symbol.toLowerCase()})</b></p>
        </div>

        <div className='w-[600px] h-[250px] '>
          <Linechart histiricaldata={histiricaldata} />
        </div>

        <div className='coin-info'>
          <ul>
            <li>Crypto Market Rank  </li>
            <li>{coindata.market_cap_rank}</li>
          </ul>
          <ul>
            <li> Current Price </li>
            <li> {currency.Symbol} {coindata.market_data.current_price[currency.name].toLocaleString()}</li>
          </ul>
          <ul>
            <li> Market Cap </li>
            <li> {currency.Symbol} {coindata.market_data.market_cap[currency.name].toLocaleString()}</li>
          </ul>
          <ul>
            <li> 24 Hour High </li>
            <li> {currency.Symbol} {coindata.market_data.high_24h[currency.name].toLocaleString()}</li>
          </ul>
          <ul>
            <li> 24 Hour Low  </li>
            <li> {currency.Symbol} {coindata.market_data.low_24h[currency.name].toLocaleString()}</li>
          </ul>
        </div>
      </div>
    );
  } else {
    return (
      <div className='spinner'>
        <div className='spin'></div>
      </div>
    );
  }
}

export default Coin;
