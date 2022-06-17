const INITIAL_STATE = {
    currentProduct:{
      productId:null,
      productCategory:null
    },
    cartProducts:[],
    totalPrice:[],
    quantityHolder:[]

}
export default (state=INITIAL_STATE,action)=>{
    switch (action.type) {
        case "SET_CURRENT_PRODUCT_ID":
            return{
              ...state,currentProduct:{...state.currentProduct,productId:action.payload.id,productCategory:action.payload.category}
            }
            case "SET_CART_PRODUCT":
              return{
                ...state,cartProducts:[...state.cartProducts,action.payload]
              }
              case "SET_TOTAL_PRICE":
                return{
                  ...state,totalPrice:[...state.totalPrice,action.payload]
                }
              git

        default:
          return state
    }
}
// spread ile nested object update i ...state,currentProduct:{...state.currentProduct,productId:action.payload.id,productCategory:action.payload.category}