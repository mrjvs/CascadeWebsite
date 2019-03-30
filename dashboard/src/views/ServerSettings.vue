<template>
    <div class="serverSettings">
        <ServerSettingsNav :server="servers[$route.params.id]" />
        <div class="content">
            <router-view name="serverSettingsContent" />
        </div>
    </div>
</template>

<script lang="ts">
import { Prop, Component, Vue } from 'vue-property-decorator';
import ServerSettingsNav from '@/components/ServerSettingsNav.vue';

@Component({
  components: {
    ServerSettingsNav,
  },
})
export default class ServerSettings extends Vue {
    @Prop() private servers!: object[];
}
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