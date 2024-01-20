import React from 'react';
import './styles.css';

function App() {
    return (
        <header className='container'>
            <h1 className='title'>Crypto App</h1>
            <div className='amount'>
                <span class="material-symbols-outlined">shopping_cart</span>
                <span>R$ 0,00</span>
            </div>
        </header>
    );
}

export default App;