/* Route is a component, that allows us to apply certain path */
import { Route, Switch } from 'react-router-dom'

import Welcome from './pages/Welcome';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import MainHeader from './components/MainHeader'

function App() {
  return (
		<div>
			<MainHeader />
			<header></header>
			<main>
				<Switch>
					<Route path='/welcome'>
						<Welcome />
					</Route>
					<Route path='/products' exact>
						<Products />
					</Route>
					<Route path='/product/:productId'>{/* productId is a placeholder */}
						<ProductDetail />
					</Route>
				</Switch>
			</main>
		</div>
	)
}

export default App;
