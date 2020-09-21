import React, {Fragment} from "react";
import ImagemCinza from '../../shared/imagemCinza';
import DescricaoComLink from '../../shared/descricaoComLink';
import { Link } from 'react-router-dom';


const Planeta = (props) => {

return(
	<Fragment>		
		<Link to={`/planeta/${props.id}`}>
			<h4>{props.nome}</h4>
		</Link>
		<DescricaoComLink link={props.link} descricao={props.descricao} nome={props.nome}/>
		<ImagemCinza img_url={ props.img_url } alt_valor={ props.alt_valor } />
	</Fragment>
	)		
}

export default Planeta;