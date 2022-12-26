import { Typography } from '@mui/material';

import { WithAppBar } from '../../hoc';

function Expenses(): JSX.Element {
	return <Typography variant="h1">Dépenses</Typography>;
}

export default WithAppBar(Expenses);
