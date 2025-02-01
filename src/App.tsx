import { useQueryClient } from "@tanstack/react-query";
import {
  createRouter,
  notFound,
  parseSearchWith,
  RouterProvider,
  stringifySearchWith,
} from "@tanstack/react-router";
import axios from "axios";
import { JSX } from "react";
import { parse, stringify } from "zipson";
import "./App.css";
import { routeTree } from "./routeTree.gen";

// Create a new router instance
export const router = createRouter({
  routeTree,
  context: {},
  // defaultPreload: 'intent',
  // defaultPendingMinMs: 0,
  defaultPreloadStaleTime: 0,
  defaultPendingComponent: () => <div>loading...</div>,
  // defaultNotFoundComponent: () => <Error404Public />,
  // defaultErrorComponent: (props) => <ErrorBoundary {...props} />,
  defaultOnCatch(error: unknown) {
    console.log("MMD:ERR", error);
    if (axios.isAxiosError(error) && error.response) {
      if (error.response) notFound();
    }
  },

  parseSearch: parseSearchWith(parse),
  stringifySearch: stringifySearchWith((val) =>
    stringify(val, {
      detectUtcTimestamps: true,
    })
  ),
});

// Register the router instance for type safety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

function App(): JSX.Element {
  const queryClient = useQueryClient();

  return (
    <RouterProvider router={router} context={{ queryClient: queryClient }} />
  );
}

export default App;
