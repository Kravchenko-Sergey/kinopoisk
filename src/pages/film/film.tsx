import { AspectRatio, Box, Flex, Heading, Image, Stack, Text, Wrap } from '@chakra-ui/react'
import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { baseAPI, FilmPersons } from '../../services/base-api.ts'

export const Film = () => {
	const params = useParams()

	const { data } = useQuery({ queryKey: ['filmById'], queryFn: () => baseAPI.getFilmById(params.id) })

	const releaseFilmDate = new Date(String(data?.data.premiere.world))
	const formattedDate =
		releaseFilmDate.getDate() + ' ' + (releaseFilmDate.getMonth() + 1) + ' ' + releaseFilmDate.getFullYear()

	console.log(data?.data)

	return (
		<Wrap>
			<Stack p={10}>
				<Stack direction='row' gap={8}>
					<Stack>
						<Image
							src={data?.data.poster.url}
							alt='film icon'
							objectFit='cover'
							w={340}
							h={490}
							bg='gray'
							borderRadius={16}
						></Image>
						<Text h='56px' pt={6} pb={-6}>
							Смотреть трейлер
						</Text>
						<AspectRatio maxW='560px' ratio={1}>
							<iframe title='Trailer' src={data?.data.videos.trailers[0].url} allowFullScreen />
						</AspectRatio>
					</Stack>
					<Stack>
						<Heading>{data?.data.name}</Heading>
						<Flex gap={4}>
							<Box>{`ID: ${data?.data.id}`}</Box>
							<Box>{`Рейтинг КП: ${data?.data.rating.kp}`}</Box>
							<Box>{`Рейтинг IMDB: ${data?.data.rating.imdb}`}</Box>
						</Flex>
						<Stack mt={4} gap='10.3px'>
							<Flex bgColor='gray.500' justify='space-between' p={4} borderRadius={8}>
								<Box>Год производства: </Box>
								<Box>{data?.data.year}</Box>
							</Flex>
							<Flex bgColor='gray.500' justify='space-between' p={4} borderRadius={8}>
								<Box>Страны: </Box>
								<Flex>
									{data?.data.countries.map((country: { name: string }) => (
										<Text key={country.name}>{country.name}</Text>
									))}
								</Flex>
							</Flex>
							<Flex bgColor='gray.500' justify='space-between' p={4} borderRadius={8}>
								<Box>Жанры: </Box>
								<Flex gap={2}>
									{data?.data.genres.map((genre: { name: string }) => <Text key={genre.name}>{genre.name}</Text>)}
								</Flex>
							</Flex>
							<Flex bgColor='gray.500' justify='space-between' p={4} borderRadius={8}>
								<Box>Актеры: </Box>
								<Flex gap={2}>
									<Text>{`${data?.data.persons[0].name} ${data?.data.persons[1].name} ...`}</Text>
								</Flex>
							</Flex>
							<Flex bgColor='gray.500' justify='space-between' p={4} borderRadius={8}>
								<Box>Режиссер: </Box>
								<Box>
									{data?.data.persons.map((person: FilmPersons) => {
										return person.enProfession === 'director' && person.name
									})}
								</Box>
							</Flex>
							<Flex bgColor='gray.500' justify='space-between' p={4} borderRadius={8}>
								<Box>Цифровой релиз: </Box>
								<Box>{formattedDate}</Box>
							</Flex>
							<Flex bgColor='gray.500' justify='space-between' p={4} borderRadius={8}>
								<Box>Возрастной рейтинг: </Box>
								<Box>{`${data?.data.ageRating}+`}</Box>
							</Flex>
							<Text maxWidth={728} mt={2}>
								{data?.data.description}
							</Text>
						</Stack>
					</Stack>
				</Stack>
			</Stack>
		</Wrap>
	)
}
