<script setup lang="ts">
import Checklist from './components/Checklist.vue'
import NewItemInput from './components/NewItemInput.vue'
import { ref } from 'vue'
import { v4 as uuidv4 } from 'uuid'

const items = ref([
    { id: uuidv4(), name: 'First item', done: false, lastModified: new Date() },
    { id: uuidv4(), name: 'Second item', done: true, lastModified: new Date() },
    { id: uuidv4(), name: 'Third item', done: false, lastModified: new Date() },
])

const sort = () => {
    items.value.sort((a, b) => {
        if (a.done === b.done) {
            return a.lastModified > b.lastModified ? -1 : 1
        } else {
            return a.done ? 1 : -1
        }
    })
}
sort()

const addItem = (newItemName: string) => {
    const newItem = {
        id: uuidv4(),
        name: newItemName,
        done: false,
        lastModified: new Date(),
    }
    items.value.unshift(newItem)
}

const deleteItem = (item: Item) => {
    items.value = items.value.filter((i) => i.id !== item.id)
}
</script>

<template>
    <NewItemInput @createItem="addItem" />
    <Checklist :items="items" :onItemChange="sort" :onDeleteItem="deleteItem" />
</template>

<style scoped></style>
