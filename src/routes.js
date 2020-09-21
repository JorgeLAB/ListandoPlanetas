import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import PlanetasScreen from './screens/planetas.js';

const Routes = () => (
	<BrowserRouter>
		<Switch>
			<Route exact path='/' component={PlanetasScreen} /> 
		</Switch>
	</BrowserRouter>
)

export default Routes;