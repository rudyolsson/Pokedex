import React, { Component } from 'react';
import { connect } from 'react-redux';

import MovesDescription from '../../components/MovesDescription';
import Spinner from '../../components/UI/Spinner/Spinner';
import classes from './Details.css';
import * as actions from '../../store/actions';

class Details extends Component {
	onClickHandler = move => {
		this.props.onFetchMoves(move);
	};

	render() {
		let currentMove = null;
		let img = null;
		if (this.props.loadingPokemon) {
			img = (
				<div className={classes.SpriteImageBackground}>
					<Spinner />
				</div>
			);
		} else {
			img = (
				<div className={classes.SpriteImageBackground}>
					<img
						className={classes.SpriteImage}
						alt="pokemon"
						src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
							this.props.currentPokemon.id
						}.png`}
					/>
				</div>
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
			<div className={classes.DetailView}>
				{img}
				<div className={classes.DataWrapper}>
					<h1 className={classes.DataName}>
						# {this.props.currentPokemon.id} {this.props.currentPokemon.name}
					</h1>
					<p className={classes.DataChar}>
						Type: {this.props.currentPokemon.type}
					</p>
					<p className={classes.AllMovesTitle}>All Moves</p>
					<div className={classes.MovesContainer}>
						<div className={classes.MovesList}>
							{this.props.moves.map((move, index) => {
								return (
									<div
										className={classes.Move}
										key={index}
										onClick={() => this.onClickHandler(move.move.name)}
									>
										{move.move.name}
									</div>
								);
							})}
						</div>
						{currentMove}
					</div>
				</div>
			</div>
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
