import '../../app/assets/styles/CostForm.css'
import React, { useState } from 'react'

const CostForm = props => {
	const [name, setName] = useState('')
	const [amount, setAmount] = useState('')
	const [date, setDate] = useState('')

	const nameChangeHandler = event => {
		setName(event.target.value)
	}

	const amountChangeHandler = event => {
		setAmount(event.target.value)
	}

	const dateChangeHandler = event => {
		setDate(event.target.value)
	}

	const submitHandler = event => {
		event.preventDefault()

		const costData = {
			descriptin: name,
			amount: amount,
			date: new Date(date),
		}

		props.onSaveData(costData)
		setName('')
		setAmount('')
		setDate('')
	}

	return (
		<form onSubmit={submitHandler}>
			<div className='new-cost__controls'>
				<div className='new-cost__control'>
					<label>Название</label>
					<input type='text' value={name} onChange={nameChangeHandler} />
				</div>
				<div className='new-cost__control'>
					<label>Сумма</label>
					<input
						value={amount}
						onChange={amountChangeHandler}
						type='number'
						min='0.01'
						step='0.01'
					/>
				</div>
				<div className='new-cost__control'>
					<label>Дата</label>
					<input
						value={date}
						onChange={dateChangeHandler}
						type='date'
						min='2019-01-01'
						step='2023-09-07'
					/>
				</div>
				<div className='new-cost__actions'>
					<button type='submit'>Добавить расход</button>
					<button type='button' onClick={props.onCancel}>Отмена</button>
				</div>
			</div>
		</form>
	)
}

export default CostForm
