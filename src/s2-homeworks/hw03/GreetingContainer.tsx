import React, { useState } from 'react'
import Greeting from './Greeting'
import { UserType } from './HW3'

type GreetingContainerPropsType = {
	users: UserType[] // need to fix any
	addUserCallback: (name: string) => void // need to fix any
}

export const pureAddUser = (
	name: string,
	setError: (err: string) => void,
	setName: (name: string) => void,
	addUserCallback: (name: string) => void
) => {
	if (name === '' || name.trim() === '') {
		setError('Ошибка! Введите имя!')
	} else {
		return addUserCallback(name), setName('') //чтото тут не так
	}
	// если имя пустое - показать ошибку, иначе - добавить юзера и очистить инпут
	/*name === '' ? setError(err) : addUserCallback()*/
}

export const pureOnBlur = (name: any, setError: any) => {
	if (name === '' || name.trim() === '') {
		setError('Ошибка! Введите имя!')
	}
	// если имя пустое - показать ошибку
}

export const pureOnEnter = (e: any, addUser: any) => {
	if (e.key === 'Enter') {
		addUser()
	}
	// если нажата кнопка Enter - добавить
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({
	users,
	addUserCallback,
}) => {
	// деструктуризация пропсов
	const [name, setName] = useState<string>('') // need to fix any
	const [error, setError] = useState<string>('') // need to fix any

	const setNameCallback = (e: any /*ChangeEvent<HTMLInputElement>*/) => {
		// need to fix any
		setName(e.currentTarget.value) // need to fix

		error && setError('')
	}
	const addUser = () => {
		pureAddUser(name, setError, setName, addUserCallback)
	}

	const onBlur = () => {
		pureOnBlur(name, setError)
	}

	const onEnter = (e: any) => {
		pureOnEnter(e, addUser)
	}

	const totalUsers = users.length // need to fix
	const lastUserName = users.length < 1 ? '' : users[users.length - 1].name
	/*users[users.length - 1].name*/ /*users[users.length - 1]*/ // need to fix// сто то не ртак

	return (
		<Greeting
			name={name}
			setNameCallback={setNameCallback}
			addUser={addUser}
			onBlur={onBlur}
			onEnter={onEnter}
			error={error}
			totalUsers={totalUsers}
			lastUserName={lastUserName}
		/>
	)
}

export default GreetingContainer
