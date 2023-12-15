<template>
  <!-- <div class="background">
  <div class="container mt-5">
      <div class="row d-flex justify-content-center">
        <div class="col-md-5">
          <h2 style="text-align: center;">Vue.js Login Form</h2>
          <form @submit.prevent="handleSubmit">
            <div class="card px-5 py-5">
              <div></div>
              <div class="form-group mb-4">
                <label for="usr">Email Or Username:</label>
                <input type="text" class="form-control" v-model="email" autocomplete="off">
              </div>
              <div class="form-group mb-4">
                <label for="pwd">Password:</label>
                <input type="password" class="form-control" v-model="password" autocomplete="off">
              </div>
              <div class="mb-3 text-center">
                <button v-if="validation()" class="btn btn-dark w-25">Login</button>
                <RouterLink v-if="submitForm()" class="btn btn-dark w-25" to="/container">Login</RouterLink>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    </div> -->
    <div class="login-body">
    <div class="box">
      <form @submit="submitForm">
        <h1>Login</h1>
        <div class="input-box">
          <input type="text" placeholder="Username" v-model="username" required>
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
            <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
          </svg>
        </div>
        <div class="input-box">
          <input type="password" placeholder="Password" v-model="password" required>
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-lock-fill" viewBox="0 0 16 16">
            <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"/>
          </svg>
        </div>

        <div class="remember-forgot">
          <label>
            <input type="checkbox"> Remember me
          </label>
          <a href="#">Forgot Password ?</a>
        </div>

        <RouterLink class="btn-link" :to="goToBackEnd">Login</RouterLink>

        <div class="register-link">
          <p>Don't have an account? <a href="#">Register</a></p>
        </div>
      </form>
    </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      title: 'Login Form',
      username: '',
      password: ''
    }
  },
  computed: {
    goToBackEnd () {
      if (this.submitForm()) {
        return '/contact'
      }
      return '/login'
    }
  },
  methods: {
    handleSubmit () {
      console.log('success')
    },
    submitForm () {
      if (this.username === 'admin' && this.password === 'admin123') {
        return true
      }
    }
  }
}
</script>

<style scoped>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Poppins", sans-serif;
  }

  .login-body{
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: url(../assets/img/background.jpg) no-repeat;
    /* background: url(../assets/img/bg1.jpg) no-repeat; */
    background-size: cover;
    background-position: center;
  }

  .box {
    width: 420px;
    background: transparent;
    border: 2px solid rgba(255,255,255, .2);
    backdrop-filter: blur(5px);
    box-shadow: 0 0 10px rgba(0,0,0,.2);
    color: #fff;
    border-radius: 15px;
    padding: 30px 40px;
  }
  .box h1 {
    font-size: 36px;
    text-align: center;
  }

  .box .input-box {
    position: relative;
    width: 100%;
    height: 50px;
    margin: 30px 0;
  }

  .input-box input{
    width: 100%;
    height: 100%;
    background: transparent;
    border: none;
    outline: none;
    border: 2px solid rgba(255,255,255, .2);
    border-radius: 40px;
    font-size: 16;
    color: #fff;
    padding: 20px;

  }

  .input-box input::placeholder {
    color: #fff;
  }

  .input-box svg {
    position: absolute;
    margin-right: 5px;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
    width: 30px;
    height: 30px;
  }

  .box .remember-forgot {
    display: flex;
    justify-content: space-between;
    font-size: 13px;
    margin-right: 10px;
    margin-bottom: 10px;
  }

  .remember-forgot label input {
    accent-color: #fff;
    margin-right: 3px;
  }

  .remember-forgot a {
    color: #fff;
    text-decoration: none;
  }
  .remember-forgot a:hover {
    text-decoration: underline;
  }

  .box .btn-login {
    width: 100%;
    height: 45px;
    background: #fff;
    border: none;
    outline: none;
    border-radius: 40px;
    box-shadow: 0 0 10px rgba(0,0,0,.1);
    cursor: pointer;
    font-size: 16px;
    color: #333;
    font-weight: 600;
  }

  .box .btn-link {
    width: 100%;
    height: 45px;
    background: #fff;
    border: none;
    outline: none;
    border-radius: 40px;
    box-shadow: 0 0 10px rgba(0,0,0,.1);
    cursor: pointer;
    font-size: 16px;
    color: #333;
    font-weight: 600;
    text-decoration: none;
    display: inline-block;
    text-align: center;
    padding-top: 10.5px;
  }

  .box .register-link {
    font-size: 14px;
    text-align: center;
    margin-top: 20px;
  }

  .register-link p a{
    color: #fff;
    text-decoration: none;
    font-weight: 600;
  }

  .register-link p a:hover {
    text-decoration: underline;
  }
</style>
