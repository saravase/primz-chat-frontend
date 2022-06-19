import router from '../router/index'
import store from '../store/index'

import {
  signup,
  signin,
  signout,
  me,
  tokens
} from '@/database/auth'

const state = () => {
  return {
    user: null,
    users: null,
    tokens: null
  }
}

const getters = {
  user: (state) => {
    return state.user
  },
  isAdmin: (state) => {
    return ''
  },
  getIdToken: (state) => {
    if (state.tokens.tokens !== undefined) {
      return state.tokens.tokens.idToken
    } else {
      const tokens = JSON.parse(localStorage.getItem('_auth'))
      if (tokens.tokens !== undefined) {
        return state.tokens.tokens.idToken
      }
      return null
    }
  },
  getRereshToken: (state) => {
    if (state.tokens.tokens !== undefined) { return state.tokens.tokens.refreshToken }
  }

}

const actions = {
  signup: async ({ commit }, payload) => {
    const token = await signup(payload)
    if (token !== 'connection error') {
      commit('setTokens', token)
      router.push('/chat')
    } else {
      store.dispatch('notification/setNotification', {
        message: 'User already exist or password not strong',
        type: 'error',
        show: true
      })
      setTimeout(function () {
        store.dispatch('notification/setNotification', {
          message: '',
          type: '',
          show: false
        })
      }, 3000)
    }
  },
  signin: async ({ commit }, payload) => {
    const tokens = await signin(payload)
    if (tokens !== 'connection error') {
      localStorage.setItem('_auth', JSON.stringify(tokens))
      commit('setTokens', tokens)
      router.push('/chat')
    } else {
      store.dispatch('notification/setNotification', {
        message: 'Verify login or passwword',
        type: 'error',
        show: true
      })
      setTimeout(function () {
        store.dispatch('notification/setNotification', {
          message: '',
          type: '',
          show: false
        })
      }, 3000)
    }
  },
  getUser: async ({ commit }) => {
    const user = await me()
    if (user !== 'connection error') {
      commit('setUser', user)
    } else {
      store.dispatch('notification/setNotification', {
        message: 'Error While fetching user details',
        type: 'error',
        show: true
      })
      setTimeout(function () {
        store.dispatch('notification/setNotification', {
          message: '',
          type: '',
          show: false
        })
      }, 3000)
    }
  },
  token: async ({ commit }, payload) => {
    const token = await tokens(payload)
    if (token !== 'connection error') {
      commit('setTokens', token)
    } else {
      store.dispatch('notification/setNotification', {
        message: 'Error while fetching new tokens',
        type: 'error',
        show: true
      })
      setTimeout(function () {
        store.dispatch('notification/setNotification', {
          message: '',
          type: '',
          show: false
        })
      }, 3000)
    }
  },
  signout: async ({ commit }) => {
    const res = await signout()
    if (res !== 'connection error') {
      commit('setTokens', null)
      commit('setUser', null)
      router.push('/login')
    }
  }
}

const mutations = {
  setTokens: (state, payload) => {
    state.tokens = payload
  },
  setUser: (state, payload) => {
    state.user = payload
  },
  setUsers: (state, payload) => {
    state.users = payload
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
