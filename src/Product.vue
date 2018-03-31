<template>
  <div class="col-lg-4 col-md-6">
          <div class="card mt-3">
    <img :src="image" :alt="name" class="card-img-top" style="height:220px">
    <div class="card-body" style="height:200px">
      <h4 class="card-title">{{name}}</h4>
      <div class="card-text">Price : {{price}} {{currency}}</div>
        <div class="row mt-4">
          <router-link class="btn btn-success ml-3
        " :to="{ name: 'ViewProduct', params: { id:id }}" @click="showMore(showMore)">See more</router-link>
        <button class="btn btn-primary ml-lg-4 mt-md-1" @click="addToCart(id)">Add to cart</button>
        </div>
      </div>
  </div>
      </div>
</template>
<script>
export default {
  name: 'product',
  props: ['id', 'name', 'image', 'price', 'currency'],
  methods: {
    addToCart(id) {
      this.$store.dispatch('addToCart', id);
    },
    showMore() {
      let showMore = true;
    }
  },
};
</script>
