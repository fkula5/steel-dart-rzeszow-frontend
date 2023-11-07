<script setup lang="ts">
const props = defineProps<{
    player: unknown;
}>();
</script>

<template>
    <div class="player-container">
        <h1>Profil zawodnika</h1>
        <div v-if="props.player" class="player-statistics-container">
            <h2>{{ props.player.name + ' ' + props.player.secondName }}</h2>
            <h3>Poziom rozgrywkowy - {{ props.player.league.league_name }}</h3>
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
                        <td class="right-column">{{ props.player.average3Darts }}</td>
                    </tr>
                    <tr>
                        <td class="left-column">Punkty</td>
                        <td class="right-column">{{ props.player.points }}</td>
                    </tr>
                    <tr>
                        <td class="left-column">Bilans</td>
                        <td class="right-column">{{ props.player.balance }}</td>
                    </tr>
                    <tr>
                        <td class="left-column">Wygrane legi</td>
                        <td class="right-column">{{ props.player.legsWon }}</td>
                    </tr>
                    <tr>
                        <td class="left-column">Przegrane legi</td>
                        <td class="right-column">{{ props.player.legsLost }}</td>
                    </tr>
                    <tr>
                        <td class="left-column">180</td>
                        <td class="right-column">{{ props.player.maxAmount }}</td>
                    </tr>
                    <tr>
                        <td class="left-column">Wysokie kończenia</td>
                        <td class="right-column">
                            <ul>
                                <li v-for="highOut in props.player.highOuts" :key="highOut">
                                    {{ highOut.value }}
                                </li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td class="left-column">Szybkie kończenia</td>
                        <td class="right-column">
                            <ul>
                                <li v-for="fastOut in props.player.fastOuts" :key="fastOut">
                                    {{ fastOut.value }}
                                </li>
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<style scoped>
.player-container {
    background-color: #2e2e2e;
    border-radius: 20px;
    padding: 20px;
    text-align: center;
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
