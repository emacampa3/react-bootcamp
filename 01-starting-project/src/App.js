/* Route is a component, that allows us to apply certain path */
import { Route } from 'react-router-dom'

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
				<Route path='/welcome'>
					<Welcome />
				</Route>
				<Route path='/products'>
					<Products />
				</Route>
        <Route path='/product-detail/:productId'> {/* productId is a placeholder */}
        <ProductDetail />
        </Route>
			</main>
		</div>
	)
}

export default App;
