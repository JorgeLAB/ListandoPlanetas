import React, {Fragment, useState, useEffect} from "react";
import ImagemCinza from '../../shared/imagemCinza';
import DescricaoComLink from '../../shared/descricaoComLink';

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
	)} );

	return(
		<Fragment>
			
			<h4>{props.nome}</h4>
			<DescricaoComLink link={props.link} descricao={props.descricao} nome={props.nome}/>
			<ImagemCinza img_url={ props.img_url } alt_valor={ props.alt_valor } />
			<h5>Lista de Satélites</h5>
			<ul>		
				{
					satelites.map((satelite, index) => <li key={index}>{satelite.name}</li>)
				}
			</ul>
		</Fragment>

	)		
}

export default Planeta