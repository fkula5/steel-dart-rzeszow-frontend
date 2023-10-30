<script setup lang="ts">
import { ref } from 'vue';
import GameList from '../components/game/GameList.vue';
import { useRoute } from 'vue-router';
import { useGetRecentGamesByLeague } from '@/api/games/query';

const {
    params: { id }
} = useRoute();

const leagueId = ref(1);
const { data: games, isLoading } = useGetRecentGamesByLeague(leagueId.value);
</script>

<template>
    <main>
        <div class="news">
            <h2>Najnowsze informacje</h2>
            <div class="news-wrapper">
                <img src="../assets/images/news-croped.jpg" alt="" srcset="" />
                <div class="text-container">
                    <p>Zakończyliśmy zapisy do ligi Steel Dart Rzeszów w sezonie 2023/2034!</p>
                </div>
            </div>
        </div>
        <div class="league-buttons">
            <RouterLink to="/leagues/1"><button>1 Liga</button></RouterLink>
            <RouterLink to="/leagues/2"><button>2 Liga</button></RouterLink>
            <RouterLink to="/leagues/3"><button>3 Liga</button></RouterLink>
        </div>
        <div class="league-tables">
            <div class="modals">
                <div class="leagues">
                    <button type="button" @click="leagueId = 1">Liga 1</button>
                    <button type="button" @click="leagueId = 2">Liga 2</button>
                    <button type="button" @click="leagueId = 3">Liga 3</button>
                </div>
                <div class="round">Kolejka⬇️</div>
            </div>
            <GameList :games="games" :isLoading="isLoading" />
        </div>
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
.league-buttons {
    width: 100%;
    display: flex;
    justify-content: space-around;
}
.league-buttons button {
    background-color: #2e2e2e;
    border-radius: 20px;
    padding: 10px 30px;
    border: none;
    font-size: 16px;
    cursor: pointer;
}
.league-tables,
.news-wrapper {
    background-color: #2e2e2e;
    display: flex;
    flex-direction: column;
    width: 100%;
    border-radius: 20px;
}
.news-wrapper {
    overflow: hidden;
}
.news > img {
    object-fit: cover;
    width: 100%;
    height: 400px;
    border-end-end-radius: 20px;
    border-bottom-left-radius: 20px;
}
.text-container {
    min-height: 100px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
p {
    text-align: center;
    font-size: 20px;
}
.league-tables {
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 30px;
}
.modals {
    display: flex;
    justify-content: space-between;
}
.leagues > div,
.round {
    background-color: #1e1e1e;
    border-radius: 20px;
    padding: 5px 30px;
    cursor: pointer;
}
.leagues {
    display: flex;
    gap: 10px;
}
</style>
