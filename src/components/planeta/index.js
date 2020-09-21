import React, {Fragment, useState, useEffect} from "react";
import ImagemCinza from '../shared/imagemCinza';
import DescricaoComLink from '../shared/descricaoComLink';
import Form from './form';
import { useParams, useHistory } from 'react-router-dom'


async function getPlaneta(id){
	let response = await fetch(`http://localhost:3000/api/${id}.json`);
	let data = await response.json(); 
	return data;
}

const Planeta = () => {
	let [satelites, setSatelites] = useState([])
	let [planeta, setPlaneta] = useState({})
	let {id} = useParams();
	let history = useHistory();

	useEffect(() => {
		getPlaneta(id).then((data) =>{
			setPlaneta(data['data'])
			setSatelites(data['satellites'])
		} 
	)}, [id]);

	const irParaPlanetas = () => {
		history.push('/');
	}


const adicionandoSatelites = (novo_satelite) =>{
	setSatelites([...satelites, novo_satelite]);
}

return(
	<Fragment>
		<h4>{planeta.name}</h4>
		<DescricaoComLink link={planeta.link} descricao={planeta.descricao} nome={planeta.nome}/>
		<ImagemCinza img_url={ planeta.img_url } alt_valor={ planeta.alt_valor } />
		<hr/>
			<button type="button" onClick={irParaPlanetas}>Voltar à listagem</button>
		<hr/>
		<h5>Lista de Satélites</h5>
		<hr/>
		<h6>Adicionar mais satélites</h6>
		<Form adicionandoSatelites = {adicionandoSatelites} />
		<hr/>
		<ul>		
			{	
				satelites.map((satelite, index) => <li key={index}>{satelite.name}</li>)
			}
		</ul>
	</Fragment>

	)		
}

export default Planeta