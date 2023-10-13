<script setup lang="ts">
import LeagueTableRow from './LeagueTableRow.vue';

const props = defineProps<{
    players: unknown;
}>();
</script>

<template>
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
        <tbody v-if="props.players">
            <LeagueTableRow v-for="player in props.players" :player="player" />
        </tbody>
    </table>
</template>

<style scoped>
table {
    width: 100%;
    border-collapse: collapse;
    background-color: #181818;
    color: white;
    border-radius: 8px;
    overflow: hidden;
}
table th {
    background-color: #2e2e2e;
    text-align: left;
    border: 1px solid #534843;
    padding: 8px 12px;
}
</style>
