import '../../app/assets/styles/CostsList.css'
import CostItem from './CostItem'

const CostsList = props => {
	if (props.costList.length === 0) {
		return <h2 className='cost-list__fallback'>В этом году трат нет</h2>
	}
	return (
		<ul className='cost-list'>
			{props.costList.map(cost => (
				<CostItem
					key={cost.id}
					date={cost.date}
					descriptin={cost.descriptin}
					amount={cost.amount}
				/>
			))}
		</ul>
	)
}

export default CostsList
