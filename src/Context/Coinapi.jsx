
import { createContext, useEffect, useState } from 'react';

export const CoinContext = createContext();


const Coincntextprovider = (props) => {

        const [allcoin, setallcoin] = useState([]);
        const [currency, setCurrency] = useState({
            name:"usd",
            Symbol: "$"
        })

        const fetchallcoins = async () => {
            const options = {
                method: 'GET',
                headers: {
                  accept: 'application/json',
                  'x-cg-demo-api-key': '	CG-e9gPbHSqdUtkTJUbZaKPbfsk'
                }
              };
              
              fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency.name}`, options)
                .then(response => response.json())
                .then(response => setallcoin(response))
                .catch(err => console.error(err));
        }

        useEffect(() => {
            fetchallcoins();
        },[currency])
 
        const contextValue= {
            allcoin, currency, setCurrency
        }

    return(
        <CoinContext.Provider value={contextValue}>
            {props.children}
        </CoinContext.Provider>
    )
}

export default Coincntextprovider;
