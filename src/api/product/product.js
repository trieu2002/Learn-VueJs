import instance from "../config";
export const getAllProduct = () => {
    const enpoint = `/products`;
    return instance.get(enpoint);
}
export const getProductSingle = (id) => {
    const enpoint = `/products/${id}`;
    return instance.get(enpoint);
}
export const addProduct = (product) => {
    const enpoint = `/products`;
    return instance.post(enpoint, product);
}
export const removeProduct = (id) => {
    const enpoint = `/products/${id}`;
    return instance.delete(enpoint);
}
export const updateProduct = (product) => {
    const enpoint = `/products/${product.id}`;
    return instance.put(enpoint, product);
}