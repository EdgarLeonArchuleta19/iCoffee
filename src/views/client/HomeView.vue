<template>
  <div>
    <!-- Sección del Encabezado (Hero Section) -->
    <section class="hero-section bg-image text-center text-white">
      <div class="container">
        <h1 class="display-4">¡Tu comida favorita, listo para recoger en segundos!</h1>
        <p class="lead">Explora nuestro menú y realiza pedidos fácilmente desde cualquier lugar del campus.</p>
        <router-link to="/menu" class="btn btn-lg btn-naranja mt-3">Ver Menú</router-link>
      </div>
    </section>

    <!-- Sección de Características -->
    <section class="features-section py-5 text-center">
      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <div class="card h-100">
              <div class="card-body">
                <i class="bi bi-speedometer2 display-4 text-naranja"></i>
                <h3 class="card-title mt-3">Rápido y Conveniente</h3>
                <p class="card-text">Haz tu pedido y recógelo cuando estés listo, sin esperar colas.</p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card h-100">
              <div class="card-body">
                <i class="bi bi-cup-straw display-4 text-naranja"></i>
                <h3 class="card-title mt-3">Variedad</h3>
                <p class="card-text">Explora una amplia variedad de bebidas y snacks de nuestras cafeterías.</p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card h-100">
              <div class="card-body">
                <i class="bi bi-hand-thumbs-up display-4 text-naranja"></i>
                <h3 class="card-title mt-3">Fácil de Usar</h3>
                <p class="card-text">Realiza pedidos en segundos desde cualquier lugar del campus.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Sección del Menú Destacado -->
    <section class="menu-section py-5 bg-light text-center">
      <div class="container">
        <h2 class="mb-4">Menú Destacado</h2>
        <div class="row">
          <div class="col-md-4">
            <div class="card">
              <img src="https://via.placeholder.com/300x200" class="card-img-top" alt="Producto 1">
              <div class="card-body">
                <h5 class="card-title">Café Americano</h5>
                <p class="card-text">$3.00</p>
                <router-link to="/menu" class="btn btn-naranja">Ver Menú</router-link>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card">
              <img src="https://via.placeholder.com/300x200" class="card-img-top" alt="Producto 2">
              <div class="card-body">
                <h5 class="card-title">Cappuccino</h5>
                <p class="card-text">$3.50</p>
                <router-link to="/menu" class="btn btn-naranja">Ver Menú</router-link>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card">
              <img src="https://via.placeholder.com/300x200" class="card-img-top" alt="Producto 3">
              <div class="card-body">
                <h5 class="card-title">Croissant</h5>
                <p class="card-text">$2.50</p>
                <router-link to="/menu" class="btn btn-naranja">Ver Menú</router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Sección de Testimonios -->
    <section class="testimonials-section py-5 text-center">
      <div class="container">
        <h2 class="mb-4">Lo que dicen nuestros clientes</h2>
        <div class="row">
          <div class="col-md-6">
            <blockquote class="blockquote">
              <p>“Me encanta pedir mi café de camino a clase. Siempre está listo cuando llego.”</p>
              <footer class="blockquote-footer">Edwin Gastelum</footer>
            </blockquote>
          </div>
          <div class="col-md-6">
            <blockquote class="blockquote">
              <p>“La app es súper fácil de usar, y me ahorra mucho tiempo en las colas.”</p>
              <footer class="blockquote-footer">Jorge Cañedo</footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>

    <!-- Sección de Contacto -->
    <section class="contact-section py-5 bg-light text-center">
      <div class="container">
        <h2>Contáctanos</h2>
        <p>¿Tienes alguna duda o sugerencia? ¡Queremos saber de ti!</p>
        <router-link to="/contacto" class="btn btn-naranja">Ir a Contacto</router-link>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
};
</script>

<style scoped>
/* Estilo para la sección hero */
.hero-section {
  background-image: url('@/assets/FondoInicio.jpg'); /* Cambia a la ruta donde tienes tu imagen */
  background-size: cover;
  background-position: center;
  padding: 150px 0;
}


.hero-section h1 {
  font-size: 2.5rem;
  font-weight: bold;
}

.hero-section p {
  font-size: 1.25rem;
}

/* Botones personalizados */
.btn-naranja {
  background-color: #FFA500;
  color: white;
  border: none;
}

.btn-naranja:hover {
  background-color: #FF8C00;
}

/* Sección de características */
.features-section .card {
  padding: 20px;
  border: none;
}

.features-section .card i {
  font-size: 2.5rem;
  margin-bottom: 10px;
}

.text-naranja {
  color: #FFA500;
}

/* Sección del menú */
.menu-section .card {
  transition: transform 0.3s;
  margin-bottom: 20px;
}

.menu-section .card:hover {
  transform: scale(1.05);
}

.menu-section .card-body {
  padding: 15px;
}

.menu-section img {
  max-height: 180px; /* Imagenes más pequeñas */
}

/* Margen entre los elementos en móviles */
@media (max-width: 768px) {
  .menu-section .card {
    margin-bottom: 15px;
  }
}

/* Ajuste de tamaño para pantallas más pequeñas */
@media (max-width: 576px) {
  .menu-section .card {
    max-width: 90%;
    margin: 0 auto 15px auto;
  }
}

/* Sección de Testimonios */
.testimonials-section blockquote {
  border-left: none;
  font-size: 1.1rem;
}

/* Sección de contacto */
.contact-section .btn {
  font-size: 1.25rem;
}
</style>
