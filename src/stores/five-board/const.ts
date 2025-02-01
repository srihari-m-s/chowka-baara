import { TILE_ID_TEXT } from "@/const/common";

export const PLAYER_ONE_TILE = 23;
export const PLAYER_ONE_TILE_ID = `${TILE_ID_TEXT}-${PLAYER_ONE_TILE}`;

export const PLAYER_TWO_TILE = 15;
export const PLAYER_TWO_TILE_ID = `${TILE_ID_TEXT}-${PLAYER_TWO_TILE}`;

export const PLAYER_THREE_TILE = 3;
export const PLAYER_THREE_TILE_ID = `${TILE_ID_TEXT}-${PLAYER_THREE_TILE}`;

export const PLAYER_FOUR_TILE = 11;
export const PLAYER_FOUR_TILE_ID = `${TILE_ID_TEXT}-${PLAYER_FOUR_TILE}`;

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
