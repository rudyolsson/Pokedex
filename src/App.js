import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from './store/actions';

import Aux from './hoc/Aux/Aux';
import Header from './components/Header.js';
import Pokedex from './containers/Pokedex';
import PokeballLoader from './components/UI/PokeballLoader/PokeballLoader';
import classes from './App.css';

class App extends Component {
	componentDidMount() {
		this.props.onFetchPokemon();
		this.props.onFetchCurrentPokemon('bulbasaur');
	}
	render() {
		let page = null;
		if (!this.props.loading) {
			page = (
				<Aux>
					<Header />
					<Pokedex />
				</Aux>
			);
		} else {
			page = (
				<Aux>
					<Header />
					<div className={classes.App}>
						<PokeballLoader />
					</div>
				</Aux>
			);
		}
		return <div>{page}</div>;
	}
}

const mapStateToProps = state => {
	return {
		loading: state.loading
	};
};

const mapDispatchToProps = dispatch => {
	return {
		onFetchPokemon: () => dispatch(actions.fetchPokemon()),
		onFetchCurrentPokemon: name => dispatch(actions.fetchCurrentPokemon(name))
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App);
