import React, {Fragment, useState} from 'react';

const Form = (props) => {
	const estadoInicial = {
		name: '',
		description: '',
		link: '',
		img_url: '',
		id: ''
	}

	let [campos, setCampos] = useState(estadoInicial);
	
	const handleCampoChange = e => setCampos({
		...campos, 
		[e.currentTarget.name]: e.currentTarget.value
	});

	const handleSubmit = event => {
		props.adicionarPlaneta(campos);
		event.preventDefault();
		setCampos(estadoInicial);


	}


	return(
		<Fragment>
			<form onSubmit={handleSubmit}>
				<div>
					<label htmlFor="name">Nome:  </label>
					<input id="name" name="name" type="text" onChange={handleCampoChange} value={campos.name}/>
				</div>
				<br/>	
				<div>
					<label htmlFor="descricao">Descrição:  </label>
					<input id="descricao" name="description" type="text" onChange={handleCampoChange} value={campos.description}/>
				</div>
				<br/>
				<div>
					<label htmlFor="link">Link:  </label>
					<input id="link" name="link" type="text" onChange={handleCampoChange} value={campos.link}/>
				</div>
				<br/>
				<div>
					<label htmlFor="img_url">Imagem:  </label>
					<input id="img_url" name="img_url" type="text" onChange={handleCampoChange} value={campos.img_url}/>
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