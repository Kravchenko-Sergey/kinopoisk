import {
	Box,
	Button,
	Card,
	Flex,
	Heading,
	Image,
	RangeSlider,
	RangeSliderFilledTrack,
	RangeSliderThumb,
	RangeSliderTrack,
	Select,
	Stack,
	Text,
	Wrap
} from '@chakra-ui/react'
import { useState } from 'react'
import { baseAPI } from '../../services/base-api.ts'
import { useQuery } from '@tanstack/react-query'

export const Chance = () => {
	const [sliderValues, setSliderValues] = useState([1920, 2024])
	const [genreValue, setGenreValue] = useState<string[]>([])
	const [countryValue, setCountryValue] = useState<string[]>([])
	const [isShowRandomFilm, setIsShowRandomFilm] = useState(false)

	const { data: genres } = useQuery({ queryKey: ['genres'], queryFn: () => baseAPI.getParamsList('genres') })
	const { data: countries } = useQuery({ queryKey: ['countries'], queryFn: () => baseAPI.getParamsList('countries') })
	const { data: randomFilm, refetch } = useQuery({
		queryKey: ['randomFilm'],
		queryFn: () => baseAPI.getRandomFilm(genreValue, countryValue)
	})

	const handleRandomFilm = async () => {
		await refetch()
		setIsShowRandomFilm(true)
		console.log(randomFilm)
	}

	return (
		<Wrap m={24} justify='center' align='center'>
			<Card p={8}>
				<Stack display='flex' flexDirection='column' gap={12}>
					<Flex gap={4}>
						<Select placeholder='Выберите жанры' value={genreValue} onChange={e => setGenreValue([e.target.value])}>
							{genres?.data.map((el: { name: string; slug: string }) => <option value={el.name}>{el.name}</option>)}
						</Select>
						<Select
							placeholder='Выберите страну'
							value={countryValue}
							onChange={e => setCountryValue([e.target.value])}
						>
							{countries?.data.map((el: { name: string; slug: string }) => <option value={el.name}>{el.name}</option>)}
						</Select>
					</Flex>
					<RangeSlider
						aria-label={['min', 'max']}
						defaultValue={[1920, 2024]}
						min={1920}
						max={2024}
						value={sliderValues}
						onChange={value => setSliderValues(value)}
					>
						<RangeSliderTrack>
							<RangeSliderFilledTrack />
						</RangeSliderTrack>
						<RangeSliderThumb index={0} />
						<RangeSliderThumb index={1} />
					</RangeSlider>
					<Button onClick={handleRandomFilm} bgColor='orangered' color='white'>
						Случайный фильм
					</Button>
					{isShowRandomFilm && (
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
								Горшок, Князь и Шут — герои панк-сказки, в которой студенты реставрационного училища стали одной из
								главных рок-групп страны, собрали «Юбилейный», покорили Москву, выступили как хедлайнеры на фестивале
								«Нашествие» и создали целую фэнтези-вселенную. Группа вошла в историю, а тексты их песен ожили в
								мире-фантазии, где Горшок и Князь отправляются спасать принцессу из плена колдуна. Смотреть трейлер
							</Text>
						</Stack>
					)}
				</Stack>
			</Card>
		</Wrap>
	)
}
