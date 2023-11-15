<template>
    <v-layout class="d-block">
        <Header />
        <div class="d-flex dif" height="100">
            <v-navigation-drawer>
                <Lista />
            </v-navigation-drawer>
            <v-main class="d-flex align-center justify-center" style="width: 350px;">
                <Chat />
            </v-main>
            <v-navigation-drawer right>
                <v-list>
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
export default {
    name: 'Home',
    components: { Header, Lista, Chat },
    data: () => ({
        password: 'Password',
        icons: [
            'mdi-navigation-variant',

        ],
    }),


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