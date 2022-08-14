import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { MoralisProvider } from "react-moralis";

ReactDOM.render(
	<React.StrictMode>
    <MoralisProvider serverUrl="https://rfhpoopbnm3c.usemoralis.com:2053/server" appId="QX1CuHOKWgJj0zRmu4GPLzlGoURJ4acrQNGU3tt3">
      <App />
    </MoralisProvider>
  </React.StrictMode>,
	document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
