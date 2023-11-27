<!-- src/components/AuthComponent.vue -->

<template>
  <div>
    <h1>Authentication</h1>
    <form @submit.prevent="handleSubmit">
      <label>
        Name:
        <input type="text" v-model="name" required />
      </label>
      <label>
        Email:
        <input type="email" v-model="email" required />
      </label>
      <label>
        Password:
        <input type="password" v-model="password" required />
      </label>
      <button type="submit">Register</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      email: '',
      password: '',
    };
  },
  methods: {
    async handleSubmit() {
      try {
        const response = await fetch('/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: this.name,
            email: this.email,
            password: this.password,
          }),
        });

        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.error('Error registering user', error);
      }
    },
  },
};
</script>
