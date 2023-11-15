<template>
    <v-toolbar>
        <v-toolbar-title class="headline text-uppercase mr-4">
            <span>Chat</span>
            <span class="font-weight-light">Messeger</span>
        </v-toolbar-title>

        <v-spacer></v-spacer>

        <v-toolbar-items>
            <v-btn text id="slot">
                <v-icon>mdi-menu-down</v-icon>
            </v-btn>
            <v-menu activator="#slot" offset-y>
                <v-list>
                    <v-list-item>
                        <v-list-tile-title>
                           Perfil
                        </v-list-tile-title>
                    </v-list-item>
                    <v-list-item to="/login">
                        <v-list-tile-title >
                            Sair
                        </v-list-tile-title>
                    </v-list-item>
                </v-list>
            </v-menu>
        </v-toolbar-items>
    </v-toolbar>
</template>

<script>
    //import { mdiMenu } from '@mdi/js';
    
     export default {
       
     }
</script>