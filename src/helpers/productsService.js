import { products } from "../data/products"

export const getProducts = () => {
    return products
}

export const calculateTotal = ( items ) => {
    return  items
    .reduce(( acumulador, item ) => acumulador + item.product.price * item.quantity, 0 );
}