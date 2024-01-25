import React from 'react';
import './styles.css';

function App() {

    const [value, setValue] = React.useState(0);

    React.useEffect(() => {
        import('mainApp/CartData')
            .then(module => {
                const cartData = module.default;
                cartData.onmessage = (event) => {
                    if (event.data === 'clearCart') {
                        setValue(0);
                        return;
                    }
                    setValue(prev => prev + event.data)
                };
            }).catch(e => console.log(e));
    }, [value]);

    return (
        <header className='container'>
            <h1 className='title'>Crypto App</h1>
            <div className='amount'>
                <span className="material-symbols-outlined">shopping_cart</span>
                <span>{`R$ ${value},00`}</span>
            </div>
        </header>
    );
}

export default App;