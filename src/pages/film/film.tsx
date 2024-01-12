import { Box, Button, Flex, Heading, Image, Stack, Text, Wrap } from '@chakra-ui/react'

export const Film = () => {
	/*const params = aboutRoute.useParams({ from: '/$id' })

	const { data } = useQuery({ queryKey: ['filmById'], queryFn: () => baseAPI.getFilmById(params.id) })

	console.log(data?.data)*/

	return (
		<Wrap>
			<Stack p={10}>
				<Stack direction='row' gap={8}>
					<Stack>
						<Image
							src={/*{data?.data.poster.url}*/ ''}
							alt='film icon'
							objectFit='cover'
							w={340}
							h={490}
							bg='gray'
							borderRadius={16}
						></Image>
						<Button h='56px'>Смотреть трейлер</Button>
					</Stack>
					<Stack>
						<Heading>{/*{data?.data.name}*/}Король и Шут</Heading>
						<Flex gap={4}>
							<Box>ID: 4647040</Box>
							<Box>Рейтинг КП: 8.2</Box>
							<Box>Рейтинг IMDB: 7.0</Box>
						</Flex>
						<Stack mt={4} gap='10.3px'>
							<Flex bgColor='gray.100' justify='space-between' p={4} borderRadius={8}>
								<Box>Год производства: </Box>
								<Box>2023 (1 сезон)</Box>
							</Flex>
							<Flex bgColor='gray.100' justify='space-between' p={4} borderRadius={8}>
								<Box>Страны: </Box>
								<Box>2023 (1 сезон)</Box>
							</Flex>
							<Flex bgColor='gray.100' justify='space-between' p={4} borderRadius={8}>
								<Box>Жанры: </Box>
								<Box>2023 (1 сезон)</Box>
							</Flex>
							<Flex bgColor='gray.100' justify='space-between' p={4} borderRadius={8}>
								<Box>Актеры: </Box>
								<Box>2023 (1 сезон)</Box>
							</Flex>
							<Flex bgColor='gray.100' justify='space-between' p={4} borderRadius={8}>
								<Box>Режиссер: </Box>
								<Box>2023 (1 сезон)</Box>
							</Flex>
							<Flex bgColor='gray.100' justify='space-between' p={4} borderRadius={8}>
								<Box>Цифровой релиз: </Box>
								<Box>2023 (1 сезон)</Box>
							</Flex>
							<Flex bgColor='gray.100' justify='space-between' p={4} borderRadius={8}>
								<Box>Возрастной рейтинг: </Box>
								<Box>2023 (1 сезон)</Box>
							</Flex>
						</Stack>
					</Stack>
				</Stack>
				<Text maxWidth={728} mt={2}>
					Горшок, Князь и Шут — герои панк-сказки, в которой студенты реставрационного училища стали одной из главных
					рок-групп страны, собрали «Юбилейный», покорили Москву, выступили как хедлайнеры на фестивале «Нашествие» и
					создали целую фэнтези-вселенную. Группа вошла в историю, а тексты их песен ожили в мире-фантазии, где Горшок и
					Князь отправляются спасать принцессу из плена колдуна. Смотреть трейлер
				</Text>
			</Stack>
		</Wrap>
	)
}
