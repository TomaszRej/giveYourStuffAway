import db from '../db.json';

const initialState = {
    nameInRedux: '',
    data: db
};

const reducer = (state=initialState, action) =>{
    switch(action.type){
        case 'SETUSERNAME':
            return{
                ...state,
                nameInRedux: action.name
            };

        default:
            return state;
    }
};

export default reducer;