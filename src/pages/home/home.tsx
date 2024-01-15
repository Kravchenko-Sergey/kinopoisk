import { Card, CardBody, CardFooter, Heading, Stack, Wrap, Image, Text } from '@chakra-ui/react'
import { useQuery } from '@tanstack/react-query'
import { baseAPI, Film } from '../../services/base-api.ts'
import { useNavigate } from 'react-router-dom'

export const Home = () => {
	const navigate = useNavigate()

	const { data } = useQuery({ queryKey: ['films'], queryFn: baseAPI.getFilms })

	const handleItemClick = (id: string) => {
		navigate(`/${id}`)
	}

	return (
		<Wrap p={10}>
			{data?.data.docs.map((el: Film) => {
				return (
					<Card key={el.id} onClick={() => handleItemClick(el.id)} w='160px'>
						<CardBody w='160px' h='236px' p={0}>
							<Image src={el.poster.url} alt='film icon' objectFit='cover' />
						</CardBody>
						<CardFooter p={1}>
							<Stack mt={1} direction='column' gap={0}>
								<Heading size='sm'>{el.name}</Heading>
								<Stack direction='row' color='gray'>
									<Text fontSize='xs'>{el.year},</Text>
									<Text fontSize='xs'>{el.genres[0].name}</Text>
								</Stack>
							</Stack>
						</CardFooter>
					</Card>
				)
			})}
		</Wrap>
	)
}
