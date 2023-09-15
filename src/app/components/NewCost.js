import CostForm from './CostForm'
import '../../app/assets/styles/NewCost.css'
import React, { useState } from 'react'

const NewCost = props => {
	const [isFormVisible, setIsFormVisible] = useState(false)

	const saveCostDataHandler = costData => {
		const cost = {
			...costData,
			id: Math.random().toString(),
		}

		props.onAddCost(cost)

		setIsFormVisible(false)
	}

	const inputCostDataHandler = () => {
		setIsFormVisible(true)
	}

	const cancelCostHandler = () => {
		setIsFormVisible(false)
	}

	return (
		<div className='new-cost'>
			{!isFormVisible && (
				<button onClick={inputCostDataHandler}>Добавить новый расход</button>
			)}
			{isFormVisible && (
				<CostForm
					onSaveData={saveCostDataHandler}
					onCancel={cancelCostHandler}
				/>
			)}
		</div>
	)
}

export default NewCost
