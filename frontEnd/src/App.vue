<template>
  <!-- HEADER -->
  <header class="flex flex-col md:flex-row justify-between items-center px-6 md:px-10 py-4 bg-white shadow-md gap-4  top-0 z-50">
    
    <!-- logo -->
    <div>
      <img 
        class="h-20 md:h-24 object-contain"
        src="https://static.vecteezy.com/system/resources/previews/046/033/322/non_2x/brain-psychiatrist-psychologist-logo-idea-vector.jpg" 
        alt=""
      >
    </div>

    <!-- contacto -->
    <div class="flex flex-col sm:flex-row gap-6 sm:gap-10 text-sm text-center sm:text-left">
      
      <div class="flex items-center justify-center sm:justify-start gap-3">
        <img class="h-8" src="https://destapedecanerias.ec/images/icons/1.png">
        <div>
          <p class="font-semibold text-gray-700">Correo</p>
          <p class="text-gray-500">correo@gmail.com</p>
        </div>
      </div>

      <div class="flex items-center justify-center sm:justify-start gap-3">
        <img class="h-8" src="https://destapedecanerias.ec/images/icons/2.png">
        <div>
          <p class="font-semibold text-gray-700">Whatsapp</p>
          <p class="text-gray-500">0988794323</p>
        </div>
      </div>

    </div>

  </header>

  <!-- NAV -->
  <nav class="nav fixed top-0 left-0 w-full z-[99999] bg-transparent text-white px-6 py-3 flex justify-center">

  <!-- DESKTOP MENU -->
  <div class="hidden md:flex gap-8">
    <a href="#" class="hover:text-blue-400 transition">Inicio</a>
    <a href="#nosotros" class="hover:text-blue-400 transition">Sobre Nosotros</a>
    <a href="#servicios" class="hover:text-blue-400 transition">Servicios</a>
    <a href="#reservas" class="hover:text-blue-400 transition">Reserva</a>
    <a href="#galeria" class="hover:text-blue-400 transition">Galería</a>
  </div>

  <!-- BOTÓN MOBILE -->
  <button @click="menuOpen = !menuOpen" class="md:hidden text-2xl items-end">
    ☰
  </button>

  <!-- MOBILE MENU -->
  <div v-if="menuOpen" 
       class="absolute top-full left-0 w-full bg-gray-900 flex flex-col items-center gap-4 py-6 md:hidden">
    
    <a href="#" @click="menuOpen=false">Inicio</a>
    <a href="#nosotros" @click="menuOpen=false">Sobre Nosotros</a>
    <a href="#servicios" @click="menuOpen=false">Servicios</a>
    <a href="#reservas" @click="menuOpen=false">Reserva</a>
    <a href="#galeria" @click="menuOpen=false">Galería</a>

  </div>

</nav>

  <!-- HERO -->
  <section class="relative hero z-0">
    <img
      src="https://i.gifer.com/origin/12/12f52f98b9564660d9c4c80f43b64865.gif"
      class="h-screen w-screen object-cover"
    />

    <div class="absolute inset-0 bg-black/70 flex flex-col items-center justify-center text-center px-4">

      <h1 class="text-white text-4xl md:text-6xl font-extrabold tracking-tight mb-4 leading-tight">
        Sistema de Reservas
      </h1>

      <p class="text-gray-300 mb-8 max-w-xl text-lg leading-relaxed">
        Gestiona tus citas de forma rápida y sencilla
      </p>

      <a href="#reservas"
        class=" hero-btn bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white px-10 py-3 rounded-full font-semibold shadow-xl hover:shadow-2xl transition transform hover:scale-105 active:scale-95">
        Reservar ahora
      </a>

    </div>
  </section>

  <!-- SOBRE NOSOTROS -->
  <section id="nosotros" class=" nosotros overflow-hidden py-20 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
    <div class="nosotros-text">
      <h3 class="text-3xl font-bold mb-4">Sobre Nosotros</h3>
      <p class="text-gray-600 mb-4 leading-relaxed">
