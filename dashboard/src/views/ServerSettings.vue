<template>
    <div class="serverSettings">
        <ServerSettingsNav />
        <div class="content">
            <router-view name="serverSettingsContent" />
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ServerSettingsNav from '@/components/ServerSettingsNav.vue';

@Component({
  components: {
    ServerSettingsNav,
  },
})
export default class ServerSettings extends Vue {}
</script>

<style scoped lang="scss">
    .serverSettings {
        display: flex;
        height: 100%;

        .content {
            margin-left: 31rem;
            padding: 2em 1em;
        }
    }
</style>