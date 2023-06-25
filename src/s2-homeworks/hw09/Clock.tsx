import React, { MouseEvent, useState } from 'react'
import SuperButton from '../hw04/common/c2-SuperButton/SuperButton'
import { restoreState } from '../hw06/localStorage/localStorage'
import s from './Clock.module.css'

function Clock() {
	const [timerId, setTimerId] = useState<number | undefined>(undefined)
	// for autotests // не менять // можно подсунуть в локалСторэдж нужную дату, чтоб увидеть как она отображается
	const [date, setDate] = useState<Date>(
		new Date(restoreState('hw9-date', Date.now()))
	)
	const [show, setShow] = useState<boolean>(false)

	const start = () => {
		// пишут студенты // запустить часы (должно отображаться реальное время, а не +1)
		const id = setInterval(() => {
			setDate(new Date())
		}, 1000)
		setTimerId(+id)
		// сохранить ид таймера (https://learn.javascript.ru/settimeout-setinterval#setinterval)
	}

	const stop = () => {
		clearInterval(timerId)
		setTimerId(undefined)
		// пишут студенты // поставить часы на паузу, обнулить ид таймера (timerId <- undefined)
	}

	const onMouseEnter = (e: MouseEvent<HTMLDivElement>) => {
		e.currentTarget ? setShow(true) : setShow(false)
		// пишут студенты // показать дату если наведена мышка
	}
	const onMouseLeave = (e: MouseEvent<HTMLDivElement>) => {
		e.currentTarget ? setShow(false) : setShow(true)
		// пишут студенты // спрятать дату если мышка не наведена
	}

	/*
	//первонач значение
		const stringTime = 'date->time' || <br /> // часы24:минуты:секунды (01:02:03)/(23:02:03)/(24:00:00)/(00:00:01) // пишут студенты
		const stringDate = 'date->date' || <br /> // день.месяц.год (01.02.2022) // пишут студенты, варианты 01.02.0123/01.02.-123/01.02.12345 не рассматриваем
	*/

	/*	function myTime() {
			const currentTime = new Date()
			let hours: number | string = currentTime.getHours()
			let minutes: number | string = currentTime.getMinutes()
			let seconds: number | string = currentTime.getSeconds()

			hours = (hours < 10 ? '0' : '') + hours
			minutes = (minutes < 10 ? '0' : '') + minutes
			seconds = (seconds < 10 ? '0' : '') + seconds

			const currentTimeString = hours + ':' + minutes + ':' + seconds
			return currentTimeString
		}*/
	function myTime() {
		const currentTime = date
		let formatter = new Intl.DateTimeFormat('ru', {
			hour: '2-digit',
			minute: '2-digit',
			second: '2-digit',
		})
		let currentTimeString = formatter.format(currentTime)
		return currentTimeString
	}

	const stringTime = myTime() || <br /> // часы24:минуты:секунды (01:02:03)/(23:02:03)/(24:00:00)/(00:00:01) // пишут студенты

	function myFullDate() {
		const currentDate = date
		let formatter = new Intl.DateTimeFormat('de-DE', {
			day: '2-digit',
			month: '2-digit',
			year: 'numeric',
		})
		let currentDateString = formatter.format(currentDate)
		/*	.replace(/\//g, '.')*/
		return currentDateString
	}

	const stringDate = myFullDate() || <br /> // день.месяц.год (01.02.2022) // пишут студенты, варианты 01.02.0123/01.02.-123/01.02.12345 не рассматриваем

	// день недели на английском, месяц на английском (https://learn.javascript.ru/intl#intl-datetimeformat)
	const stringDay = myDay() || <br /> // пишут студенты
	function myDay() {
		// Create a new Date object
		const today = date
		// Create an Intl.DateTimeFormat object with options
		let formatter = new Intl.DateTimeFormat('en-US', { weekday: 'long' })
		// Format the date to get the day of the week
		let currentDay = formatter.format(today)

		return currentDay
	}

	const stringMonth = myFullMonth() || <br /> // пишут студенты
	function myFullMonth() {
		const currentDate = date
		const formatter = new Intl.DateTimeFormat('en-US', { month: 'long' })
		// Format the date to get the current month
		const currentMonthPart = formatter
			.formatToParts(currentDate)
			.find((part: Intl.DateTimeFormatPart) => part.type === 'month')

		// Extract the value of the month part
		const currentMonth = currentMonthPart ? currentMonthPart.value : ''

		return currentMonth
	}

	/*
		// день недели на английском, месяц на английском (https://learn.javascript.ru/intl#intl-datetimeformat)
		const stringDay = 'date->day' || <br /> // пишут студенты
		const stringMonth = 'date->month' || <br /> // пишут студенты
	*/

	return (
		<div className={s.clock}>
			<div
				id={'hw9-watch'}
				className={s.watch}
				onMouseEnter={onMouseEnter}
				onMouseLeave={onMouseLeave}
			>
				<span id={'hw9-day'}>{stringDay}</span>,{' '}
				<span id={'hw9-time'}>
					<strong>{stringTime}</strong>
				</span>
			</div>

			<div id={'hw9-more'}>
				<div className={s.more}>
					{show ? (
						<>
							<span id={'hw9-month'}>{stringMonth}</span>,{' '}
							<span id={'hw9-date'}>{stringDate}</span>
						</>
					) : (
						<>
							<br />
						</>
					)}
				</div>
			</div>

			<div className={s.buttonsContainer}>
				<SuperButton
					id={'hw9-button-start'}
					disabled={timerId !== undefined}
					/*disabled={!(timerId === undefined)}*/
					// пишут студенты // задизэйблить если таймер запущен
					onClick={start}
				>
					start
				</SuperButton>
				<SuperButton
					id={'hw9-button-stop'}
					disabled={timerId === undefined} // пишут студенты // задизэйблить если таймер не запущен
					onClick={stop}
				>
					stop
				</SuperButton>
			</div>
		</div>
	)
}

export default Clock
