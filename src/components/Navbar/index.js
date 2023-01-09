import React from 'react';
import { logout } from '../../firebase';
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
	<>
	<Nav>
		<Bars />

		<NavMenu>
		<NavLink to='/about' >
			About
		</NavLink>
		<NavLink to='/events' >
			Events
		</NavLink>
		<NavLink to='/annual' >
			Annual Report
		</NavLink>
		<NavLink to='/team' >
			Teams
		</NavLink>
		<NavLink to='/blogs' >
			Blogs
		</NavLink>
		{/* <NavLink to='/signin'>      
			Login
		</NavLink> */}
		{/* Second Nav */}
		{/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
		</NavMenu>
		<NavBtn>
		<NavBtnLink to='/signin'>Sign In</NavBtnLink>
		<NavBtnLink onClick={logout}>Sign Out</NavBtnLink>
		</NavBtn>
	</Nav>
	</>
);
};

export default Navbar;
