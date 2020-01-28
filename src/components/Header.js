import React from 'react';
import styled from 'styled-components';

import LogoImg from '../images/pokeball.png';

const Wrapper = styled.div`
	margin-top: 0;
	width: 100%;
	height: 70px;
	background-color: #3b4cca;
	display: flex;
`;

const HeaderContent = styled.div`
	display: flex;
	justify-content: flex-start;
	color: white;
	width: 100%;
`;

const Logo = styled.div`
	background-image: url(${LogoImg});
	width: 70px;
	height: 70px;
	background-repeat: no-no-repeat;
	background-size: 100% 100%;
	margin: 15px;
	border-radius: 50%;
	box-shadow: 0 14px 45px rgba(0, 0, 0, 0.22);
`;

const HeaderName = styled.h1`
	margin-bottom: 5px;
	font-size: 2.6em;
`;

const CopyRight = styled.p`
	font-size: 0.6em;
	text-align: right;
	color: white;
	margin-right: 1em;
`;

const Header = props => (
	<Wrapper>
		<HeaderContent>
			<Logo />
			<HeaderName>POKEDEX</HeaderName>
		</HeaderContent>
		<CopyRight>Copr. Rudy Olsson {new Date().getFullYear()}</CopyRight>
	</Wrapper>
);

export default Header;
