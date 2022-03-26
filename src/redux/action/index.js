

// For Adding item to cart

export const addCart = (product) => {
    return{
        type : "ADDCART",
        payload : product
    }
}

// For deletion item from cart

export const removeCart = (product) => {
    return{
        type : "REMOVECART",
        payload : product
    }
}