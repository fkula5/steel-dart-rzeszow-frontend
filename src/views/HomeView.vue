<script setup lang="ts">
const games = [
    {
        date: '2023-07-01',
        playerOne: { name: 'John', surname: 'Doe' },
        score: '6:4',
        playerTwo: { name: 'Jane', surname: 'Smith' }
    },
    {
        date: '2023-07-02',
        playerOne: { name: 'Alice', surname: 'Johnson' },
        score: '6:3',
        playerTwo: { name: 'Bob', surname: 'Williams' }
    },
    {
        date: '2023-07-03',
        playerOne: { name: 'Michael', surname: 'Brown' },
        score: '6:2',
        playerTwo: { name: 'Emma', surname: 'Davis' }
    },
    {
        date: '2023-07-04',
        playerOne: { name: 'David', surname: 'Miller' },
        score: '6:1',
        playerTwo: { name: 'Olivia', surname: 'Jones' }
    },
    {
        date: '2023-07-05',
        playerOne: { name: 'Daniel', surname: 'Wilson' },
        score: '6:5',
        playerTwo: { name: 'Sophia', surname: 'Martinez' }
    },
    {
        date: '2023-07-06',
        playerOne: { name: 'Matthew', surname: 'Taylor' },
        score: '6:0',
        playerTwo: { name: 'Isabella', surname: 'Anderson' }
    }
];
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
        <div class="league-tables">
            <div class="modals">
                <div class="leagues">
                    <div>1 Liga</div>
                    <div>2 Liga</div>
                    <div>3 Liga</div>
                </div>
                <div class="round">Kolejka⬇️</div>
            </div>
            <div class="games">
                <div v-for="game in games" class="game">
                    <div class="date">{{ game.date }}</div>
                    <div class="player-one">
                        {{ game.playerOne.name + ' ' + game.playerOne.surname }}
                    </div>
                    <div class="score">{{ game.score }}</div>
                    <div class="player-two">
                        {{ game.playerTwo.name + ' ' + game.playerTwo.surname }}
                    </div>
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
    justify-content: space-between;
    min-height: 1000px;
    gap: 30px;
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
}
.leagues {
    display: flex;
    gap: 10px;
}
.games {
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;
}
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
