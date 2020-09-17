export const fixed = ({
	y = 'top',
	x = 'left',
	yValue = 0,
	xValue = 0,
}) => `
	position: fixed;
	${y}: ${yValue};
	${x}: ${xValue};
`

export const absolute = ({
	y = 'top',
	x = 'left',
	yValue = 0,
	xValue = 0,
}) => `
	position: absolute;
	${y}: ${yValue};
	${x}: ${xValue};
`
