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