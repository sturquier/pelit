import { Typography } from '@mui/material';

import { WithAppBar } from '../../hoc';

function Calendar(): JSX.Element {
	return <Typography variant="h1">Calendrier</Typography>;
}

export default WithAppBar(Calendar);
