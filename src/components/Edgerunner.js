import React from 'react';
import { RolePicker } from './RolePicker';

const Edgerunner = () => {
return (
	<>
	<div
	style={{
		display: 'flex',
		justifyContent: 'Left',
		alignItems: 'Left',
	}}
	>
	<h1>Edgerunner</h1>
	</div>
	<h2>Roles</h2>
	<RolePicker />
	</>
);
};

export default Edgerunner;
