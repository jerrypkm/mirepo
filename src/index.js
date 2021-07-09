import React from 'react'
import ReactDom from 'react-dom'
import App from './Components/App'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from './reducers'

const initialState ={
    userName: "",
    userID: "",
    userEmail: "",
    loginState: false,
}

const store = createStore(reducer, initialState);

const container = document.getElementById('app');
ReactDom.render(
    <Provider store={store}>
        <App />
    </Provider>, 
container); //ReactdDom siempre necesita un elemento, por ello hay que añadir <>