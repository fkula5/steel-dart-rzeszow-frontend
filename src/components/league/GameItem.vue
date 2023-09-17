
<script setup lang="ts">
interface Game {
    id: number,
    date: string
    playerOne: {
        name: string,
        surname: string
    }
    score: string,
    playerTwo: {
        name: string,
        surname: string
    }
}
const props = defineProps<{
    game: Game,
}>();
</script>
<template>
    <div class="game">
        <div class="date">{{ props.game.date }}</div>
            <div class="player-one">
                {{ props.game.playerOne.name + ' ' + props.game.playerOne.surname }}
            </div>
            <div class="score">{{ props.game.score }}</div>
            <div class="player-two">
                {{ props.game.playerTwo.name + ' ' + props.game.playerTwo.surname }}
        </div>
    </div>
</template>
<style scoped>
    .game {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    border: 3px solid #534843;
    border-radius: 20px;
    text-align: center;
    padding-top: 10px;
    padding-bottom: 10px;
}
</style>