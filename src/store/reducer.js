const initialState = {
    nameInRedux: 'Tomek'
};

const reducer = (state=initialState, action) =>{
    switch(action.type){
        case 'SETUSERNAME':
            return{
                nameInRedux: action.name
            };
        default:
            return state;
    }
};

export default reducer;