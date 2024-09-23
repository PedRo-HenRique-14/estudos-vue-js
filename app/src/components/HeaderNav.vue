<template>
    <header class="header">
        <!-- A tag slot possibilita inserir dados através da tag <HeaderNav></HeaderNav> no componente App -->
        <h1 v-if="$slots.title" class="title"> <!-- <h1> só será criado se v-if for verdadeiro -->
            <slot name="title"/>
        </h1>
        <div class="description">
            <slot name="description"/>
        </div>
        <div class="content"><slot/></div>
    </header>
</template>
<script>
    export default {

    }
</script>
<style>
    * {
        margin: 0px;
        padding: 0px;
    }
    .header {
        background-color: #000;
        color: #fff;
        margin: 0px;
        padding: 10px 20px;
        width: calc(100vw - 40px);
    }
</style>