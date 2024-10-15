<template>
  <div class="container my-5">
    <!-- Mensaje principal con mayor separación -->
    <h1 class="text-center mb-5">¡Tu opinión vale mucho!</h1>

    <!-- Sección de contacto -->
    <div class="row">
      <!-- Información de contacto -->
      <div class="col-lg-6 mb-4">
        <h3>Información de Contacto</h3>
        <p>
          <strong>Dirección:</strong> Calle Ficticia 123, Ciudad Escolar, País
        </p>
        <p>
          <strong>Email:</strong> contacto@icoffee.com
        </p>
        <p>
          <strong>Teléfono:</strong> +1 800 123 4567
        </p>
      </div>

      <!-- Formulario de contacto con borde y contenedor -->
      <div class="col-lg-6">
        <div class="contact-form p-4">
          <h3>Envíanos tu mensaje</h3>
          <form @submit.prevent="enviarMensaje">
            <div class="mb-3">
              <label for="asunto" class="form-label">Asunto</label>
              <input type="text" class="form-control" id="asunto" v-model="form.asunto" required />
            </div>
            <div class="mb-3">
              <label for="nombre" class="form-label">Nombre Completo</label>
              <input type="text" class="form-control" id="nombre" v-model="form.nombre" required />
            </div>
            <div class="mb-3">
              <label for="email" class="form-label">Email</label>
              <input type="email" class="form-control" id="email" v-model="form.email" required />
            </div>
            <div class="mb-3">
              <label for="mensaje" class="form-label">Mensaje</label>
              <textarea class="form-control" id="mensaje" rows="4" v-model="form.mensaje" required></textarea>
            </div>
            <button type="submit" class="btn btn-primary">Enviar Mensaje</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactView",
  data() {
    return {
      form: {
        asunto: "",
        nombre: "",
        email: "",
        mensaje: ""
      }
    };
  },
  methods: {
    enviarMensaje() {
      // Aquí podrías manejar el envío del formulario
      alert(`Mensaje enviado con éxito: ${this.form.nombre}`);
      // Resetear formulario
      this.form.asunto = "";
      this.form.nombre = "";
      this.form.email = "";
      this.form.mensaje = "";
    }
  }
};
</script>

<style scoped>
h1 {
  font-size: 2.5rem;
  font-weight: bold;
  color: #FFA500; /* Naranja acorde a la marca */
}

/* Mayor separación entre el título y los apartados */
h1 {
  margin-bottom: 5rem; /* Incrementa el margen para mayor separación */
}

p {
  font-size: 1.2rem;
}

/* Estilo del formulario de contacto para diferenciarlo */
.contact-form {
  border: 1px solid #e6e4e1; /* Borde naranja */
  border-radius: 3px; /* Bordes redondeados */
}

.form-control {
  border-radius: 0.25rem;
}

.btn-primary {
  background-color: #FFA500;
  border-color: #FFA500;
}

.btn-primary:hover {
  background-color: #FF8C00;
  border-color: #FF8C00;
}
</style>
