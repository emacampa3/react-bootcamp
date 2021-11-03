import React, { Fragment, useState } from 'react'

import Header from "./components/Layout/Header";
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';

function App() {
  const [cartIsShown, setCartIsShown] = useState(false)

  const showCartHandlerFunction = () => {
    setCartIsShown(true)
  }

  const hideCartHandlerFunction  = () => {
    setCartIsShown(false)
  }

  return (
    <Fragment>
      {cartIsShown && <Cart onClose={hideCartHandlerFunction} />}
      <Header onShowCart={showCartHandlerFunction} />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
