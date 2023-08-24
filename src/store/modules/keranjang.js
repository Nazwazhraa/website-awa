import axios from "axios";

const keranjang = {
  namespaced: true,
  state: {
    keranjang: []
  },
  getters: {
    getKeranjang: (state) => state.keranjang,
  },
  actions: {
    async fetchKeranjang({ commit }) {
        try{
            const token = localStorage.getItem('token');
            const dataKeranjang = await axios.post(
                "https://ecommerce.olipiskandar.com/api/v1/carts",
                {
                "temp_user_id:": null
                },
                {
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem("token")}`
                    }
                }
            );
            console.log(dataKeranjang.data),
            commit("SET_KERANJANG", dataKeranjang.data);
        } catch (error) {
            alert(error);
            console.log(error);
        }
    },
  },
  mutations: {
    SET_KERANJANG(state, keranjang) {
        state.dataKeranjang = keranjang;
    }
}
  }

export default keranjang;