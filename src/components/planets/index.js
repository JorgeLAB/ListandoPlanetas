import React, {Fragment, useState, useEffect} from 'react';
import Planet from './planet';
import Form from './form';

async function getPlanets(){
	let response = await fetch('http://localhost:3000/api/planets.json');
	let data = await response.json();
	return data;
}

const Planets = () => {
	let [planets, setPlanets] = useState([]);

	useEffect(() => {
		getPlanets().then( (data) =>
			setPlanets( data['planets'] )
		)
	},[] );

	const duplicateLastPlanet = () => {
		let lastPlanet = planets[planets.length - 1];
		setPlanets([ ...planets, lastPlanet ]);
	}

	const removeLastPlanet = () => {
		let removeListPlanet = [ ...planets ];
		removeListPlanet.pop();
		setPlanets( removeListPlanet );
	}

	const addPlanet = (newPlanet) => {
		setPlanets([ ...planets, newPlanet ]);
	}

		return(	
			<Fragment>
				<h3> Lista de Planetas </h3>
				<hr/>
				<button onClick={removeLastPlanet}>Remover último planeta</button>
				<button onClick={duplicarUltimoPlaneta}>Acrescentar planeta</button>
				<hr/>
				<h4>Adicionar novo Planeta</h4>
					<Form addPlanet = {addPlanet} />
				<hr/>
				{
					planets.map( (planet, index) =>
						<Planet key ={index} nome = {planet.name}
										 description = {planet.description}
										 img_url = {planet.img_url}
										 link = {planeta.link}
										 id = {planeta.id}
						/>
					)
				}
			</Fragment>
			)
}

export default Planets;