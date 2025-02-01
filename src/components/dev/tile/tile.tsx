import { TILE_ID_TEXT } from "@/const/common";
import { cn } from "@/lib/utils";
import { useDroppable } from "@dnd-kit/core";
import { useMemo } from "react";

interface ITile {
  id: string;
  isHouse: boolean;
  isWinning: boolean;
}

export default function Tile({ id, isHouse, isWinning }: ITile) {
  const tileId = useMemo(() => {
    return `${TILE_ID_TEXT}-${id}`;
  }, [id]);

  const { setNodeRef } = useDroppable({
    id: tileId,
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
      <div className="p-2"></div>
    </div>
  );
}
