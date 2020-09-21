import React, {Fragment} from "react";
import ImagemCinza from '../../shared/imagemCinza';
import DescricaoComLink from '../../shared/descricaoComLink';

const Planeta = (props) => {

return(
	<Fragment>		
		<h4>{props.nome}</h4>
		<DescricaoComLink link={props.link} descricao={props.descricao} nome={props.nome}/>
		<ImagemCinza img_url={ props.img_url } alt_valor={ props.alt_valor } />
	</Fragment>
	)		
}

export default Planeta