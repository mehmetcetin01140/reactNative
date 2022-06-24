export const setCurrentProductId= (id,category) =>{
    return{
        type:"SET_CURRENT_PRODUCT_ID",
       payload: { id: id, category: category }
    }
    };

export const setCartProduct = (product) => {
    return{
        type:"SET_CART_PRODUCT",
        payload: product  
    }   
}
export const setTotalPrice = (totalPrice) => {
    return{
        type:"SET_TOTAL_PRICE",
        payload: totalPrice
    }}

export const setReducedTotalCost = (totalCost) => {
     return{
         type:"SET_REDUCED_TOTAL_COST",
         payload: totalCost
     }}

export const setSelectedCategory= (category) => {
         return{
             type:"SET_SELECTED_CATEGORY",
             payload: category
         }}