import LoginPage from './components/pages/LoginPage';
import { Routes, Route } from 'react-router-dom';
import OrderPage from './components/pages/OrderPage';
import ErrorPage from './components/pages/ErrorPage';

const App = () => {
	return (
		<div>
			<Routes>
				<Route path="/" element={<LoginPage />} />
				<Route path="/order/:id" element={<OrderPage />} />
				<Route path="*" element={<ErrorPage />} />
			</Routes>
		</div>
	);
};

export default App;
