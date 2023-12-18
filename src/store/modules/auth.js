/* eslint-disable no-async-promise-executor */
import axios from "axios";

const auth = token => {
    if (!token) {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
    }
}

const setLocalToken = token => {
    localStorage.setItem('token', token)
}
const deleteToken = () => {
    localStorage.removeItem('token')
}

const getLocalToken = () => {
    localStorage.getItem('token')
}
 

const state = {
    user: {},
    token: ''
};

const getters = {
    isAuthenticated: token => !!token
}

const mutations = {
    SET_USER(state, payload) {
        state.user = payload
    },
    SET_TOKEN(state, payload) {
        state.token = payload
    }
};

const actions = {
    ActionSetUser({ commit }, payload) {
        commit('SET_USER', payload)
    },
    ActionSetToken({ commit }, payload) {
        auth(payload)
        setLocalToken(payload)
        commit('SET_TOKEN', payload)
    },
    ActionLogin({ dispatch }, payload) {
        axios.post('/tokens', payload)
            .then(response => {
                dispatch('ActionSetUser', response.data.user)
                dispatch('ActionSetToken', response.data.token)
            })
            .catch(error => {
                console.error('Erro na requisição de login:', error.response.data);
            });
    },

    ActionLogout({ dispatch }) {
        auth('')
        deleteToken()
        dispatch('ActionSetUser', {})
        dispatch('ActionSetToken', '')
    },

    ActionCheckToken({dispatch, state}) {
        if(state.token) { 
            return Promise.resolve(state.token) 
        }
        const token = getLocalToken();
        if (token) {
            auth(token);
        }

        if(!token) {
            return Promise.reject(new Error('Token Invalid'))
        }
        
        dispatch('ActionSetToken', token)
        return dispatch('ActionSession')
    },
   ActionSession({ dispatch }) {
        return new Promise(async (resolve, reject) => {
            try {
                const { data: {  user } } = await axios.get('/tokens')
                dispatch('ActionSetUser', user)
                resolve()
            } catch (err) {
                dispatch('ActionLogout')
                reject(err)
            }
        })
    } 
};
export default {
    state,
    getters,
    actions,
    mutations
};