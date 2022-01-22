import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";

import Header from './components/Header';
import Home from './Pages/Home'
import Carrinho from './Pages/Carrinho'



const Routes = () => (
    <BrowserRouter>
        <Header />
        <Switch>
            <Route path="/" component={Home} exact />
            <Route exact path="/carrinho" component={Carrinho}/>
        </Switch>

    </BrowserRouter>
)

export default Routes;
