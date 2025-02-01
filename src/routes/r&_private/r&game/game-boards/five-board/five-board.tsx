import Tile from "@/components/dev/tile/tile";
import {
  FIVE_BOARD_WINNING_TILE,
  PLAYER_FOUR_TILE,
  PLAYER_ONE_TILE,
  PLAYER_THREE_TILE,
  PLAYER_TWO_TILE,
} from "@/stores/five-board/const";
import { DndContext } from "@dnd-kit/core";
import { useCallback, useMemo } from "react";
import "./five-board.css";

const FIVE_BOARD_ARRAY = Array.from({ length: 25 }, (_, i) => i + 1);
const FIVE_BOARD_HOUSES = [
  PLAYER_ONE_TILE,
  PLAYER_TWO_TILE,
  PLAYER_THREE_TILE,
  PLAYER_FOUR_TILE,
];

export default function FiveBoard() {
  const board = useMemo(
    () =>
      FIVE_BOARD_ARRAY.map((item, index) => {
        return (
          <Tile
            id={`${item}`}
            key={`${item}-${index}`}
            isHouse={FIVE_BOARD_HOUSES.includes(item)}
            isWinning={item === FIVE_BOARD_WINNING_TILE}
          />
        );
      }),
    []
  );

  // Drag Logic
  const handleDragStart = useCallback(() => {}, []);

  const handleDragEnd = useCallback(() => {}, []);

  return (
    <DndContext onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
      <div className="size-[768px] grid-rows-5 border-t border-l grid grid-cols-5 five-board">
        {board}
      </div>
    </DndContext>
  );
}
