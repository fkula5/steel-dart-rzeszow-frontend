<script setup lang="ts">
import { useGetGames } from '@/api/games/query';
import GameItem from './GameItem.vue';

const { data: games } = useGetGames();
</script>
<template>
    <div class="games">
        <GameItem v-if="games" v-for="game in games.data.data" :key="game.id" :game="game" />
    </div>
</template>
<style scoped>
.games {
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;
}
</style>
