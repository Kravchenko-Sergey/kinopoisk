import { createBrowserRouter } from 'react-router-dom'
import { Home } from '../pages/home/home.tsx'
import { Film } from '../pages/film/film.tsx'
import { Layout } from '../components/layout/layout.tsx'
import { Chance } from '../pages/chance/chance.tsx'
import { AdvancedSearch } from '../pages/advanced-search/advanced-search.tsx'

export const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{
				path: '/',
				element: <Home />
			},
			{
				path: `/:id`,
				element: <Film />
			},
			{
				path: `/advanced-search`,
				element: <AdvancedSearch />
			},
			{
				path: `/chance`,
				element: <Chance />
			}
		]
	}
])
