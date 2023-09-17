<script setup lang="ts">
import GameItem from './GameItem.vue';
import { useQuery } from 'vue-query';
import { VueQueryDevTools } from "vue-query/devtools";
import { Game } from '../../types/Game.ts';

const fetcher = async (): Promise<Game[]> =>
  await fetch("https://steel-dart.skni.edu.pl/api/games").then((response) =>
    response.json()
  );

const { isLoading, isError,  data, error } = useQuery("games",fetcher);
</script>
<template>
    <span v-if="isLoading">Loading...</span>
  <span v-else-if="isError">Error: {{ error.message }}</span>
  <!-- We can assume by this point that `isSuccess === true` -->
  <ul v-else>
    <div class="games">
        <GameItem v-for="game in data.data" :key="game.id" :game="game"/>
    </div>
  </ul>
  <VueQueryDevTools />
</template>
<style scoped>
    .games {
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;
}
</style>