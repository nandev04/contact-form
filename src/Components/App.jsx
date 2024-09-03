import { useState } from 'react';
import './styles/App.css';
import Input from './Input';

function App() {
	return (
		<div className="containerForm">
			<h1 className="contact">Contact Us</h1>
			<div className="nameForm">
				<Input label={'First Name'} type={'text'} required={true} />
				<Input label={'Last Name'} type={'text'} required={true} />
			</div>
			<div className="emailForm">
				<Input label={'Email Address'} type={'email'} required={true} />
			</div>
			<button className="submit">Submit</button>
		</div>
	);
}

export default App;
