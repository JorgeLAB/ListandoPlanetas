import React, {Fragment, useState} from 'react';

const Form = (props) => {
	const [name, setNameSatelite] = useState('');

	const handleChange = event => setNameSatelite(event.target.value);

	const handleNameSubmit = event => {
		props.adicionandoSatelites({name: name});
		event.preventDefault();
	}

	return(
			<Fragment>
				<form onSubmit={handleNameSubmit} >
					<div>
						<label htmlFor="name">Nome:  </label>
						<input id="name" name="name" type="text" onChange={handleChange} value={name}/>
					</div>
					<br/>
					<div>
						<input type="submit"/>
					</div>
				</form>
			</Fragment>
	)


} 

export default Form; 