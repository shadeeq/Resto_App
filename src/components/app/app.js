import React from 'react';
import {MainPage, CartPage} from '../pages';
import AppHeader from '../app-header';
import { Switch, Route } from 'react-router';
import Background from './food-bg.jpg';
import { connect } from 'react-redux';

const App = (props) => {
    return (
        <div style={{background: `url(${Background}) center center/cover no-repeat`}} className="app">
            <AppHeader total={props.total}/>
            <Switch>
                <Route exact path='/' component={MainPage}/>
                <Route path='/cart' component={CartPage}/>
            </Switch>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        total: state.totalPrice
    }
}
export default connect(mapStateToProps)(App);