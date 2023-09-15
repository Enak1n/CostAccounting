import React from 'react' // Подключите React, если это не сделано ранее
import '../../app/assets/styles/DiagramBar.css'

const DiagramBar = props => {
	let barFillHeight = '0%'

	if (!isNaN(props.value) && !isNaN(props.maxValue) && props.maxValue > 0) {
		barFillHeight = ((props.value / props.maxValue) * 100).toFixed(2) + '%'
	}

	return (
		<div className='diagram-bar'>
			<div className='diagram-bar__inner'>
				<div
					className='diagram-bar__fill'
					style={{
						height: barFillHeight,
					}}
				></div>
			</div>
			<div className='diagram-bar__label'>{props.label}</div>
		</div>
	)
}

export default DiagramBar
