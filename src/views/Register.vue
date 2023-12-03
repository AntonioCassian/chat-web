<template>
  <v-row class="fill-height" xs12 md6 lg4>
    <v-col cols="6" class="d-flex flex-column justify-center align-center text-center">
      <v-sheet width="50%">
        <Title title="Register" />
        <v-form>
          <v-text-field type="text" label="Username" :rules="usernameR" v-model="user.username"></v-text-field>
          <v-text-field type="email" label="E-mail" :rules="emailR" v-model="user.email"></v-text-field>
          <v-text-field type="password" label="Password" :rules="passwordR" v-model="user.password"></v-text-field>
          <v-btn color="primary" @click.prevent="registrar">Register</v-btn>
          <v-alert type="error" v-if="erros.length > 0">
            <ul>
              <li v-for="erro in erros" :key="erro">{{ erro }}</li>
            </ul>
          </v-alert>
        </v-form>
      </v-sheet>
      <v-btn text to="/login" class="text-lowercase plain mt-6">Click-me here and Login!</v-btn>
    </v-col>

    <v-col cols="6" class="" style="background: red">

    </v-col>
  </v-row>
</template>
  
<script>
import Title from '../components/Titles/Title.vue';

export default {
  name: 'Register',
  components: { Title },
  data: () => {
    return {
      user: {
        username: '',
        email: '',
        password: ''
      },
      usernameR: [
        v => !!v || 'Username is required',
        v => v.length >= 3 || 'Username must be longer than 3 characters'
      ],
      emailR: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid',
      ],
      passwordR: [
        v => !!v || 'Password is required',
        v => v.length == 7 || 8 || 'The password must be 7 or 8 characters long'
      ],
      erros: []
    };
  },
  methods: {
    registrar() {
      this.$http.post('/user', this.user)
        // eslint-disable-next-line no-unused-vars
        .then(resp => {
          this.user.username = '',
            this.user.email = '',
            this.user.password = ''
        })
        .catch(err => {
          if (err.resp && err.response.data.error) {
            this.erros = err.response.data.error;
          } else {
            console.error(err)
          }
        })
    }

  }

}
</script>
  