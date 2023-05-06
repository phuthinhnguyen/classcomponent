import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import StudentInfoComponent from './StudentInfoComponent';

const liststudents = [
  {
    name:"Nguyen Van A",
    age:30,
    address:"Ha Noi"
  },  
  {
    name:"Nguyen Van B",
    age:22,
    address:"Ho Chi Minh"
  },
  {
    name:"Nguyen Van C",
    age:38,
    address:"Hue",
  },  
]
ReactDOM.createRoot(document.getElementById("root")).render(<StudentInfoComponent liststudents={liststudents}/>)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