Somos un centro especializado en atención profesional, enfocado en brindar un servicio de calidad y confianza a cada uno de nuestros pacientes.
</p>
      <p class="text-gray-600 leading-relaxed">
Contamos con un equipo comprometido en ofrecer soluciones personalizadas, garantizando una experiencia cómoda, segura y eficiente.
</p>
    </div>

    <img 
      src="https://images.unsplash.com/photo-1521791136064-7986c2920216"
      class="nosotros-img rounded-2xl shadow-xl hover:shadow-2xl transition"
    />
  </section>

  <!-- SERVICIOS -->
  <section id="servicios" class=" servicio-card py-20 px-6 md:px-10 bg-gray-50 text-center">
    
    <h2 class="text-3xl md:text-4xl font-extrabold mb-4 text-gray-800">
      Nuestros Servicios
    </h2>

   <p class="max-w-2xl mx-auto text-gray-500 mb-12 text-lg leading-relaxed">
Ofrecemos servicios diseñados para facilitar la gestión de citas, optimizar el tiempo de atención y mejorar la experiencia del usuario.
</p>

    <div class="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">

      <div class="bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-3 transition duration-300 border border-gray-100 hover:border-blue-200 group">
        <h3 class="font-bold text-lg mb-3 group-hover:text-blue-600 transition">
          Reserva Online
        </h3>
        <p class="text-gray-500">
          Agenda citas fácilmente sin complicaciones y en cualquier momento.
        </p>
      </div>

      <div class="bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-3 transition duration-300 border border-gray-100 hover:border-blue-200 group">
        <h3 class="font-bold text-lg mb-3 group-hover:text-blue-600 transition">
          Recordatorios
        </h3>
        <p class="text-gray-500">
          Mantente al día con notificaciones automáticas para tus citas.
        </p>
      </div>

      <div class="bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-3 transition duration-300 border border-gray-100 hover:border-blue-200 group">
        <h3 class="font-bold text-lg mb-3 group-hover:text-blue-600 transition">
          Gestión
        </h3>
        <p class="text-gray-500">
          Control total de tus reservas en una sola plataforma intuitiva.
        </p>
      </div>

    </div>
  </section>

  <!-- RESERVAS -->
  <section id="reservas" class="py-16 px-6 md:px-10 bg-white text-center">
    <h2 class="text-3xl font-bold mb-8">Reservas</h2>

    <div class="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-start">

      <!-- FORM -->
      <form @submit.prevent="crearCita" class="bg-gray-50 p-6 rounded-2xl shadow-lg flex flex-col gap-3">

        <input v-model="nombre" placeholder="Nombre" class="p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400" required />
        <input v-model="apellido" placeholder="Apellido" class="p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400" required />
        <input v-model="celular" placeholder="Celular" class="p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400" required />
        <input v-model="correo" type="email" placeholder="Correo" class="p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400" required />

        <input v-model="fecha" type="date" class="p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400" required />

        <select 
          v-model="hora" 
          class="p-3 border rounded-lg bg-white focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
        >
          <option disabled value="">Selecciona una hora</option>
          <option v-for="h in horas" :key="h" :value="h">
            {{ h }}
          </option>
        </select>

        <button class="bg-gradient-to-r from-blue-500 to-blue-700 text-white p-3 rounded-lg font-semibold shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-95 transition mt-2">
          Reservar
        </button>

      </form>

      <!-- CALENDARIO -->
      <div class="bg-white p-4 rounded-2xl shadow-xl border border-gray-100">
        <FullCalendar ref="calendarRef" :options="calendarOptions" />
      </div>

    </div>

    <p v-if="mensaje" class="mt-6 text-green-600 font-semibold bg-green-100 p-3 rounded-lg inline-block">
      {{ mensaje }}
    </p>

  </section>

  <!-- GALERÍA -->
<section id="galeria" class="py-16 px-6 md:px-10 bg-gray-50 text-center">

  <h2 class="text-2xl md:text-3xl font-bold mb-4">Galería</h2>
  <p class="text-gray-600 mb-10">
