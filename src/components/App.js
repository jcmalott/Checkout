import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Cart from './Cart';
import Checkout from './Checkout';

const App = () => {
    return(
      <div>
        <Router>
          <Switch>
            <Route path="/" exact component={Cart}/>
            <Route path="/checkout" exact component={Checkout}/>
          </Switch>
        </Router>
      </div>
    );
}

export default App;
