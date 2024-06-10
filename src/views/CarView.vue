<template>
  <div class="about">
    <h3>购物车</h3>
    <ul>
      <li v-for="(item, index) in cars" :key="index">
        {{ item.name }} - ${{ item.price }}
        <button @click="delFromCar(index, item.id)">删除</button>
      </li>
    </ul>
    <h4>总价:{{ $store.getters.sumTotal }} 元</h4>
  </div>
</template>
<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "car",
  computed: {
    ...mapState(["cars"]),
  },
  methods: {
    ...mapMutations(["delFromCar"]),
  },
};
</script>