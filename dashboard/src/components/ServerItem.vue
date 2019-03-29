<template>
  <div class="serverItem">
    <h2>{{ name }}</h2>
    <p>{{ membercount }} members</p>
    <router-link :to="'/configure/' + id ">Click to edit</router-link>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class ServerItem extends Vue {
  @Prop() private name!: string;
  @Prop() private membercount!: string;
  @Prop() private id!: string;
}
</script>

<style scoped lang="scss">
</style>
