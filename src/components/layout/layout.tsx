import { Outlet, useNavigate } from 'react-router-dom'
import { Divider, Flex, Heading, Icon, Input, Text, Image, useColorMode, Switch } from '@chakra-ui/react'
import { HamburgerIcon, MoonIcon, Search2Icon, SunIcon } from '@chakra-ui/icons'
import { useState } from 'react'

export const Layout = () => {
	const navigate = useNavigate()
	const [inputValue, setInputValue] = useState('')
	const [isShowPopover, setIsShowPopover] = useState(false)
	const { colorMode, toggleColorMode } = useColorMode()

	const handleHeading = () => navigate(`/`)
	const handleChanceIcon = () => navigate(`/chance`)

	const handleAdvansedSearchIcon = () => navigate(`/advanced-search`)

	return (
		<>
			<Flex w='full' h='72px' pr={10} pl={10} bgColor='gray.700' align='center' justify='space-between'>
				<Flex>
					<Heading onClick={handleHeading} color='white' mr={16}>
						КИНОПОИСК
					</Heading>
					<Flex align='center' gap={4}>
						<Icon as={SunIcon} color={colorMode === 'light' ? 'gold' : 'gray'} />
						<Switch size='md' onChange={toggleColorMode} />
						<Icon as={MoonIcon} color={colorMode === 'light' ? 'gray' : 'lightblue'} />
					</Flex>
				</Flex>
				<Flex direction='column' position='relative'>
					<Flex align='center' gap={2}>
						<Input
							value={inputValue}
							onChange={e => {
								setInputValue(e.target.value)
								setIsShowPopover(true)
								if (e.target.value === '') {
									setIsShowPopover(false)
								}
							}}
							onBlur={() => {
								setIsShowPopover(false)
							}}
							w='310px'
							h='36px'
							placeholder='Фильмы, сериалы, персоны'
							color='gray'
						/>
						<Icon as={HamburgerIcon} onClick={handleAdvansedSearchIcon} stroke='white' w={6} h={6} />
						<Icon as={Search2Icon} onClick={handleChanceIcon} stroke='white' w={6} h={6} />
					</Flex>
					{isShowPopover && (
						<Flex
							w='full'
							h={640}
							p={4}
							bgColor='white'
							border='1px solid lightGray'
							borderRadius={8}
							position='absolute'
							top={20}
							left={0}
							tabIndex={20000}
							direction='column'
						>
							<Flex mb={2} direction='column' gap={4}>
								<Text>Фильмы и сериалы</Text>
								<Flex>
									<Image w='48px' h='72px' mr={8} bgColor='red' src={''} />
									<Flex direction='column'>
										<Text color='gray.700'>Frdfvty b gjnthzyyjt wfhcndj</Text>
										<Text color='gray.600'>Horror</Text>
										<Text fontSize='xs' color='gray.400'>
											2023
										</Text>
									</Flex>
								</Flex>
								<Flex>
									<Image w='48px' h='72px' mr={8} bgColor='red' src={''} />
									<Flex direction='column'>
										<Text color='gray.700'>Frdfvty b gjnthzyyjt wfhcndj</Text>
										<Text color='gray.600'>Horror</Text>
										<Text fontSize='xs' color='gray.400'>
											2023
										</Text>
									</Flex>
								</Flex>
								<Flex>
									<Image w='48px' h='72px' mr={8} bgColor='red' src={''} />
									<Flex direction='column'>
										<Text color='gray.700'>Frdfvty b gjnthzyyjt wfhcndj</Text>
										<Text color='gray.600'>Horror</Text>
										<Text fontSize='xs' color='gray.400'>
											2023
										</Text>
									</Flex>
								</Flex>
							</Flex>
							<Divider mt={2} mb={2} />
							<Flex mb={2} direction='column' gap={4}>
								<Text>Персоны</Text>
								<Flex>
									<Image w='48px' h='72px' mr={8} bgColor='red' src={''} />
									<Flex direction='column'>
										<Text color='gray.700'>Frdfvty weregvfdddgff</Text>
										<Text fontSize='xs' color='gray.400'>
											1990
										</Text>
									</Flex>
								</Flex>
								<Flex>
									<Image w='48px' h='72px' mr={8} bgColor='red' src={''} />
									<Flex direction='column'>
										<Text color='gray.700'>Frdfvty weregvfdddgff</Text>
										<Text fontSize='xs' color='gray.400'>
											1990
										</Text>
									</Flex>
								</Flex>
								<Flex>
									<Image w='48px' h='72px' mr={8} bgColor='red' src={''} />
									<Flex direction='column'>
										<Text color='gray.700'>Frdfvty weregvfdddgff</Text>
										<Text fontSize='xs' color='gray.400'>
											1990
										</Text>
									</Flex>
								</Flex>
							</Flex>
						</Flex>
					)}
				</Flex>
			</Flex>
			<Divider />
			<Outlet />
		</>
	)
}
