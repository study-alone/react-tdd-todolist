import type { FC } from 'react'
import Styled from 'styled-components'

type ContainerProps = {
	readonly backgroundColor: string
	readonly hoverColor: string
}
const Contanier = Styled.div<ContainerProps>`
    text-align: center;
    background-color: ${(props) => props.backgroundColor};
    padding: 10px 20px;
    border-radius: 8px;
    cursor: pointer;
    &:hover {
        background-color: ${(props) => props.hoverColor};
    }
    &:active {
        box-shadow: inset 5px 5px 10px rgba(0, 0, 0, 0.2);
    }
`
const Label = Styled.div`
    color: #fff;
    font-size: 16px;
`

type Props = {
	readonly label: string
	readonly backgroundColor?: string
	readonly hoverColor?: string
	readonly onClick?: () => void
}
export const Button: FC<Props> = ({
	label,
	backgroundColor = '#304ffe',
	hoverColor = '#1e40ff',
	onClick,
}) => {
	return (
		<Contanier {...{ hoverColor, backgroundColor }} onClick={onClick}>
			<Label>{label}</Label>
		</Contanier>
	)
}
