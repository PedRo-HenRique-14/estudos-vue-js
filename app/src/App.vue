<template>
  <BaseAlert
    v-if="showAlert"
    :variant="alertVariant"
    @close="onClose"
  >
    {{ alertText }}
  </BaseAlert>
</template>

<script>
import BaseAlert from "@/components/BaseAlert.vue";
export default {
  name: 'App',
  components: {BaseAlert},
  data() {
    return {
      showAlert: true,
      alertVariant: 'success',
      alertText: 'Seu formulário foi enviado!',
    }
  },
  watch: {
    
  },
  computed: {
    
  },
  methods: {
    onClose() {
      this.showAlert = false
      console.log('on close')
    }
  },
}
</script>

<style>
#app {
  color: #2c3e50;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  margin: 0px;
  -moz-osx-font-smoothing: grayscale;
  padding: 50px 200px;
  -webkit-font-smoothing: antialiased;
}
</style>
