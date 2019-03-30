<template>
    <div class="serverSettingsNav">
        <ServerSettingsInfo :server="server"/>
        <div class="links">
            <router-link to="general">General</router-link>
            <router-link to="modlog">Modlog</router-link>
        </div>
    </div>
</template>

<script lang="ts">
import { Prop, Component, Vue } from 'vue-property-decorator';
import ServerSettingsInfo from '@/components/ServerSettingsInfo.vue';

@Component({
    components: {
        ServerSettingsInfo,
    },
})
export default class ServerSettingsNav extends Vue {
    @Prop() private server!: object;
}
</script>

<style scoped lang="scss">
    .serverSettingsNav {
        padding: 1rem 1rem 1rem 15rem;
        background-color: #2C2238;
        position: fixed;
        left: 0;
        top: 0;
        height: 100%;

        .links {
            width: 15rem;

            a {
                padding: .5em 1.5em;
                color: #A898CD;
                display: block;
                text-decoration: none;
                border-radius: 3px;

                &:hover {
                    text-decoration: none;
                    color: white;
                }

                &.router-link-active {
                    background-color: #EE5151;
                    color: white;
                }
            }
        }
    }
</style>
