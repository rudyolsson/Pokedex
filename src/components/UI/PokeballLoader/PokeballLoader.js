import React from 'react';

import classes from './PokeballLoader.css';

const Loader = () => (
	<div className={classes.Wrapper}>
		<div className={classes.Pokeball}>
			<div className={classes.PokeballButton} />
		</div>
	</div>
);

export default Loader;
