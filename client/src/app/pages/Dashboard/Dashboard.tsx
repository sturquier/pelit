import { Typography } from '@mui/material';

import { WithAppBar } from '../../hoc';

function Dashboard(): JSX.Element {
	return <Typography variant="h1">Dashboard</Typography>;
}

export default WithAppBar(Dashboard);
