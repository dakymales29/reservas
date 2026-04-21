<template>
  <div
    v-if="visible"
    class="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-gradient-to-r from-green-500 to-blue-500 text-white"
  >
    <div class="animate-spin rounded-full h-16 w-16 border-t-4 border-white mb-6"></div>
    <h1 class="text-2xl font-bold tracking-wider">Cargando...</h1>
  </div>
</template>

<script setup>
defineProps({
  visible: Boolean
})
</script>