import { useState } from 'react';
import './styles/App.css';
import Input from './Input';
import InputRadio from './InputRadio';

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
			<div className="queryForm">
				<p className="queryP">
					Query Type <span>*</span>
				</p>
				<InputRadio id={'enquiry'} label={'General Enquiry'} name={'query'} />
				<InputRadio id={'request'} label={'Support Request'} name={'query'} />
			</div>
			<div className="messageForm">
				<Input label={'Message'} type={'text'} required={true} />
			</div>
			<button className="submit">Submit</button>
		</div>
	);
}

export default App;
