import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import App from '@/App'
import 'jest-styled-components'

describe('<App />', () => {
	it('reder component correctly', () => {
		const { container } = render(<App />)

		const todoList = screen.getByTestId('todoList')
		expect(todoList).toBeInTheDocument()
		expect(todoList.firstChild).toBeNull()

		const input = screen.getByPlaceholderText('할 일을 입력해주세요.')
		expect(input).toBeInTheDocument()

		const label = screen.getByText('추가')
		expect(label).toBeInTheDocument()

		expect(container).toMatchSnapshot()
	})

	it('adds and deletes todo items', () => {
		render(<App />)

		const input = screen.getByPlaceholderText('할 일을 입력해주세요.')
		const button = screen.getByText('추가')

		fireEvent.change(input, {
			target: { value: 'study react 1' },
		})
		fireEvent.click(button)

		const todoItem = screen.getByText('study react 1')
		expect(todoItem).toBeInTheDocument()

		const deleteButton = screen.getByText('삭제')
		expect(deleteButton).toBeInTheDocument()

		const todoList = screen.getByTestId('todoList')
		expect(todoList.childElementCount).toBe(1)

		fireEvent.change(input, {
			target: { value: 'study react 2' },
		})
		fireEvent.click(button)

		const todoItem2 = screen.getByText('study react 2')
		expect(todoItem2).toBeInTheDocument()
		expect(todoList.childElementCount).toBe(2)

		const deleteButtons = screen.getAllByText('삭제')
		fireEvent.click(deleteButtons[0])

		expect(todoItem).not.toBeInTheDocument()
		expect(todoList.childElementCount).toBe(1)
	})

	it('does not add empty todo', () => {
		render(<App />)

		const todoList = screen.getByTestId('todoList')
		const length = todoList.childElementCount

		const button = screen.getByText('추가')
		fireEvent.click(button)

		expect(todoList.childElementCount).toBe(length)
	})

	it('로컬스토리지 데이터가 잘 반영 되는가?', () => {
		localStorage.setItem(
			'todoList',
			JSON.stringify(['todo1', 'todo2', 'todo3']),
		)

		render(<App />)

		expect(screen.getByText('todo1')).toBeInTheDocument()
		expect(screen.getByText('todo1')).toBeInTheDocument()
		expect(screen.getByText('todo1')).toBeInTheDocument()
		expect(screen.getAllByText('삭제').length).toBe(3)
	})
})
