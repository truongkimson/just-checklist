<script setup lang="ts">
const emit = defineEmits(['createItem'])
const newItem = defineModel()

const onEnter = () => {
    if (newItem.value.trim() === '') return
    emit('createItem', newItem.value)
    newItem.value = ''
}
</script>

<template>
    <input class="textInput" type="text" v-model="newItem" @keyup.enter="onEnter" placeholder="Add new task..." />
</template>

<style scoped>
.textInput {
    font-size: 1rem;
    border: none;
    background-color: transparent;
    width: 100%;
    padding: 0.2rem;
}

.textInput:focus {
    outline: none;
}
</style>
