import { Flex, Heading, Stack, Wrap } from '@chakra-ui/react'

export const Countries = () => {
	return (
		<Wrap ml={40} direction='column'>
			<Heading as='h2' size='sm' mb={2}>
				Список
			</Heading>
			<Stack gap={8}>
				<Flex align='center' gap={4}>
					<Flex w={88} h={88} bgColor='gray.500'></Flex>
					<Flex direction='column'>
						<Heading as='h2' size='md'>
							Россия
						</Heading>
					</Flex>
				</Flex>
				<Flex align='center' gap={4}>
					<Flex w={88} h={88} bgColor='gray.500'></Flex>
					<Flex direction='column'>
						<Heading as='h2' size='md'>
							США
						</Heading>
					</Flex>
				</Flex>
				<Flex align='center' gap={4}>
					<Flex w={88} h={88} bgColor='gray.500'></Flex>
					<Flex direction='column'>
						<Heading as='h2' size='md'>
							Южная корея
						</Heading>
					</Flex>
				</Flex>
			</Stack>
		</Wrap>
	)
}
