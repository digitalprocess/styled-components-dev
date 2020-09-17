import React from 'react'
import GlobalStyle from './Global'
import { ThemeProvider } from 'styled-components/macro'

import Header from './layouts/Header'
import { Button, Card } from './elements'

const theme = {
	colors: {
		primary: '#e54b4b',
		secondary: '#dbde61',
	}
}

function App() {
	return (
		<ThemeProvider theme={theme}>
			<Header />
			<GlobalStyle />
			<main
				css={`
					padding: 1rem;
				`}
			>
				<Button>Button</Button>
				<Button modifiers={['cancel', 'small']}>Cancel</Button>
				<Card>
					<h2>Card Heading</h2>
					<Card.Button>Button</Card.Button>
					<Card.Button as="a" modifiers="cancel">Cancel</Card.Button>
				</Card>
			</main>
		</ThemeProvider>
	)
}

export default App
