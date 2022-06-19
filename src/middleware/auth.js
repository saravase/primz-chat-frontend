import { store } from '../store/index'

export function isAuth (to, from, next) {
  if (store.getters['auth/user']) {
    next('/')
  } else {
    next()
  }
}
