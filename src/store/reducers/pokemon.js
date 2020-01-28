import * as actionTypes from '../actions/actionTypes';

const initialState = {
	pokemon: [],
	loading: false,
	loadingPokemon: false,
	loadingMoves: false,
	currentPokemon: [],
	moves: [],
	currentMove: []
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.FETCH_POKEMON_START: {
			return {
				...state,
				loading: true
			};
		}
		case actionTypes.FETCH_POKEMON_SUCCESS: {
			return {
				...state,
				loading: false,
				pokemon: action.payload
			};
		}
		case actionTypes.FETCH_POKEMON_FAILED: {
			return {
				...state,
				loading: false
			};
		}
		case actionTypes.FETCH_CURRENT_POKEMON_START: {
			return {
				...state,
				loadingPokemon: true
			};
		}
		case actionTypes.FETCH_CURRENT_POKEMON_SUCCESS: {
			return {
				...state,
				loadingPokemon: false,
				currentPokemon: action.payload,
				moves: action.payload.moves,
				currentMove: {}
			};
		}
		case actionTypes.FETCH_CURRENT_POKEMON_FAILED: {
			return {
				...state,
				loadingPokemon: false
			};
		}
		case actionTypes.FETCH_MOVES_START: {
			return {
				...state,
				loadingMoves: true
			};
		}
		case actionTypes.FETCH_MOVES_SUCCESS: {
			return {
				...state,
				loadingMoves: false,
				currentMove: action.payload
			};
		}
		case actionTypes.FETCH_MOVES_FAILED: {
			return {
				...state,
				loadingMoves: false
			};
		}
		default:
			return state;
	}
};

export default reducer;
