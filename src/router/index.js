import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import MenuView from '../views/MenuView.vue';
import ContactView from '../views/ContactView.vue';
import CartView from '../views/CartView.vue';
import ProfileView from '../views/ProfileView.vue'; // Ver perfil
import SettingsView from '../views/SettingsView.vue'; // Configuración
import HistoryView from '../views/HistoryView.vue'; // Historial de pedidos

const routes = [
  { path: '/', component: HomeView },
  { path: '/menu', component: MenuView },
  { path: '/contacto', component: ContactView },
  { path: '/carrito', component: CartView },
  { path: '/perfil', component: ProfileView },
  { path: '/configuracion', component: SettingsView },
  { path: '/historial', component: HistoryView },
  { path: '/cerrar-sesion', redirect: '/' }, // Redirigir a la página de inicio o login
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
