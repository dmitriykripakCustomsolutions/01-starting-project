import React, { useState, useEffect } from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [count, setCount] = useState(0);

    const loginHandler = (email, password) => {
        // We should of course check email and password
        // But it's just a dummy/ demo anyways
        setIsLoggedIn(true);
    };

    const logoutHandler = () => {
        setIsLoggedIn(false);
    };

    useEffect(() => {
        document.title = `You\'ve pressed ${count} times`;
    });

    return (
        <React.Fragment>
            <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
            <main>
                {!isLoggedIn && <Login onLogin={loginHandler} />}
                {isLoggedIn && <Home onLogout={logoutHandler} />}
                <div>
                    <p>You've pressed {count} times</p>
                    <button onClick={() => setCount(count + 1)}>
                        Click the button
                    </button>
                </div>
            </main>
        </React.Fragment>
    );
}

export default App;
