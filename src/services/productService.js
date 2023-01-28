import { handleFailure, handleResponse } from "../utils/serviceUtils"

export const fetchProducts = () => {
    return fetch('https://dummyjson.com/products')
    .then(handleResponse)
    .catch(handleFailure)
}