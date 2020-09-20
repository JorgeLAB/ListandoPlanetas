import React, {Fragment} from "react";
import ImagemCinza from '../../shared/imagemCinza';
import DescricaoComLink from '../../shared/descricaoComLink';

async function getSatelites(id){
	let response = await fetch(`http://localhost:3000/api/${id}.json`);
	let data = await response.json(); 
	return data;
}

class Planeta extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			satelites: []
		}
	}

	componentDidMount() {
		getSatelites(this.props.id).then((satelites) =>
			this.setState(state => ({
				satelites: satelites['satellites']
			})))
	}

	render(){
		return(
		<Fragment>
			
			<h4>{this.props.nome}</h4>
			<DescricaoComLink link={this.props.link} descricao={this.props.descricao} nome={this.props.nome}/>
			<ImagemCinza img_url={ this.props.img_url } alt_valor={ this.props.alt_valor } />
			<h5>Lista de Satélites</h5>
			<ul>		
				{
					this.state.satelites.map((satelite, index) => <li key={index}>{satelite.name}</li>)
				}
			</ul>
		</Fragment>

	)		
	}

}

export default Planeta