import axios from 'axios'

const URI = 'http://localhost:5000/api/auth'

const userAPI = axios.create({
  baseURL: URI
})

const setJWT = () => {
  const token = ''
  userAPI.defaults.headers.common.Authorization = `Bearer ${token}`
}

const removeJWT = () => {
  delete userAPI.defaults.headers.common.Authorization
}

const signup = async (payload) => {
  try {
    removeJWT()
    const res = await userAPI.post('/signup', payload)
    return res
  } catch (error) {
    console.log(error.code)
    return 'connection error'
  }
}

const signin = async (payload) => {
  try {
    removeJWT()
    const res = await userAPI.post('/signin', payload)
    return res.data
  } catch (error) {
    console.log(error.code)
    return 'connection error'
  }
}

const me = async () => {
  try {
    setJWT()
    const res = await userAPI.get('/me')
    return res
  } catch (error) {
    console.log(error.code)
    return 'connection error'
  }
}

const tokens = async (payload) => {
  try {
    setJWT()
    const res = await userAPI.post('/tokens', payload)
    return res.data
  } catch (error) {
    console.log(error.code)
    return 'connection error'
  }
}

const signout = async () => {
  try {
    setJWT()
    const res = await userAPI.post('/signout')
    return res
  } catch (error) {
    console.log(error.code)
    return 'connection error'
  }
}

export {
  signup,
  signin,
  me,
  tokens,
  signout
}
