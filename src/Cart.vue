<template>
<div>
    <button class="btn btn-primary" data-toggle="modal" data-target="#cart">Cart ({{ cartLength }})</button>
    <div id="cart" class="modal fade">
      <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Shopping Cart</h5>
        <button class="close" data-dismiss="modal">
          &times;
        </button>
      </div>
      <div class="modal-body">
        <table class="table">
  <tbody>
    <tr v-for="item in products" v-bind:key="item.id">
      <td>{{item.name}}</td>
      <td>{{item.price}}</td>
      <td><button class="btn btn-danger float-right" @click="removeFromCart(id)">Remove</button></td>
    </tr>
  </tbody>
</table>
      </div>
      <div class="modal-footer">
        <button class="btn btn-secondary" data-dismiss="modal">Keep shopping</button>
        <button class="btn btn-primary">Check out</button>
      </div>
    </div>
  </div>
    </div>
  </div></template>
<script>
export default {
  name: 'cart',
  props: ['id', 'name', 'image', 'price', 'currency'],
  computed: {
    cart() {
      return this.$store.getters.cart;
    },
    cartLength() {
       return this.cart.length;
    },
    products() {
      return this.$store.getters.cart.map(cartItem => {
        return this.$store.getters.products.find(product => {
          return cartItem === product.id;
        });
      });
    }
  },
  methods: {
    removeFromCart(id) {
      this.$store.dispatch('removeFromCart', id);
    }
  }
};
</script>
