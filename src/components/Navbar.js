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
	<>
	<Nav>
		<Bars />
		<NavMenu>
		<NavLink to='/npc-create' activeStyle>
			New NPC
		</NavLink>
		<NavLink to='/pc-create' activeStyle>
			New Player
		</NavLink>
		</NavMenu>
		{/* <NavBtn>
		<NavBtnLink to='/signin'>Sign In</NavBtnLink>
		</NavBtn> */}
	</Nav>
	</>
);
};

export default Navbar;
