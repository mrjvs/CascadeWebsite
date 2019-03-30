<template>
    <div class="serverSelectHeader">
        <img src="#" 
        <h1 class="heading">My servers</h1>
        <button class="addServer btn">Add server</button>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class ServerSelectHeader extends Vue {}
</script>

<style scoped lang="scss">
    .serverSelectHeader {
        display: flex;
        align-items: flex-end;

        .heading {
            flex: 1;
            color: white;
            font-size: 2em;
        }
    }
</style>
