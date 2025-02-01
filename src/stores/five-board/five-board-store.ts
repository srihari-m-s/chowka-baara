import {
  FiveBoardTileIds,
  fiveBoardTiles,
} from "@/routes/r&_private/r&game/game-boards/five-board/const";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { usePlayerStore } from "../player/player-store";

interface FiveBoardTiles {
  [fiveBoardTiles.tileOne]: string[];
  [fiveBoardTiles.tileTwo]: string[];
  [fiveBoardTiles.tileThree]: string[];
  [fiveBoardTiles.tileFour]: string[];
  [fiveBoardTiles.tileFive]: string[];
  [fiveBoardTiles.tileSix]: string[];
  [fiveBoardTiles.tileSeven]: string[];
  [fiveBoardTiles.tileEight]: string[];
  [fiveBoardTiles.tileNine]: string[];
  [fiveBoardTiles.tileTen]: string[];
  [fiveBoardTiles.tileEleven]: string[];
  [fiveBoardTiles.tileTwelve]: string[];
  [fiveBoardTiles.tileThirteen]: string[];
  [fiveBoardTiles.tileFourteen]: string[];
  [fiveBoardTiles.tileFifteen]: string[];
  [fiveBoardTiles.tileSixteen]: string[];
  [fiveBoardTiles.tileSeventeen]: string[];
  [fiveBoardTiles.tileEighteen]: string[];
  [fiveBoardTiles.tileNineteen]: string[];
  [fiveBoardTiles.tileTwenty]: string[];
  [fiveBoardTiles.tileTwentyOne]: string[];
  [fiveBoardTiles.tileTwentyTwo]: string[];
  [fiveBoardTiles.tileTwentyThree]: string[];
  [fiveBoardTiles.tileTwentyFour]: string[];
  [fiveBoardTiles.tileTwentyFive]: string[];
}

interface FiveBoardState {
  tiles: FiveBoardTiles;
}

interface FiveBoardActions {
  setPawnPosition: ({
    oldTileId,
    newTileId,
    pawnId,
  }: {
    oldTileId: FiveBoardTileIds;
    newTileId: FiveBoardTileIds;
    pawnId: string;
  }) => void;
}

type FiveBoardStore = FiveBoardState & FiveBoardActions;

const useFiveBoardStore = create<FiveBoardStore>()(
  immer((set) => ({
    // state
    tiles: {
      [fiveBoardTiles.tileOne]: [],
      [fiveBoardTiles.tileTwo]: [],
      [fiveBoardTiles.tileThree]: usePlayerStore.getState().playerThreePawns,
      [fiveBoardTiles.tileFour]: [],
      [fiveBoardTiles.tileFive]: [],
      [fiveBoardTiles.tileSix]: [],
      [fiveBoardTiles.tileSeven]: [],
      [fiveBoardTiles.tileEight]: [],
      [fiveBoardTiles.tileNine]: [],
      [fiveBoardTiles.tileTen]: [],
      [fiveBoardTiles.tileEleven]: usePlayerStore.getState().playerFourPawns,
      [fiveBoardTiles.tileTwelve]: [],
      [fiveBoardTiles.tileThirteen]: [],
      [fiveBoardTiles.tileFourteen]: [],
      [fiveBoardTiles.tileFifteen]: usePlayerStore.getState().playerTwoPawns,
      [fiveBoardTiles.tileSixteen]: [],
      [fiveBoardTiles.tileSeventeen]: [],
      [fiveBoardTiles.tileEighteen]: [],
      [fiveBoardTiles.tileNineteen]: [],
      [fiveBoardTiles.tileTwenty]: [],
      [fiveBoardTiles.tileTwentyOne]: [],
      [fiveBoardTiles.tileTwentyTwo]: [],
      [fiveBoardTiles.tileTwentyThree]:
        usePlayerStore.getState().playerOnePawns,
      [fiveBoardTiles.tileTwentyFour]: [],
      [fiveBoardTiles.tileTwentyFive]: [],
    },

    //
    setPawnPosition({ oldTileId, newTileId, pawnId }) {
      set((state) => {
        state.tiles[oldTileId] = state.tiles[oldTileId].filter(
          (id) => id !== pawnId
        );

        state.tiles[newTileId] = state.tiles[newTileId].concat(pawnId);
      });
    },
  }))
);

export { useFiveBoardStore };
