import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../Home.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: '/isfd',
    name: 'Chat-FormacionDocente',
    props: { department: "INSTITUTO-SUPERIOR-DE-FORMACION-DOCENTE", name: "Instituto Superior de Formación Docente Nª86" },
    component: Home
  },
  {
    path: '/salud',
    name: 'Chat-Salud',
    props: { department: "CIENCIAS-DE-LA-SALUD", name: "Ciencias de la Salud" },
    component: Home
  },
  {
    path: '/derecho',
    name: 'Chat-Derecho',
    props: { department: "DERECHO", name: "Derecho" },
    component: Home
  },
  {
    path: '/matematica',
    name: 'Chat-Matematica',
    props: { department: "Departamento-Matematica", name: "Matemática" },
    component: Home
  },
  {
    path: '/quimica',
    name: 'Chat-Quimica',
    props: { department: "QUIMICA", name: "Química" },
    component: Home
  },
  {
    path: '/utn',
    name: 'Chat-UTN',
    props: { department: "UNIVERSIDAD-TECNOLOGICA-NACIONAL", name: "Universidad Tecnológica Nacional" },
    component: Home
  },
  {
    path: '/educacion',
    name: 'Chat-Educacion',
    props: { department: "CIENCIAS-DE-LA-EDUCACION", name: "Ciencias de la Educación" },
    component: Home
  },
  {
    path: '/sga',
    name: 'Chat-SGA',
    props: { department: "SECRETARIA-GENERAL-ACADEMICA", name: "Secretaria General Académica" },
    component: Home
  },
  {
    path: '/ingelectrica',
    name: 'Chat-Electrica',
    props: { department: "Departamento-Ingeniería-Eléctrica-y-Computadoras", name: "Ingeniería Eléctrica y de Computadoras" },
    component: Home
  },
  {
    path: '/fisica',
    name: 'Chat-Fisica',
    props: { department: "FISICA", name: "Física" },
    component: Home
  },
  {
    path: '/sgbu',
    name: 'Chat-Bienestar-Universitario',
    props: { department: "Secretaria-General-Bienestar-Universitario", name: "Secretaría General de Bienestar Universitario" },
    component: Home
    },
  {
    path: '/upso',
    name: 'Chat-UPSO',
    props: { department: "UNIVERSIDAD-PROVINCIAL-DEL-SUDOESTE", name: "Universidad Provincial del Sudoeste" },
    component: Home
  },
  {
    path: '/economia',
    name: 'Chat-Economia',
    props: { department: "Departamento-Economia", name: "Economía" },
    component: Home
  },
  {
    path: '/gendarmeria',
    name: 'Chat-Gendarmeria-Nacional',
    props: { department: "Gendarmería-Nacional", name: "Gendarmería Nacional" },
    component: Home
  },
  {
    path: '/ISBCS',
    name: 'Chat-ISBCS',
    props: { department: "INSTITUTO-SUPERIOR-DE-LA-BAHIA", name: "Instituto Superior de la Bahía y Comunicación Social" },
    component: Home
  }
    ]

    const router = new VueRouter({
        mode: 'history',
        base: process.env.BASE_URL,
        routes
      })
      
      export default router