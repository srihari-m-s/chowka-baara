import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { FiveBoardTileIds, fiveBoardTiles } from "./const";

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
  setPawnPosition: (tileId: FiveBoardTileIds, pawnId: string) => void;
}

type FiveBoardStore = FiveBoardState & FiveBoardActions;

const fiveBoardStore = create<FiveBoardStore>()(
  immer((set) => ({
    // state
    tiles: {
      [fiveBoardTiles.tileOne]: [],
      [fiveBoardTiles.tileTwo]: [],
      [fiveBoardTiles.tileThree]: [],
      [fiveBoardTiles.tileFour]: [],
      [fiveBoardTiles.tileFive]: [],
      [fiveBoardTiles.tileSix]: [],
      [fiveBoardTiles.tileSeven]: [],
      [fiveBoardTiles.tileEight]: [],
      [fiveBoardTiles.tileNine]: [],
      [fiveBoardTiles.tileTen]: [],
      [fiveBoardTiles.tileEleven]: [],
      [fiveBoardTiles.tileTwelve]: [],
      [fiveBoardTiles.tileThirteen]: [],
      [fiveBoardTiles.tileFourteen]: [],
      [fiveBoardTiles.tileFifteen]: [],
      [fiveBoardTiles.tileSixteen]: [],
      [fiveBoardTiles.tileSeventeen]: [],
      [fiveBoardTiles.tileEighteen]: [],
      [fiveBoardTiles.tileNineteen]: [],
      [fiveBoardTiles.tileTwenty]: [],
      [fiveBoardTiles.tileTwentyOne]: [],
      [fiveBoardTiles.tileTwentyTwo]: [],
      [fiveBoardTiles.tileTwentyThree]: [],
      [fiveBoardTiles.tileTwentyFour]: [],
      [fiveBoardTiles.tileTwentyFive]: [],
    },

    //
    setPawnPosition(tileId, pawnId) {
      set((state) => {
        state.tiles[tileId] = state.tiles[tileId].concat(pawnId);
      });
    },
  }))
);

export { fiveBoardStore };
