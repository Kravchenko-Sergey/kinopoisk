import {
	Button,
	Flex,
	Heading,
	Input,
	NumberDecrementStepper,
	NumberIncrementStepper,
	NumberInput,
	NumberInputField,
	NumberInputStepper,
	Stack,
	Wrap
} from '@chakra-ui/react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'

type FormValues = {
	country: string
	genre: string
	year?: number
	minYear: number
	maxYear: number
}

type FormValues2 = {
	studio: string
}

type FormValues3 = {
	keyword: string
}

export const AdvancedSearch = () => {
	const { handleSubmit, control, watch, reset } = useForm<FormValues>()
	const { handleSubmit: handleSubmit2, control: control2, reset: reset2 } = useForm<FormValues2>()
	const { handleSubmit: handleSubmit3, control: control3, reset: reset3 } = useForm<FormValues3>()

	const onSubmit: SubmitHandler<FormValues> = data => {
		reset()
		console.log(data)
	}

	const onSubmit2: SubmitHandler<FormValues2> = data => {
		reset2()
		console.log(data)
	}

	const onSubmit3: SubmitHandler<FormValues3> = data => {
		reset3()
		console.log(data)
	}

	const minYearValue = watch('minYear')
	const maxYearValue = watch('maxYear')

	return (
		<Wrap direction='column' align='center' maxWidth={640} margin='0 auto'>
			<Stack mt={16} width='full'>
				<Heading as='h2' size='lg'>
					Расширенный поиск
				</Heading>
				<form onSubmit={handleSubmit(onSubmit)}>
					<Flex mt={4} direction='column' gap={4}>
						<Controller
							name='country'
							control={control}
							defaultValue=''
							render={({ field }) => <Input placeholder='Страна' {...field} />}
						/>
						<Controller
							name='genre'
							control={control}
							defaultValue=''
							render={({ field }) => <Input placeholder='Жанр' {...field} />}
						/>
						<Controller
							name='year'
							control={control}
							defaultValue={2024}
							disabled={minYearValue > 1920 || maxYearValue < 2024}
							render={({ field }) => (
								<NumberInput {...field} defaultValue={2024} min={1920} max={2024}>
									<NumberInputField />
									<NumberInputStepper>
										<NumberIncrementStepper />
										<NumberDecrementStepper />
									</NumberInputStepper>
								</NumberInput>
							)}
						/>
						<Controller
							name='minYear'
							control={control}
							defaultValue={1920}
							render={({ field }) => (
								<NumberInput {...field} defaultValue={1920} min={1920} max={2024}>
									<NumberInputField />
									<NumberInputStepper>
										<NumberIncrementStepper />
										<NumberDecrementStepper />
									</NumberInputStepper>
								</NumberInput>
							)}
						/>
						<Controller
							name='maxYear'
							control={control}
							defaultValue={2024}
							render={({ field }) => (
								<NumberInput {...field} defaultValue={2024} min={1920} max={2024}>
									<NumberInputField />
									<NumberInputStepper>
										<NumberIncrementStepper />
										<NumberDecrementStepper />
									</NumberInputStepper>
								</NumberInput>
							)}
						/>
						<Button type='submit'>Поиск</Button>
					</Flex>
				</form>
			</Stack>
			<Stack mt={16} width='full'>
				<Heading as='h2' size='lg'>
					Искать студии-производители:
				</Heading>
				<form onSubmit={handleSubmit2(onSubmit2)}>
					<Flex mt={4} direction='column' gap={4}>
						<Controller
							name='studio'
							control={control2}
							defaultValue=''
							render={({ field }) => <Input placeholder='Студия' {...field} />}
						/>
						<Button type='submit'>Поиск</Button>
					</Flex>
				</form>
			</Stack>
			<Stack mt={16} width='full'>
				<Heading as='h2' size='lg'>
					Искать фильм по словам:
				</Heading>
				<form onSubmit={handleSubmit3(onSubmit3)}>
					<Flex mt={4} direction='column' gap={4}>
						<Controller
							name='keyword'
							control={control3}
							defaultValue=''
							render={({ field }) => <Input placeholder='Введите ключевое слово' {...field} />}
						/>
						<Button type='submit'>Поиск</Button>
					</Flex>
				</form>
			</Stack>
		</Wrap>
	)
}
