import React from 'react';
import './styles.css';

function App() {
    return (
        <div className='container'>
            <div className='cart'>
                <div className='cart-title'>
                    <span class="material-symbols-outlined">shopping_cart</span>
                    <div>Check-out</div>
                </div>
                <div className='value'>Value</div>
                <button>Finalizar compra</button>
            </div>
        </div>
    );
}

export default App;
