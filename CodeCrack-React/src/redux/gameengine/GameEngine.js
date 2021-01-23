import { GameEngineActionTypes } from './GameEngine.types';

const initialState = {
  LvL: 1,
  CodeA: 0,
  CodeB: 0,
  CodeC: 0,
  GuessA: 0,
  GuessB: 0,
  GuessC: 0,
  CodeSum: 0,
  CodeProduct: 0,
  GuessSum: 0,
  GuessProduct: 0,
};

const gameEngine = (state = initialState, action) => {
  switch (action.type) {
    case GameEngineActionTypes.SET_NEW_LEVEL:
      return { ...state, LvL: state.LvL + 1 };
    case GameEngineActionTypes.SET_GENERATED_CODE:
      return {
        ...state,
        CodeA: action.codeA + state.LvL,
        CodeB: action.codeB + state.LvL,
        CodeC: action.codeC + state.LvL,
      };
    case GameEngineActionTypes.SET_CODEBASE:
      return {
        ...state,
        CodeSum: state.CodeA + state.CodeB + state.CodeC,
        CodeProduct: state.CodeA * state.CodeB * state.CodeC,
      };
    case GameEngineActionTypes.SET_PLAYER_GUESS:
      return {
        ...state,
        GuessA: action.guessA,
        GuessB: action.guessB,
        GuessC: action.guessC,
      };
    case GameEngineActionTypes.SET_PLAYER_CODES:
      return {
        ...state,
        GuessSum: state.GuessA + state.GuessB + state.GuessC,
        GuessProduct: state.GuessA * state.GuessB * state.GuessC,
      };
    default:
      return state;
  }
};

export default gameEngine;