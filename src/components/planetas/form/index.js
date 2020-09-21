import React, {Fragment, useState} from 'react';


const Form = (props) => {

	let [nome, setNome] = useState('');
	const handleChange = event => setNome(event.target.value);

	const handleSubmit = event => {
		props.adicionarPlaneta({name: nome});
		event.preventDefault();

	}


	return(
		<Fragment>
			<form onSubmit={handleSubmit}>
				<div>
					<label htmlFor="nome">Nome:  </label>
					<input id="nome" type="text" onChange={handleChange} value={nome}/>
				</div>
				<br/>
				<div>
					<input type="submit" value="enviar" />
				</div>
			</form>
		</Fragment>
	)
} 

export default Form;