import { createRouter, createWebHistory } from 'vue-router';

// Importar las vistas de cliente
import HomeView from '@/views/client/HomeView.vue';
import MenuView from '@/views/client/MenuView.vue';
import ContactView from '@/views/client/ContactView.vue';
import CartView from '@/views/client/CartView.vue';
import ProfileView from '@/views/client/ProfileView.vue';
import SettingsView from '@/views/client/SettingsView.vue';
import HistoryView from '@/views/client/HistoryView.vue';

// Importar las vistas de administrador
import AdminDashboard from '@/views/admin/AdminDashboard.vue';

// Importar los componentes de login y selector de usuario
import Seleccion from '@/views/Seleccion.vue';
import ClientLogin from '@/views/client/ClientLogin.vue';
import AdminLogin from '@/views/admin/AdminLogin.vue';
import Registro from '@/views/client/Registro.vue'; // Nueva vista de Registro

const routes = [
  // Ruta para seleccionar el tipo de usuario
  { path: '/', component: Seleccion },

  // Ruta para el login del cliente
  { path: '/login-cliente', component: ClientLogin },

  // Ruta para el registro del cliente
  { path: '/registro-cliente', component: Registro }, // Nueva ruta

  // Ruta para el login del administrador
  { path: '/login-admin', component: AdminLogin }, // Cambié esta ruta para que concuerde con Seleccion.vue

  // Rutas para el cliente (requieren autenticación)
  {
    path: '/cliente',
    children: [
      { path: 'home', component: HomeView, meta: { requiresNavbar: true } },
      { path: 'menu', component: MenuView, meta: { requiresNavbar: true } },
      { path: 'contacto', component: ContactView, meta: { requiresNavbar: true } },
      { path: 'carrito', component: CartView, meta: { requiresNavbar: true } },
      { path: 'perfil', component: ProfileView, meta: { requiresNavbar: true } },
      { path: 'configuracion', component: SettingsView, meta: { requiresNavbar: true } },
      { path: 'historial', component: HistoryView, meta: { requiresNavbar: true } },
    ],
  },

  // Rutas para el administrador (requieren autenticación)
  {
    path: '/admin',
    children: [
      { path: 'dashboard', component: AdminDashboard, meta: { requiresSideMenu: true } },
    ],
  },
  { path: '/cerrar-sesion', redirect: '/' },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Middleware para verificar si requiere Navbar o SideMenu
router.beforeEach((to, from, next) => {
  const requiresNavbar = to.matched.some(record => record.meta.requiresNavbar);
  const requiresSideMenu = to.matched.some(record => record.meta.requiresSideMenu);

  if (requiresNavbar || requiresSideMenu) {
    const isAuthenticated = localStorage.getItem('auth') === 'true'; // Simulación simple de autenticación
    if (!isAuthenticated) {
      next({ path: '/' });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
