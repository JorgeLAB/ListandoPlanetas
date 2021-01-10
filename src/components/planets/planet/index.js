import React, {Fragment} from "react";
import GrayImg from '../../shared/gray_img';
import DescriptionWithLink from '../../shared/descriptionWithLink';
import { Link } from 'react-router-dom';

const Planet = (props) => {
	return(
		<Fragment>		
			<Link to={`/planet/${props.id}`}>
				<h4>{props.nome}</h4>
			</Link>
			<DescriptionWithLink link_planet = { props.link_planet } description = { props.description } name={ props.name }/>
			<GrayImg img_url = { props.img_url } alt_valor = { props.alt_valor } />
		</Fragment>
	)		
}

export default Planet;