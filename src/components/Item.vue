<script setup lang="ts">
import { ref, type PropType } from 'vue'
import { type Ref } from 'vue'
import Checkbox from './Checkbox.vue'
import { type Item } from '../models/Item'
import ConfettiJSON from '../assets/animations/confetti0.json'
import { type AnimationItem } from 'lottie-web'

const props = defineProps(['item', 'onUpdateItem', 'onDeleteItem'])
const itemName = defineModel<string>()
itemName.value = props.item.name

const lottieAnimation: Ref<AnimationItem | null> = ref(null)

const onCheck = (item: Item) => {
    item.done = !item.done
    item.lastModified = new Date()

    if (item.done && lottieAnimation.value) {
        lottieAnimation.value.stop() // Reset the animation
        lottieAnimation.value.play()
    }
    props.onUpdateItem(item)
}

const onChange = (item: Item) => {
    item.name = itemName.value || ''
    props.onUpdateItem(item)
}
</script>

<template>
    <li class="item">
        <div class="checkboxContainer">
            <Vue3Lottie
                class="lottieAnimation"
                ref="lottieAnimation"
                :animationData="ConfettiJSON"
                height="4rem"
                width="4rem"
                :autoPlay="false"
                :loop="false"
                :speed="1.5"
            />
            <Checkbox class="checkbox" :checked="item.done" @check="onCheck(item)" />
        </div>
        <input
            class="textInput"
            type="text"
            v-model="itemName"
            :class="{ done: item.done }"
            :readonly="item.done"
            @change="onChange(item)"
        />
        <button class="button" @click="onDeleteItem(item.id)">&#xf1f8;</button>
    </li>
</template>

<style scoped>
.checkboxContainer {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 2rem;
    height: 2rem;
}

.lottieAnimation {
    z-index: 0;
    position: absolute;
}
.checkbox {
    z-index: 1;
    position: absolute;
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
    font-family: 'Font Awesome 6 Free';
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

@keyframes line-through {
    0% {
        text-decoration-color: transparent;
    }
    100% {
        text-decoration-color: #adb8c0;
    }
}

.done {
    text-decoration: line-through;
    text-decoration-color: #adb8c0;
    text-decoration-thickness: 0.05rem;
    color: #adb8c0;
    animation: line-through 0.5s ease-in forwards;
}
</style>
