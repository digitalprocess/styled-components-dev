import styled from 'styled-components'
import { teal, elevation, social } from '../utilities'
import { applyStyleModifiers } from 'styled-components-modifiers'
import { lighten } from 'polished'

const BUTTON_MODIFIERS = {
	small: () => `
		font-size: 1rem;
		padding: 3px 10px;
	`,
	cancel: () => `
		background: tomato;
		&:hover {
			background: ${lighten(0.2, 'tomato')};
		}
	`
}

export const Button = styled.button`
	margin: 0 1rem 1rem 0;
	padding: 5px 10px;
	border-radius: 4px;
	color: white;
	font-size: 2rem;
	border: none;
	/* background: ${props => props.theme.colors.secondary}; */
	background: ${social.facebook};
	transition: all 0.3s ease;
	${elevation[1]};
	&:hover {
		background: ${lighten(0.2, teal)};
		${elevation[0]};
	}
	${applyStyleModifiers(BUTTON_MODIFIERS)};
`

export const CancelButton = styled(Button)`
	background: tomato;
`
