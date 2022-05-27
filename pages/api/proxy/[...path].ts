import { createProxyMiddleware, responseInterceptor } from "http-proxy-middleware";
import Cookies from "cookies";
import url from 'url'

const PROXY_URL = process.env.NEXT_PUBLIC_PROXY_URL

export const config = {
  api: {
    bodyParser: false,
    externalResolver: true,
  }
}

const proxy = createProxyMiddleware({
  secure: process.env.NODE_ENV === 'production' ? true : false,
  target: PROXY_URL,
  changeOrigin: true,
  pathRewrite: {"^/api/proxy": ""},
  selfHandleResponse: true,
  onError(err, _req, res) {
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode
    console.log('iam here')

    res.setHeader('Content-Type', 'application/json')

    res.status(statusCode)
    res.json({
      status: statusCode,
      message: err.message,
      stack: process.env.NODE_ENV === 'production' ? 'Hi!' : err.stack
    })

    res.end()
  },

  onProxyReq(proxyReq, req, res) {
    const cookies = new Cookies(req, res)
    const accessToken = cookies.get('access')

    req.headers.cookie = ''
    proxyReq.setHeader('cookie', '')

    if(accessToken) {
      req.headers['authorization'] = accessToken
      proxyReq.setHeader('authorization', accessToken)
    }
  },

  onProxyRes: responseInterceptor(async (responseBuffer, proxyRes, req, res) => {
    const pathname = url.parse(req.url || '').pathname 

    const isLogin: boolean = pathname === '/login'

    const cookies = new Cookies(req, res)
    const accessToken = cookies.get('access')

    req.headers.cookie = ''
    proxyRes.headers['cookie'] = ''

    res.setHeader('Content-Type', 'application/json')
    res.setHeader('Accept', 'application/json')
    
    if(accessToken) {
      req.headers['authorization'] = accessToken
      proxyRes.headers['authorization'] = accessToken
    }

    const response = responseBuffer.toString('utf8')


    if(isLogin) {
      try {
        let { token } = JSON.parse(response)

        if(!token) {
          return response
        }

        const cookies = new Cookies(req, res)
        cookies.set('access', token, {
          httpOnly: true,
          sameSite: 'lax'
        })
      } catch (error) {
        const err = error as Error
        res.statusCode = 500
        res.statusMessage = 'Internal Server Error'
        const message = Object.assign({}, { message: err.message, status: res.statusCode })
        return JSON.stringify(message)
      }
    }

    if (req.headers['content-type'] === 'application/json') {
      let data = JSON.parse(response) 

      if (isLogin) {
        data = Object.assign({}, { logged: true })
      } else {
        data = Object.assign({}, data)
      }

      return JSON.stringify(data)
    }

    return responseBuffer
  })
})

export default proxy