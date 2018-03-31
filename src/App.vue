<template>
  <div id="app" class="container">
    <div class="row">
      <div class="col-md-9 offset-md-1">
        <h1 class="text-center">Vue js veebipood</h1>
        <Cart class="float-right" />
        <div class="row mt-5">
          <Product
          v-for="product in products"
          :key="product.id"
          :id="product.id"
          :name="product.name"
          :image="product.image"
          :price="product.price"
          :currency="product.currency" />
    </div>
    <ViewProduct v-if="showMore" @click="showMore()" />
     </div>
    </div>
  </div>
</template>

<script>
import Product from './Product'
import Cart from './Cart'
import ViewProduct from './ViewProduct'
export default {
  name: 'App',
  data() {
    return {
      products: [],
      showMore: false
    }
  },
  computed: {
    cart() {
       return this.$store.getters.cart
    },
  },
  components: {
    Product,
    Cart,
    ViewProduct
  },
  methods: {
    fetchProducts() {
      this.$http.get('https://erply-challenge.herokuapp.com/list?AUTH=fae7b9f6-6363-45a1-a9c9-3def2dae206d')
      .then(response =>
        this.products = response.body)
    }
  },
  created: function() {
    this.fetchProducts();
  }
}
</script>

<style>

</style>
