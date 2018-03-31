<template>
<div>
  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis officiis enim itaque cupiditate architecto esse, magni delectus facere sit voluptatum ipsa quae fuga quas veritatis neque voluptatem, omnis nam? Reprehenderit fugit veniam nihil, omnis modi aliquam et voluptatum dolorum neque iure eos explicabo nemo debitis provident inventore voluptatibus sequi temporibus blanditiis voluptatem minus voluptate, repellendus vitae. Ducimus at illum, inventore dignissimos aperiam aut eveniet cum repellendus maiores explicabo velit laboriosam ipsum veniam praesentium mollitia sequi temporibus vel eius et commodi esse, fuga est? Et similique hic voluptate, nisi expedita necessitatibus ad accusantium quidem aliquid mod</p>
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
  },
};
</script>
