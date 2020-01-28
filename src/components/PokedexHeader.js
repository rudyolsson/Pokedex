import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
	display: flex;
	margin-left: 25px;
	margin-bottom: 15px;
	justify-content: flex-start;
	width: 30%;
`;

const Circle = styled.div`
	border-radius: 50%;
	width: 15px;
	height: 15px;
	background-repeat: no-no-repeat;
	background-size: 100% 100%;
	margin-left: 5px;
`;

const BlueCircle = styled(Circle)`
	background-image: url('../../images/p-blue.png');
	width: 60px;
	height: 60px;
	margin-left: 5px;
`;

const RedCircle = styled(Circle)`
	background-image: url('../../images/p-red.png');
`;

const YellowCircle = styled(Circle)`
	background-image: url('../../images/p-yellow.png');
`;

const GreenCircle = styled(Circle)`
	background-image: url('../../images/p-rgreen.png');
`;



const PokedexHeader = () => (
	<Wrapper>
		<BlueCircle />
		<RedCircle />
		<YellowCircle />
		<GreenCircle />
	</Wrapper>
);

export default PokedexHeader;
