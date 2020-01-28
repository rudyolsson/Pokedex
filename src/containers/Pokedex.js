import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import PokeList from './PokeList';
import Details from './Details';
import PokedexHeader from '../components/PokedexHeader';

const Wrapper = styled.div`
	overflow-x: hidden;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 950px;
	height: 700px;
	padding-left: 10px;
	margin: 50px auto;
	background-color: #f22;
	border-radius: 10px;
	border-top-right-radius: 120px;
	box-shadow: 0 14px 45px rgba(0, 0, 0, 0.22), 0 18px 45px rgba(0, 0, 0, 0.22);
	&:after {
	content: '';
	display: table;
	clear: both;
	}
`;

const LeftPanel = styled.div`
	width: 50%;
`;

class Pokedex extends Component {
	render() {
		return (
			<Wrapper>
				<LeftPanel>
					<PokedexHeader />
					<PokeList pokemon={this.props.pokemon} />
				</LeftPanel>
				<Details pokemon={this.props.pokemon} />
			</Wrapper>
		);
	}
}

const mapStateToProps = state => {
	return {
		pokemon: state.pokemon
	};
};

export default connect(mapStateToProps)(Pokedex);
