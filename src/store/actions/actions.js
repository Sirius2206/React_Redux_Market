export const CHANGE_PRODUCT_FIELD = 'CHANGE_PRODUCT_FIELD'
export const ADD_PRODUCT = 'ADD_PRODUCT'

export function changeProductField(name, value) {
    return {type: CHANGE_PRODUCT_FIELD, payload: {name, value}}
}

export function addProduct({name, price, discount, description, img, src}) {
    return {type: ADD_PRODUCT, payload: {name, price, discount, description, img, src}}
}