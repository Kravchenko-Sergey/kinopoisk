import { Divider, Heading, Stack, Tab, TabList, TabPanel, TabPanels, Tabs, Wrap } from '@chakra-ui/react'
import { Films } from './films/films.tsx'
import { Genres } from './genres/genres.tsx'
import { Countries } from './countries/countries.tsx'
import { Years } from './years/years.tsx'
import { ReactNode } from 'react'

export const Lists = () => {
	const tabNames = ['Фильмы', 'Жанры', 'Страны', 'Годы']
	const tabsContent = [<Films />, <Genres />, <Countries />, <Years />]

	return (
		<Wrap p={10}>
			<Stack w='full'>
				<Heading mb={6}>Списки</Heading>
				<Divider mb={2} />
				<Tabs variant='unstyled'>
					<TabList>
						{tabNames.map((name: string, index: number) => (
							<Tab key={index} _selected={{ color: 'white', bgColor: 'gray.500', borderRadius: '10px' }}>
								{name}
							</Tab>
						))}
					</TabList>
					<TabPanels>
						{tabsContent.map((el: ReactNode, index: number) => (
							<TabPanel key={index}>{el}</TabPanel>
						))}
					</TabPanels>
				</Tabs>
			</Stack>
		</Wrap>
	)
}
