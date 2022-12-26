import { BrowserRouter, Routes, Route } from 'react-router-dom';

import {
	Calendar,
	Dashboard,
	Expenses,
	Login,
	NotFound,
	Profile,
} from './pages';

function AppRouting(): JSX.Element {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Dashboard />} />
				<Route path="/calendar" element={<Calendar />} />
				<Route path="/expenses" element={<Expenses />} />
				<Route path="/login" element={<Login />} />
				<Route path="/profile" element={<Profile />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	);
}

export default AppRouting;
