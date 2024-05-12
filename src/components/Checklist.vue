<script setup lang="ts">
import Item from './Item.vue'

defineProps(['items', 'onUpdateItem', 'onDeleteItem'])
</script>

<template>
    <ul class="no-bullets">
        <Item
            v-for="item in items"
            :key="item.id"
            :item="item"
            :onDeleteItem="onDeleteItem"
            :onUpdateItem="onUpdateItem"
        />
    </ul>
</template>

<style scoped>
.no-bullets {
    list-style-type: none;
    padding: 0;
}
</style>
