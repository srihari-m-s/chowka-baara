import { PLAYERS } from "@/const/common";
import { usePlayerStore } from "@/stores/player/player-store";
import { useDraggable } from "@dnd-kit/core";

interface IPawn {
  id: string;
  tileId?: string;
}

export default function Pawn({ id, tileId }: IPawn) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id,
    data: {
      tileId,
    },
  });
  const getPlayerByPawnId = usePlayerStore((s) => s.getPlayerByPawnId);
  const playerId = getPlayerByPawnId(id)!;

  const { color } = PLAYERS[playerId];

  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      }
    : undefined;

  return (
    <button
      className="size-10  rounded-full ring-2 ring-gray-700"
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      style={{ backgroundColor: color, ...style }}
    ></button>
  );
}
