<script setup lang="ts">
const props = defineProps<{ player: undefined }>();
</script>

<template>
    <tr>
        <td>
            <RouterLink :to="`/players/${props.player.id}`">{{ props.player.name }}</RouterLink>
        </td>
        <td>
            <RouterLink :to="`/players/${props.player.id}`">{{
                props.player.secondName
            }}</RouterLink>
        </td>
        <td>
            <RouterLink :to="`/players/${props.player.id}`">{{ props.player.points }}</RouterLink>
        </td>
        <td>
            <RouterLink :to="`/players/${props.player.id}`">{{ props.player.balance }}</RouterLink>
        </td>
        <td>
            <RouterLink :to="`/players/${props.player.id}`">{{ props.player.legsWon }}</RouterLink>
        </td>
        <td>
            <RouterLink :to="`/players/${props.player.id}`">{{ props.player.legsLost }}</RouterLink>
        </td>
        <td>
            <RouterLink :to="`/players/${props.player.id}`">{{
                props.player.average3Darts
            }}</RouterLink>
        </td>
        <td>
            <RouterLink :to="`/players/${props.player.id}`">{{
                props.player.maxAmount
            }}</RouterLink>
        </td>
        <td>
            <RouterLink :to="`/players/${props.player.id}`"
                ><ul>
                    <li v-for="(highOut, index) in props.player.highOuts" :key="index">
                        {{ highOut.value }}
                    </li>
                </ul>
            </RouterLink>
        </td>
        <td>
            <RouterLink :to="`/players/${props.player.id}`">
                <ul>
                    <li v-for="(fastOut, index) in props.player.fastOuts" :key="index">
                        {{ fastOut.value }}
                    </li>
                </ul>
            </RouterLink>
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
