import { Flex, Heading, Stack, Wrap, Text } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

export const Films = () => {
	const navigate = useNavigate()

	return (
		<Wrap ml={40} direction='column'>
			<Heading as='h2' size='sm' mb={2}>
				Список
			</Heading>
			<Stack gap={8}>
				<Flex align='center' gap={4} onClick={() => navigate('/lists/top-250')}>
					<Flex w={88} h={88} bgColor='gray.500'></Flex>
					<Flex direction='column'>
						<Heading as='h2' size='md'>
							250 лучших фильмов
						</Heading>
						<Text color='gray.500'>250 фильмов</Text>
					</Flex>
				</Flex>
				<Flex align='center' gap={4}>
					<Flex w={88} h={88} bgColor='gray.500'></Flex>
					<Flex direction='column'>
						<Heading as='h2' size='md'>
							Комедийные боевики
						</Heading>
						<Text color='gray.500'>50 фильмов</Text>
					</Flex>
				</Flex>
				<Flex align='center' gap={4}>
					<Flex w={88} h={88} bgColor='gray.500'></Flex>
					<Flex direction='column'>
						<Heading as='h2' size='md'>
							Фильмы про вампиров
						</Heading>
						<Text color='gray.500'>30 фильмов</Text>
					</Flex>
				</Flex>
			</Stack>
		</Wrap>
	)
}
