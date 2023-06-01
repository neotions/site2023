import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import SectionReact from './components/SectionReact'; // Import your component. Ensure the path is correct
import FeatureSection from './components/FeatureSection'; // Import your component. Ensure the path is correct
import CTASection from './components/CTASection'; // Import your component. Ensure the path is correct


ReactDOM.render(
  <React.StrictMode>
    <SectionReact content="section1" />
  </React.StrictMode>,
  document.getElementById('section1')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
