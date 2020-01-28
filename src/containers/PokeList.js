import React, { Component } from 'react';
import styled from 'styled-components';

import PokeCardContainer from '../components/PokeCardContainer';

const Wrapper = styled.div`
	overflow: scroll;
	display: flex;
	margin-left: 25px;
	border-radius: 5px;
	box-shadow: inset 0 0 65px rgba(0, 0, 0, 0.6);
	align-items: center;
	width: 100%;
	height: 70%;
	background-color: #bff9ff;
	flex-wrap: wrap;
	justify-content: space-around;
`;

class PokeList extends Component {
	render() {
		return (
			<Wrapper>
				<PokeCardContainer
					data={this.props.pokemon}
					handleOnClick={this.props.handleOnClick}
				/>
			</Wrapper>
		);
	}
}

export default PokeList;
