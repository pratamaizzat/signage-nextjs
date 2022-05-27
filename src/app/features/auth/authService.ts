import { proxy } from "src/lib/services";

export interface LoginData {
  email: string;
  password: string;
}

const login = async (data: LoginData) => {
  const resp = await proxy.post('/proxy/login', data)

  return resp.data
}

const me = async () => {
  const resp = await proxy.post('/proxy/me', {})

  if(resp.data) {
    localStorage.setItem('user', JSON.stringify(resp.data))
  }

  return resp.data
}

const authService = {
  login,
  me
}

export default authService