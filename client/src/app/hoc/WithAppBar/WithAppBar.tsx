import { Fragment, ComponentType } from 'react';

import { AppBar } from '../../components';

function withAppBar(Component: ComponentType): () => JSX.Element {
	function WithAppBar(): JSX.Element {
		return (
			<Fragment>
				<AppBar />
				<Component />
			</Fragment>
		);
	}

	return WithAppBar;
}

export default withAppBar;
