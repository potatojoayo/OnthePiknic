import React from 'react'
import COLORS from '../utils/colors'
import Button from '../style/Button'
import Filter from '../style/Filter'


interface DropdownItemProps {
	subCategory: string;
	isLast: boolean;
}

const DropdownItem: React.FC<DropdownItemProps> = ({subCategory, isLast}) => {
	return <Button
		minWidth='80px'
		backgroundColor={COLORS.BROWN}
		justifyContent='start'
		padding='5px 10px'
		borderRadius={isLast ? '0px 0px 10px 10px' : ''}
		color={COLORS.YELLOW}
		position='relative'
		zIndex={2}
		margin='.5px'
		fontFamily='Meslo'
		fontSize={17}
	>
		{subCategory}
		<Filter />
	</Button>
}

export default DropdownItem;
