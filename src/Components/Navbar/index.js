import React from 'react';
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
} from './NavbarElements';

const Navbar = () => {
    return (
         < >
            <Nav >
            <Bars />

            <NavMenu >
            <NavLink to = '/' activeStyle >Home </NavLink>
            <NavLink to = '/aromatic' activeStyle >Aromatic </NavLink>
            <NavLink to = '/culinary' activeStyle >Cullynary</NavLink> 
            <NavLink to = '/annuals' activeStyle >Annuals</NavLink> 
            <NavLink to = '/medicinal' activeStyle >Medicinal </NavLink> 
            <NavLink to = '/perennials' activeStyle >perennials </NavLink> 
            <NavLink to = '/biennials' activeStyle > Biennials </NavLink>
            </NavMenu>
            </Nav >
            </>
); 
};

export default Navbar;