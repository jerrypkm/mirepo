import React from 'react'
import { connect } from 'react-redux'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import Landing from '../pages/Landing'
import BMC from '../pages/BMC' 
import MisDatosEmprendedor from '../pages/MisDatosEmprendedor'
import NotFound from '../Components/NotFound'


function App(props){
    const loginState = props.loginState;
    
    const PrivateRoute = ({ component: Component, ...rest }) => (
        <Route {...rest} render = {(props)=>(
            loginState === true
            ? <Component {...props}/>
            : <Redirect to='/' />
        )}/>
    )

    return <BrowserRouter>
        <Switch>
            <Route 
            exact 
            path="/"
            component={Landing}/>
            <PrivateRoute 
            path="/confirm"
            component={MisDatosEmprendedor}/>
            <PrivateRoute
            path="/my-bmc"
            component={BMC}
            /> 
            <Route component={NotFound}/>
        </Switch>
    </BrowserRouter>
}

const mapStateToProps = state => {
    return{
        loginState: state.loginState,
    };
};

export default connect(mapStateToProps, null)(App);