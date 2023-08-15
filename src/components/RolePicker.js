import React from 'react'; 
import { Button } from './Button';

const RolePicker = (props) => { 
  const roles = props.roles ? props.roles : ['RockerBoy','Solo', 'Netrunner', 'Tech', 'Medtech', 'Media', 'Exec', 'Lawmen', 'Fixer', 'Nomad'];

  const roleSelections = roles.map((role) =>
  <li><button> {role} </button></li>
  )
  return ( 
    <>
    <ul style={{
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'Center',
    listStyleType: 'none',
    }}>
        {roleSelections}
    </ul>
    </>
  ); 
  
} 

export {RolePicker};