Conoce algunos de nuestros espacios diseñados para tu comodidad.
</p>

  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">

    <!--1-->
    <div class="galeria-item overflow-hidden rounded-2xl shadow-lg group cursor-pointer relative"
    @click="mezclarGaleria">

  <img  
    src="https://images.unsplash.com/photo-1576091160550-2173dba999ef"
    class="w-full h-64 object-cover group-hover:scale-110 transition duration-500"
  >

  <!-- overlay -->
  <div class="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
    
    <p class="text-white text-lg font-semibold transform translate-y-5 group-hover:translate-y-0 transition duration-300">
      Consultorio
    </p>

  </div>

</div>

<!--2-->

    <div class="galeria-item overflow-hidden rounded-2xl shadow-lg group cursor-pointer relative"
    @click="mezclarGaleria">

  <img  
    src="https://images.unsplash.com/photo-1584982751601-97dcc096659c"
    class="w-full h-64 object-cover group-hover:scale-110 transition duration-500"
  >

  <!-- overlay -->
  <div class="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
    
    <p class="text-white text-lg font-semibold transform translate-y-5 group-hover:translate-y-0 transition duration-300">
      Consultorio
    </p>

  </div>

</div>
<!--3-->

    <div class="galeria-item overflow-hidden rounded-2xl shadow-lg group cursor-pointer relative"
    @click="mezclarGaleria">

  <img  
    src="https://images.unsplash.com/photo-1576091160550-2173dba999ef"
    class="w-full h-64 object-cover group-hover:scale-110 transition duration-500"
  >

  <!-- overlay -->
  <div class="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
    
    <p class="text-white text-lg font-semibold transform translate-y-5 group-hover:translate-y-0 transition duration-300">
      Consultorio
    </p>

  </div>

</div>
<!--4-->

    <div class="galeria-item overflow-hidden rounded-2xl shadow-lg group cursor-pointer relative"
    @click="mezclarGaleria">

  <img  
    src="https://images.unsplash.com/photo-1584982751601-97dcc096659c"
    class="w-full h-64 object-cover group-hover:scale-110 transition duration-500"
  >

  <!-- overlay -->
  <div class="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
    
    <p class="text-white text-lg font-semibold transform translate-y-5 group-hover:translate-y-0 transition duration-300">
      Consultorio
    </p>

  </div>

</div>
<!--5-->

    <div class="galeria-item overflow-hidden rounded-2xl shadow-lg group cursor-pointer relative"
    @click="mezclarGaleria">

  <img  
    src="https://images.unsplash.com/photo-1576091160550-2173dba999ef"
    class="w-full h-64 object-cover group-hover:scale-110 transition duration-500"
  >

  <!-- overlay -->
  <div class="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center"
  @click="mezclarGaleria">
    
    <p class="text-white text-lg font-semibold transform translate-y-5 group-hover:translate-y-0 transition duration-300">
      Consultorio
    </p>

  </div>

</div>
<!--6-->

    <div class="galeria-item overflow-hidden rounded-2xl shadow-lg group cursor-pointer relative"
    @click="mezclarGaleria">
  <img  
    src="https://images.unsplash.com/photo-1584982751601-97dcc096659c"
    class="w-full h-64 object-cover group-hover:scale-110 transition duration-500"
  >

  <!-- overlay -->
  <div class="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
    
    <p class="text-white text-lg font-semibold transform translate-y-5 group-hover:translate-y-0 transition duration-300">
      Consultorio
    </p>

  </div>

</div>

  </div>

</section>

  <!-- FOOTER -->
  <footer class="bg-gray-900 text-gray-400 text-center py-6 text-sm">
    <p>© 2025 Todos los derechos reservados</p>
  </footer>
</template>





<script setup>
import { onMounted, ref } from 'vue'
import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger"//scroll con gsap
const menuOpen = ref(false)
const API_URL = import.meta.env.VITE_API_URL

// variables
const calendarRef = ref(null)
const nombre = ref('')
const apellido = ref('')
const celular = ref('')
const correo = ref('')
const fecha = ref('')
const hora = ref('')
const mensaje = ref('')
gsap.registerPlugin(ScrollTrigger)//scroll con gsap

