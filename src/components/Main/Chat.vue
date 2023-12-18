<template>
    <v-app>
        <v-container fluid fill-height class="pa-0">
            <v-row class="fill-height">
                <v-col cols="12" class="pt-0">
                    <v-list class="list">

                        <v-list-item class="">
                            <v-list-item-content>
                                <v-sheet class="d-flex flex-row align-end justify-end mb-4" v-if="chat.message">
                                    <v-card class="pa-3" max-width="350px" color="primary" dark>
                                        <p class="mb-0">
                                            chat.message 
                                        </p>
                                    </v-card>
                                </v-sheet>
                                <v-sheet class="d-flex flex-row align-end justify-end mb-4">
                                    <v-card class="pa-3" max-width="350px" color="primary" dark>
                                        <p class="mb-0">
                                           message 
                                        </p>
                                    </v-card>
                                </v-sheet>


                                <v-sheet class="d-flex flex-row mb-4">
                                    <v-card class="pa-3" max-width="350px" color="grey darken-3" dark>
                                        <p class="mb-0">
                                            Texte ssssssssssss f sdfsdfdsfg sfdsdddddddddddddda ccccccc
                                        </p>
                                    </v-card>
                                </v-sheet>
                            </v-list-item-content>
                        </v-list-item>
                    </v-list>


                    <v-app-bar offset-y class="absolute">
                        <v-text-field :append-outer-icon="'mdi-navigation-variant'"
                         :prepend-icon="icon"
                          hide-details
                           solo
                            label="Message" type="text" v-model="chat.message">
                        </v-text-field>
                    </v-app-bar>
                </v-col>

            </v-row>
        </v-container>

    </v-app>
</template>

<script>
export default {
    name: 'Chat',
    props: ['id'],
    data: () => {
        return {
            chat: {
                message: ''
            },
        }
    },
    methods: {
        send() {
            this.$http.post(`/chat/6`, this.chat)
                // eslint-disable-next-line no-unused-vars
                .then(resp => { this.chat.message = '' })

        }
    }
}
</script>

<style>
.list {
    overflow-y: scroll;
    height: 95%;
    position: absolute;
    top: 0;
    width: 100%;
}
</style>