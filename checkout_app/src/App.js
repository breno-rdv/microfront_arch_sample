import React from 'react';
import './styles.css';

function App({ total }) {

    return (
        <div className='cart-container'>
            <div className='cart'>
                <div className='cart-title'>
                    <span className="material-symbols-outlined">shopping_cart</span>
                    <div>Check-out</div>
                </div>
                <div className='value'>{`R$ ${total},00`}</div>
                <button>Finalizar compra</button>
            </div>
        </div>
    );
}

export default App;
