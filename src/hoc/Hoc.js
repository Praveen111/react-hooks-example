import React from 'react';
import './Hoc.scss';

const hoc = (props) => (<div className='content'> {props.children} </div>);


export default Hoc;