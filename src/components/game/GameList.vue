<script setup lang="ts">
import { useGetRecentGamesByLeague } from '@/api/games/query';
import GameItem from './GameItem.vue';

const props = defineProps<{
    games: any;
    isLoading: any;
}>();
</script>
<template>
    <div class="games">
        <div v-if="props.isLoading">Ładuje...</div>
        <GameItem v-if="games" v-for="game in props.games.data.data" :key="game.id" :game="game" />
    </div>
</template>
<style scoped>
.games {
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;
    background-color: #2e2e2e;
}
</style>
