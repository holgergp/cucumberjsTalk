import { combineReducers } from "redux";

export const updateData = bohne => ({
  type: "UPDATE_DATA",
  bohne
});

const INITIAL_STATE = [
  {
    id: "1",
    art: "Äthiopien",
    vkp: 12.0,
    marge: 20.0,
    ekp: 10.0,
    rabatt: 0.0,
    vkpRabatt: 12.0
  }
];

const bohnen = (state = INITIAL_STATE, action) => {
  const bohne = action.bohne;
  switch (action.type) {
    case "UPDATE_DATA":
      return state.map(s => {
        if (s.id === bohne.id) {
          const rabatt = parseFloat(bohne.rabatt || 0.0);
          const vkp = parseFloat(bohne.vkp).toFixed(2);
          const vkpRabatt = (vkp - vkp * (rabatt / 100)).toFixed(2);
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
