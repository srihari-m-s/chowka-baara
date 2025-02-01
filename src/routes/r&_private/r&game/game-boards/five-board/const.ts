import { TILE_ID_TEXT } from "@/const/common";

export const FIVE_BOARD_WINNING_TILE = 13;
export const FIVE_BOARD_WINNING_TILE_ID = `${TILE_ID_TEXT}-${FIVE_BOARD_WINNING_TILE}`;

export const fiveBoardTiles = {
  tileOne: `${TILE_ID_TEXT}-1`,
  tileTwo: `${TILE_ID_TEXT}-2`,
  tileThree: `${TILE_ID_TEXT}-3`,
  tileFour: `${TILE_ID_TEXT}-4`,
  tileFive: `${TILE_ID_TEXT}-5`,
  tileSix: `${TILE_ID_TEXT}-6`,
  tileSeven: `${TILE_ID_TEXT}-7`,
  tileEight: `${TILE_ID_TEXT}-8`,
  tileNine: `${TILE_ID_TEXT}-9`,
  tileTen: `${TILE_ID_TEXT}-10`,
  tileEleven: `${TILE_ID_TEXT}-11`,
  tileTwelve: `${TILE_ID_TEXT}-12`,
  tileThirteen: `${TILE_ID_TEXT}-13`,
  tileFourteen: `${TILE_ID_TEXT}-14`,
  tileFifteen: `${TILE_ID_TEXT}-15`,
  tileSixteen: `${TILE_ID_TEXT}-16`,
  tileSeventeen: `${TILE_ID_TEXT}-17`,
  tileEighteen: `${TILE_ID_TEXT}-18`,
  tileNineteen: `${TILE_ID_TEXT}-19`,
  tileTwenty: `${TILE_ID_TEXT}-20`,
  tileTwentyOne: `${TILE_ID_TEXT}-21`,
  tileTwentyTwo: `${TILE_ID_TEXT}-22`,
  tileTwentyThree: `${TILE_ID_TEXT}-23`,
  tileTwentyFour: `${TILE_ID_TEXT}-24`,
  tileTwentyFive: `${TILE_ID_TEXT}-25`,
} as const;

export type FiveBoardTileIds =
  (typeof fiveBoardTiles)[keyof typeof fiveBoardTiles];

export const FIVE_BOARD_ARRAY = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25,
] as const;

export const outerRoute = [23, 24, 25, 20, 15, 10, 5, 4, 3, 2, 1, 6, 11, 16];
export const innerRoute = [18, 19, 14, 9, 8, 7, 12, 17];

export const playerOneOuterRoute = [];
