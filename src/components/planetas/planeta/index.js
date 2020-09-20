import React, {Fragment} from "react";
import ImagemCinza from '../../shared/imagemCinza';

const Planeta = (props) => {
	return(
		<Fragment>
			
			<h4>{props.nome}</h4>
			
			<p>{props.descricao}</p>

			<ImagemCinza img_url={ props.img_url } alt_valor={ props.alt_valor } />
		</Fragment>

	)
}

export default Planeta