const horas = [
  "06:00", "07:00", "08:00", "09:00",
  "10:00", "11:00", "12:00",
  "13:00", "14:00", "15:00",
  "16:00", "17:00", "18:00"
]



// crear cita
const crearCita = async () => {
  try {
    const res = await fetch(`${API_URL}/api/crearCitas`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        nombre: nombre.value,
        apellido: apellido.value,
        celular: celular.value,
        correo: correo.value,
        fecha: fecha.value,
        hora: hora.value
      })
    })

    // 🔥 IMPORTANTE
    if (!res.ok) {
  const text = await res.text()
  console.log("ERROR BACKEND:", text) // 🔥
  mensaje.value = text || 'Error ❌'
  return
}

    const data = await res.json()

    mensaje.value = 'Cita creada ✅'

    calendarRef.value.getApi().refetchEvents()

    nombre.value = ''
    apellido.value = ''
    celular.value = ''
    correo.value = ''
    fecha.value = ''
    hora.value = ''

  } catch (error) {
    mensaje.value = 'Error de conexión ❌'
  }
}


// calendario
const calendarOptions = {
  plugins: [dayGridPlugin],
  initialView: 'dayGridMonth',

  events: async (info, successCallback) => {
    const res = await fetch(`${API_URL}/api/citas`)
    const data = await res.json()

    successCallback(data)
  }
}

//ANIMACIONES
onMounted(()=>{
const tl = gsap.timeline()
 // título
  tl.from(".hero h1", {
    y: 100,
    opacity: 0,
    filter: "blur(10px)",
    duration: 1,
    ease: "circ.out"
  })

  // texto
  tl.from(".hero p", {
    y: 80,
    opacity: 0,
    duration: 0.8,
    ease: "power2.out"
  }, "-=0.5")

  // botón
  tl.from(".hero-btn", {
  y: 60,
  scale: 0.8,
  duration: 0.6,
  ease: "back.out(1.7)"
})
//nosotros
gsap.from(".nosotros-text", {
  scrollTrigger: {
    trigger: ".nosotros",
    start: "top 80%", // cuando entra en pantalla,
    once: true
  },
  y: 100,
  opacity: 0,
  duration: 1
})

gsap.from(".nosotros-img", {
  scrollTrigger: {
    trigger: ".nosotros",
    start: "top 80%",
  },
  x: 100,
  opacity: 0,
  duration: 1,
  ease:"power1.out"
})
//servicios
gsap.from(".servicio-card", {
  scrollTrigger: {
    trigger: "#servicios",
    start: "top 80%",
  },
  y: 80,
  opacity: 0,
  duration: 0.8,
  stagger: 0.2
})
//nav
gsap.to(".nav", {
  scrollTrigger: {
    trigger: ".hero", // 🔥 usa el hero como referencia
    start: "bottom top", // cuando sales del hero
    toggleActions: "play none none reverse"
  },
  backgroundColor: "#111827",
  backdropFilter: "blur(10px)",
  boxShadow: "0 10px 25px rgba(0,0,0,0.3)",
  duration: 0.3,
  
})
//galeria imagen
gsap.from(".galeria-item", {
  scrollTrigger: {
    trigger: "#galeria",
    start: "top 80%",
  },
  y: 80,
  opacity: 0,
  duration: 0.8,
  stagger: 0.2,
  ease: "power2.out"
})

})
const mezclarGaleria = () => {
  const container = document.querySelector("#galeria .grid")
  const items = Array.from(container.children)

  // 🔥 animación salida
  gsap.to(items, {
    y: 20,
    opacity: 0,
    duration: 0.25,
    stagger: 0.05,
    onComplete: () => {

      // 🔀 mezclar
      const mezclado = items.sort(() => Math.random() - 0.5)

      // limpiar
      container.innerHTML = ""

      // reinsertar
      mezclado.forEach(el => container.appendChild(el))

      // 🔥 animación entrada
      gsap.fromTo(mezclado,
        { y: -20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.4,
          stagger: 0.07,
          ease: "power2.out"
        }
      )
    }
  })
}

</script>