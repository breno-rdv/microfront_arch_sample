import React from "react";
import './styles.css';
import checkout from "../../cart-observable";

const data = [
    {
        id: 1,
        name: 'Bitcoin',
        price: 42
    },
    {
        id: 2,
        name: 'Etherium',
        price: 2
    },
    {
        id: 3,
        name: 'Dogecoin',
        price: 1
    }
];

function CriptoList({ setTotal }) {

    const handleButtonClick = (price) => {
        checkout.postMessage(price);
        setTotal(prev => prev + price);
    }

    return (
        <div className="cripto-list">
            {data.map(coin => {
                return (
                    <div key={coin.id} className="coin-card">
                        <div className="name">{coin.name}</div>
                        <div className="price">{`R$ ${coin.price},00`}</div>
                        <button onClick={() => handleButtonClick(coin.price)}>Comprar</button>
                    </div>
                )
            })}
        </div>
    );
}

export default CriptoList;
