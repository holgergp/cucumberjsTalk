import {combineReducers} from 'redux';

export const updateData = (bohne) => ({
    type: 'UPDATE_DATA',
    bohne
});

const INITIAL_STATE = [{id: '1', art: 'Äthiopien', vkp: 30.00, marge: 20.00, ekp: 10.00}];

const bohnen = (state = INITIAL_STATE, action) => {
    const bohne = action.bohne;
    switch (action.type) {
        case 'UPDATE_DATA':
            return state.map(s => {
                if (s.id === bohne.id) {
                    return {
                        id: bohne.id,
                        art: bohne.art,
                        vkp: parseFloat(bohne.vkp),
                        marge: parseFloat(bohne.marge),
                        ekp: parseFloat(bohne.ekp)
                    };
                } else {return s;}
            });
        default:
            return state;
    }
};

export default combineReducers({
    bohnen
});