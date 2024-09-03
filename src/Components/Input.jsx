import React from 'react';
import './styles/Input.css';

const Input = ({ type, id, label, required }) => {
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
					<input className="input" type={type} id={id} />
				</>
			) : (
				<input className="input" type={type} id={id} />
			)}
		</>
	);
};

export default Input;
