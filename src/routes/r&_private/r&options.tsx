import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_private/options')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_private/options"!</div>
}
