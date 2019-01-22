import {combineReducers} from 'redux';

export const updateData = (bohne) => ({
    type: 'UPDATE_DATA',
    bohne
});

const INITIAL_STATE = [{id: 1, art: 'Äthiopien', vkp: 10.00, marge: 20.00, ekp: 30.00}];

const bohnen = (state = INITIAL_STATE, action) => {
    const bohne  = action.bohne;
    switch (action.type) {
        case 'UPDATE_DATA':
            return state.map(s => s.id === bohne.id ? {
                id: bohne.id,
                art: bohne.art,
                vkp: parseFloat(bohne.vkp),
                marge: parseFloat(bohne.marge),
                ekp: parseFloat(bohne.ekp)
            } : s);
        default:
            return state;
    }
};

export default combineReducers({
    bohnen
});