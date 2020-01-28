import React, { Component } from 'react';
import { connect } from 'react-redux';

import PokeList from '../PokeList/PokeList';
import Details from '../Details/Details';
import PokedexHeader from '../../components/PokedexHeader';
import classes from './Pokedex.css';

class Pokedex extends Component {
	render() {
		return (
			<div className={classes.Pokedex}>
				<div className={classes.PokedexLeftPanel}>
					<PokedexHeader />
					<PokeList pokemon={this.props.pokemon} />
				</div>
				<Details pokemon={this.props.pokemon} />
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		pokemon: state.pokemon
	};
};

export default connect(mapStateToProps)(Pokedex);
