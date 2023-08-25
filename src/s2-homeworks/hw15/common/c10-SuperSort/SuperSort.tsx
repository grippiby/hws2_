import React from 'react'
/*
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore'
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
// добавить в проект иконки и импортировать
/!*const downIcon = '[\\/]'
const upIcon = '[/\\]'
const noneIcon = '[--]' | UnfoldMoreIcon*!/


*/
import icon1 from '../icons/more_unfold_icon.png'
import icon2 from '../icons/arrow_drop_up_icon.png'
import icon3 from '../icons/arrow_down_drop_icon.png'

const downIcon = icon3
const upIcon = icon2
const noneIcon = icon1

export type SuperSortPropsType = {
	id?: string
	sort: string
	value: string
	onChange: (newSort: string) => void
}

export const pureChange = (sort: string, down: string, up: string) => {
	return sort === '' ? down : sort === down ? up : sort === up ? '' : down
}

const SuperSort: React.FC<SuperSortPropsType> = ({
	sort,
	value,
	onChange,
	id = 'hw15',
}) => {
	const up = '0' + value
	const down = '1' + value

	const onChangeCallback = () => {
		onChange(pureChange(sort, down, up))
	}

	const icon = sort === down ? downIcon : sort === up ? upIcon : noneIcon

	return (
		<span id={id + '-sort-' + value} onClick={onChangeCallback}>
			<img id={id + '-icon-' + sort} src={icon} alt={value} />
		</span>
	)
}

export default SuperSort
