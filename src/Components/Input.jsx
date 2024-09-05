import React from 'react';
import './styles/Input.css';
import { useFormContext } from 'react-hook-form';

const Input = ({ label, type, id, required }) => {
	const { register } = useFormContext();

	return (
		<>
			{label ? (
				<>
					<label className="label" htmlFor={id}>
						{label}
						{required && (
							<>
								<span className="requiredSymbol">*</span>
							</>
						)}
					</label>
					<input
						className="input"
						type={type}
						{...register(id)}
						required={required}
					/>
				</>
			) : (
				<input
					className="input"
					type={type}
					{...register(id)}
					required={required}
				/>
			)}
		</>
	);
};

export default Input;
