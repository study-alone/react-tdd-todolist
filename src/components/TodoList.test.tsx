import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import 'jest-styled-components'
import { TodoListProvider } from '@/context/index'
import { TodoList } from '@/components'

describe('<TodoList />', () => {
	it('컴포넌트가 잘 렌더링 되는가?', () => {
		const { container } = render(
			<TodoListProvider>
				<TodoList />
			</TodoListProvider>,
		)

		const todoList = screen.getByTestId('todoList')
		expect(todoList).toBeInTheDocument()
		expect(todoList.firstChild).toBeNull()

		expect(container).toMatchSnapshot()
	})

	it('todoList가 잘 보여 지는가?', () => {
		localStorage.setItem(
			'todoList',
			JSON.stringify(['todo1', 'todo2', 'todo3']),
		)

		render(
			<TodoListProvider>
				<TodoList />
			</TodoListProvider>,
		)

		expect(screen.getByText('todo1')).toBeInTheDocument()
		expect(screen.getByText('todo2')).toBeInTheDocument()
		expect(screen.getByText('todo3')).toBeInTheDocument()
		expect(screen.getAllByText('삭제').length).toBe(3)
	})

	it('todo 항목 삭제가 잘 되는가?', () => {
		localStorage.setItem(
			'todoList',
			JSON.stringify(['todo1', 'todo2', 'todo3']),
		)

		render(
			<TodoListProvider>
				<TodoList />
			</TodoListProvider>,
		)

		const todoItem = screen.getByText('todo2')
		expect(todoItem).toBeInTheDocument()
		fireEvent.click(todoItem.nextElementSibling as HTMLElement)
		expect(todoItem).not.toBeInTheDocument()
		expect(
			JSON.parse(localStorage.getItem('todoList') as string),
		).not.toContain('todo2')
	})
})
