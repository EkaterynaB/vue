<template>
	<div class="container">
		<div class="row">
			<div class="col-md-7">
				<div class="row">
					<div :key="product.id" class="col-md-6" v-for="product in products">
						<product v-on:add-to-cart="addToCart(product)" :product="product" :isInCart="isInCart(product)"></product>
					</div>
				</div>
			</div>
			<div class="col-md-5">
				<cart v-on:pay="pay()" v-on:remove-from-cart="removeFromCart($event)" :items="cart"></cart>
			</div>
		</div>
	</div>
</template>

<script>
  import products from '@/products.json';
  import Product from '@/components/Product';
  import Cart from '@/components/Cart.vue'

  export default {
    name: 'Carts',
    components: {
      Product,
      Cart
    },
    data() {
      return {
        products,
        cart: [],
      }
    },
    methods: {
      addToCart(card) {
        this.cart.push(card);

      },
      isInCart(product) {
        const item = this.cart.find(item => item.id === product.id);
        return !!item;
      },
      removeFromCart(product) {
        this.cart = this.cart.filter(item => item.id !== product.id)
      },
      pay() {
        this.cart = []
        alert('Shopping completed !')
      }

    }
  }
</script>
