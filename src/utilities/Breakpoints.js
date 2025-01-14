import { css } from 'styled-components'

const size = {
	small: 400,
	medium: 960,
	large: 1140
}

export const above = Object.keys(size).reduce((acc, label) => {
	acc[label] = (...args) => css`
		@media (min-width: ${size[label] / 16}em) {
			${css(...args)}
		}
	`
	return acc
}, {})
