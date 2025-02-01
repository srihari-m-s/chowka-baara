import { Button } from '@/components/ui/button'
import { createFileRoute, Link } from '@tanstack/react-router'
import { useTranslation } from 'react-i18next'

export const Route = createFileRoute('/_private/home')({
	component: RouteComponent,
})

function RouteComponent() {
	const { t } = useTranslation()

	return (
		<div className="container mx-auto flex h-screen items-center justify-center gap-2">
			<div className="grid max-w-sm grid-cols-1 gap-4">
				<Button size={'lg'} asChild>
					<Link to="/game">{t('Start Game')}</Link>
				</Button>
				<Button size={'lg'} asChild>
					<Link to="/options">{t('Options')}</Link>
				</Button>
				<Button size={'lg'} asChild>
					<Link to="/rules">{t('Rules')}</Link>
				</Button>
			</div>
		</div>
	)
}
