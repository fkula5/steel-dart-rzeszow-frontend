<script setup lang="ts">
const players = [
    {
        id: 1,
        name: 'John',
        secondName: 'Doe',
        points: 501,
        balance: -20,
        legsWon: 10,
        legsLost: 5,
        average: 75.23,
        maxAmount: 180,
        highOuts: [100, 120, 140],
        fastOuts: [9, 12, 15]
    },
    {
        id: 2,
        name: 'Alice',
        secondName: 'Smith',
        points: 501,
        balance: 0,
        legsWon: 7,
        legsLost: 8,
        average: 63.45,
        maxAmount: 170,
        highOuts: [100, 130, 150],
        fastOuts: [10, 13, 18]
    },
    {
        id: 3,
        name: 'Bob',
        secondName: 'Johnson',
        points: 501,
        balance: 15,
        legsWon: 12,
        legsLost: 4,
        average: 85.67,
        maxAmount: 177,
        highOuts: [100, 110, 120],
        fastOuts: [11, 14, 17]
    },
    {
        id: 4,
        name: 'Sarah',
        secondName: 'Brown',
        points: 501,
        balance: -10,
        legsWon: 8,
        legsLost: 6,
        average: 70.89,
        maxAmount: 160,
        highOuts: [100, 125, 145],
        fastOuts: [9, 13, 16]
    },
    {
        id: 5,
        name: 'David',
        secondName: 'Wilson',
        points: 501,
        balance: 25,
        legsWon: 14,
        legsLost: 3,
        average: 92.34,
        maxAmount: 173,
        highOuts: [100, 135, 155],
        fastOuts: [10, 14, 18]
    },
    {
        id: 6,
        name: 'Emily',
        secondName: 'Jones',
        points: 501,
        balance: -5,
        legsWon: 9,
        legsLost: 7,
        average: 68.76,
        maxAmount: 165,
        highOuts: [100, 128, 148],
        fastOuts: [11, 15, 17]
    },
    {
        id: 7,
        name: 'Michael',
        secondName: 'Clark',
        points: 501,
        balance: 10,
        legsWon: 11,
        legsLost: 5,
        average: 80.45,
        maxAmount: 175,
        highOuts: [100, 118, 138],
        fastOuts: [12, 16, 18]
    }
];
</script>

<template>
    <main>
        <h1 v-if="$route.params.id === '1'">Tabela Pierwszej Ligi</h1>
        <h1 v-if="$route.params.id === '2'">Tabela Drugiej Ligi</h1>
        <h1 v-if="$route.params.id === '3'">Tabela Trzeciej Ligi</h1>
        <table>
            <thead>
                <th>Imię</th>
                <th>Nazwisko</th>
                <th>Punkty</th>
                <th>Bilans</th>
                <th>Legi wygrane</th>
                <th>Legi przegrane</th>
                <th>Średnia</th>
                <th>Maxy</th>
                <th>Wysokie kończenia</th>
                <th>Szybkie kończenia</th>
            </thead>
            <tbody>
                <tr v-for="player in players" :key="player.id">
                    <td>{{ player.name }}</td>
                    <td>{{ player.secondName }}</td>
                    <td>{{ player.points }}</td>
                    <td>{{ player.balance }}</td>
                    <td>{{ player.legsWon }}</td>
                    <td>{{ player.legsLost }}</td>
                    <td>{{ player.average }}</td>
                    <td>{{ player.maxAmount }}</td>
                    <td>
                        <ul>
                            <li v-for="(highOut, index) in player.highOuts" :key="index">
                                {{ highOut }}
                            </li>
                        </ul>
                    </td>
                    <td>
                        <ul>
                            <li v-for="(fastOut, index) in player.fastOuts" :key="index">
                                {{ fastOut }}
                            </li>
                        </ul>
                    </td>
                </tr>
            </tbody>
        </table>
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
table {
    width: 100%;
    border-collapse: collapse;
    background-color: #181818;
    color: white;
    border-radius: 8px;
    overflow: hidden;
}

table th,
table td {
    border: 1px solid #534843;
    padding: 8px 12px;
}

table th {
    background-color: #2e2e2e;
    text-align: left;
}
table tbody tr:nth-child(odd) {
    background-color: #2e2e2e;
}

table tbody tr:nth-child(even) {
    background-color: #181818;
}
</style>
