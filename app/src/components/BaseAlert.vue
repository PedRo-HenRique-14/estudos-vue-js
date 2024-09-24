<template>
    <div :class="baseClass">
        <slot/>
    </div>
</template>

<script>
    export default {
        props: {
            variant: { // Define um tipo e um valor default para a prop variant
                type: String,
                default: '',
            }
        },

        computed: {
            baseClass() {
                return [
                    'alert',
                    this.variant?this.variant:'', // Verifica se existe algum valor na variant
                ]
            },
        },
    }
</script>

<style scoped>
.alert {
    background-color: #303030;
    border-radius: 5px;
    color: white;
    padding: 10px;
    text-align: center;
}
.success {
    background-color: #3f5c2f;
}
.danger {
    background-color: #7e2929;
}
.warning {
    background-color: #a8872c;
}
</style>