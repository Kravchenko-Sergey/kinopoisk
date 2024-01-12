import ReactDOM from 'react-dom/client'
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { App } from './App.tsx'
import theme from './theme/theme.ts'

const queryClient = new QueryClient()

const rootElement = document.getElementById('root')!
if (!rootElement.innerHTML) {
	const root = ReactDOM.createRoot(rootElement)
	root.render(
		<ChakraProvider theme={theme}>
			<QueryClientProvider client={queryClient}>
				<ColorModeScript initialColorMode={theme.config.initialColorMode} />
				<App />
			</QueryClientProvider>
		</ChakraProvider>
	)
}
