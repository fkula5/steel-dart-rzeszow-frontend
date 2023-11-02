<script setup lang="ts">
import { useGetLeaguePlayers } from '@/api/players/query';
import LeagueTable from '@/components/league/LeagueTable.vue';
import TabsWrapper from '@/components/tab/TabsWrapper.vue';
import Tab from '@/components/tab/Tab.vue';
import { useRoute } from 'vue-router';

const {
    params: { id }
} = useRoute();

const { data: players } = useGetLeaguePlayers(id as string);
</script>

<template>
    <main>
        <h1 v-if="$route.params.id === '1'">Pierwsza Liga</h1>
        <h1 v-if="$route.params.id === '2'">Druga Liga</h1>
        <h1 v-if="$route.params.id === '3'">Trzecia Liga</h1>

        <TabsWrapper>
            <Tab title="Tabela"><LeagueTable v-if="players" :players="players.data.data" /></Tab>
            <Tab title="Mecze">
                <div class="placeholder"></div>
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
h1 {
    text-align: center;
}
.placeholder {
    height: 1000px;
    background-color: #2e2e2e;
    border-radius: 8px;
}
</style>
