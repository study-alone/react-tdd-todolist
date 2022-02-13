import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import 'jest-styled-components'
import { TodoItem } from '@/components'

describe('<TodoItem />', () => {
	it('renders component correctly', () => {
		const { container } = render(<TodoItem label="default value" />)

		const todoItem = screen.getByText('default value')
		expect(todoItem).toBeInTheDocument()

		const deleteButton = screen.getByText('삭제')
		expect(deleteButton).toBeInTheDocument()

		expect(container).toMatchSnapshot()
	})

	it('clicks the delete button', () => {
		const handleClick = jest.fn()
		render(<TodoItem label="default value" onDelete={handleClick} />)

		const deleteButton = screen.getByText('삭제')
		expect(handleClick).toHaveBeenCalledTimes(0)
		fireEvent.click(deleteButton)
		expect(handleClick).toHaveBeenCalledTimes(1)
	})
})
