<script setup lang="ts">
import NavComponent from '@/components/Nav.vue'

defineOptions({
    name: 'AppComponent'
})
</script>

<template>
    <a-config-provider
        :theme="{
            token: {
                colorPrimary: '#1D4FC4',
                colorInfo: '#1D4FC4',
                borderRadius: 4
            }
        }"
    />

    <div class="app">
        <nav-component />
    </div>
</template>
