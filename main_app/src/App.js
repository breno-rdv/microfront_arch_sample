import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link, useLocation } from 'react-router-dom';
import CriptoList from './pages/CriptoList/CriptoList';
import './styles.css';

const Header =  React.lazy(() => import('header/Header'));

const Checkout = React.lazy(() => import('checkout/Checkout'));

function App() {
    const [ total, setTotal ] = React.useState(0);
    const [ pathname, setPathname ] = React.useState(null);
    let location = useLocation();

    React.useEffect(() => {
        setPathname(location.pathname);
    }, [location]);

    return (
        <main className='container'>
            <header className='container'>
                <React.Suspense fallback={<h1>Loading....</h1>}>
                    <Header />
                </React.Suspense>
            </header>
            <section className='body'>
                <Switch>
                    <Route exact path="/">
                        <CriptoList setTotal={setTotal}/>
                    </Route>
                    <Route path="/checkout">
                        <React.Suspense fallback={<h1>Loading....</h1>}>
                            <Checkout total={total}/>
                        </React.Suspense>
                    </Route>
                </Switch>
            </section>
            <footer className='footer'>
                { pathname === '/' ? (
                    <Link to="/checkout">
                        <button disabled={total === 0}>Check out</button>
                    </Link>
                ) : (
                    <div>Crypto App</div>
                )}
            </footer>
        </main>
    );
}

export default App;
