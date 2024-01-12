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
	year: number
	minYear: number
	maxYear: number
}

export const AdvancedSearch = () => {
	const { handleSubmit, control, watch, reset } = useForm<FormValues>()

	const onSubmit: SubmitHandler<FormValues> = data => {
		reset()
		console.log(data)
	}

	const minYearValue = watch('minYear')
	const maxYearValue = watch('maxYear')

	return (
		<Wrap justify='center'>
			<Stack mt={16}>
				<Heading>Расширенный поиск</Heading>
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
		</Wrap>
	)
}
