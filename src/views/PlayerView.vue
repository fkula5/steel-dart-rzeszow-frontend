<script setup lang="ts"></script>

<template>
    <main>
        <h1>Profil zawodnika</h1>
        <div class="container">
            <div class="player-statistics-container">
                <div class="player-stat"></div>
                <h2>Filip Kula</h2>
                <p>Liga: Pierwsza Liga</p>
                <p>Średnia: 85.54</p>
                <p>Punkty: 12</p>
                <p>Bilans: 23</p>
                <p>Legi wygrane: 34</p>
                <p>Legi przegrane: 22</p>
                <p>Ilość maksów: 12</p>

                <div>
                    <p>High Outs:</p>
                    <ul>
                        <!-- <li v-for="highOut in player.highOuts" :key="highOut">{{ highOut }}</li> -->
                        <li>123</li>
                        <li>125</li>
                    </ul>
                </div>

                <div>
                    <p>Fast Outs:</p>
                    <ul>
                        <!-- <li v-for="fastOut in player.fastOuts" :key="fastOut">{{ fastOut }}</li> -->
                        <li>12</li>
                        <li>14</li>
                    </ul>
                </div>
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
    /* gap: 30px; */
}
</style>
