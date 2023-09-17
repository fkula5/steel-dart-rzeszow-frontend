<script setup lang="ts">
import GameItem from './GameItem.vue';
const games = [
{
        id: 1,
        date: '2023-07-01',
        playerOne: { name: 'John', surname: 'Doe' },
        score: '6:4',
        playerTwo: { name: 'Jane', surname: 'Smith' }
    },
    {
        id: 2,
        date: '2023-07-02',
        playerOne: { name: 'Alice', surname: 'Johnson' },
        score: '6:3',
        playerTwo: { name: 'Bob', surname: 'Williams' }
    },
    {
        id: 3,
        date: '2023-07-03',
        playerOne: { name: 'Michael', surname: 'Brown' },
        score: '6:2',
        playerTwo: { name: 'Emma', surname: 'Davis' }
    },
    {
        id: 4,
        date: '2023-07-04',
        playerOne: { name: 'David', surname: 'Miller' },
        score: '6:1',
        playerTwo: { name: 'Olivia', surname: 'Jones' }
    },
    {
        id: 5,
        date: '2023-07-05',
        playerOne: { name: 'Daniel', surname: 'Wilson' },
        score: '6:5',
        playerTwo: { name: 'Sophia', surname: 'Martinez' }
    },
    {
        id: 6,
        date: '2023-07-06',
        playerOne: { name: 'Matthew', surname: 'Taylor' },
        score: '6:0',
        playerTwo: { name: 'Isabella', surname: 'Anderson' }
    }
]
</script>
<template>
    <div class="games">
        <GameItem v-for="game in games" :key="game.id" :game="game"/>
    </div>
</template>
<style scoped>
    .games {
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;
}
</style>