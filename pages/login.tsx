import type { GetServerSideProps, NextPage } from "next"
import React, { useEffect, useState } from "react"
import { useRouter } from "next/router"
import axios from "axios"
import styled from "styled-components"
import Image from "next/image"

import { useAppDispatch, useAppSelector } from "src/app/hook"
import { loginAuth, meAuth, resetAuth } from "src/app/features"
import logo from 'public/small-logo-old.png'

const Login: NextPage = () => {
  const router = useRouter()
  const dispatch = useAppDispatch()

  const { isError, isLoading, isSuccess, isSuccessMe, message } = useAppSelector(state => state.auth)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  useEffect(() => {
    if(isError) {
      // do something
      console.log(message)
    }

    if(isSuccess) {
      dispatch(meAuth())
    }

    if(isSuccessMe) {
      router.push('/')
    }

    dispatch(resetAuth())
  }, [isError, isSuccess, isSuccessMe, router, dispatch, message])

  const handleSumbit = (e: React.MouseEvent<HTMLFormElement>) => {
    e.preventDefault()

    const data = {
      email,
      password
    }

    dispatch(loginAuth(data))
  }

  return (
    <Container aria-label="login-page">
      <div className="grid">
        <section className="form-user">
          <div className="header-logo">
            <Image src={logo} alt="logo old signage" priority/>
          </div>
          <form className="form" onSubmit={handleSumbit} noValidate autoComplete="off">
            <h1 className="text text-heading1">Welcome Good Fellow!</h1>
            <p className="text text-caption">Sign in to get access on this admin system</p>
            <label className="label" htmlFor="email">Email</label>
            <input 
              className="input"
              id="email" 
              type="email" 
              placeholder="ex: johndoe@example.com" 
              name="email" 
              value={email} 
              onChange={e => setEmail(e.target.value)} 
            />
            <label className="label" htmlFor="password">Password</label>
            <input 
              className="input"
              id="password" 
              type="password" 
              placeholder="password" 
              name="password" 
              value={password} 
              onChange={e => setPassword(e.target.value)} 
            />
            <button className="button" type="submit" disabled={isLoading}>
              <span>{isLoading ? 'Loading' : 'Login'}</span>
            </button>
          </form>
          <p className="text text-footer">Signage &copy;Copyright by Interads 2022</p>
        </section>
        <section className="image-background">

        </section>
      </div>
    </Container>
    
  )
}

export default Login

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { req, res } = ctx

  const Cookies = require('cookies')
  const cookies = new Cookies(req, res)

  const accessToken = cookies.get('access') || ''

  try {
    const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/auth/check_token`, {}, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': accessToken
      }
    })

    if(response.data && response.data.datas) {
      return {
        redirect: {
          destination: '/',
          permanent: false,
        }
      }
    }
  } catch (error) {
    return{
      props: {}
    }
  }

  return{
    props: {}
  }
}

const Container = styled("main")`
  width: 100%;
  min-height: 100vh;
  background-color: ${props => props.theme.colors.white};

  .label,
  .text {
    font-family: inherit;
    line-height: ${props => props.theme.typography.spaceLg};
    letter-spacing: ${props => props.theme.typography.letterSpacing};
    color: ${props => props.theme.colors.blue900};
    font-weight: ${props => props.theme.typography.weightMd};
  }

  .grid {
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: auto;
  }

  .grid .image-background {
    visibility: hidden;
    opacity: 0;
    transition:
      visibility 0s,
      opacity 0.5s linear;
    background: 
      linear-gradient(179.25deg, ${props => props.theme.colors.gradient1}
      54.03%, ${props => props.theme.colors.gradient2} 168.64%);
  }

  .grid .form-user {
    min-height: 100vh;
    width: min(100% - 2rem, 500px);
    margin-inline: auto;
    padding-block: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  @media (min-width: 56.250em) {
    .grid {
      grid-template-columns: repeat(2, 1fr);
    }

    .grid .image-background {
      visibility: visible;
      opacity: 1;
    }
  }

  @media (min-width: 75em) {
    .grid {
      grid-template-columns: 40% 60%;
    }

    .grid .image-background {
      visibility: visible;
      opacity: 1;
    }
  }

  @media (min-width: 88em) {
    .grid {
      grid-template-columns: 30% 70%;
    }

    .grid .image-background {
      visibility: visible;
      opacity: 1;
    }
  }

  .form .text-heading1 {
    font-weight: ${props => props.theme.typography.weightLg};
    margin-block-end: 1rem;
  }

  .form .text-caption {
    font-size: ${props => props.theme.typography.textMd};
    color: ${props => props.theme.colors.gray500};
  }

  .form .input {
    font-family: inherit;
    font-size: ${props => props.theme.typography.textMd};
    color: ${props => props.theme.colors.blue900};
    width: 100%;
    background-color: ${props => props.theme.colors.gray100};
    padding: 0.8rem 0.5rem;
    border: none;
    outline: none;
    border-radius: 6px;
    margin-block-end: 1rem;
  }

  .form .button {
    width: 100%;
    outline: none;
    border: none;
    padding: 0.5em 0.8em;
    font-family: inherit;
    font-size: 1.125rem;
    font-weight: 500;
    letter-spacing: 0.02em;
    border-radius: 6px;
    background-color: ${props => props.theme.colors.blue500};
    color: ${props => props.theme.colors.white};
    cursor: pointer;
  }

  .button span {
    display: block;
  }

  .form-user .text-footer {
    margin-block-end: 0;
    color: ${props => props.theme.colors.gray500};
    font-size: ${props => props.theme.typography.textSm};
  }

`