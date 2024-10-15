<template>
    <div class="register-container">
      <div class="register-box">
        <h2>Registro - Cliente</h2>
        <form @submit.prevent="register">
          <input type="email" v-model="email" placeholder="Correo Institucional" />
          <input type="text" v-model="nombre" placeholder="Nombre Completo" />
          <input type="password" v-model="password" placeholder="Contraseña" />
          <input type="text" v-model="codigo" placeholder="Código de verificación" v-if="codeSent" />
  
          <button type="submit">{{ codeSent ? 'Registrar' : 'Enviar Código' }}</button>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        email: '',
        nombre: '',
        password: '',
        codigo: '',
        codeSent: false
      };
    },
    methods: {
      register() {
        if (!this.codeSent) {
          if (this.validarEmail(this.email)) {
            alert('Código enviado a ' + this.email);
            this.codeSent = true;
          } else {
            alert('Por favor, ingresa un correo institucional válido.');
          }
        } else if (this.codigo === '123456') {
          alert('Registro exitoso.');
          this.$router.push('/login-cliente');
        } else {
          alert('Código incorrecto.');
        }
      },
      validarEmail(email) {
        // Validar que sea un correo institucional (terminación .edu por ejemplo)
        const regex = /^[a-zA-Z0-9._%+-]+@institucion\.edu$/;
        return regex.test(email);
      }
    }
  };
  </script>
  
  <style scoped>
  .register-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: white;
  }
  
  .register-box {
    background-color: #FFA500;
    padding: 30px;
    border-radius: 10px;
    text-align: center;
    width: 300px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  input {
    display: block;
    width: 100%;
    margin: 10px 0;
    padding: 12px;
    border-radius: 5px;
    border: 1px solid #ddd;
  }
  
  button {
    background-color: #2a4c96;
    color: white;
    border: none;
    padding: 10px;
    border-radius: 5px;
    cursor: pointer;
    width: 100%;
  }
  </style>
  