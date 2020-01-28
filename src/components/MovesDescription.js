import React from 'react';
import styled from 'styled-components';


const Wrapper = styled.div`
	margin-top: 15px;
	width: 45%;
	height: 145px;
	font-size: 1em;
`;

const MoveDetailTitle = styled.p`
	border-bottom: 0.3px solid #585858;
	width: 30%;
	margin-bottom: 5px;
	color: black;
	margin: 5px 0;
`;

const Paragraph = styled.p`
	color: black;
	margin: 5px 0;
`;

const MovesDescription = props => (
	<Wrapper>
		<MoveDetailTitle>Move</MoveDetailTitle>
		<Paragraph>Name: {props.data ? props.data.name : null}</Paragraph>
		<Paragraph>Type: {props.data ? props.data.type.name : null}</Paragraph>
		<Paragraph>Class: {props.data ? props.data.damage_class.name : null}</Paragraph>
		<Paragraph>Acc: {props.data ? props.data.accuracy : null}</Paragraph>
		<Paragraph>Pwr: {props.data ? props.data.power : null}</Paragraph>
		<Paragraph>PP: {props.data ? props.data.pp : null}</Paragraph>
	</Wrapper>
);
export default MovesDescription;

