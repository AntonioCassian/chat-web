<template>
  <v-app>
    <v-content>
      <v-container fluid fill-height class="pa-0">
        <router-view />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  components: {
    
  },

  data: () => ({
    //
  }),
};
</script>

<style>
*{
  padding: 0;
  margin: 0;
}
</style>
