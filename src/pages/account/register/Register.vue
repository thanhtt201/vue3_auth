<template>
  <div class="login-page">
    <div class="form">
      <form class="register-form" @submit="handleRegister">
        <div>
          <input
            type="text"
            placeholder="Tên"
            v-model="firstName"
            @input="logVal"
          />
          <p v-if="v$.firstName.$error">
            {{ v$.firstName.$errors[0].$message }}
          </p>
        </div>
        <div>
          <input type="text" placeholder="Họ" v-model="lastName" />
        </div>
        <div>
          <input type="text" placeholder="Số điện thoại" v-model="phone" />
        </div>
        <div>
          <input type="text" placeholder="Địa chỉ email" v-model="email" />
        </div>
        <input type="password" placeholder="Mật khẩu" v-model="password" />
        <button>create</button>
        <p class="message">
          Already registered? <router-link to="/login">Sign In</router-link>
        </p>
      </form>
    </div>
  </div>
</template>

<script>
// import { reactive } from "vue";
import useVuelidate from "@vuelidate/core";
import { required, email } from "@vuelidate/validators";

import userApiClient from "@/api/users.api";

export default {
  //   setup() {
  //     // const state = reactive({
  //     //   firstName: "",
  //     //   lastName: "",
  //     //   email: "",
  //     //   password: "",
  //     //   phone: "",
  //     // });

  //     const rules = {
  //       firstName: { required },
  //       lastName: { required },
  //       email: { required, email },
  //       password: { required },
  //       phone: { required },
  //     };
  //     const $v = useVuelidate(rules, state);

  //     return { state, $v };
  //   },
  setup() {
    return {
      v$: useVuelidate(),
    };
  },
  data() {
    return {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      phone: "",
    };
  },
  validations() {
    return {
      firstName: { required },
      lastName: { required },
      email: { required, email },
      password: { required },
      phone: { required },
    };
  },
  methods: {
    async handleRegister(event) {
      event.preventDefault();
      this.v$.$validate();
      console.log("$v11context", this.v$);
      const userRegister = {
        firstname: this.firstName,
        lastname: this.lastName,
        email: this.email,
        password: this.password,
        phone: this.phone,
      };
      try {
        const res = await userApiClient.register(userRegister);
        console.log("res", res);
      } catch (error) {
        console.log("error", error.response);
      }
    },
    logVal() {
      console.log("this..", this.state.firstName);
    },
  },
};
</script>

<style scoped lang="scss">
@import url(https://fonts.googleapis.com/css?family=Roboto:300);

.login-page {
  width: 360px;
  padding: 8% 0 0;
  margin: auto;
}
.form {
  position: relative;
  z-index: 1;
  background: #ffffff;
  max-width: 360px;
  margin: 0 auto 100px;
  padding: 45px;
  text-align: center;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
}
.form input {
  font-family: "Roboto", sans-serif;
  outline: 0;
  background: #f2f2f2;
  width: 100%;
  border: 0;
  margin: 0 0 15px;
  padding: 15px;
  box-sizing: border-box;
  font-size: 14px;
}
.form button {
  font-family: "Roboto", sans-serif;
  text-transform: uppercase;
  outline: 0;
  background: #4caf50;
  width: 100%;
  border: 0;
  padding: 15px;
  color: #ffffff;
  font-size: 14px;
  -webkit-transition: all 0.3 ease;
  transition: all 0.3 ease;
  cursor: pointer;
}
.form button:hover,
.form button:active,
.form button:focus {
  background: #43a047;
}
.form .message {
  margin: 15px 0 0;
  color: #b3b3b3;
  font-size: 12px;
}
.form .message a {
  color: #4caf50;
  text-decoration: none;
}
.form .register-form {
  display: block;
}
.container {
  position: relative;
  z-index: 1;
  max-width: 300px;
  margin: 0 auto;
}
.container:before,
.container:after {
  content: "";
  display: block;
  clear: both;
}
.container .info {
  margin: 50px auto;
  text-align: center;
}
.container .info h1 {
  margin: 0 0 15px;
  padding: 0;
  font-size: 36px;
  font-weight: 300;
  color: #1a1a1a;
}
.container .info span {
  color: #4d4d4d;
  font-size: 12px;
}
.container .info span a {
  color: #000000;
  text-decoration: none;
}
.container .info span .fa {
  color: #ef3b3a;
}
body {
  background: #76b852; /* fallback for old browsers */
  background: rgb(141, 194, 111);
  background: linear-gradient(
    90deg,
    rgba(141, 194, 111, 1) 0%,
    rgba(118, 184, 82, 1) 50%
  );
  font-family: "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
