<template>
    <div :class="baseClass">
        <slot/>

        <button class="close-button" @click="onClick">
            X
        </button>
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

        methods: {
            onClick() {
                this.$emit('close') // Cria um evento que pode ser detectado pelo componente pai
                console.log("Botão clicado!")
            },
        },
    }
</script>

<style scoped>
.alert {
    align-items: center;
    background-color: #303030;
    border-radius: 5px;
    color: white;
    display: flex;
    justify-content: space-between;
    padding: 10px;
}

.close-button {
    background-color: #ffffff00;
    border: none;
    color: white;
}

.close-button:hover {
    cursor: pointer;
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