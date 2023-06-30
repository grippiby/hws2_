import React from 'react'
import { Slider, SliderProps } from '@mui/material'

const SuperRange: React.FC<SliderProps> = (props) => {
	console.log(props.value)
	return (
		<Slider
			sx={{
				// стили для слайдера // пишет студент
				width: '150px',
				color: '#3a8589',
			}}
			{...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
		/>
	)
}

export default SuperRange
