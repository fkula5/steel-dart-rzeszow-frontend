<script setup lang="ts">
import { useGetPlayerInfo } from '@/api/players/query';
import Player from '@/components/player/Player.vue';
import Tab from '@/components/tab/Tab.vue';
import TabsWrapper from '@/components/tab/TabsWrapper.vue';
import { useRoute } from 'vue-router';

const {
    params: { id }
} = useRoute();

const { data: player } = useGetPlayerInfo(id as string);
</script>

<template>
    <main>
        <TabsWrapper>
            <Tab title="Gracz"><Player v-if="player" :player="player.data.data" /></Tab>
            <Tab title="Mecze">
                <div class="placeholder"></div>
            </Tab>
        </TabsWrapper>
    </main>
</template>

<style scoped>
main {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 1000px;
    text-align: center;
}
.placeholder {
    height: 800px;
    background-color: #2e2e2e;
    border-radius: 8px;
    width: 100%;
}
</style>
