import React from 'react';
import { Link } from 'react-router-dom'

const PagNotFound = () => {
	return(
		<div>
			<h2>Página não encontrada</h2>
			<Link to={'/'} > Voltar a Listagem </Link>
		</div>
	)
}

export default PageNotFound;
