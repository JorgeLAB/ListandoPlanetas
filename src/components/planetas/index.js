import React, {Fragment, useState, useEffect} from 'react';
import Planeta from './planeta';

async function getPlanetas(){
	let response = await fetch('http://localhost:3000/api/planets.json');
	let data = await response.json();
	return data;
}

const Planetas = () => {
	let [planetas, setPlanetas] = useState([]);

	useEffect(() => {

		getPlanetas().then((data) =>
			setPlanetas(data['planets'])
		)
	},[]  );

	const duplicarUltimoPlaneta = () => {
		let ultimo_planeta = planetas[planetas.length - 1];
		setPlanetas([...planetas, ultimo_planeta])
	}

	const removerUltimoPlaneta = () => {
		let clonePlanetas = [...planetas];
		clonePlanetas.pop();
		setPlanetas(clonePlanetas)
	}

		return(	
			<Fragment>
				<h3> Lista de Planetas </h3>
				<hr/>
				<button onClick={removerUltimoPlaneta}>Remover último planeta</button>
				<button onClick={duplicarUltimoPlaneta}>Acrescentar planeta</button>
				<hr/>
				{
					planetas.map((planeta, index) =>
						<Planeta key ={index} nome = {planeta.name}
										 descricao = {planeta.description}
										 img_url = {planeta.img_url}
										 link = {planeta.link}
										 id = {planeta.id}
						/>
					)
				}
			</Fragment>
			)
}

export default Planetas;