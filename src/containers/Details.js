import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import MovesDescription from '../components/MovesDescription';
import Spinner from '../components/UI/Spinner/Spinner';
import * as actions from '../store/actions';
import PokedexScreen from '../images/pokedex-screen.jpg';

const DetailView = styled.div`
	width: 45%;
	height: 100%;
	margin-left: 50px;
	padding: 0 10px;
	background-color: #ff0000;
	border-top-right-radius: 40px;
	border-bottom-right-radius: 10px;
	box-shadow: -5px 0 30px 1px rgba(0, 0, 0, 0.5);
	display: flex;
	flex-direction: column;
	justify-content: center;
`;

const SpriteImageBackground = styled.div`
	width: 80%;
	height: 250px;
	margin: 10px auto;
	background-image: url(${PokedexScreen}),
	linear-gradient(90deg, #ffdc00, #ffdc00);
	background-repeat: no-repeat;
	background-size: 100% 100%;
	color: #585858;
	text-align: center;
	border-radius: 5px;
`;

const SpriteImage = styled.img`
	width: 75%;
	height: 70%;
	margin-top: 20px;
`;

const DataWrapper = styled.div`
	border: 2px solid #585858;
	width: 80%;
	height: 330px;
	padding: 10px;
	margin: 0 auto;
	background-color: #2bfa0b;
	border-radius: 10px;
	box-shadow: inset 0 0 20px rgba(0, 0, 0, 0.22);
`;

const MovesContainer = styled.div `
	display: flex;
	opacity: 0.6;
`;

const MoveList = styled.div`
	margin-top: 15px;
	display: flex;
	flex-direction: column;
	width: 60%;
	height: 190px;
	overflow: scroll;
`;

const textColor = '#585858';

const DataName = styled.h1`
	margin: 0 0 5px;
	text-align: center;
	color: ${textColor};
`;

const DataChar = styled.div`
	font-size: 1.2em;
	margin: 0;
	padding-left: 5px;
	color: ${textColor};
`;

const AllMovesTitle = styled.p`
	opacity: 0.6;
	border-bottom: 0.3px solid ${textColor};
	width: 35%;
	margin: 10px 0 0 5px;
	padding: 4px;
	color: black;
`;

const Move = styled.div`
	cursor: pointer;
	margin: 1px 0 0 5px;
	&:hover {
		font-weight: bold;
		padding: 4px;
		color: black;	
	}	
`;


class Details extends Component {
	onClickHandler = move => {
		this.props.onFetchMoves(move);
	};

	render() {
		let currentMove = null;
		let img = null;
		if (this.props.loadingPokemon) {
			img = (
				<SpriteImageBackground>
					<Spinner />
				</SpriteImageBackground>
			);
		} else {
			img = (
				<SpriteImageBackground>
					<SpriteImage
						alt="pokemon"
						src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
							this.props.currentPokemon.id
						}.png`}
					/>
				</SpriteImageBackground>
			);
		}
		if (this.props.currentMove.name && !this.props.loadingMoves) {
			currentMove = <MovesDescription data={this.props.currentMove} />;
		} else if (this.props.loadingMoves) {
			currentMove = <Spinner />;
		} else {
			currentMove = <MovesDescription />;
		}
		return (
			<DetailView>
				{img}
				<DataWrapper>
					<DataName>
						# {this.props.currentPokemon.id} {this.props.currentPokemon.name}
					</DataName>
					<DataChar>
						Type: {this.props.currentPokemon.type}
					</DataChar>
					<AllMovesTitle>All Moves</AllMovesTitle>
					<MovesContainer>
						<MoveList>
							{this.props.moves.map((move, index) => {
								return (
									<Move
										key={index}
										onClick={() => this.onClickHandler(move.move.name)}
									>
										{move.move.name}
										</Move>

								);
							})}
						</MoveList>
						{currentMove}
					</MovesContainer>
				</DataWrapper>
			</DetailView>
		);
	}
}

const mapStateToProps = state => {
	return {
		moves: state.moves,
		currentMove: state.currentMove,
		loadingMoves: state.loadingMoves,
		currentPokemon: state.currentPokemon,
		loadingPokemon: state.loadingPokemon
	};
};

const mapDispatchToProps = dispatch => {
	return {
		onFetchMoves: moveToFetch => dispatch(actions.fetchMoves(moveToFetch))
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Details);
