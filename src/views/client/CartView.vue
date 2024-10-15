<template>
  <div class="container my-5">
    <h1 class="text-center mb-4">Carrito de Compras</h1>

    <!-- Verificar si hay productos en el carrito -->
    <div v-if="cartItems.length > 0">
      <div class="row">
        <!-- Lista de productos -->
        <div class="col-lg-8 mb-4">
          <h2>Productos en tu carrito</h2>
          <!-- Hacemos la tabla responsiva usando overflow-x para móviles -->
          <div class="table-responsive">
            <table class="table table-hover">
              <thead>
                <tr>
                  <th>Producto</th>
                  <th>Cantidad</th>
                  <th>Precio Unitario</th>
                  <th>Subtotal</th>
                  <th>Acción</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in cartItems" :key="index">
                  <td>{{ item.nombre }}</td>
                  <td>{{ item.cantidad }}</td>
                  <td>{{ item.precio | currency }}</td>
                  <td>{{ item.cantidad * item.precio | currency }}</td>
                  <td>
                    <button class="btn btn-danger" @click="eliminarProducto(index)">
                      Eliminar
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- Resumen del pedido -->
        <div class="col-lg-4">
          <h2>Resumen del Pedido</h2>
          <div class="card p-4">
            <p><strong>Subtotal:</strong> {{ subtotal | currency }}</p>
            <p><strong>Impuestos (15%):</strong> {{ impuestos | currency }}</p>
            <p><strong>Total:</strong> {{ total | currency }}</p>
            <button class="btn btn-primary btn-block mt-3" @click="procederPago">Proceder al Pago</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Mensaje cuando el carrito está vacío -->
    <div v-else>
      <h2 class="text-center">Tu carrito está vacío</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CartView',
  data() {
    return {
      cartItems: [
        // Ejemplo de productos en el carrito
        { nombre: "Café Americano", cantidad: 2, precio: 30 },
        { nombre: "Panecillo", cantidad: 1, precio: 20 },
      ]
    };
  },
  computed: {
    subtotal() {
      return this.cartItems.reduce((total, item) => total + item.cantidad * item.precio, 0);
    },
    impuestos() {
      return this.subtotal * 0.15;
    },
    total() {
      return this.subtotal + this.impuestos;
    }
  },
  methods: {
    eliminarProducto(index) {
      this.cartItems.splice(index, 1);
    },
    procederPago() {
      alert("Redirigiendo a la página de pago...");
      // Aquí se manejaría la redirección o lógica del pago
    }
  },
  filters: {
    currency(value) {
      return new Intl.NumberFormat('es-MX', {
        style: 'currency',
        currency: 'MXN'
      }).format(value);
    }
  }
};
</script>

<style scoped>
h1 {
  color: #FFA500; /* Color de la marca */
}

.table th, .table td {
  vertical-align: middle;
}

.table-responsive {
  overflow-x: auto; /* Permite que la tabla sea desplazable horizontalmente */
}

.card {
  border: 1px solid #FFA500; /* Borde del resumen */
  border-radius: 8px;
}

.btn-primary {
  background-color: #FFA500;
  border-color: #FFA500;
}

.btn-primary:hover {
  background-color: #FF8C00;
  border-color: #FF8C00;
}

.btn-danger {
  background-color: #FF4500;
  border-color: #FF4500;
}

.btn-danger:hover {
  background-color: #DC143C;
  border-color: #DC143C;
}

/* Ajustes adicionales para pantallas pequeñas */
@media (max-width: 768px) {
  .table th, .table td {
    font-size: 0.9em;
  }

  .table-responsive {
    margin-bottom: 15px;
  }
}

@media (max-width: 480px) {
  .table th, .table td {
    font-size: 0.8em;
  }

  .btn-primary, .btn-danger {
    font-size: 0.9em;
  }
}
</style>
