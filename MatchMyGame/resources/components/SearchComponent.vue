<!-- src/components/SearchComponent.vue -->

<template>
  <div>
    <h1>Search for Players</h1>
    <label>
      Choose a game:
      <select v-model="selectedGame">
        <option value="fortnite">Fortnite</option>
        <option value="valorant">Valorant</option>
        <option value="csgo">CS:GO</option>
      </select>
    </label>
    <button @click="searchPlayers">Search</button>
    <ul v-if="foundUsers.length > 0">
      <li v-for="user in foundUsers" :key="user.id">
        {{ user.name }} - <button @click="startVoiceCall(user.id)">Start Voice Call</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedGame: 'fortnite',
      foundUsers: [],
    };
  },
  methods: {
    async searchPlayers() {
      try {
        const response = await fetch('/search', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            game: this.selectedGame,
          }),
        });

        const data = await response.json();
        this.foundUsers = data.users;
      } catch (error) {
        console.error('Error searching for players', error);
      }
    },
    startVoiceCall(userId) {
      // Add logic to start a voice call with the selected user
      console.log('Voice call with user ID:', userId);
    },
  },
};
</script>
