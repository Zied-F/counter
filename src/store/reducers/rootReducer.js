const initialState ={
    count : 0
}

const rootReducer = (state = initialState, action) => {
switch (action.type){
    case 'PLUS':
        return {
            count : state.count+1
        };
    case 'MOINS':
        return{
            count: state.count-1
        };
        default:
            return state;
};

}

export default rootReducer
