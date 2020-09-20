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

	duplicarUltimoPlaneta = () => {
		let ultimo_planeta = this.state.planetas[this.state.planetas.length - 1];
		this.setState(state => ({
			planetas: [...this.state.planetas, ultimo_planeta]
		}))
	}

	removerUltimoPlaneta = () =>{
		let clonePlanetas = [...this.state.planetas]
		clonePlanetas.pop();
		this.setState(state => ({
			planetas: clonePlanetas
		}))
	}

	render(){
		return(	
			<Fragment>
				<h3> Lista de Planetas </h3>
				<hr/>
				<button onClick={this.removerUltimoPlaneta}>Remover último planeta</button>
				<button onClick={this.duplicarUltimoPlaneta}>Acrescentar planeta</button>
				<hr/>
				{
					this.state.planetas.map((planeta, index) =>
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
}

export default Planetas;