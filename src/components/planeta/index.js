import React, {Fragment, useState, useEffect} from "react";
import ImagemCinza from '../shared/imagemCinza';
import DescricaoComLink from '../shared/descricaoComLink';
import Form from './form';


async function getSatelites(id){
	let response = await fetch(`http://localhost:3000/api/${id}.json`);
	let data = await response.json(); 
	return data;
}

const Planeta = (props) => {
	let [satelites, setSatelites] = useState([])

	useEffect(() => {
		getSatelites(props.id).then((data) => 
			setSatelites(data['satellites'])
	)}, [props]);

const adicionandoSatelites = (novo_satelite) =>{
	setSatelites([...satelites, novo_satelite]);
}

return(
	<Fragment>
		
		<h4>{props.nome}</h4>
		<DescricaoComLink link={props.link} descricao={props.descricao} nome={props.nome}/>
		<ImagemCinza img_url={ props.img_url } alt_valor={ props.alt_valor } />
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