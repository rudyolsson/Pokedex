import React from 'react';
import styled from 'styled-components';

import PokeCard from './PokeCard';

const Wrapper = styled.div`
	height: 580px;
	padding-top: 20px;
	padding-left: 0;
	list-style-type: none;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;
`;

const PokeCardContainer = props => {
	const results = props.data;
	let pokemons;
	if (results.length > 0) {
		pokemons = results.map((pokemon, index) => (
			<PokeCard
				url={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index +
					1}.png`}
				key={index + 1}
				pokemonName={pokemon.name}
			/>
		));
	}
	return <Wrapper>{pokemons}</Wrapper>;
};

export default PokeCardContainer;
