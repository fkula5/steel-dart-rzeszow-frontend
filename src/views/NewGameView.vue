<script setup lang="ts">
import { ref } from 'vue';

const formData = {
    playerOne: ref(0),
    playerOneScore: ref(0),
    playerOneAvg: ref(0),
    playerOneMax: ref(0),
    playerOneHighOuts: ref([]),
    playerOneFastOuts: ref([]),
    playerTwo: ref(0),
    playerTwoScore: ref(0),
    playerTwoAvg: ref(0),
    playerTwoMax: ref(0),
    playerTwoHighOuts: ref<string[]>([]),
    playerTwoFastOuts: ref<string[]>([])
};

const playerOneCheckout = ref<string>('');

const addPlayerStat = (stat, checkout) => {
    highOuts.value.push(checkout.value);
};

const deletePlayerStat = (index: number) => {
    formData.playerOneHighOuts.value.splice(index, 1);
};
</script>

<template>
    <main>
        <h2>Dodaj nowe spotkanie</h2>
        <div class="game-form-container">
            <div class="player-container">
                <label for="playerOne">Gracz 1</label>
                <select v-model="formData.playerOne" name="playerOne" id="playerOne">
                    <option value="1">Filip Kula</option>
                    <option value="1">Filip Kula</option>
                </select>
                <label for="scoreOne">Wygrane legi</label>
                <input
                    type="number"
                    name="scoreOne"
                    id="scoreOne"
                    v-model="formData.playerOneScore"
                />
                <label for="avgOne">Średnia</label>
                <input type="number" name="avgOne" id="avgOne" v-model="formData.playerOneAvg" />
                <label for="maxOne">180</label>
                <input type="number" name="maxOne" id="maxOne" v-model="formData.playerOneMax" />
                <div class="high-outs-container">
                    <label for="highOutOne">Wysokie kończenia</label>
                    <div class="high-out-input-container">
                        <input
                            type="number"
                            name="highOutOne"
                            id="highOutOne"
                            v-model="playerOneCheckout"
                        />
                        <button type="button" @click="addPlayerOneHighOut">Dodaj</button>
                    </div>
                    <ul>
                        <li
                            v-for="(checkout, index) in formData.playerOneHighOuts.value"
                            :key="index"
                        >
                            {{ checkout }}
                            <button type="button" @click="deletePlayerOneHighOut(index)">
                                Usuń
                            </button>
                        </li>
                    </ul>
                </div>
                <label for="fastOutOne">Szybkie kończenia</label>
                <input
                    type="number"
                    name="fastOutOne"
                    id="fastOutOne"
                    v-model="formData.playerOneFastOuts"
                />
            </div>
            <div class="player-container">
                <label for="playerTwo">Gracz 1</label>
                <select v-model="formData.playerTwo" name="playerTwo" id="playerTwo">
                    <option value="1">Filip Kula</option>
                    <option value="1">Filip Kula</option>
                </select>
                <label for="scoreTwo">Wygrane legi</label>
                <input
                    type="number"
                    name="scoreTwo"
                    id="scoreTwo"
                    v-model="formData.playerTwoScore"
                />
                <label for="avgTwo">Średnia</label>
                <input type="number" name="avgTwo" id="avgTwo" v-model="formData.playerTwoAvg" />
                <label for="maxTwo">180</label>
                <input type="number" name="maxTwo" id="maxTwo" v-model="formData.playerTwoMax" />
                <label for="highOutTwo">Wysokie kończenia</label>
                <input
                    type="number"
                    name="highOutTwo"
                    id="highOutTwo"
                    v-model="formData.playerTwoHighOuts"
                />
                <label for="fastOutTwo">Szybkie kończenia</label>
                <input
                    type="number"
                    name="fastOutTwo"
                    id="fastOutTwo"
                    v-model="formData.playerTwoFastOuts"
                />
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
.high-outs-container {
    display: flex;
    flex-direction: column;
    gap: 10px;
}
.high-out-input-container {
    display: flex;
}
.high-out-input-container input {
    border-radius: 25px 0 0 25px;
}
.high-out-input-container button {
    border-radius: 0 25px 25px 0;
}
input,
select,
button {
    background-color: #2e2e2e;
    border: none;
    padding: 10px 20px;
    font-size: 16px;
    border-radius: 25px;
}
input {
    width: 100%;
}
</style>
