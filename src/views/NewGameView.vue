<script setup></script>

<template>
    <main>
        <h2>Dodaj nowe spotkanie</h2>
        <div class="game-form-container">
            <div class="player-container">
                <label for="playerOne">Gracz 1</label>
                <input type="text" name="playerOne" id="" />
                <label for="scoreOne">Wygrane legi</label>
                <input type="number" name="scoreOne" id="" />
                <label for="avgOne">Średnia</label>
                <input type="number" name="avgOne" id="" />
                <label for="maxOne">180</label>
                <input type="number" name="maxOne" id="" />
                <label for="highOutOne">Wysokie kończenia</label>
                <input type="number" name="highOutOne" id="" />
                <label for="fastOutOne">Szybkie kończenia</label>
                <input type="number" name="fastOutOne" id="" />
            </div>
            <div class="player-container">
                <label for="playerTwo">Gracz 1</label>
                <input type="text" name="playerTwo" id="" />
                <label for="scoreTwo">Wygrane legi</label>
                <input type="number" name="scoreTwo" id="" />
                <label for="avgTwo">Średnia</label>
                <input type="number" name="avgTwo" id="" />
                <label for="maxTwo">180</label>
                <input type="number" name="maxTwo" id="" />
                <label for="highOutTwo">Wysokie kończenia</label>
                <input type="number" name="highOutTwo" id="" />
                <label for="fastOutTwo">Szybkie kończenia</label>
                <input type="number" name="fastOutTwo" id="" />
            </div>
        </div>
    </main>
</template>

<style scoped>
main {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 1000px;
    gap: 30px;
    flex-direction: column;
}
.game-form-container {
    display: flex;
    gap: 50px;
}
.player-container {
    display: flex;
    flex-direction: column;
    width: 600px;
    max-width: 600px;
    gap: 10px;
}
input {
    background-color: #2e2e2e;
    border: none;
    padding: 10px 20px;
    font-size: 16px;
    border-radius: 25px;
    width: 100%;
}
</style>
