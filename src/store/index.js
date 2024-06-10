import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    goods: [{
      id: 1,
      name: "商品1",
      price: 10
    },
    {
      id: 2,
      name: "商品2",
      price: 20
    },
    {
      id: 3,
      name: "商品3",
      price: 30
    },
    {
      id: 4,
      name: "商品4",
      price: 40
    },
    ],
    cars: []
  },
  getters: {
    sumTotal(state) {
      let total = 0;
      state.cars.forEach(item => {
        total += item.price
      });
      return total
    }
  },
  mutations: {
    addToCar(state, item, id) {
      console.log(state, item, id)
      state.cars.unshift(item)
    },
    delFromCar(state, item, id) {
      state.cars.splice(item, 1)
    },
  },
  actions: {
  },
  modules: {
  }
})
