import type { FC } from 'react'
import { Link } from 'react-router-dom'
import Styled from 'styled-components'
import { Button } from '@/components'

const Container = Styled.div`
    display: flex;
    border-bottom: 1px solid #bdbdbd;
    align-items: center;
    margin: 10px;
    padding: 10px;
`
const Label = Styled(Link)`
    flex: 1;
    font-size: 16px;
    margin-right: 20px;
    text-decoration: none;
`

type Props = {
	readonly id: number
	readonly label: string
	readonly onDelete?: () => void
}
export const TodoItem: FC<Props> = ({ label, onDelete, id }) => {
	return (
		<Container>
			<Label to={`/detail/${id}`}>{label}</Label>
			<Button
				label="삭제"
				backgroundColor="#ff1744"
				hoverColor="#f01440"
				onClick={onDelete}
			/>
		</Container>
	)
}
