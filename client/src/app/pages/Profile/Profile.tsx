import { Typography } from '@mui/material';

import { WithAppBar } from '../../hoc';

function Profile(): JSX.Element {
	return <Typography variant="h1">Mon profil</Typography>;
}

export default WithAppBar(Profile);
