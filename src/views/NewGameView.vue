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

const playerOneHighOut = ref<string>('');
const playerOneFastOut = ref<string>('');
const playerTwoHighOut = ref<string>('');
const playerTwoFastOut = ref<string>('');

const addPlayerStat = (stats, stat)=>{
    stats.value.push(stat);
}

const removePlayerStat = (stats, index)=>{
    stats.value.splice(index, 1);
}
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
                            v-model="playerOneHighOut"
                        />
                        <button type="button" @click="addPlayerStat(formData.playerOneHighOuts, playerOneHighOut)">Dodaj</button>
                    </div>
                    <ul v-if="formData.playerOneHighOuts.value.length > 0">
                        <li
                            v-for="(checkout, index) in formData.playerOneHighOuts.value"
                            :key="index"
                        >
                            {{ checkout }}
                            <button type="button" @click="removePlayerStat(formData.playerOneHighOuts, index)">
                                Usuń
                            </button>
                        </li>
                    </ul>
                </div>
                <div class="fast-outs-container">
                    <label for="fastOutOne">Szybkie kończenia</label>
                    <div class="fast-out-input-container">
                        <input
                            type="number"
                            name="fastOutOne"
                            id="fastOutOne"
                            v-model="playerOneFastOut"
                        />
                        <button type="button" @click="addPlayerStat(formData.playerOneFastOuts, playerOneFastOut)">Dodaj</button>
                    </div>
                    <ul v-if="formData.playerOneFastOuts.value.length > 0">
                        <li
                            v-for="(checkout, index) in formData.playerOneFastOuts.value"
                            :key="index"
                        >
                            {{ checkout }}
                            <button type="button" @click="removePlayerStat(formData.playerOneFastOuts, index)">
                                Usuń
                            </button>
                        </li>
                    </ul>
                </div>
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
                <div class="high-outs-container">
                    <label for="highOutTwo">Wysokie kończenia</label>
                    <div class="high-out-input-container">
                        <input
                            type="number"
                            name="highOutTwo"
                            id="highOutTwo"
                            v-model="playerTwoHighOut"
                        />
                        <button type="button" @click="addPlayerStat(formData.playerTwoHighOuts, playerTwoHighOut)">Dodaj</button>
                    </div>
                    <ul v-if="formData.playerTwoHighOuts.value.length > 0">
                        <li
                            v-for="(checkout, index) in formData.playerTwoHighOuts.value"
                            :key="index"
                        >
                            {{ checkout }}
                            <button type="button" @click="removePlayerStat(formData.playerTwoHighOuts, index)">
                                Usuń
                            </button>
                        </li>
                    </ul>
                </div>
                <div class="fast-outs-container">
                    <label for="fastOutTwo">Szybkie kończenia</label>
                    <div class="fast-out-input-container">
                        <input
                            type="number"
                            name="fastOutTwo"
                            id="fastOutTwo"
                            v-model="playerTwoFastOut"
                        />
                        <button type="button" @click="addPlayerStat(formData.playerTwoFastOuts, playerTwoFastOut)">Dodaj</button>
                    </div>
                    <ul v-if="formData.playerTwoFastOuts.value.length > 0">
                        <li
                            v-for="(checkout, index) in formData.playerTwoFastOuts.value"
                            :key="index"
                        >
                            {{ checkout }}
                            <button type="button" @click="removePlayerStat(formData.playerTwoFastOuts, index)">
                                Usuń
                            </button>
                        </li>
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
.high-outs-container, .fast-outs-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 10px;
}
.high-out-input-container, .fast-out-input-container {
    display: flex;
}
.high-out-input-container input, .fast-out-input-container input {
    border-radius: 25px 0 0 25px;
}
.high-out-input-container button, .fast-out-input-container button {
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
