<script setup lang="ts">
import Base from './components/Base.vue'
</script>

<template>
    <Suspense>
        <Base />
        <template #fallback>
            <div>Loading...</div>
        </template>
    </Suspense>
</template>

<style scoped></style>
