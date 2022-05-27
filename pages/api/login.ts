import axios, { AxiosError } from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

import { api } from "src/lib/services";


const login = async (req: NextApiRequest, res: NextApiResponse) => {
  const { email, password } = req.body

  try {
    const response = await api.post('/auth/login', { email, password })

    if(response.status >= 400) {
      throw new Error(response.data.message)
    }

    return res.status(200).json({token: response.data.datas.token })
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

export default login