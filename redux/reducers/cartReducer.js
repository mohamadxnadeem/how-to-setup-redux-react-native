let defaultState = {
    selectedItems: {items:[], resturantName: ''}
}

let cartReducer = (state = defaultState, action) => {
    switch(action.type){
        case 'ADD_TO_CART':{
            let newState = {...state};
                newState.selectedItems = {
                    items:[...newState.selectedItems.items, action.payload],
                    resturantName: action.payload.resturantName,
                };

                console.log(newState,'->');
                return newState;
        }

        default:
            return state;
    }
};

export default cartReducer;