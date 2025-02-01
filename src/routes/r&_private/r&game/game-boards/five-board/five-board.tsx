import Pawn from "@/components/dev/pawn/pawn";
import Tile from "@/components/dev/tile/tile";
import { TILE_ID_TEXT } from "@/const/common";
import {
  FIVE_BOARD_WINNING_TILE,
  FiveBoardTileIds,
  PLAYER_FOUR_TILE,
  PLAYER_ONE_TILE,
  PLAYER_THREE_TILE,
  PLAYER_TWO_TILE,
} from "@/stores/five-board/const";
import { useFiveBoardStore } from "@/stores/five-board/five-board-store";
import {
  DndContext,
  DragEndEvent,
  DragOverlay,
  DragStartEvent,
} from "@dnd-kit/core";
import { useCallback, useMemo, useState } from "react";
import "./five-board.css";

const FIVE_BOARD_ARRAY = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25,
] as const;

const FIVE_BOARD_HOUSES = [
  PLAYER_ONE_TILE,
  PLAYER_TWO_TILE,
  PLAYER_THREE_TILE,
  PLAYER_FOUR_TILE,
  FIVE_BOARD_WINNING_TILE,
];

export default function FiveBoard() {
  const tiles = useFiveBoardStore((s) => s.tiles);
  const setPawnPosition = useFiveBoardStore((s) => s.setPawnPosition);

  const [activeId, setActiveId] = useState<string | null>(null);

  const board = useMemo(
    () =>
      FIVE_BOARD_ARRAY.map((item, index) => {
        const tileId: FiveBoardTileIds = `${TILE_ID_TEXT}-${item}`;

        return (
          <Tile
            id={tileId}
            key={`${item}-${index}`}
            isHouse={FIVE_BOARD_HOUSES.includes(item)}
            isWinning={item === FIVE_BOARD_WINNING_TILE}
            pawns={tiles[tileId]}
          />
        );
      }),
    [tiles]
  );

  // Drag Logic
  const handleDragStart = useCallback((e: DragStartEvent) => {
    const { active } = e;
    setActiveId(active.id ? `${active.id}` : null);
  }, []);

  const handleDragEnd = useCallback(
    (e: DragEndEvent) => {
      const { active, over } = e;

      if (!over) return;

      const oldTileId = active.data.current?.tileId
        ? (active.data.current?.tileId as FiveBoardTileIds)
        : null;

      if (active.id !== over.id && oldTileId) {
        setPawnPosition({
          oldTileId: oldTileId,
          newTileId: over.id as FiveBoardTileIds,
          pawnId: `${active.id}`,
        });
      }
    },
    [setPawnPosition]
  );

  return (
    <DndContext onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
      <div className="size-[768px] grid-rows-5 border-t border-l grid grid-cols-5 five-board">
        {board}
      </div>

      {activeId ? (
        <DragOverlay>
          <Pawn id={activeId} />
        </DragOverlay>
      ) : null}
    </DndContext>
  );
}
