<script setup lang="ts">
import { useGetRecentGamesByLeague } from '@/api/games/query';
import GameItem from './GameItem.vue';

const props = defineProps<{
    games: unknown;
}>();
</script>
<template>
    <div class="games">
        <GameItem
            v-if="props.games"
            v-for="game in props.games.data.data"
            :key="game.id"
            :game="game"
        />
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
