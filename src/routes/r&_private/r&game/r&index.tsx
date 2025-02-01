import { createFileRoute } from "@tanstack/react-router";
import FiveBoard from "./game-boards/five-board/five-board";

export const Route = createFileRoute("/_private/game/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="h-full border p-6 flex gap-6">
      <div className="flex-1"></div>
      <div className="flex-1 flex items-center">
        <FiveBoard />
      </div>
      <div className="flex-1"></div>
    </div>
  );
}
