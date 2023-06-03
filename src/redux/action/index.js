// For Add Item to Cart
export const addCart = (product) =>{
    return {
        type:"ADDITEM",
        payload:product
    }
}

// For Delete Item to Cart
export const delCart = (product) =>{
    return {
        type:"DELITEM",
        payload:product
    }
}

// For Clearing Cart
export const clearCart = () => {
    return {
      type: "CLEAR_CART",
    };
  };
  
  // For Updating Quantity of Item in Cart
  export const updateQuantity = (product, qty) => {
    return {
      type: "UPDATE_QUANTITY",
      payload: { product, qty },
    };
  };
  