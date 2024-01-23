import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import CriptoList from './pages/CriptoList/CriptoList';
import './styles.css';

const Header =  React.lazy(() => import('header/header'));

function Checkout() {
    return (
        <div>
            Checkout
        </div>
    )
}

function App() {
    return (
        <Router>
            <main className='container'>
                <header className='header'>
                    <React.Suspense fallback={<h1>Loading....</h1>}>
                        <Header />
                    </React.Suspense>
                </header>
                <section className='body'>
                    <Switch>
                        <Route exact path="/">
                            <CriptoList />
                        </Route>
                        <Route path="/checkout">
                            <Checkout />
                        </Route>
                    </Switch>
                </section>
                {/** TODO: Add logic to change footer based on route */}
                <footer className='footer'>
                    <Link to="/checkout">
                        <button>Check out</button>
                    </Link>
                </footer>
            </main>
        </Router>
    );
}

export default App;
