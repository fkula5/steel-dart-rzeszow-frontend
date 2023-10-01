<script setup lang="ts">
import { useGetPlayerInfo } from '@/api/players/query';
import { useRoute } from 'vue-router';

const {
    params: { id }
} = useRoute();

const { data: player } = useGetPlayerInfo(id as string);
</script>

<template>
    <main>
        <div class="player-container">
            <h1>Profil zawodnika</h1>
            <div v-if="player" class="player-statistics-container">
                <h2>{{ player.data.data.name + ' ' + player.data.data.secondName }}</h2>
                <h3>Poziom rozgrywkowy - {{ player.data.data.league.league_name }}</h3>
                <table>
                    <thead>
                        <tr>
                            <th class="left-column">Statystyka</th>
                            <th class="right-column">Wartość</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="left-column">Średnia</td>
                            <td class="right-column">{{ player.data.data.average3Darts }}</td>
                        </tr>
                        <tr>
                            <td class="left-column">Punkty</td>
                            <td class="right-column">{{ player.data.data.points }}</td>
                        </tr>
                        <tr>
                            <td class="left-column">Bilans</td>
                            <td class="right-column">{{ player.data.data.balance }}</td>
                        </tr>
                        <tr>
                            <td class="left-column">Wygrane legi</td>
                            <td class="right-column">{{ player.data.data.legsWon }}</td>
                        </tr>
                        <tr>
                            <td class="left-column">Przegrane legi</td>
                            <td class="right-column">{{ player.data.data.legsLost }}</td>
                        </tr>
                        <tr>
                            <td class="left-column">180</td>
                            <td class="right-column">{{ player.data.data.maxAmount }}</td>
                        </tr>
                        <tr>
                            <td class="left-column">Wysokie kończenia</td>
                            <td class="right-column">
                                <ul>
                                    <li v-for="highOut in player.data.data.highOuts" :key="highOut">
                                        {{ highOut.highOut.value }}
                                    </li>
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <td class="left-column">Szybkie kończenia</td>
                            <td class="right-column">
                                <ul>
                                    <li v-for="fastOut in player.data.data.fastOuts" :key="fastOut">
                                        {{ fastOut.fastOut.value }}
                                    </li>
                                </ul>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
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
.player-container {
    background-color: #2e2e2e;
    border-radius: 20px;
    padding: 20px;
}
table {
    width: 100%;
    border-collapse: collapse;
}
tr {
    border-bottom: 2px solid #534843;
}
td,
th {
    padding: 10px;
}
.left-column {
    text-align: left;
}
.right-column {
    text-align: right;
}
ul {
    list-style-type: none;
}
@media screen and (min-width: 768px) {
    .player-container {
        min-width: 500px;
    }
}
</style>
