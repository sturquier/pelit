import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import WebFont from 'webfontloader';
import { ThemeProvider } from '@mui/material';

import theme from './config/theme/theme';
import AppRouting from './app/AppRouting';
import './index.scss';

WebFont.load({
	google: {
		families: ['Montserrat'],
	},
});

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(
	<StrictMode>
		<ThemeProvider theme={theme}>
			<AppRouting />
		</ThemeProvider>
	</StrictMode>,
);
