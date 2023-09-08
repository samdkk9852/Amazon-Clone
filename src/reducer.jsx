export const initialState = {
    basket : [],
};

//Selector
export const getBasketTotal = (basket)=>{
    return(
        basket?.reduce((accumulator, currentValue)=>{
            return accumulator + currentValue.price
        },0)
    )
}

const reducer = (state, action)=>{
    // console.log(action);
    switch(action.type){  // whenever add to basket is pressed action takes place in reducer
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket : [...state.basket, action.item],
            };

        default : 
            return state;
    }
};

export default reducer;