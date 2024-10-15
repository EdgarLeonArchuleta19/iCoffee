<template>
    <div class="admin-dashboard">
      <h1>Panel de Administración</h1>
  
      <div class="dashboard-cards">
        <div class="card">
          <h2>Gestión de Pedidos</h2>
          <router-link to="/admin/pedidos">Ver pedidos</router-link>
        </div>
  
        <div class="card">
          <h2>Gestión de Productos</h2>
          <router-link to="/admin/productos">Ver productos</router-link>
        </div>
  
        <div class="card">
          <h2>Configuración del Sistema</h2>
          <router-link to="/admin/configuracion">Configuración</router-link>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'AdminDashboard',
  };
  </script>
  
  <style scoped>
  .admin-dashboard {
    padding: 20px;
  }
  
  h1 {
    color: #1c4581;
  }
  
  .dashboard-cards {
    display: flex;
    gap: 20px;
    margin-top: 20px;
  }
  
  .card {
    background-color: #e0e4e8;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }
  
  .card h2 {
    color: #1c4581;
  }
  
  .card a {
    display: block;
    margin-top: 10px;
    color: #2a4c96;
    text-decoration: none;
  }
  </style>
  