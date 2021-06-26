import './App.css';

import ImgCarousel from './Components/ImgCarousel';
import Herbs from './Components/Herb';
import { herbData } from './data.js';
import Footer from './Components/footer';

import Navbar from './Components/Navbar';
import React from 'react';


import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Aromatic from './aromatic';
import Annuals from './pages/annuals';
import Culinary from './pages/culinary';
import Biennials from './pages/biennials';
import Medicinal from './pages/medicinal';
import Perennials from './pages/perennials';
import SignUp from './pages/signup';


function App() {
    return ( <
        >
        <
        Navbar / >
        <
        ImgCarousel / >

        {
            herbData.map((val) => {
                return ( <
                    div >
                    <
                    Herbs style = {
                        { positon: 'relative' }
                    }
                    key = { val.id }
                    imgscr = { val.imgsrc }
                    title = { val.title }
                    desc = { val.description }
                    /> < /
                    div >
                );
            })
        } <
        div >
        <
        Footer / >
        <
        /div>





        <
        />
    );
}

function App() {
    return ( <
        Router >
        <
        Navbar / >
        <
        Switch >
        <
        Route path = '/'
        exact component = { Aromatic }
        /> <
        Route path = '/annuals'
        component = { Annuals }
        /> <
        Route path = '/biennials'
        component = { biennials }
        /> <
        Route path = '/perennials'
        component = { Perennials }
        /> <
        Route path = '/culinary'
        component = { Culinary }
        /> <
        Route path = '/medicinal'
        component = { Medicinal }
        /> <
        Route path = '/sign-up'
        component = { SignUp }
        /> < /
        Switch > <
        /Router>
    );
}

export default App;