<template>
  <div class="container my-5">
    <h1 class="text-center mb-4">Menú - Ordena tus productos</h1>

    <div class="row">
      <!-- Barra lateral de categorías -->
      <div class="col-md-3">
        <div class="list-group">
          <button
            type="button"
            class="list-group-item list-group-item-action"
            :class="{ active: selectedCategory === 'Todos' }"
            @click="selectedCategory = 'Todos'"
          >
            Todos
          </button>
          <button
            v-for="(category, index) in categorias"
            :key="index"
            type="button"
            class="list-group-item list-group-item-action"
            :class="{ active: selectedCategory === category.nombre }"
            @click="selectedCategory = category.nombre"
          >
            {{ category.nombre }}
          </button>
        </div>
      </div>

      <!-- Sección de productos -->
      <div class="col-md-9">
        <div class="row">
          <div
            class="col-sm-6 col-md-4 col-lg-3 mb-4"
            v-for="(producto, index) in filteredProducts"
            :key="index"
          >
            <div class="card h-100">
              <img :src="producto.imagen" class="card-img-top img-fluid small-image" :alt="producto.nombre" />
              <div class="card-body text-center">
                <h5 class="card-title">{{ producto.nombre }}</h5>
                <div class="d-flex justify-content-around">
                  <button class="btn btn-sm btn-primary" @click="mostrarModal(producto)">Agregar al Carrito</button>
                  <button class="btn btn-sm btn-secondary">Calificar</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal de confirmación al agregar al carrito (solo simulado) -->
    <div class="modal fade" id="cartModal" tabindex="-1" aria-labelledby="cartModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="cartModalLabel">Producto agregado al carrito (Simulado)</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <p>El producto ha sido agregado al carrito. ¿Deseas continuar comprando o ir al carrito?</p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Continuar Comprando</button>
            <router-link to="/carrito" class="btn btn-primary">Ir al Carrito</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OrderView',
  data() {
    return {
      selectedCategory: 'Todos', // Categoría seleccionada por defecto
      categorias: [
        {
          nombre: 'Cafés',
          productos: [
            { nombre: 'Café Americano', imagen: 'https://via.placeholder.com/150x150.png?text=Café+Americano' },
            { nombre: 'Cappuccino', imagen: 'https://via.placeholder.com/150x150.png?text=Cappuccino' },
          ],
        },
        {
          nombre: 'Panadería',
          productos: [
            { nombre: 'Croissant', imagen: 'https://via.placeholder.com/150x150.png?text=Croissant' },
            { nombre: 'Pan de Chocolate', imagen: 'https://via.placeholder.com/150x150.png?text=Pan+de+Chocolate' },
          ],
        },
      ],
    };
  },
  computed: {
    filteredProducts() {
      if (this.selectedCategory === 'Todos') {
        return this.categorias.flatMap(category => category.productos);
      } else {
        const category = this.categorias.find(cat => cat.nombre === this.selectedCategory);
        return category ? category.productos : [];
      }
    },
  },
  methods: {
    mostrarModal(producto) {
      console.log(`${producto.nombre} agregado al carrito (simulado).`);
      const cartModal = new bootstrap.Modal(document.getElementById('cartModal'));
      cartModal.show();
    },
  },
};
</script>

<style scoped>
h1 {
  color: #FFA500; /* Color de la marca */
  margin-bottom: 10rem; /* Espacio adicional debajo del título */
}

.list-group-item.active {
  background-color: #FFA500;
  border-color: #FFA500;
}

.card {
  border: 1px solid #FFA500;
  border-radius: 8px;
  transition: transform 0.3s;
}

.card:hover {
  transform: scale(1.05);
}

.card-body {
  background-color: #fdfdfd;
}

.img-fluid.small-image {
  height: 150px; /* Tamaño más pequeño para la imagen */
  object-fit: cover;
}

.btn-primary {
  background-color: #FFA500;
  border-color: #FFA500;
  font-size: 0.8rem; /* Tamaño de texto más pequeño */
  padding: 0.25rem 0.5rem;
}

.btn-primary:hover {
  background-color: #FF8C00;
  border-color: #FF8C00;
}

.btn-secondary {
  background-color: #6c757d;
  border-color: #6c757d;
  font-size: 0.8rem; /* Tamaño de texto más pequeño */
  padding: 0.25rem 0.5rem;
}

.btn-secondary:hover {
  background-color: #5a6268;
}

.modal-content {
  border-radius: 8px;
}
</style>
