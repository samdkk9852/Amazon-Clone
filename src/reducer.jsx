export const initialState = {
    basket : [],
    user : null,
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
        
            case "REMOVE_FROM_BASKET":
                const index = state.basket.findIndex(
                    (basketItem) => basketItem.id === action.id
                );
                let newBasket = [...state.basket];

                if(index >=0){
                    newBasket.splice(index,1);
                }
                else{
                    console.log(`Can't remove product (id : ${action.id}) as it's not in basket `);
                }
                
                return{
                    ...state,
                    basket : newBasket
                }
            
            case "SET_USER" :
                return{
                    ...state,
                    user : action.user
                }

        default : 
            return state;
    }
};

export default reducer;