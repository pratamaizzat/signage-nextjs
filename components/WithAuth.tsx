import axios from "axios";
import type { GetServerSidePropsContext } from "next";

const API_URL = process.env.NEXT_PUBLIC_API_URL

export default function WithAuth(gssp: any) {
  return async (ctx: GetServerSidePropsContext) => {
    try {
      const { req, res } = ctx

      const Cookies = require('cookies')
      const cookies = new Cookies(req, res)

      const accessToken = cookies.get('access') || ''

      await axios.post(`${API_URL}/auth/check_token`, {}, {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': accessToken
        }
      })

      return await gssp(ctx)

    } catch (error) {
      return {
        redirect: {
          destination: '/login',
          statusCode: 302,
        }
      }
    }
  }
}