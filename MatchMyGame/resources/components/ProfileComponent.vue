<!-- src/components/ProfileComponent.vue -->

<template>
  <div>
    <h1>User Profile</h1>
    <p>{{ user.name }}</p>
    <p>Game Account: {{ user.game_account }}</p>
    <label>
      Update Game Account:
      <input v-model="gameAccount" />
    </label>
    <button @click="updateGameAccount">Update</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {},
      gameAccount: '',
    };
  },
  mounted() {
    // Fetch user data
    this.fetchUserData();
  },
  methods: {
    async fetchUserData() {
      try {
        const response = await fetch('/users/' + this.$route.params.id);
        const data = await response.json();
        this.user = data;
        this.gameAccount = data.game_account;
      } catch (error) {
        console.error('Error fetching user data', error);
      }
    },
    async updateGameAccount() {
      try {
        const response = await fetch('/update-game-account', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            game_account: this.gameAccount,
          }),
        });

        const data = await response.json();
        console.log(data);
        // You can update the UI or show a success message
      } catch (error) {
        console.error('Error updating game account', error);
      }
    },
  },
};
</script>
