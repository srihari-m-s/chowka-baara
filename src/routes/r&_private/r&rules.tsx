import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_private/rules')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_private/rules"!</div>
}
