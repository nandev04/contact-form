import React from 'react';
import './styles/InputRadio.css';
import { useFormContext } from 'react-hook-form';

const InputRadio = ({ id, value, label, name }) => {
	const { register } = useFormContext();

	return (
		<>
			<fieldset className="fiedRadio">
				<input
					className="inputRadio"
					type="radio"
					id={id}
					value={value}
					{...register(name)}
					name={name}
				/>
				<label htmlFor={id}>{label}</label>
			</fieldset>
		</>
	);
};

export default InputRadio;
