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
    return ( <
        >
        <
        Nav >
        <
        Bars / >

        <
        NavMenu >
        <
        NavLink to = '/aromatic'
        activeStyle >
        About <
        /NavLink> <
        NavLink to = '/culinary'
        activeStyle >
        Events <
        /NavLink> <
        NavLink to = '/annuals'
        activeStyle >
        Annual Report <
        /NavLink> <
        NavLink to = '/medicinal'
        activeStyle >
        Teams <
        /NavLink> <
        NavLink to = '/perennials'
        activeStyle >
        Blogs <
        /NavLink> <
        NavLink to = '/biennials'
        activeStyle >
        Sign Up <
        /NavLink> { /* Second Nav */ } { /* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */ } <
        /NavMenu> <
        NavBtn >
        <
        NavBtnLink to = '/signin' > Sign In < /NavBtnLink> <
        /NavBtn> <
        /Nav> <
        />
    );
};

export default Navbar;