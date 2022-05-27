import '../styles/globals.css'
import React from 'react'
import { Provider } from 'react-redux'
import type { AppProps } from 'next/app'
import type { NextLayout } from 'next'
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import { lightTheme, darkTheme } from 'src/lib/theme'

import store from 'src/app/store'

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Poppins', sans-serif;
    background-color: ${props => props.theme.colors.white};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    transition: all 0.25s linear;
  }

  h1,
  h2,
  h3,
  h4 {
    margin-block-start: 0;
  }

  p {
    margin-block-start: 0;
  }

  ul {
    list-style: none;
  }

  input {
    font-family: inherit;
  }

  button {
    font-family: inherit;
  }
`

type AppLayoutProps = AppProps & {
  Component: NextLayout
}

function MyApp({ Component, pageProps }: AppLayoutProps) {
  const getLayout = Component.getLayout ?? ((page: React.ReactNode) => page)

  return (
    <Provider store={store}>
      <ThemeProvider theme={lightTheme}>
        <GlobalStyle />
        {getLayout(<Component {...pageProps} />)}
      </ThemeProvider>
    </Provider>
  )
}

export default MyApp
