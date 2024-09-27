<template>
    <div class="card">
        {{ product.name }} - {{ product.price }} <br>
        <button @click="addToCart">Adicionar ao Carrinho</button> <br>
        <button 
            @click="removeFromCart"
            v-if="$store.state.cart.includes(product)"
        >Remover do Carrinho</button>
    </div>
</template>

<script>
    export default {
        props: {
            product: Object,
        },
        methods: {
            addToCart() {
                this.$store.commit('addToCart', this.product)
            },
            removeFromCart() {
                this.$store.commit('removeFromCart', this.product.id)
            },
        },
    }
</script>

<style scoped>
.card {
    background-color: #2c2c2c;
    border-radius: 5px;
    color: white;
    margin: 10px;
    padding: 10px;
    text-align: center;
    width: 200px;
}
</style>