import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../Home.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: '/doe',
    name: 'Chat-DOE',
    props: { department: "DOE", name: "Departamento de Orientación Educacional" },
    component: Home
    },
    {
      path: '/juan23',
      name: 'Chat-Juan',
      props: { department: "JUAN-XXIII", name: "Juan XXIII" },
      component: Home
    },
    {
      path: '/geologia',
      name: 'Chat-Geologia',
      props: { department: "GEOLOGIA", name: "Geología" },
      component: Home
    },
    {
      path: '/ucalp', 
      name: 'Chat-UCALP',
      props: { department: "UNIVERSIDAD-CATOLICA-DE-LA-PLATA", name: "Universidad Católica de la Plata" },
      component: Home
    },
    {
      path: '/spec',
      name: 'Chat-SPEC',
      props: { department: "SECRETARIA-POSGRADO-EDUCACION-CONTINUA", name: "Secretaria de Posgrado y Eduación Continua" },
      component: Home
    },
    {
      path: '/mcc',
      name: 'Chat-MCC',
      props: { department: "MESA-COORDINADORA-DE-COLEGIOS-Y-CONSEJOS", name: "Mesa Coordinadora de Colegios y Consejos Profesionales del Sur Bonaerense" },
      component: Home
    },
    ]

    const router = new VueRouter({
        history: createWebHashHistory(),
        base: process.env.BASE_URL,
        routes
      })
      
      export default router