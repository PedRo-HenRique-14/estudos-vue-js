<template>
    <div>
        <AppProduct
            v-for="product in $store.state.products"
            :key="product.id"
            :product="product"
        />
    </div>
    <div>
        <h2>Cart</h2>
        <div
            v-for="product in $store.state.cart"
            :key="product.id"
        >
            {{ product.name }}
        </div>
    </div>
</template>

<script>
    import AppProduct from '@/components/products/AppProduct.vue'

    export default {
        components: {
            AppProduct,
        },
    }
</script>

<style scoped>

</style>