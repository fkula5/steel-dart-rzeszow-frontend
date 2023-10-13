<script setup lang="ts">
const props = defineProps<{ player: undefined }>();
</script>

<template>
    <tr>
        <td>{{ props.player.name }}</td>
        <td>{{ props.player.secondName }}</td>
        <td>{{ props.player.points }}</td>
        <td>{{ props.player.balance }}</td>
        <td>{{ props.player.legsWon }}</td>
        <td>{{ props.player.legsLost }}</td>
        <td>{{ props.player.average3Darts }}</td>
        <td>{{ props.player.maxAmount }}</td>
        <td>
            <ul>
                <li v-for="(highOut, index) in props.player.highOuts" :key="index">
                    {{ highOut.value }}
                </li>
            </ul>
        </td>
        <td>
            <ul>
                <li v-for="(fastOut, index) in props.player.fastOuts" :key="index">
                    {{ fastOut.value }}
                </li>
            </ul>
        </td>
    </tr>
</template>

<style scoped>
td {
    border: 1px solid #534843;
    padding: 8px 12px;
}
tr:nth-child(odd) {
    background-color: #2e2e2e;
}

tr:nth-child(even) {
    background-color: #181818;
}
</style>
