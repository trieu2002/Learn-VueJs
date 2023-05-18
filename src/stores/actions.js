import axios from 'axios';
export const getProducts = ({ commit }) => {
    axios.get(`http://localhost:8000/products`)
        .then((response) => {
            commit('SET_PRODUCT', response.data);
        })
}