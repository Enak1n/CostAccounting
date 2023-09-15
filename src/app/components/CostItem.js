import '../../app/assets/styles/CostItem.css'
import CostDate from './CostDate'
import Card from './Card'

const CostItem = props => {
	return (
		<li>
			<Card className='cost-item'>
				<CostDate date={props.date} />
				<div className='cost-item__description'>
					<h2>{props.descriptin}</h2>
					<div className='cost-item__price'>${props.amount}</div>
				</div>
			</Card>
		</li>
	)
}

export default CostItem
