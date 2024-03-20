const addProduct=(product)=>{
    return {
        type: 'ADD_TO_CART',
        load: product,
    }
}


export {addProduct}