import Costs from './app/components/Costs'
import NewCost from './app/components/NewCost'
import React, {useState} from 'react'

	const initialCosts = [
		{
			id: 'c1',
			date: new Date(2023, 8, 6),
			descriptin: 'Холодильник',
			amount: 999.99,
		},

		{
			id: 'c2',
			date: new Date(2023, 8, 6),
			descriptin: 'MacBook',
			amount: 1254.72,
		},

		{
			id: 'c3',
			date: new Date(2023, 8, 6),
			descriptin: 'Джинсы',
			amount: 49.99,
		},
	]

const App = () => {

	const [costs, setCosts] = useState(initialCosts)

	const addCostHandler = cost => {
		setCosts(prevCosts => {
			return [cost, ...prevCosts]
		})
	}

	return (
		<div className='App'>
			<NewCost onAddCost={addCostHandler} />
			<Costs costs={costs} />
		</div>
	)
}

export default App
