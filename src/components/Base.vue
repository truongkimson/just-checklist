<script setup lang="ts">
import Checklist from './Checklist.vue'
import NewItemInput from './NewItemInput.vue'
import { getItems, createItem, deleteItem, updateItem } from '../api/client'
import { type Item } from '../models/Item'
import { ref } from 'vue'

const items = ref(await getItems())

const onCreateItem = async (newItemName: string) => {
    await createItem({ name: newItemName, done: false, lastModified: new Date() })
    items.value = await getItems()
}

const onDeleteItem = async (id: string) => {
    await deleteItem(id)
    items.value = await getItems()
}

const onUpdateItem = async (item: Item) => {
    await updateItem(item)
    items.value = await getItems()
}
</script>

<template>
    <NewItemInput @createItem="onCreateItem" />
    <Checklist :items="items" :onDeleteItem="onDeleteItem" :onUpdateItem="onUpdateItem" />
</template>

<style scoped></style>
