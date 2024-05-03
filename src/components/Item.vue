<script setup lang="ts">
import Checkbox from './Checkbox.vue'
import { Item } from '../models/Item.vue'
const props = defineProps(['item', 'onDeleteItem'])
const emit = defineEmits(['itemChange'])

const itemName = defineModel()
itemName.value = props.item.name

const onCheck = (item: Item) => {
  item.done = !item.done
  item.lastModified = new Date()
  emit('itemChange')
}

const onChange = (item: Item) => {
  item.name = itemName.value
  emit('itemChange')
}

</script>

<template>
  <li class="item">
    <Checkbox :checked="item.done" @clicked="onCheck(item)"/>
    <input class="textInput" type="text" v-model="itemName" :class="{ done: item.done }" :readonly="item.done" @change="onChange(item)" />
    <button class="button" @click="onDeleteItem(item)">&#xf1f8;</button>
  </li>
</template>

<style scoped>
.done {
  text-decoration: line-through;
  color: #adb8c0;
}

.item {
  display: flex;
  align-items: center;
  padding: 0.2rem;
}

.textInput {
  font-size: 1rem;
  border: none;
  background-color: transparent;
  width: 100%;
  padding-top: 6px; /* Adjust this value */
  padding-bottom: 2px;
}

.textInput:focus {
  outline: none;
}

.button {
  font-family: "Font Awesome 6 Free";
  font-weight: 900;
  color: #adb8c0;
  appearance: none;
  -webkit-appearance: none;
  border: none;
  background-color: transparent;
  cursor: pointer;
}

.button:hover {
  color: #007bff;
}
</style>