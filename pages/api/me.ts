import axios, { AxiosError } from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

import { api } from "src/lib/services";


const me = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const accessToken = req.headers['authorization'] || ''

    const response = await api.post('/auth/check_token', {}, {
      headers: {
        'Authorization': accessToken
      }
    })

    if(response.status >= 400) {
      throw new Error(response.data.message)
    }

    return res.status(200).json(response.data.datas)
  } catch (error) {

    const err = error as AxiosError | Error

    if(axios.isAxiosError(err)) {
      const message = err.response && err.response.data && err.response.data

      return res.status(400).json(message)
    } else {
      const message = err.message || err.toString()

      return res.status(400).json(message)
    }
    
  }
}

export default me