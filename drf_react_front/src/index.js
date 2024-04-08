import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material';

import Header from './components/Header'
import Footer from './components/Footer'

const theme = createTheme(); 

const routing = (
  <Router>
      <React.StrictMode>
        <ThemeProvider theme={theme}>
            <Header />
            <Routes>
               {/*  <Route exact path="/" element={<ConnectionExample />} /> */}
            </Routes>
            <Footer />
        </ThemeProvider>
      </React.StrictMode>
  </Router>
)


ReactDOM.createRoot(document.getElementById('root')).render(routing)