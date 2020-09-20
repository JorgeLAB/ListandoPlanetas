import React, {Fragment} from 'react';


const DescricaoComLink = (props) => {
	if(!props.descricao){ // Se a propriedade descrição não estive presente então não iremos renderizar o component DescricaoComLink
		return null;
	}

	if(props.link){
		return(
			<Fragment>
			<p>
				{props.descricao}
			</p>		
			<p>
				<a href={props.link} target="_blank"> Link para {props.nome}
				</a>
			</p>
		</Fragment>
	)
	}else{
		return(
			<Fragment>
				<p>
					{props.descricao}
				</p>		
			</Fragment>
		)
	}
}

export default DescricaoComLink;