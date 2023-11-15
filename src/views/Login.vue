<template>
    <v-row class="fill-height" xs12 md6 lg4>
      <v-col cols="6" class="" style="background: red">
  
      </v-col>
  
      <v-col cols="6" class="d-flex flex-column justify-center align-center text-center">
        <v-sheet width="50%">
            <Title title="Login" />
            <v-form>
              <v-text-field label="Username"></v-text-field>
              <v-text-field label="Password"></v-text-field>
              <v-btn color="primary">Login</v-btn>
            </v-form>
          </v-sheet>
          <v-btn text to="/register" class="text-lowercase plain mt-6">Click-me here and Resgister!</v-btn>
      </v-col>
    </v-row>
  </template>
  
  <script>
  import Title from '../components/Titles/Title.vue';
  export default {
    name: 'Login',
    components: { Title }
  
  
  }
  </script>
  