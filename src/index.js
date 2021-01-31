import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
// import './App.css';
import reportWebVitals from './reportWebVitals';
// import registerServiceWorker from './registerServiceWorker';
import 'tachyons';
// import Card from './Card';
// import { robots } from './robots1'
// import CardList from './CardList'

ReactDOM.render(
	<div>
		<App />
	</div>
	, document.getElementById('root'));

	// <div>
	// 	<CardList robots = {robots}/>
	// </div>
	// , document.getElementById('root'));

// import Hello from './Hello';

// ReactDOM.render(
//   <React.StrictMode>
//     <Hello greeting = {'Hello React Ninja'}/>
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
