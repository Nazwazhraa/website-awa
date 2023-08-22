<template>
  <div class="lg:m-10">
<form class="relative border border-gray-100 space-y-3 max-w-screen-md mx-auto rounded-md bg-white p-6 shadow-xl lg:p-10"  @submit.prevent="performsignup">
<h1 class="mb-6 text-xl font-semibold lg:text-2xl">Register</h1>


<div>
  <label class=""> Full Name  </label>
  <input v-model="name" type="text" placeholder="Full Name " class="mt-2 h-12 w-full rounded-md bg-gray-100 px-3" />
</div>
<div>
  <label class=""> Phone </label>
  <input v-model="phone" type="number" placeholder="+62" class="mt-2 h-12 w-full rounded-md bg-gray-100 px-3" />
</div>
<div>
  <label class=""> Email </label>
  <input v-model="email" type="email" placeholder="Email Address" class="mt-2 h-12 w-full rounded-md bg-gray-100 px-3" />
</div>
<div>
  <label class=""> Password </label>
  <input v-model="password" type="password" placeholder="* * * * * *" class="mt-2 h-12 w-full rounded-md bg-gray-100 px-3" />
</div>
<div>
  <label class=""> Confirm Password </label>
  <input v-model="confirm_password" type="password" placeholder="* * * * * *" class="mt-2 h-12 w-full rounded-md bg-gray-100 px-3" />
</div>


<div>
  <button type="submit" class="mt-5 w-full rounded-md bg-blue-600 p-2 text-center font-semibold text-white">Register</button>
</div>
</form>

</div>
</template>
<script>
import { mapActions } from 'vuex';

export default {
  data() {
      return {
          name: '',
          email: '',
          phone: '',
          password: '',
          confirm_password: '',
      };
  },
  methods: {
      ...mapActions('auth', ['signup']),
      async performsignup() {
          const credentials = {
              name: this.name,
              email: this.email,
              phone: this.phone,
              password: this.password,
              confirm_password: this.confirm_password,
              
          };

          const success = await this.signup(credentials);

          if (success) {
              // Redirect to the desired route on successful login
              this.$router.push('/login');
          } else {
              alert("signup Failed");
          }
      },
  },
};
</script>