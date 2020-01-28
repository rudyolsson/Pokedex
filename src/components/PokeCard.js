import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import * as actions from '../store/actions';


const transition = 'transition: all 0.2s ease-out';
const Wrapper = styled.div`
	width: 150px;
	height: 150px;
	margin: 10px;
	background-color: #fff;
	background-repeat: no-repeat;
	border-radius: 5px;
	box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.35);
	cursor: pointer;
	transition: ${transition};
	&:hover {
		box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.5);
	}
`;

const Image = styled.img`
	height: 100%;
	width: 100%;
	transition: ${transition};
	&:hover {
	transform: scale(1.05);
}
`;

class PokeCard extends Component {
	render() {
		return (
			<Wrapper
				onClick={() => this.props.onSetCurrentPokemon(this.props.pokemonName)}
			>
				<Image src={this.props.url} alt="pokemon" />
			</Wrapper>
		);
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onSetCurrentPokemon: name => dispatch(actions.setCurrentPokemon(name))
	};
};

export default connect(
	null,
	mapDispatchToProps
)(PokeCard);


