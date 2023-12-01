<template>
    <v-row class="fill-height" xs12 md6 lg4>
      <v-col cols="6" class="" style="background: red">
  
      </v-col>
  
      <v-col cols="6" class="d-flex flex-column justify-center align-center text-center">
        <v-sheet width="50%">
            <Title title="Login" />
            <v-form>
              <v-text-field
              type="text"
              label="Username"
              v-model="user.username"
              ></v-text-field>
              <v-text-field 
              type="password"
              label="Password"
              v-model="user.password"
              ></v-text-field>
              <v-btn color="primary" to="/">Login</v-btn>
            </v-form>
          </v-sheet>
          <v-btn text to="/register" class="text-lowercase plain mt-6">Click-me here and Resgister!</v-btn>
          usuario: {{user.username}}, {{ user.password }}
      </v-col>
    </v-row>
  </template>
  
  <script>
  import Title from '../components/Titles/Title.vue';
  export default {
    name: 'Login',
    components: { Title },
    data: () => {
      return {
        user:{
        username: '',
        password: ''
      }
      };
    }
  
  }
  </script>
  