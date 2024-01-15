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
import { baseAPI, FilmPersons } from '../../services/base-api.ts'
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
							{genres?.data.map((el: { name: string; slug: string }) => (
								<option key={el.name} value={el.name}>
									{el.name}
								</option>
							))}
						</Select>
						<Select
							placeholder='Выберите страну'
							value={countryValue}
							onChange={e => setCountryValue([e.target.value])}
						>
							{countries?.data.map((el: { name: string; slug: string }) => (
								<option key={el.name} value={el.name}>
									{el.name}
								</option>
							))}
						</Select>
					</Flex>
					<RangeSlider
						aria-label={['min', 'max']}
						defaultValue={[1920, 2024]}
						min={1920}
						max={2024}
						value={sliderValues}
						onChange={value => setSliderValues(value)}
						step={2}
					>
						<RangeSliderTrack>
							<RangeSliderFilledTrack />
						</RangeSliderTrack>
						<RangeSliderThumb index={0}>
							<Box p={1} bgColor='gray.500' fontSize={12} borderRadius={10}>
								{sliderValues[0]}
							</Box>
						</RangeSliderThumb>
						<RangeSliderThumb index={1}>
							<Box p={1} bgColor='gray.500' fontSize={12} borderRadius={10}>
								{sliderValues[1]}
							</Box>
						</RangeSliderThumb>
					</RangeSlider>
					<Button onClick={handleRandomFilm} bgColor='orangered' color='white'>
						Случайный фильм
					</Button>
					{isShowRandomFilm && (
						<Stack p={10}>
							<Stack direction='row' gap={8}>
								<Stack>
									<Image
										src={randomFilm?.data.poster.url}
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
									<Heading>{randomFilm?.data.alternativeName}</Heading>
									<Flex gap={4}>
										<Box>ID: 4647040</Box>
										<Box>{`Рейтинг КП: ${randomFilm?.data.rating.kp}`}</Box>
										<Box>{`Рейтинг IMDB: ${randomFilm?.data.rating.imdb}`}</Box>
									</Flex>
									<Stack mt={4} gap='10.3px'>
										<Flex bgColor='gray.500' justify='space-between' p={4} borderRadius={8}>
											<Box>Год производства: </Box>
											<Box>{randomFilm?.data.year}</Box>
										</Flex>
										<Flex bgColor='gray.500' justify='space-between' p={4} borderRadius={8}>
											<Box>Страны: </Box>
											{randomFilm?.data.countries.map((country: { name: string }) => (
												<Box key={country.name}>{country.name}</Box>
											))}
										</Flex>
										<Flex bgColor='gray.500' justify='space-between' p={4} borderRadius={8}>
											<Box>Жанры: </Box>
											{randomFilm?.data.genres.map((genre: { name: string }) => (
												<Box key={genre.name}>{genre.name}</Box>
											))}
										</Flex>
										<Flex bgColor='gray.500' justify='space-between' p={4} borderRadius={8}>
											<Box>Актеры: </Box>
											<Text>{`${randomFilm?.data.persons[0].name} ${randomFilm?.data.persons[1].name} ...`}</Text>
										</Flex>
										<Flex bgColor='gray.500' justify='space-between' p={4} borderRadius={8}>
											<Box>Режиссер: </Box>
											<Box>
												{randomFilm?.data.persons.map((person: FilmPersons) => {
													return person.enProfession === 'director' && person.name
												})}
											</Box>
										</Flex>
										<Flex bgColor='gray.500' justify='space-between' p={4} borderRadius={8}>
											<Box>Цифровой релиз: </Box>
											<Box>{randomFilm?.data.premiere.world}</Box>
										</Flex>
									</Stack>
								</Stack>
							</Stack>
						</Stack>
					)}
				</Stack>
			</Card>
		</Wrap>
	)
}
