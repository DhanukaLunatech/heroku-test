import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// Find all the widget divs
// const WidgetDivs = document.querySelectorAll('.my_widget')

// Inject our React App into each
// WidgetDivs.forEach(Div => {
//   ReactDOM.render(
//     <React.StrictMode>
//       <App domElement={Div} />
//     </React.StrictMode>,
//     Div
//   );
// })

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
