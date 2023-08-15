import React from 'react';
import { RolePicker } from './RolePicker';

const StreetRat = () => {
return (
	<>
	<div
	style={{
		display: 'flex',
		justifyContent: 'Left',
		alignItems: 'Left',
	}}
	>
	<h1>StreetRat</h1>
	</div>
	<h2>Roles</h2>
	<RolePicker />
	</>
);
};

export default StreetRat;
