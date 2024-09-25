<template>
    <div>
        Usuário

        <button @click="login">
            Login
        </button>
    </div>
</template>

<script>
    export default {
        created() {
            // console.log(this.$route) // Dados da rota atual
            console.log(this.$router) // Funcionalidade do esquema de roteamento
        },
        methods: {
            login() {
                // Ajax de login imaginario
                // this.$router.push('/about') // Direciona para outro endpoint
                this.$router.push({ name: 'about' }) // É possível utilizar objeto
                console.log('Direcionado!')
            }
        },
    }
</script>