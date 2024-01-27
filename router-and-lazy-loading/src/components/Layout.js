import {Suspense} from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import Loading from './Loading'

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Suspense fallback={<Loading />}>
        <Outlet />
        </Suspense>
      </main>
      <Footer />
    </>
  )
}

export default Layout
