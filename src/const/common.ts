import { intl } from "@/locales/i18n";

export const TILE_ID_TEXT = "Tile";
export const PLAYER_ID_TEXT = "Player";
export const PAWN_ID_TEXT = "Pawn";

export const PLAYER_ONE_ID = "playerOne";
export const PLAYER_TWO_ID = "playerTwo";
export const PLAYER_THREE_ID = "playerThree";
export const PLAYER_FOUR_ID = "playerFour";

export const PLAYER_ONE_COLOR = "red";
export const PLAYER_TWO_COLOR = "blue";
export const PLAYER_THREE_COLOR = "green";
export const PLAYER_FOUR_COLOR = "yellow";

export const PLAYERS = {
  [PLAYER_ONE_ID]: {
    id: PLAYER_ONE_ID,
    name: intl.t("Player One"),
    color: PLAYER_ONE_COLOR,
  },
  [PLAYER_TWO_ID]: {
    id: PLAYER_TWO_ID,
    name: intl.t("Player Two"),
    color: PLAYER_TWO_COLOR,
  },
  [PLAYER_THREE_ID]: {
    id: PLAYER_THREE_ID,
    name: intl.t("Player Three"),
    color: PLAYER_THREE_COLOR,
  },
  [PLAYER_FOUR_ID]: {
    id: PLAYER_FOUR_ID,
    name: intl.t("Player Four"),
    color: PLAYER_FOUR_COLOR,
  },
};

export type PlayerId =
  | typeof PLAYER_ONE_ID
  | typeof PLAYER_TWO_ID
  | typeof PLAYER_THREE_ID
  | typeof PLAYER_FOUR_ID;
