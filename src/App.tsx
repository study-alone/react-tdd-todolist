import { Route, Routes } from 'react-router-dom'
import { Container, PageHeader, NotFound } from '@/components'
import { TodoListProvider } from '@/context'
import { List, Add, Detail, DetailContainer } from '@/pages'

function App() {
	return (
		<TodoListProvider>
			<Container>
				<PageHeader />
				<Routes>
					<Route path="/" element={<List />} />
					<Route path="add" element={<Add />} />
					<Route path="detail" element={<DetailContainer />}>
						<Route path=":id" element={<Detail />} />
					</Route>
					<Route path="*" element={<NotFound />} />
				</Routes>
			</Container>
		</TodoListProvider>
	)
}

export default App
