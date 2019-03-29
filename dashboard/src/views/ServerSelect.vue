<template>
  <div class="serverSelect">
    <div class="nav">
      <h1>Server select</h1>
      <button>Add server</button>
    </div>
    <ServerItem name="A server" membercount="777" id="12345678910"></ServerItem>
    <ServerItem name="Another server" membercount="666" id="1231231231"></ServerItem>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ServerItem from '@/components/ServerItem.vue';

@Component({
  components: {
    ServerItem,
  },
})
export default class ServerSelect extends Vue {}
</script>
