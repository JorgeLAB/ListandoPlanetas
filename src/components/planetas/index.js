import React, {Fragment} from 'react';
import Planeta from './planeta';


const Planetas = () => {
	return (
		<Fragment>
			<h3> Lista de Planetas </h3>
			
			<hr/>

			<Planeta nome="Mercúrio"
					descricao= "Mercúrio é o menor[nota 1][nota 2] e mais interno planeta do Sistema Solar, orbitando o Sol a cada 87,969 dias terrestres. A sua órbita tem a maior excentricidade e o seu eixo apresenta a menor inclinação em relação ao plano da órbita dentre todos os planetas do Sistema Solar. Mercúrio completa três rotações em torno de seu eixo a cada duas órbitas. O periélio da órbita de Mercúrio apresenta uma precessão de 5 600 segundos de arco por século, um fenômeno completamente explicado apenas a partir do século XX pela Teoria da Relatividade Geral formulada por Albert Einstein.[2] A sua aparência é brilhante quando observado da Terra, tendo uma magnitude aparente que varia de −2,6 a 5,7, embora não seja facilmente observado pois sua separação angular do Sol é de apenas 28,3º. 
									Uma vez que Mercúrio normalmente se perde no intenso brilho solar, exceto em eclipses solares, só pode ser observado a olho nu durante o crepúsculo matutino ou vespertino."	
                     
          img_url= "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Mercury_in_color_-_Prockter07-edit1.jpg/280px-Mercury_in_color_-_Prockter07-edit1.jpg" 
          alt_valor= "Projeção do Planeta mercúrio."
          link= 'https://pt.wikipedia.org/wiki/Merc%C3%BArio_(planeta)'
			/>
			<br/>
			<br/>
			<Planeta nome="Vênus"
							 descricao = "Vénus (português europeu) ou Vênus (português brasileiro) (AO 1990: Vénus ou Vênus)[1] é o segundo planeta do Sistema Solar em ordem de distância a partir do Sol, orbitando-o a cada 224,7 dias. Recebeu seu nome em homenagem à deusa romana do amor e da beleza Vénus, equivalente a Afrodite. Depois da Lua, é o objeto mais brilhante do céu noturno, atingindo uma magnitude aparente de -4,6, o suficiente para produzir sombras. A distância média da Terra a Vênus é de 0,28 AU, sendo esta a menor distância entre qualquer par de planetas.[2] Como Vénus se encontra mais próximo do Sol do que a Terra, ele pode ser visto aproximadamente na mesma direção do Sol (sua maior elongação é de 47,8°). Vénus atinge seu brilho máximo algumas horas antes da alvorada ou depois do ocaso, sendo por isso conhecido como a estrela da manhã (Estrela d'Alva) ou estrela da tarde (Vésper); também é chamado Estrela do Pastor."

					 		 img_url= "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/PIA23791-Venus-RealAndEnhancedContrastViews-20200608_%28cropped2%29.jpg/280px-PIA23791-Venus-RealAndEnhancedContrastViews-20200608_%28cropped2%29.jpg"
							 alt_valor= "Projeção planeta Vênus." 
					 		 link='https://pt.wikipedia.org/wiki/V%C3%A9nus_(planeta)'
			/>

		</Fragment>
	)
}

export default Planetas;