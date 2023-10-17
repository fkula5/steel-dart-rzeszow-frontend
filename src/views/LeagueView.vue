<script setup lang="ts">
import { useGetLeaguePlayers } from '@/api/players/query';
import LeagueTable from '@/components/league/LeagueTable.vue';
import { useRoute } from 'vue-router';

const {
    params: { id }
} = useRoute();

const { data: players } = useGetLeaguePlayers(id as string);
</script>

<template>
    <main>
        <h1 v-if="$route.params.id === '1'">Tabela Pierwszej Ligi</h1>
        <h1 v-if="$route.params.id === '2'">Tabela Drugiej Ligi</h1>
        <h1 v-if="$route.params.id === '3'">Tabela Trzeciej Ligi</h1>
        <LeagueTable v-if="players" :players="players.data.data" />
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
</style>
