import { createContext, useEffect, useState } from 'react'
import type { FC } from 'react'

interface Context {
	readonly todoList: string[]
	readonly addTodo: (todo: string) => void
	readonly deleteTodo: (index: number) => void
}

const TODO_LIST = 'todoList'

const TodoListContext = createContext<Context>({
	todoList: [],
	addTodo() {},
	deleteTodo() {},
})

const TodoListProvider: FC = ({ children }) => {
	const [todoList, setTodoList] = useState<string[]>([])

	const addTodo = (todo: string) => {
		if (todo) {
			const list = [...todoList, todo]
			localStorage.setItem(TODO_LIST, JSON.stringify(list))
			setTodoList(list)
		}
	}

	const deleteTodo = (index: number) => {
		let list = [...todoList]
		list.splice(index, 1)
		localStorage.setItem(TODO_LIST, JSON.stringify(list))
		setTodoList(list)
	}

	useEffect(() => {
		const list = localStorage.getItem(TODO_LIST)
		if (list) {
			setTodoList(JSON.parse(list))
		}
	}, [])

	return (
		<TodoListContext.Provider
			value={{
				todoList,
				addTodo,
				deleteTodo,
			}}
		>
			{children}
		</TodoListContext.Provider>
	)
}

export { TodoListContext, TodoListProvider }
