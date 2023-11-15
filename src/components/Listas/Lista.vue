<template>
    <v-list lines="one">
        <v-list-item v-for="chat in previous" :key="chat.title">
            <v-list-item-avatar>
                <v-img :alt="`${chat.title} avatar`" :src="chat.avatar"></v-img>
            </v-list-item-avatar>

            <v-list-item-content>
                <v-list-item-title v-text="chat.title"></v-list-item-title>
                <v-list-item-subtitle v-if="chat.message" v-text="chat.message"></v-list-item-subtitle>
            </v-list-item-content>
        </v-list-item>
    </v-list>
</template>

<script>
  export default {
    data: () => ({
      previous: [{
        title: 'Travis Howard',
        avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
        message: 'Loren ipsum ajdsnadnoa'
      }],
    }),
  }
</script>