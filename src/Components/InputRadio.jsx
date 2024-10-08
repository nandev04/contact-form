import React from 'react';
import './styles/InputRadio.css';
import { useFormContext } from 'react-hook-form';

const InputRadio = ({ id, value, label, name }) => {
	const {
		register,
		formState: { errors },
	} = useFormContext();

	return (
		<>
			<fieldset className="fiedRadio">
				<div>
					<input
						className="inputRadio"
						type="radio"
						id={id}
						value={value}
						name={name}
						{...register(name, { required: 'Selecione uma opção' })}
					/>
					<label htmlFor={id}>{label}</label>
				</div>
			</fieldset>
		</>
	);
};

export default InputRadio;
