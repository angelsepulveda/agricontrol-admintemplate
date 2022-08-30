import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { ThemeProvider } from "@mui/material/styles";
import theme from "./config/theme";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
        <App/>
    </ThemeProvider>
  </React.StrictMode>
)
