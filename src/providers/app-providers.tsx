import { QueryCache, QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { JSX } from 'react'
import { Toaster } from 'sonner'
interface IAppProvidersProps {
	children?: JSX.Element
}

export const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
			// refetchOnMount: 'always',
			staleTime: 5000,
			retry: false,
		},
	},
	queryCache: new QueryCache(),
})

function AppProviders({ children }: IAppProvidersProps): JSX.Element {
	return (
		<QueryClientProvider client={queryClient}>
			<Toaster />
			<Toaster richColors expand visibleToasts={3} />
			{children}

			<ReactQueryDevtools initialIsOpen={false} position="bottom" buttonPosition="top-left" />
		</QueryClientProvider>
	)
}

export default AppProviders
