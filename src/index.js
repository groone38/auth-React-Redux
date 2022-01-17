import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore} from "redux";
import rootReducer from "./redux/rootReducer";
import {BrowserRouter} from "react-router-dom";
import {Provider} from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css';

const store = createStore(rootReducer)
const app = (
    <Provider store={store}>
        <App/>
    </Provider>
)

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            {app}
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);
