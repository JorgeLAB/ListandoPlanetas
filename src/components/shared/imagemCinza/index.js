import React from 'react';

const ImagemCinza = (props) => {
	return(
		<div>
			<img src={props.img_url} alt={ props.alt_valor }></img> 
		</div>
	)
}

export default ImagemCinza;