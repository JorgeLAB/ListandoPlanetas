import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import PlanetasScreen from './screens/planetas.js';
import PlanetaScreen from './screens/planeta.js';

const Routes = () => (
	<BrowserRouter>
		<Switch>
			<Route exact path='/' component={PlanetasScreen} /> 
			<Route exact path='/planeta' component={PlanetaScreen} /> 
		</Switch>
	</BrowserRouter>
)

export default Routes;