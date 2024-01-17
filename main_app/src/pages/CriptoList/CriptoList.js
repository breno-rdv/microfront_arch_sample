import React from "react";
import './styles.css';

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
]

// TODO: add style to cards and button
function CriptoList() {
    return (
        <div className="cripto-list">
            {data.map(coin => {
                return (
                    <div key={coin.id} className="coin-card">
                        <div className="name">{coin.name}</div>
                        <div className="price">{coin.price}</div>
                        <button>Comprar</button>
                    </div>
                )
            })}
        </div>
    );
}

export default CriptoList;
