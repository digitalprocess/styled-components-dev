import styled from 'styled-components'
import { elevation } from '../utilities'

import { Button } from './Buttons'

export const Card = styled.div`
	padding: 1rem;
	border-radius: 6px;
	margin: 1rem 0;
	${elevation[2]};
	h2 {
		font-size: 1.8rem;
	}
`

const CardButton = styled(Button)`
	width: 100%;
`

Card.Button = CardButton
