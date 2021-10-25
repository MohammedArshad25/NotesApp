import ReactDOM from "react-dom";
import {createStore } from "redux";
import reducers from "./reducers";
import {Provider } from "react-redux"
import App from "./components/App";

const store = createStore(reducers);
ReactDOM.render(
    <Provider store = {store}>
        <App store={store}/>
    </Provider>
    , document.querySelector("#root")
);