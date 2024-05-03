<script setup lang="ts">

defineProps(['checked'])
const emit = defineEmits(['clicked']);
</script>

<template>
    <input type="checkbox" class="styled-checkbox" :checked="checked" @change="emit('clicked')" />
    
</template>
<!-- "https://lottie.host/c60db08e-4c38-4930-8a0a-66d2dfaa42be/ZqIR8jbS39.json" -->
<style scoped>
.styled-checkbox {
  appearance: none;
  -webkit-appearance: none;
  background-color: #fafafa;
  border: 0.1rem solid #535454;
  border-radius: 0.1rem;
  width: 1.3rem;
  height: 1.3rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

.styled-checkbox:checked::after {
    font-family: "Font Awesome 6 Free";
    font-weight: 900;
    font-size: 1rem;
    content: '\f00c';
    color: white;
}

.styled-checkbox:checked {
    background-color: #007bff;
    border: 0.1rem solid #007bff;
}

.styled-checkbox:hover {
    background-color: #dadcdc;
}

.styled-checkbox:checked:hover {
    background-color: #007bff;
    border: 0.1rem solid #007bff;
}
</style>