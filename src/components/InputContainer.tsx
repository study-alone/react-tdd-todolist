import { useContext, useState } from 'react'
import type { FC } from 'react'
import Styled from 'styled-components'
import { Button, Input } from '@/components'
import { TodoListContext } from '@/context'

const Container = Styled.div`
    display: flex;
`

type Props = {
	// readonly todo?: string
	// readonly onChange?: (text: string) => void
	readonly onAdd?: () => void
}

export const InputContainer: FC<Props> = ({ onAdd }) => {
	const [todo, setTodo] = useState('')
	const { addTodo } = useContext(TodoListContext)

	const onAddTodo = () => {
		addTodo(todo)
		setTodo('')
		if (todo && typeof onAdd === 'function') {
			onAdd()
		}
	}

	return (
		<Container>
			<Input
				placeholder="할 일을 입력해주세요."
				value={todo}
				onChange={setTodo}
			/>
			<Button label="추가" onClick={onAddTodo} />
		</Container>
	)
}
