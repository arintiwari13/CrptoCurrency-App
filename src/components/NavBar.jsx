import React, { useContext } from 'react';
import logo from '../assets/logo.png';
import arrow_icon from '../assets/arrow_icon.png';
import { CoinContext } from '../Context/Coinapi';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const { setCurrency } = useContext(CoinContext);

  const currencyHandle = (event) => {
    switch (event.target.value) {
      case 'USD':
        setCurrency({ name: 'USD', Symbol: '$' });
        break;
      case 'EUR':
        setCurrency({ name: 'EUR', Symbol: '€' });
        break;
      case 'INR':
        setCurrency({ name: 'INR', Symbol: '₹' });
        break;
      default:
        setCurrency({ name: 'USD', Symbol: '$' });
        break;
    }
  };

  return (
    <div className='flex h-14 items-center justify-center mb-6 border-b-[1px] border-b-myfav-50'>
      <div className='container flex items-center justify-between'>
       <Link to={"/"}>
           <img src={logo} alt="imagemain" />
        </Link>
        <nav>
          <ul className='flex flex-row gap-8 text-myfav-250 font-semibold text-xl'>
           <Link to={"/"}> <li>Home</li> </Link>
            <li>Features</li>
            <li>Pricing</li>
            <li>Blog</li>
          </ul>
        </nav>

        <div className='flex gap-4 items-center'>
          <select onChange={currencyHandle} className='p-1 rounded-md bg-myfav-50 text-white'>
            <option value="USD">USD</option>
            <option value="INR">INR</option>
            <option value="EUR">EUR</option>
          </select>
          <button className='flex flex-row items-center gap-1 pr-3 pb-1 bg-myfav-300 pl-3 rounded-md pt-1 font-semibold text-white'>
            SignUp <img src={arrow_icon} alt="icon" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
