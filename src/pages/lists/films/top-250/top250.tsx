import {
	Accordion,
	AccordionButton,
	AccordionIcon,
	AccordionItem,
	AccordionPanel,
	Box,
	Button,
	Flex,
	Heading,
	Select,
	Text
} from '@chakra-ui/react'

export const Top250 = () => {
	return (
		<Flex p={10} gap={10} maxWidth='1280px' margin='0 auto'>
			<Flex minWidth='260px' direction='column' gap={4}>
				<Flex direction='column' gap={4}>
					<Button>Российские</Button>
					<Button>Зарубежные</Button>
				</Flex>
				<Flex direction='column' gap={4}>
					<Accordion allowToggle defaultIndex={[0, 1, 2]}>
						<AccordionItem>
							<h2>
								<AccordionButton>
									<Box as='span' flex='1' textAlign='left'>
										Страны
									</Box>
									<AccordionIcon />
								</AccordionButton>
							</h2>
							<AccordionPanel pb={4}>
								<Select placeholder='Все страны'>
									<option value='option1'>Option 1</option>
									<option value='option2'>Option 2</option>
									<option value='option3'>Option 3</option>
								</Select>
							</AccordionPanel>
						</AccordionItem>
						<AccordionItem>
							<h2>
								<AccordionButton>
									<Box as='span' flex='1' textAlign='left'>
										Жанры
									</Box>
									<AccordionIcon />
								</AccordionButton>
							</h2>
							<AccordionPanel pb={4}>
								<Select placeholder='Все жанры'>
									<option value='option1'>Option 1</option>
									<option value='option2'>Option 2</option>
									<option value='option3'>Option 3</option>
								</Select>
							</AccordionPanel>
						</AccordionItem>
						<AccordionItem>
							<h2>
								<AccordionButton>
									<Box as='span' flex='1' textAlign='left'>
										Годы
									</Box>
									<AccordionIcon />
								</AccordionButton>
							</h2>
							<AccordionPanel pb={4}>
								<Select placeholder='Все годы'>
									<option value='option1'>Option 1</option>
									<option value='option2'>Option 2</option>
									<option value='option3'>Option 3</option>
								</Select>
							</AccordionPanel>
						</AccordionItem>
					</Accordion>
				</Flex>
			</Flex>
			<Flex>
				<Flex direction='column'>
					<Heading mb={2}>250 лучших фильмов</Heading>
					<Text>
						Рейтинг составлен по результатам голосования посетителей сайта. Любой желающий может принять в нем участие,
						проголосовав за свой любимый фильм. Как формируется рейтинг
					</Text>
				</Flex>
			</Flex>
		</Flex>
	)
}
