<template>
  <v-list lines="one" class="pa-0">
    <v-list-item v-for="chat in user" :key="chat.id" class="contact">
      <v-list-item-avatar>
        <v-img :alt="`${chat.Photos[0].filename} avatar`" :src="chat.Photos[0].url"></v-img>
        <v-icon v-if="!chat.Photos[0].url" style="font-size: 42px;">mdi-account-circle-outline</v-icon>
      </v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title>{{ chat.username }}</v-list-item-title>
        <v-list-item-subtitle v-if="chat.message">{{ chat.message }}</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
  </v-list>
</template>

<script>
export default {
  data: () => ({
    user: [],
  }),
  mounted() {
    this.$http.get('/user')
      .then(
        res => { console.log("ok:", this.user = res.data) }
      )
  }
} 
</script>


<style scoped>
.contact {
  background: aliceblue;
  border-bottom: 0.5px solid #f6f6f6;
  border-top: 0.8px solid #dbd3d3;
}
</style>