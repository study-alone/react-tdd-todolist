import type { ChangeEventHandler, FC } from 'react'
import Styled from 'styled-components'

const InputBox = Styled.input`
    font-size: 16px;
    padding: 10px;
    border-radius: 8px;
    border: 1px solid #bdbdbd;
    outline: none;
`

type Props = {
	readonly placeholder?: string
	readonly onChange?: (text: string) => void
	readonly value?: string
}

export const Input: FC<Props> = ({
	placeholder = '할 일 입력',
	value,
	onChange,
}) => {
	const change: ChangeEventHandler<HTMLInputElement> = (event) => {
		typeof onChange === 'function' && onChange(event.target.value)
	}
	return (
		<InputBox placeholder={placeholder} value={value} onChange={change} />
	)
}
