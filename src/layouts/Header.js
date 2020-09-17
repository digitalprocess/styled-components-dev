import React from 'react'
import styled from 'styled-components'
import logo from '../logo.svg'
import { color, elevation, fixed } from '../utilities'

const Header = ({ className }) => (
	<header className={className}>
		<img src={logo} alt="logo" className="logo" />
		<h1>sitelogo</h1>
	</header>
)

export default styled(Header)`
	color: white;
	display: flex;
	background: ${color.bg};
	padding: 1rem 5%;
	width: 100%;
	${fixed}
	${elevation[2]};

	h1 {
		margin: 0;
	}

	.logo {
		width: 60px;
	}
`
