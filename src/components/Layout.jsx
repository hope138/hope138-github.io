import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'

export default function Layout() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <div className="min-h-screen bg-background-base text-foreground antialiased">
      <Header />
      <main className="w-full bg-background-base pt-16">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
