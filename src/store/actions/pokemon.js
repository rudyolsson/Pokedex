import * as actionTypes from './actionTypes';

const Pokedex = require('pokeapi-js-wrapper');

const options = {
	protocol: 'https',
	versionPath: '/api/v2/',
	cache: true
};

const interval = {
	limit: 151
};

const P = new Pokedex.Pokedex(options);

export const fetchPokemonStart = () => {
	return {
		type: actionTypes.FETCH_POKEMON_START
	};
};

export const fetchPokemonSuccess = pokemon => {
	return {
		type: actionTypes.FETCH_POKEMON_SUCCESS,
		payload: pokemon
	};
};

export const fetchPokemonFailed = error => {
	return {
		type: actionTypes.FETCH_POKEMON_FAILED,
		payload: error
	};
};

export const fetchPokemon = () => {
	return dispatch => {
		dispatch(fetchPokemonStart());
		P.getPokemonsList(interval)
			.then(response => {
				dispatch(fetchPokemonSuccess(response.results));
			})
			.catch(err => {
				dispatch(fetchPokemonFailed(err));
			});
	};
};

export const fetchCurrentPokemonStart = () => {
	return {
		type: actionTypes.FETCH_CURRENT_POKEMON_START
	};
};

export const fetchCurrentPokemonSuccess = pokemon => {
	return {
		type: actionTypes.FETCH_CURRENT_POKEMON_SUCCESS,
		payload: pokemon
	};
};

export const fetchCurrentPokemonFailed = error => {
	return {
		type: actionTypes.FETCH_CURRENT_POKEMON_FAILED,
		payload: error
	};
};

export const fetchCurrentPokemon = name => {
	return dispatch => {
		dispatch(fetchCurrentPokemonStart());
		P.getPokemonByName(name)
			.then(response => {
				dispatch(fetchCurrentPokemonSuccess(response));
			})
			.catch(err => {
				dispatch(fetchCurrentPokemonFailed(err));
			});
	};
};

export const fetchMovesStart = () => {
	return {
		type: actionTypes.FETCH_MOVES_START
	};
};

export const fetchMovesSuccess = moves => {
	return {
		type: actionTypes.FETCH_MOVES_SUCCESS,
		payload: moves
	};
};

export const fetchMovesFailed = error => {
	return {
		type: actionTypes.FETCH_MOVES_FAILED,
		payload: error
	};
};

export const fetchMoves = moveToFetch => {
	return dispatch => {
		dispatch(fetchMovesStart());
		P.getMoveByName(moveToFetch)
			.then(response => {
				dispatch(fetchMovesSuccess(response));
			})
			.catch(err => {
				dispatch(fetchMovesFailed(err));
			});
	};
};

export const setCurrentPokemon = name => {
	return dispatch => {
		dispatch(fetchCurrentPokemon(name));
	};
};
