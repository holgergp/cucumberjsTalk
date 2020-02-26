import { combineReducers } from "redux";
import { TEST_BOHNEN } from "./Test-Bohnen";

export const updateDataAction = bohne => ({
  type: "UPDATE_DATA",
  bohne
});

const INITIAL_STATE = TEST_BOHNEN;

const bohnen = (state = INITIAL_STATE, action) => {
  const bohne = action.bohne;
  switch (action.type) {
    case "UPDATE_DATA":
      return state.map(s => {
        if (s.id === bohne.id) {
          //const rabatt = parseFloat(bohne.rabatt || 0.0);
          const rabatt = 0.0;
          const vkp = parseFloat(bohne.vkp).toFixed(2);
          //const vkpRabatt = (vkp - vkp * (rabatt / 100)).toFixed(2);
          const vkpRabatt = vkp;
          const ekp = parseFloat(bohne.ekp).toFixed(2);
          const marge = ((vkpRabatt / ekp - 1) * 100).toFixed(2);
          return {
            id: bohne.id,
            art: bohne.art,
            vkp,
            vkpRabatt,
            marge,
            ekp,
            rabatt
          };
        } else {
          return s;
        }
      });
    default:
      return state;
  }
};

export default combineReducers({
  bohnen
});
