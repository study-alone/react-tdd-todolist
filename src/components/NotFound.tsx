import Styled from 'styled-components'
import type { FC } from 'react'

const Container = Styled.div`
    font-size: 20px;
`

export const NotFound: FC = () => {
	return <Container>Not Found</Container>
}
