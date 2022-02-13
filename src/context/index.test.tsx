import React, { useContext } from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import { TodoListContext, TodoListProvider } from '@/context'

beforeEach(() => {
	localStorage.clear()
})

const LS_KEY = 'todoList'

describe('TodoListContext', () => {
	it('renders component correctly', () => {
		const ChildComponent = () => {
			return <div>child component</div>
		}

		render(
			<TodoListProvider>
				<ChildComponent />
			</TodoListProvider>,
		)

		const childComponent = screen.getByText('child component')
		expect(childComponent).toBeInTheDocument()
		expect(localStorage.getItem(LS_KEY)).toBeNull()
	})

	it('loads localStorage data and sets it to State', () => {
		localStorage.setItem(
			LS_KEY,
			JSON.stringify(['todo1', 'todo2', 'todo3']),
		)

		const ChildComponent = () => {
			const { todoList } = useContext(TodoListContext)

			return (
				<div>
					{todoList.map((todo) => (
						<div key={todo}>{todo}</div>
					))}
				</div>
			)
		}

		render(
			<TodoListProvider>
				<ChildComponent />
			</TodoListProvider>,
		)

		expect(screen.getByText('todo1')).toBeInTheDocument()
		expect(screen.getByText('todo2')).toBeInTheDocument()
		expect(screen.getByText('todo3')).toBeInTheDocument()
	})

	it('add todo function', () => {
		const ChildComponent = () => {
			const { todoList, addTodo } = useContext(TodoListContext)
			return (
				<div>
					<div onClick={() => addTodo('study react 1')}>Add Todo</div>
					<div>
						{todoList.map((todo) => (
							<div key={todo}>{todo}</div>
						))}
					</div>
				</div>
			)
		}

		render(
			<TodoListProvider>
				<ChildComponent />
			</TodoListProvider>,
		)

		expect(localStorage.getItem(LS_KEY)).toBeNull()
		const button = screen.getByText('Add Todo')
		fireEvent.click(button)
		expect(screen.getByText('study react 1')).toBeInTheDocument()
		expect(localStorage.getItem(LS_KEY)).toBe(
			JSON.stringify(['study react 1']),
		)
	})

	it('uses deleteTodo function', () => {
		localStorage.setItem(
			LS_KEY,
			JSON.stringify(['todo1', 'todo2', 'todo3']),
		)

		const ChildComponent = () => {
			const { todoList, deleteTodo } = useContext(TodoListContext)
			return (
				<div>
					{todoList.map((todo, index) => (
						<div
							key={todo}
							onClick={() => {
								deleteTodo(index)
							}}
						>
							{todo}
						</div>
					))}
				</div>
			)
		}

		render(
			<TodoListProvider>
				<ChildComponent />
			</TodoListProvider>,
		)

		const todoItem = screen.getByText('todo2')
		expect(todoItem).toBeInTheDocument()
		fireEvent.click(todoItem)
		expect(todoItem).not.toBeInTheDocument()
		expect(
			JSON.parse(localStorage.getItem(LS_KEY) as string),
		).not.toContain('todo2')
	})
})
