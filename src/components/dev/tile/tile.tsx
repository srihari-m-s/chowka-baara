import { cn } from "@/lib/utils";
import { useDroppable } from "@dnd-kit/core";
import Pawn from "../pawn/pawn";

interface ITile {
  id: string;
  isHouse: boolean;
  isWinning: boolean;
  pawns: string[];
}

export default function Tile({ id, isHouse, isWinning, pawns }: ITile) {
  const { setNodeRef } = useDroppable({
    id,
  });

  return (
    <div
      ref={setNodeRef}
      className={cn(
        "border-b border-r tile",
        isHouse && "diagonal bg-blue-50",
        isWinning && "bg-green-50"
      )}
    >
      {id}
      <div className="p-2 h-full w-full grid grid-cols-2 grid-rows-2 place-items-center overflow-hidden">
        {pawns.map((item) => {
          return <Pawn key={item} id={item} tileId={id} />;
        })}
      </div>
    </div>
  );
}
