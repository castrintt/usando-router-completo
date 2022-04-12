import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/Home.vue'
import Produto from '@/pages/produto/Produto.vue'
import Meusprodutos from "@/pages/produto/MeusProdutos.vue"
import Editar from "@/pages/produto/Editar.vue"
import Detalhe from "@/pages/produto/Detalhe.vue"



const routes = [
  {
    path: '/',
    name: 'home',
    component:Home
  },
  {
    path:'/produto',
    name:'produto',
    component:Produto,
    props:true,
    children:[
      {
        path:'',
        component:Meusprodutos
      },
      {
        path:':id',
        component:Detalhe,
        props:true
      },
      {
        path:':id/editar',
        component:Editar,
        props:true,
        name:'editar'
      }
    ]
  },


]

const router = createRouter({
  mode:'history',
  history: createWebHistory(),
  routes
})

export default router
