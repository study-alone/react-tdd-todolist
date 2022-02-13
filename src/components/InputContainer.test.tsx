import React from 'react'
import { screen, render, fireEvent } from '@testing-library/react'
import 'jest-styled-components'
import { InputContainer } from '@/components'
import { TodoListProvider } from '@/context'

const LS_KEY = 'todoList'

describe('<InputContainer />', () => {
	it('컴포넌트가 잘 렌더링 되는가?', () => {
		const { container } = render(<InputContainer />)

		const input = screen.getByPlaceholderText('할 일을 입력해주세요.')
		expect(input).toBeInTheDocument()

		const button = screen.getByText('추가')
		expect(button).toBeInTheDocument()

		expect(container).toMatchSnapshot()
	})

	it('데이터 추가 후 input value가 빈 값이 되는가?', () => {
		render(<InputContainer />)

		const input =
			screen.getByPlaceholderText<HTMLInputElement>(
				'할 일을 입력해주세요.',
			)
		const button = screen.getByText('추가')

		expect(input.value).toBe('')
		fireEvent.change(input, { target: { value: 'study react 1' } })
		expect(input.value).toBe('study react 1')
		fireEvent.click(button)
		expect(input.value).toBe('')
	})

	it('Context를 통한 localstorage 추가가 잘 되는가?', () => {
		render(
			<TodoListProvider>
				<InputContainer />
			</TodoListProvider>,
		)

		const input = screen.getByPlaceholderText('할 일을 입력해주세요.')
		const button = screen.getByText('추가')

		expect(localStorage.getItem(LS_KEY)).toBeNull()

		fireEvent.change(input, { target: { value: 'study react 1' } })
		fireEvent.click(button)

		expect(localStorage.getItem(LS_KEY)).toBe(
			JSON.stringify(['study react 1']),
		)
	})
})
