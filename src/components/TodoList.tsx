import { useContext } from 'react'
import Styled from 'styled-components'
import { TodoItem } from '@/components'
import type { FC } from 'react'
import { TodoListContext } from '@/context'

const TodoListContainer = Styled.div`
    min-width: 350px;
    height: 400px;
    overflow-y: scroll;
    border: 1px solid #bdbdbd;
    margin-bottom: 20px;
`

type Props = {
	// readonly todoList?: string[]
	// readonly deleteTodo?: (index: number) => void
}

export const TodoList: FC<Props> = ({}) => {
	const { todoList, deleteTodo } = useContext(TodoListContext)

	return (
		<TodoListContainer data-testid="todoList">
			{todoList.map((item, index) => (
				<TodoItem
					key={item}
					id={index}
					label={item}
					onDelete={() => deleteTodo(index)}
				/>
			))}
		</TodoListContainer>
	)
}
