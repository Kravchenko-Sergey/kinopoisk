import { Stack, Wrap } from '@chakra-ui/react'

export const Home = () => {
	/*const { data } = useQuery({ queryKey: ['films'], queryFn: baseAPI.getFilms })

	console.log(data?.data.docs)*/

	/*const handleItemClick = (id: string) => {
		navigate({ to: `/${id}` })
	}*/

	return (
		<Wrap>
			<Stack>
				{/*{data?.data.docs.map((el: any) => {
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
				})}*/}
			</Stack>
		</Wrap>
	)
}
