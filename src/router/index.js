import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../Home.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: '/dcic',
    name: 'Chat-DCIC',
    props: { department: "CIENCIAS-E-INGENIERIA-DE-COMPUTACION", name: "Ciencias e Ingeniería de la Computación"},
    component: Home
  },
  {
    path: '/geografia',
    name: 'Chat-Geografia',
    props: { department: "GEOGRAFIA-TURISMO", name: "Geografía y Turismo" },
    component: Home
  },
  {
    path: '/ingquimica',
    name: 'Chat-INGQuimica',
    props: { department: "INGENIERIA-QUIMICA", name: "Ingeniería Química" },
    component: Home
  },
  {
    path: '/agronomia',
    name: 'Chat-Agronomia',
    props: { department: "AGRONOMIA", name: "Agronomía" },
    component: Home
    },
    {
      path: '/cfp',
      name: 'Chat-Centro-Formacion-Profesional',
      props: { department: "CENTRO-DE-FORMACION-PROFESIONAL", name: "Centro de formación Profesional 403" },
      component: Home
    },
    {
      path: '/ingenieria',
      name: 'Chat-Ingenieria',
      props: { department: "Departamento-Ingenieria", name: "Ingeniería" },
      component: Home
    },
    {
      path: '/biologia',
      name: 'Chat-Biologia',
      props: { department: "BIOLOGIA", name: "Biologia, Bioquimica y Farmacia" },
      component: Home
    },
    {
      path: '/comercio',
      name: 'Chat-Comercio',
      props: { department: "ESCUELA-DE-COMERCIO", name: "Escuela Superior de Comercio" },
      component: Home
    },
    {
      path: '/humanidades',
      name: 'Chat-Humanidades',
      props: { department: "Departamento-Humanidades", name: "Humanidades" },
      component: Home
    },
    {
      path: '/salesiana',
      name: 'Chat-Salesiana',
      props: { department: "UNIVERSIDAD-SALESIANA", name: "Universidad Salesiana" },
      component: Home
    },
    {
      path: '/isft',
      name: 'Chat-ISFT',
      props: { department: "INSTITUTO-SUPERIOR-FORMACION-TECNICA", name: "Instituto Superior de Formación Técnica Nª191" },
      component: Home
    },
    {
      path: '/unsregion',
      name: 'Chat-UNS-Region',
      props: { department: "UNS-EN-LA-REGION", name: "UNS en la Región" },
      component: Home
    },
    {
      path: '/iseme',
      name: 'Chat-ISEME',
      props: { department: "INSTITUTO-SUPERIOR-EZEQUIEL-MARTINEZ-ESTRADA", name: "Instituto Superior Ezequiel Martinez Estrada" },
      component: Home
    },
    {
      path: '/administracion',
      name: 'Chat-Administracion',
      props: { department: "CIENCIAS-DE-LA-ADMINISTRACION", name: "Ciencias de la Administración" },
      component: Home
    },
    ]

    const router = new VueRouter({
        mode: 'hash',
        base: process.env.BASE_URL,
        routes
      })
      
      export default router