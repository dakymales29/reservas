<template>
  <div class="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-gradient-to-r from-green-500 to-blue-500 text-white">
    
    <div class="animate-spin rounded-full h-16 w-16 border-t-4 border-white mb-6"></div>

    <transition name="fade" mode="out-in">
      <h1
        :key="mensaje"
        class="text-2xl font-bold tracking-wider"
      >
        {{ mensaje }}
      </h1>
    </transition>

  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const mensajes = [
  "Conectando con el servidor...",
  "Preparando datos...",
  "Cargando interfaz...",
  "Optimizando experiencia...",
  "Casi listo..."
]

const mensaje = ref(mensajes[0])

let interval = null

onMounted(() => {
  let i = 0

  interval = setInterval(() => {
    i = (i + 1) % mensajes.length
    mensaje.value = mensajes[i]
  }, 2000)
})

onUnmounted(() => {
  clearInterval(interval)
})
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>