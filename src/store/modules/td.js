import axios from 'axios';

export default {
    namespaced: true,
    state: {
        user: null,
        token: null
    },

    getters: {
        authenticated (state) {
            return state.token && state.user
        },

        user (state) {
            return state.user
        }
    },

    mutations: {
        SET_TOKEN (state, token) {
            state.token = token
        },
        SET_USER (state, data) {
            state.user = data
        },
    },

    actions: {
        async signIn ({ dispatch }, payload) {
            let response = await axios.post('/tokens', payload)

            return dispatch('atemp', response.data.token)
        },
        
        async atemp ({commit, state}, token) {
            if(token) {
                commit('SET_TOKEN',token)
            }
            
            if(!state.token){
                return
            }

            try {
                let response = await axios.get('/tokens')

                commit('SET_USER', response.data)
            } catch (err) {
                commit('SET_USER', null)
                commit('SET_TOKEN',null)
            }
        }
    },
}