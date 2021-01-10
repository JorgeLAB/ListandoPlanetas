import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PlanetsScreen from './screens/planets';
import PlanetScreen from './screens/planet';
import PageNotFound from './screens/paginaNaoEncontrada.js';

const Routes = () => (
	<BrowserRouter>
		<Switch>
			<Route exact path='/' component={PlanetsScreen} /> 
			<Route exact path='/planet/:id' component={PlanetScreen} />
			<Route exact path='*'>
				<PaginaNaoEncontrada />
			</Route> 
		</Switch>
	</BrowserRouter>
)

export default Routes;