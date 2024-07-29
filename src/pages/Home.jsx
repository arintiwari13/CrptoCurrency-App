import React, { useContext, useEffect, useState } from 'react';
import { CoinContext } from '../Context/Coinapi';
import { Link } from 'react-router-dom';


const Home = () => {
  const { allcoin, currency } = useContext(CoinContext);
  const [displaycoin, setDisplaycoin] = useState([]);
  const [input, setinput] = useState('');

  const inputhandler = (event) => {
    setinput(event.target.value);
    if(event.target.value === ""){
      setDisplaycoin(allcoin);
    }
  }
  const searchhandler = async (event) => {
    event.preventDefault();
    const coins = await  allcoin.filter((item) =>{
      return item.name.toLowerCase().includes(input.toLocaleLowerCase());
    })
    setDisplaycoin(coins);
  }

  useEffect(() => {
    setDisplaycoin(allcoin);
  }, [allcoin]);

  return (
    <div>
     
      <div className='container flex flex-col items-center mt-6'>
        <div className='w-full flex flex-col items-center gap-3'>
          <h1 className='text-3xl text-white text-center font-bold'>
            Biggest <br /> Crypto MarketPlace
          </h1>
          <p className='text-white text-center'>
            Welcome to the largest cryptocurrency marketplace. SignUp to know more <br /> about Cryptos.
          </p>

          <form onSubmit={searchhandler}  className='flex flex-row gap-2'>
            <input onChange={inputhandler} list='coinlist' required type="text" value={input} 
            placeholder='Search Crypto...' className='p-2 rounded-md' />

            <datalist id='coinlist'>
              {allcoin.map((item,index)=> (<option key={index} value={item.name}/>))}
            </datalist>

            <button type='submit' className='bg-myfav-300 px-3 py-2 rounded-md'>Search</button>
          </form>
        </div>

        <div className='w-[90%] mt-32 bg-myfav-50 rounded-md overflow-x-auto'>
          <div className='table-layout'>
            <p>#</p>
            <p>Coins</p>
            <p>Price</p>
            <p className='text-center'>24H change</p>
            <p className='text-right'>Market Cap</p>
          </div>
          {displaycoin.slice(0, 10).map((item, index) => (
            <Link to={`/coin/${item.id}`} className='table-layout' key={index}>
              <p>{item.market_cap_rank}</p>
              <div className='flex items-center gap-2'>
                <img src={item.image} width={30} height={30} alt={item.name} />
                <p>{item.name} - {item.symbol.toUpperCase()}</p>
              </div>
              <p>{currency.Symbol} {item.current_price.toLocaleString()}</p>
              <p className={`text-center ${item.price_change_percentage_24h > 0 ? 'text-myfav-350' : 'text-myfav-400'}`}>
                {Math.floor(item.price_change_percentage_24h * 100) / 100}%
              </p>
              <p className='text-right'>{currency.Symbol} {item.market_cap.toLocaleString()}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
