import {
  PLAYER_FOUR_ID,
  PLAYER_ONE_ID,
  PLAYER_THREE_ID,
  PLAYER_TWO_ID,
  PlayerId,
} from "@/const/common";
import { nanoid } from "nanoid";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

interface PlayerState {
  playerOnePawns: [string, string, string, string];
  playerTwoPawns: [string, string, string, string];
  playerThreePawns: [string, string, string, string];
  playerFourPawns: [string, string, string, string];
}

interface PlayerActions {
  getPlayerByPawnId: (id: string) => PlayerId | null;
}

type PlayerStore = PlayerState & PlayerActions;

const usePlayerStore = create<PlayerStore>()(
  immer((_, get) => ({
    // state
    playerOnePawns: [nanoid(), nanoid(), nanoid(), nanoid()],
    playerTwoPawns: [nanoid(), nanoid(), nanoid(), nanoid()],
    playerThreePawns: [nanoid(), nanoid(), nanoid(), nanoid()],
    playerFourPawns: [nanoid(), nanoid(), nanoid(), nanoid()],

    // actions
    getPlayerByPawnId: (id: string) => {
      const state = get();
      if (state.playerOnePawns.includes(id)) return PLAYER_ONE_ID;
      if (state.playerTwoPawns.includes(id)) return PLAYER_TWO_ID;
      if (state.playerThreePawns.includes(id)) return PLAYER_THREE_ID;
      if (state.playerFourPawns.includes(id)) return PLAYER_FOUR_ID;
      return null; // If the ID is not found
    },
  }))
);

export { usePlayerStore };
