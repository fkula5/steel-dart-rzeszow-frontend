<script setup lang="ts">
interface Game {
    id: number;
    date: string;
    playerOne: {
        name: string;
        surname: string;
    };
    score: string;
    playerTwo: {
        name: string;
        surname: string;
    };
}
const props = defineProps<{
    game: unknown;
}>();
</script>
<template>
    <div class="game">
        <div class="date">{{ props.game.created_at }}</div>
        <div class="player-one">
            {{ props.game.playerOne.name + ' ' + props.game.playerOne.secondName }}
        </div>
        <div class="score">{{ props.game.playerOneScore }} - {{ props.game.playerTwoScore }}</div>
        <div class="player-two">
            {{ props.game.playerTwo.name + ' ' + props.game.playerTwo.secondName }}
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
