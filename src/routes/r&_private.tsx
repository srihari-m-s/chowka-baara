import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/_private')({
	component: RouteComponent,
})

function RouteComponent() {
	return (
		<div className="h-screen overflow-hidden">
			<div className="container mx-auto h-full p-6">
				<Outlet />
			</div>
		</div>
	)
}
