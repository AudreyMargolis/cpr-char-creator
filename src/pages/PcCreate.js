import React from 'react';
import { Link } from 'react-router-dom';

const PcCreate = () => {
return (
	<>
	<div
	style={{
		display: 'flex',
		justifyContent: 'Left',
		alignItems: 'Left',
	}}
	>
	<h1>PC Char Creator</h1>
	</div>
	<div
	style={{
		display: 'flex',
		justifyContent: 'space-evenly',
		alignItems: 'center',
	}}>
		<Link to="/street-rat">Street Rat</Link>
		<Link to="/edgerunner">Edgerunner</Link>
		<Link to="/complete-package">Complete Package</Link>
	</div>
	</>
	
);
};

export default PcCreate;
