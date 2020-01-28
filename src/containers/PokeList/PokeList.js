import React, { Component } from 'react';

import PokeCardContainer from '../../components/PokeCardContainer/PokeCardContainer';
import classes from './PokeList.css';

class PokeList extends Component {
	render() {
		return (
			<div className={classes.PokeList}>
				<PokeCardContainer
					data={this.props.pokemon}
					handleOnClick={this.props.handleOnClick}
				/>
			</div>
		);
	}
}

export default PokeList;
