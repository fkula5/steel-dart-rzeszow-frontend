<script lang="ts">
import { ref, provide } from 'vue';
export default {
    setup(props, { slots }) {
        const tabTitles = ref(slots.default().map((tab) => tab.props.title));
        const selectedTitle = ref(tabTitles.value[0]);

        provide('selectedTitle', selectedTitle);

        return {
            selectedTitle,
            tabTitles
        };
    }
};
</script>

<template>
    <div class="tabs">
        <ul class="tabs-header">
            <li
                v-for="title in tabTitles"
                :key="title"
                :class="{ selected: title === selectedTitle }"
                @click="selectedTitle = title"
            >
                {{ title }}
            </li>
        </ul>
        <slot />
    </div>
</template>

<style scoped>
.tabs-header {
    list-style: none;
    padding: 0;
    display: flex;
    justify-content: center;
}
.tabs-header li {
    text-align: center;
    padding: 10px 20px;
    margin-right: 10px;
    background-color: #2e2e2e;
    border-radius: 5px;
    cursor: pointer;
    transition: 0.4s background-color ease-out;
    margin-bottom: 10px;
}
.tabs-header li.selected {
    color: #534843;
    margin-bottom: unset;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
}
</style>
