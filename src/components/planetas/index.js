import React, {Fragment} from 'react';
import Planeta from './planeta';

async function getPlanetas(){
	let response = await fetch('http://localhost:3000/api/planets.json');
	let data = await response.json();
	return data;
}


class Planetas extends React.Component {
	
	constructor(props){
		super(props);
		this.state = {
			planetas: []
		}
	}

	componentDidMount() {
		getPlanetas().then((data) => {
			this.setState(state => ({
				planetas: data['planets']
			})
		)
		})
	}

	render(){
		return(	
			<Fragment>
				<h3> Lista de Planetas </h3>
				{
					this.state.planetas.map((planeta, index) =>
						<Planeta key ={index} nome = {planeta.name}
										 descricao = {planeta.description}
										 img_url = {planeta.img_url}
										 link = {planeta.link}
						/>
					)
				}
			</Fragment>
			)
	}
}

export default Planetas;