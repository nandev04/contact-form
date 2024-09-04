import React from 'react';
import './styles/InputRadio.css';

const InputRadio = ({ id, label, name }) => {
	return (
		<>
			<fieldset className="fiedRadio">
				<input
					className="inputRadio"
					type="radio"
					checked
					id={id}
					name={name}
				/>
				<label htmlFor={id}>{label}</label>
			</fieldset>
		</>
	);
};

export default InputRadio;
