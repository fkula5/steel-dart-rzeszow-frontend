<script setup lang="ts">
import { useGetGamesByPlayer } from '@/api/games/query';
import { useGetPlayerInfo } from '@/api/players/query';
import Player from '@/components/player/Player.vue';
import Tab from '@/components/tab/Tab.vue';
import TabsWrapper from '@/components/tab/TabsWrapper.vue';
import GameList from '@/components/game/GameList.vue';
import { useRoute } from 'vue-router';

const {
    params: { id }
} = useRoute();

const { data: player } = useGetPlayerInfo(id as string);

const { data: games, isLoading } = useGetGamesByPlayer(id as string);
</script>

<template>
    <main>
        <TabsWrapper>
            <Tab title="Gracz">
                <Player v-if="player" :player="player.data.data" />
            </Tab>
            <Tab title="Mecze">
                <GameList :games="games" :isLoading="isLoading" />
            </Tab>
        </TabsWrapper>
    </main>
</template>

<style scoped>
main {
    max-width: 1200px;
    margin: 20px auto 0;
    display: flex;
    flex-direction: column;
    min-height: 1000px;
    gap: 30px;
}
.games {
    padding: 20px;
    border-radius: 8px;
}
</style>
