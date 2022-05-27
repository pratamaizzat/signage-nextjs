import type { GetServerSideProps, NextLayout } from 'next'
import dynamic from 'next/dynamic'

import WithAuth from 'components/WithAuth'
import type { HTMLHeadProps, LayoutProps } from 'components'
import React from 'react'

const Head = dynamic<HTMLHeadProps>(() => import('components').then(mod => mod.Head))
const Layout = dynamic<LayoutProps>(() => import('components').then(mod => mod.Layout))

const Home: NextLayout = () => {
  return (
    <section aria-label='dashboard'>
      <Head title='Signage &#8226; Dashboard' />
      <h3>Run From Docker 5</h3>
    </section>
  )
}

export default Home

Home.getLayout = function getLayout(page: React.ReactNode) {
  return <Layout>{page}</Layout>
}

export const getServerSideProps: GetServerSideProps = WithAuth(async () => {
  return {
    props: {}
  }
})
