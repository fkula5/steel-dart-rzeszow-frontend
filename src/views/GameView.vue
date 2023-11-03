<script setup lang="ts">
import { useGetGame } from '@/api/games/query';
import { useRoute } from 'vue-router';

const {
    params: { id }
} = useRoute();

const { data: game, isLoading } = useGetGame(id as string);
</script>

<template>
    <main>
        <div v-if="isLoading" class="loading-container">Loading...</div>
        <div v-else class="game-container">
            <div class="players-container">
                <div class="player-container left-column">
                    <RouterLink :to="`/players/${game.data.data.playerOne.id}`">
                        <h2>
                            {{
                                game.data.data.playerOne.name +
                                ' ' +
                                game.data.data.playerOne.secondName
                            }}
                        </h2>
                    </RouterLink>
                </div>
                <div class="player-container right-column">
                    <RouterLink :to="`/players/${game.data.data.playerOne.id}`">
                        <h2>
                            {{
                                game.data.data.playerTwo.name +
                                ' ' +
                                game.data.data.playerTwo.secondName
                            }}
                        </h2>
                    </RouterLink>
                </div>
            </div>
            <div class="game-stats-container">
                <table>
                    <tbody>
                        <tr>
                            <td class="left-column">{{ game.data.data.playerOneScore }}</td>
                            <td class="center-column">Wynik</td>
                            <td class="right-column">{{ game.data.data.playerTwoScore }}</td>
                        </tr>
                        <tr>
                            <td class="left-column">{{ game.data.data.playerOneAvg }}</td>
                            <td class="center-column">Średnia</td>
                            <td class="right-column">{{ game.data.data.playerTwoAvg }}</td>
                        </tr>
                        <tr>
                            <td class="left-column">{{ game.data.data.playerOneMaxAmount }}</td>
                            <td class="center-column">180-ki</td>
                            <td class="right-column">{{ game.data.data.playerTwoMaxAmount }}</td>
                        </tr>
                        <tr>
                            <td class="left-column">
                                <ul>
                                    <li v-for="highOut in game.data.data.playerOneHighOuts">
                                        {{ highOut.value }}
                                    </li>
                                </ul>
                            </td>
                            <td class="center-column">Wysokie kończenia</td>
                            <td class="right-column">
                                <ul>
                                    <li v-for="highOut in game.data.data.playerTwoHighOuts">
                                        {{ highOut.value }}
                                    </li>
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <td class="left-column">
                                <ul>
                                    <li v-for="fastOut in game.data.data.playerOneFastOuts">
                                        {{ fastOut.value }}
                                    </li>
                                </ul>
                            </td>
                            <td class="center-column">Szybkie kończenia</td>
                            <td class="right-column">
                                <ul>
                                    <li v-for="fastOut in game.data.data.playerTwoFastOuts">
                                        {{ fastOut.value }}
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
    min-height: 800px;
}
.players-container {
    display: flex;
    justify-content: space-between;
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
.center-column {
    text-align: center;
}
.right-column {
    text-align: right;
}
ul {
    list-style-type: none;
    padding-left: 0;
}
h2 {
    font-size: 16px;
}
a {
    text-decoration: none;
}
@media screen and (min-width: 768px) {
    .player-container {
        min-width: 500px;
    }
    h2 {
        font-size: 24px;
    }
}
</style>
