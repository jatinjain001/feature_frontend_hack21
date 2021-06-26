
import { herbData } from './data.js';
import Footer from './Components/Footer';

import Navbar from './Components/Navbar/index';
import React from 'react';


import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Aromatic from './Pages/aromatic';
import Annuals from './Pages/annuals';
import Culinary from './Pages/culinary';
import Biennials from './Pages/biennials';
import Medicinal from './Pages/medicinal';
import Perennials from './Pages/perennials';
import Home from './Pages/home';




function App() {
    return ( <
        Router >
        <
        Navbar / >
        <
        Switch >
        <
        Route path = '/'
        exact component = { Home }
        />
        <
        Route path = '/aromatic'
        exact component = { Aromatic }
        /> <
        Route path = '/annuals'
        component = { Annuals }
        /> <
        Route path = '/biennials'
        component = { Biennials }
        /> <
        Route path = '/perennials'
        component = { Perennials }
        /> <
        Route path = '/culinary'
        component = { Culinary }
        /> <
        Route path = '/medicinal'
        component = { Medicinal }
        /> 
        < /Switch > <
        /Router>
    );
}

export default App;