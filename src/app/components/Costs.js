import '../../app/assets/styles/Costs.css'
import Card from './Card'
import CostsFilter from './CostsFilter'
import React, { useState } from 'react'
import CostsList from './CostsList'
import CostsDiagram from './CostsDiagram'

const Costs = props => {
	const [selectedYear, setSelectedYear] = useState('2022')
	const yearChangeHandler = year => {
		setSelectedYear(year)
	}

	const filterCosts = props.costs.filter(cost => {
		return cost.date.getFullYear().toString() === selectedYear
	})
	return (
		<div>
			<Card className='costs'>
				<CostsFilter year={selectedYear} onChangeYear={yearChangeHandler} />
				<CostsDiagram costs={filterCosts} />
				<CostsList costList={filterCosts} />
			</Card>
		</div>
	)
}

export default Costs
