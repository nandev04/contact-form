import { useState } from 'react';
import './styles/App.css';
import Input from './Input';
import InputRadio from './InputRadio';
import { useForm, FormProvider } from 'react-hook-form';

function App() {
	const methods = useForm();

	function onSubmitFun(data) {
		console.log(data);
		alert('Formulário preenchido com sucesso!');
	}

	const hasErrorQuery = methods.formState.errors.query;
	const hasErrorMsg = methods.formState.errors.msg;

	return (
		<FormProvider {...methods}>
			<form
				className="containerForm"
				onSubmit={(event) => {
					event.preventDefault();
					methods.handleSubmit(onSubmitFun)();
				}}
			>
				<h1 className="contact">Contact Us</h1>
				<div className="nameForm">
					<Input
						label={'First Name'}
						id={'fname'}
						type={'text'}
						requiredProp={true}
					/>
					<Input
						label={'Last Name'}
						id={'lname'}
						type={'text'}
						requiredProp={true}
					/>
				</div>
				<div className="emailForm">
					<Input
						label={'Email Address'}
						id={'email'}
						type={'email'}
						requiredProp={true}
					/>
				</div>
				<div className="queryForm">
					<p className="queryP">
						Query Type <span>*</span>
					</p>
					<InputRadio
						value={'enquiry'}
						id={'enquiry'}
						label={'General Enquiry'}
						name={'query'}
						requiredProp={true}
					/>
					<InputRadio
						value={'support'}
						id={'support'}
						label={'Support Request'}
						name={'query'}
						requiredProp={true}
					/>
					{hasErrorQuery && (
						<p className="errorMessage">{hasErrorQuery.message}</p>
					)}
				</div>
				<div className="messageForm" id="msg">
					<label htmlFor="msg">
						Message <span>*</span>
					</label>
					<textarea
						id={'msg'}
						name="msg"
						className="messageArea"
						placeholder="Write your message here!"
						{...methods.register('msg', { required: 'Escreva uma mensagem' })}
					/>
					{hasErrorMsg && <p className="errorMessage">{hasErrorMsg.message}</p>}
				</div>
				<div className="termsForm">
					<Input
						label={'I consent to being contacted by the team'}
						id={'terms'}
						type={'checkbox'}
						requiredProp={true}
					/>
				</div>
				<button className="submit">Submit</button>
			</form>
		</FormProvider>
	);
}

export default App;
