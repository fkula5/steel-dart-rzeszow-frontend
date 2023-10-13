<script setup lang="ts">
import { useGetLeaguePlayers } from '@/api/players/query';
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
        <table>
            <thead>
                <th>Imię</th>
                <th>Nazwisko</th>
                <th>Punkty</th>
                <th>Bilans</th>
                <th>Legi wygrane</th>
                <th>Legi przegrane</th>
                <th>Średnia</th>
                <th>Maxy</th>
                <th>Wysokie kończenia</th>
                <th>Szybkie kończenia</th>
            </thead>
            <tbody v-if="players">
                <tr v-for="player in players.data.data" :key="player.id">
                    <td>{{ player.name }}</td>
                    <td>{{ player.secondName }}</td>
                    <td>{{ player.points }}</td>
                    <td>{{ player.balance }}</td>
                    <td>{{ player.legsWon }}</td>
                    <td>{{ player.legsLost }}</td>
                    <td>{{ player.average3Darts }}</td>
                    <td>{{ player.maxAmount }}</td>
                    <td>
                        <ul>
                            <li v-for="(highOut, index) in player.highOuts" :key="index">
                                {{ highOut.value }}
                            </li>
                        </ul>
                    </td>
                    <td>
                        <ul>
                            <li v-for="(fastOut, index) in player.fastOuts" :key="index">
                                {{ fastOut.value }}
                            </li>
                        </ul>
                    </td>
                </tr>
            </tbody>
        </table>
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
table {
    width: 100%;
    border-collapse: collapse;
    background-color: #181818;
    color: white;
    border-radius: 8px;
    overflow: hidden;
}

table th,
table td {
    border: 1px solid #534843;
    padding: 8px 12px;
}

table th {
    background-color: #2e2e2e;
    text-align: left;
}
table tbody tr:nth-child(odd) {
    background-color: #2e2e2e;
}

table tbody tr:nth-child(even) {
    background-color: #181818;
}
</style>
