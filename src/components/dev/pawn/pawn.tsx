import { PlayerId } from "@/const/common";
import { useDraggable } from "@dnd-kit/core";

interface IPawn {
  id: string;
  player: PlayerId;
}

export default function Pawn({ id }: IPawn) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id,
  });

  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      }
    : undefined;

  return (
    <button
      className="size-10 bg-blue-500 rounded-full ring-2 ring-red-500"
      style={style}
      ref={setNodeRef}
      {...listeners}
      {...attributes}
    ></button>
  );
}
