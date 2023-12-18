<template>
    <v-layout class="d-block">
        <Header />
        <v-divider></v-divider>
        <div class="d-flex dif" height="100">
            <v-navigation-drawer>
                <Lista />
            </v-navigation-drawer>
            <v-main class="d-flex align-center justify-center" style="width: 350px;">
                <template >
                    <ul>
                        <li v-for="ust in user" :key="ust.id">
                        {{ust.username}}
                        </li>
                    </ul>
                </template>
                <Chat />
            </v-main>
            <v-navigation-drawer right>
                <v-list class="pa-0">
                    <v-card>
                        <v-card-title>Contatos</v-card-title>
                    </v-card>
                    <Lista />
                </v-list>
            </v-navigation-drawer>

        </div>

    </v-layout>
</template>

<script>
import Header from '@/components/Header/Header.vue';
import Lista from '@/components/Listas/Lista.vue';
import Chat from '@/components/Main/Chat.vue';
import { mapState,  } from 'vuex';
export default {
    name: 'Home',
    data: () => {
        return {
            ust: []
        }
    },
    components: { Header, Lista, Chat },
    computed: {
        ...mapState({
            user: state => state.auth.user
        }),
        /*...mapGetters({
            authenticated: 'auth/authenticated',
            user: 'auth/user'
        })*/
    }

}
</script>

<style>
.dif {
    height: 100vh;
}

.absolute {
    position: absolute;
    bottom: 0;
    width: 100%;
}
</style>