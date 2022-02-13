import { useContext } from 'react'
import { useParams, useNavigate, Outlet } from 'react-router-dom'
import Styled from 'styled-components'
import { toNumber } from 'lodash-es'
import { TodoListContext } from '@/context'
import { Button } from '@/components'
import type { FC } from 'react'

const Container = Styled.div`
    display: flex;
    background-color: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
    align-items: center;
    flex-direction: column;
`
const Todo = Styled.div`
    min-width: 350px;
    height: 350px;
    overflow-y: auto;
    border: 1px solid #bdbdbd;
    margin-bottom: 20px;
    padding: 10px;
`

export const DetailContainer: FC = ({}) => {
	return <Outlet />
}

export const Detail: FC = () => {
	const navigate = useNavigate()
	const params = useParams<{ id: string }>()
	const id = toNumber(params.id)
	const { todoList, deleteTodo } = useContext(TodoListContext)
	const todo = todoList[id]

	return (
		<Container>
			<Todo>{todo}</Todo>
			<Button
				label="삭제"
				backgroundColor="#ff1744"
				hoverColor="#f01440"
				onClick={() => {
					deleteTodo(id)
					navigate(-1)
				}}
			/>
		</Container>
	)
}
