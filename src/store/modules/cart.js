// import axios from "axios";

// const user = {
//     namespaced: true,
//     state: {
//         cartData: [],
//     },
//     getters:{
//         getUser: (state) => state.cartData,
//     },
//     actions: {
//         async fetchUser({ commit }) {
//             try {
//                 const data = await axios.get('https://ecommerce.olipiskandar.com/api/v1/carts',
//                 {
//                     headers: {
//                         'Authorization': `Bearer ${localStorage.getItem("token")}`
//                     }
//                 }
//                 );
//                 console.log(data.data)
//                 commit("SET_CART", data.data['cart']);
//         } catch (error) {
//             alert(error);
//             console.log(error);
//         }
//     },
// },
//  mutations: {
//     SET_USER(state, cart) {
//         state.userData = cart;
//     },
//  },
// };
// export default cart;