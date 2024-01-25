import React, { useState } from 'react';
import './styles.css';
import { useLocation, useHistory } from 'react-router-dom';

function App({ total }) {
    const [ pathname, setPathname ] = useState(null);
    const location = useLocation();
    const history = useHistory();

    React.useEffect(() => {
        setPathname(location.pathname);
    }, [location]);

    const handleButtonClick = () => {
        if (pathname === '/') return;
        alert('Compra concluída');
        history.replace('/?page=checkout');
    };

    return (
        <div className='cart-container'>
            <div className='cart'>
                <div className='cart-title'>
                    <span className="material-symbols-outlined">shopping_cart</span>
                    <div>Check-out</div>
                </div>
                <div className='value'>{`R$ ${total ?? 0},00`}</div>
                <button onClick={() => handleButtonClick()}>Finalizar compra</button>
            </div>
        </div>
    );
}

export default App;
