import React from 'react';
import './styles/Input.css';
import { useFormContext } from 'react-hook-form';

const Input = ({ label, type, id, requiredProp }) => {
	const {
		register,
		formState: { errors },
	} = useFormContext();

	return (
		<>
			<div>
				<label className="label" htmlFor={id}>
					{label}
					{requiredProp && (
						<>
							<span className="requiredSymbol">*</span>
						</>
					)}
				</label>

				<input
					id={id}
					className="input"
					type={type}
					{...register(id, { required: requiredProp })}
				/>
				{errors?.[id]?.type === 'required' && (
					<p className="error-msg">Campo obrigatório</p>
				)}
			</div>
		</>
	);
};

export default Input;
