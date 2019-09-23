import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
// import { createStore, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
// import rootReducer from './reducers/rootReducer';
// // import './semantic/dist/semantic.min.css';
//
// import { Provider } from 'react-redux';
//
// const store = createStore(rootReducer, applyMiddleware(thunk))
//
// ReactDOM.render(
//   <Provider store={store} >
//     <App />
//   </Provider>,
//   document.getElementById('root')
// )


ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
