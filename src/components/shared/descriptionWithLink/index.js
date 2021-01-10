import React, {Fragment} from 'react';

const DescriptionWithLink = (props) => {
	if( !props.description ){ 
		return null;
	}

	if(props.link_planet){
		
		return(

			<Fragment>
				<p>
					{props.descricao}
				</p>		
				<p>
					<a href={ props.link_planet } > Link para { props.name }
					</a>
				</p>
			</Fragment>
		)

	}else{
		
		return(
			<Fragment>
				<p>
					{ props.description }
				</p>		
			</Fragment>
		)
	
	}
}

export default DescricaoComLink;